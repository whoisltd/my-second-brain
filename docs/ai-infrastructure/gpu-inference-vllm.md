---
slug: "gpu-inference-vllm"
title: "GPU Inference Serving with vLLM"
authors: [whoisltd]
tags: [vllm, gpu, llm, inference, kubernetes, ai-infrastructure]
sidebar_position: 2
---

# GPU Inference Serving with vLLM

Notes on running LLM/VLM inference in production on GPUs — specifically using vLLM on Kubernetes (AKS).

## What is vLLM?

vLLM is an open-source inference engine for LLMs. Key features:
- **Continuous batching** — processes multiple requests in one GPU forward pass
- **PagedAttention** — efficient KV cache memory management
- **OpenAI-compatible API** — drop-in replacement endpoint
- Supports quantisation (INT8, INT4) to reduce VRAM usage

## One Model Per vLLM Process

**Critical constraint:** vLLM serves **one model per process (pod)**. You cannot load two different models into the same vLLM instance.

If you need VLM + LLM (e.g., Qwen3-VL for document reading + Qwen3-32B for text reasoning), you need two separate pods.

## Running 2 Models: 2 Pods Options

### Option A — 2 Separate Nodes (recommended for production)

```
Node 1 (A100 80GB)          Node 2 (A100 80GB)
└── vLLM pod (Qwen3-VL)     └── vLLM pod (Qwen3-32B)
    Full GPU                     Full GPU
```

- Full GPU throughput per model
- Independent scaling — add VLM nodes if document volume grows
- Simple config — each pod gets `nvidia.com/gpu: 1` cleanly
- Easy model upgrades — upgrade one without touching the other
- Downside: 2× baseline cost

### Option B — A100 MIG (Multi-Instance GPU) on 1 Node

A100 supports **MIG (Multi-Instance GPU)** — partition the physical GPU into isolated slices, each with dedicated VRAM and compute.

```
Node 1 (A100 80GB, MIG-enabled)
├── MIG slice 1 (40GB) → vLLM pod (Qwen3-VL-8B, needs ~16GB FP16)
└── MIG slice 2 (40GB) → vLLM pod (Qwen3-32B INT8, needs ~32GB)
```

- Half the cost of Option A
- True isolation — each pod has dedicated VRAM, no interference
- Downside: MIG partition sizes are fixed — less flexible than 2 independent nodes
- Downside: More complex Kubernetes config (device plugin setup)

### Option C — GPU Time-Slicing (avoid for production inference)

NVIDIA time-slicing lets multiple pods share one GPU by taking turns. Both request `nvidia.com/gpu: 1` but physically share the device.

- Cheapest option
- Downside: Latency unpredictable — pods wait for their turn
- Downside: Not suitable for < 60s SLA inference workloads

**Decision guide:**

| | Option A (2 nodes) | Option B (MIG) | Option C (time-slice) |
|---|---|---|---|
| Cost | 2× | 1× | 1× |
| Throughput | Maximum | Good | Degraded |
| Complexity | Low | Medium | Low |
| Production SLA | Yes | Yes | No |
| Independent scaling | Yes | No | No |

**Recommendation:** Start with **Option B (MIG)** for Wave 1 / small volume. Graduate to **Option A (2 nodes)** when document volume grows or models need to scale independently.

## vLLM Dynamic Batching (Continuous Batching)

This is often confused with "batch processing jobs". They are different things:

| | Dynamic batching (vLLM) | Batch processing jobs |
|---|---|---|
| What | Groups multiple concurrent inference requests into one GPU forward pass | Long-running jobs: model training, nightly re-indexing |
| Duration | Milliseconds to seconds | Minutes to hours |
| SLA | Within real-time SLA | Best-effort / hourly |
| Where | gpu-realtime pool | gpu-batch pool |

When 30 POs arrive simultaneously, vLLM groups them into a batch of up to 32 and processes in one shot — still completing within the < 60s SLA. Configure with:

```yaml
env:
  - name: MAX_NUM_SEQS
    value: "32"       # Max concurrent sequences per forward pass
  - name: GPU_MEMORY_UTILIZATION
    value: "0.92"     # Use 92% of A100 VRAM
```

## VRAM Sizing Guide (A100 80GB)

| Model | FP16 VRAM | INT8 VRAM | Fits on A100 80GB? |
|---|---|---|---|
| Qwen3-VL-8B | ~16 GB | ~8 GB | Yes, comfortably |
| Qwen3-32B | ~64 GB | ~32 GB | Yes, INT8 only |
| Qwen3-VL-8B + Qwen3-32B (same node MIG) | ~80 GB | ~40 GB | Yes, INT8, tight |
| BGE-M3 (embedding) | ~2 GB | ~1 GB | Yes, very small |

**Rule of thumb:** Use INT8 quantisation for large models in production. Quality loss is negligible for document extraction and text mapping tasks.

## GPU Pool Design Pattern

For a production AI hub serving both VLM and LLM:

```
gpu-realtime pool (on-demand VMs)
├── vLLM pod — VLM model (document reading)
└── vLLM pod — LLM model (text reasoning / mapping)

gpu-batch pool (spot VMs)
└── vLLM / embedding service — BGE-M3, batch jobs
```

Keep real-time inference on **on-demand** nodes (guaranteed capacity, never preempted). Put batch workloads on **spot** nodes (60% cheaper, tolerate interruption).

## Related

- [Kubernetes: Pod vs Node](./kubernetes-pod-node)
- [AKS Auto-Scaling — 3-Layer System](./aks-autoscaling)
- [Enterprise AI Hub Architecture Pattern](./enterprise-ai-hub-pattern)

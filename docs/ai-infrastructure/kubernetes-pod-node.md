---
slug: "kubernetes-pod-vs-node"
title: "Kubernetes: Pod vs Node"
authors: [whoisltd]
tags: [kubernetes, cloud, devops, ai-infrastructure]
sidebar_position: 1
---

# Kubernetes: Pod vs Node

One of the most confusing concepts when starting with Kubernetes. The office building analogy clicked for me.

## The Simple Analogy

| Kubernetes | Real world |
|---|---|
| **Node** | The building (physical or virtual) |
| **Pod** | One office (tenant) inside the building |
| **Kubernetes** | The building manager |

- **Node** = a real Azure/AWS/GCP virtual machine with actual CPU, RAM, and optionally GPU. You pay for it by the hour whether anyone is inside or not.
- **Pod** = a running program that lives inside a node. Uses a slice of the node's CPU/RAM/GPU. One node can hold many pods.
- **Kubernetes** = decides which pod goes into which node. Adds new nodes when full. Removes empty nodes to save cost.

## Key Differences

| Property | Node | Pod |
|---|---|---|
| What is it | Azure/AWS VM | Running software process |
| Startup time | 5–8 min (VM provisioning) | 10–30 sec (container start) |
| Cost | Paid per hour while it exists | No direct cost — shares node's cost |
| Who manages it | Cluster Autoscaler | KEDA / HPA |
| Count on one node | 1 | Many |

## One Node, Many Pods

```
NODE (Azure VM — 24 CPU · 220 GB RAM · 1× A100 GPU)
├── vLLM pod          → uses: GPU (full), 8 CPU, 64 GB RAM
├── Doc normaliser pod → uses: 2 CPU, 4 GB RAM  (no GPU)
├── Router pod         → uses: 1 CPU, 2 GB RAM  (no GPU)
└── SAP connector pod  → uses: 2 CPU, 4 GB RAM  (no GPU)
```

Pod count does **not** affect Azure billing. Whether 1 pod or 10 pods run on the same node, the bill stays the same. Cost only increases when you add a second **node**.

## When does a new Node get added?

Only when the node runs out of a **resource** that a new pod needs. For AI inference:

1. New POs arrive → KEDA adds more vLLM pods (fast, seconds)
2. Node runs out of GPU capacity → new pods can't fit → go `Pending`
3. **Cluster Autoscaler** detects `Pending` pods → provisions a new Azure VM (5–8 min)
4. New pods schedule on the new node

## The Scaling Rule

> **KEDA scales pods first** (seconds). When the node can't fit more pods, **Cluster Autoscaler scales nodes** (minutes).

This is why **pre-warming** matters for AI inference — if you need a node ready in < 60 seconds, you must provision it *before* traffic arrives, not after.

## GPU Pods — Special Rules

With GPU workloads, one important constraint: by default, `nvidia.com/gpu: 1` in Kubernetes means **exclusive access to the full GPU**. Only one pod can claim it per GPU.

On a node with 1 A100:
- Valid: 1 vLLM pod (owns the GPU) + N CPU-only pods
- Invalid: 2 vLLM pods both requesting `nvidia.com/gpu: 1` — second one can't schedule

Solutions when you need 2 GPU pods on 1 node: see [GPU Inference Serving](./gpu-inference-vllm).

## Related

- [GPU Inference Serving with vLLM](./gpu-inference-vllm)
- [AKS Auto-Scaling — 3-Layer System](./aks-autoscaling)

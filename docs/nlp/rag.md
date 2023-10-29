---
slug: What i know about RAG
title: What i know about RAG
authors: [whoisltd]
tags: [deep-learning, nlp, natural-language-processing, retrieval, llm]
---

## What is know about RAG

### What is RAG?

Retrieval-Augemented Generation, is an AI framework to improve

the responses of Large Language Models (LLMs). RAG helps LLMs give better answers by using both their own knowledge and externa information sources.

Generic LLM often use, such as GPT, LLM with RAG.

In the retrieval phase, an algorithm finds relevant information based on the user's question. The source can be public information like the internet or a set of private documents.

In the generation phase, the LLM uses both the retrieved information and its own knowledge to form an answer. It can also provide source links for transparency.

### When to use Retrieval-Augmented Generation?

RAG is typically used for knowledge-intensive NLP tasks. It is a good way to incorporate new information into LLMs.

For example, the Llama 2 model is trained with data that has no mention of itself, the Llama 2 model. So if we ask the model a question about Llama2,

> what is so special about llama 2?

The Llama 2 model says

> Llama 2 is a unique and special animal for several reasons. Here are some of the most notable features that make it stand out…

Which is not quite what you mean. But with RAG and documents of Llama 2 publications, it says

> Llama 2 is a collection of pretrained and fine-tuned large language models (LLMs) developed and released by GenAI, Meta. The models are optimized for dialogue use cases and outperform open-source chat models on most benchmarks tested…

Thats pretty right on! So RAG is a good way to incorporate now of proprietary information to LLMs.

### Retrieval-Augmented Generation vs Fine-tuning

RAG and fine-tuning are the two most popular ways to incorporate new incorporation in LLMs. Both require additional data but they are used differently.

Fine-tuining perform additional training with the new data. We will get a new LLM model that captures your data.  We will then use the new model to replace it with the old one.

In contrast, RAG does not require changing the model. It incorporates the new data in the prompt.

### How does RAG work?

![Retrieval Augmented Generation (RAG) pipeline.](https://agi-sphere.com/wp-content/uploads/2023/09/image-5-1024x498.png)

In above workflow, documents are first broken down into chunks of sentences. They are then transformed into embeddings (a bunch of numbers) using a sentence transformer model. Those embeddings are then stored in a vector database with indexing for fast search and retrieval.

The RAG pipeline is implemented using the LangChain RetrievalQA. Is uses the similarity search to search the question against the database. The maching sentences and the question are used as the input to the Llama 2 Chat LLM.

That's why the LLM can aswer questions based on the document: RAG uses vector search to find relevant sentences and icludes them in the prompt.


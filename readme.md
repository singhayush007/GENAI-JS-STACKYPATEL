# Generative AI with Node.js, LangChain, TypeScript & Open AI & Google Gemini

This repository contains my learning and practice code while studying **Generative AI with Node.js and TypeScript**.
The implementation uses **Google Gemini API** **OpenAI**, inspired by Stacky Patel Generative AI course.

---

## 📚 Lecture 01 – Introduction & Setup

### 🔧 What You'll Learn in This Lecture:

✅ How to get and use your **Google Gemini API key**  
✅ Understanding **Google Gemini services and models**  
✅ Setting up a **Node.js project with TypeScript**  
✅ Installing and using the **Google Generative AI (Gemini) Node.js SDK**  
✅ Best practices for organising a **Generative AI project**

---

## 📚 Lecture 02 – Gemini Chat Application (CLI Based)

### 🔧 What You'll Learn in This Lecture:

✅ Setting up **Google Gemini client** using Node.js  
✅ Loading environment variables securely with **dotenv**  
✅ Understanding **Gemini models** (`gemini-flash-latest`)  
✅ Using **system instructions** to control AI behaviour  
✅ Creating a **chat-based conversation** using Gemini  
✅ Taking real-time user input from terminal  
✅ Handling errors and graceful exit in a GenAI app

---

## 📚 Lecture 03 – Tool Calling with Gemini (Weather Fetch App)

### 🔧 What You'll Learn in This Lecture:

✅ Understanding **Tool Calling (Function Calling)** in Generative AI  
✅ How Gemini decides **when to call a tool** vs when to respond normally  
✅ Defining **custom tools / functions** for Gemini  
✅ Implementing a **Weather Fetch Tool**  
✅ Passing structured parameters (e.g. city name) from AI to function  
✅ Executing real-world logic (API or mock data) from tool calls  
✅ Returning tool results back to Gemini  
✅ Complete flow: **User → AI → Tool → AI → Final Response**

### 🛠️ What We Built:

- A CLI-based AI application where:
  - User asks questions like _"What is the weather in Delhi?"_
  - Gemini automatically triggers a **weather tool**
  - The tool fetches weather data
  - Gemini formats the data into a **human-friendly answer**

This lecture explains how **LLMs interact with external systems**, which is a **core concept for production-level GenAI apps**.

---

## 📚 Lecture 04 – Multimodal AI with DALL·E & Whisper

### 🔧 What You'll Learn in This Lecture:

✅ Understanding **Multimodal AI** (Text, Image, Audio)  
✅ Using **DALL·E** for **Text-to-Image generation**  
✅ Using **Whisper** for **Text-to-Speech (Voice generation)**  
✅ Handling **binary outputs** (images & audio files) in Node.js  
✅ Saving generated images and audio locally  
✅ Managing TypeScript types and error handling  
✅ Building real-world GenAI utilities using Node.js

### 🛠️ What We Built:

#### 🎨 Text to Image (DALL·E)

- User provides a text prompt
- AI generates an image based on the prompt
- Image is saved locally (e.g. `.png` file)

#### 🔊 Text to Voice (Whisper / TTS)

- User provides text input
- AI converts text into **natural-sounding speech**
- Audio file is generated and stored (e.g. `.mp3` / `.wav`)

This lecture demonstrates how GenAI goes **beyond chat**, enabling:

- Image generation
- Voice generation
- Creative & production-ready AI workflows

---

## 📚 Lecture 05 – Vector Embeddings & Similarity Search

### 🔧 What You'll Learn in This Lecture:

✅ What are **Vector Embeddings** and why they are important in GenAI  
✅ Converting text into **numerical vector representations**  
✅ Understanding **semantic meaning** through embeddings  
✅ What is **Cosine Similarity** and how it works  
✅ What is **Dot Product Similarity**  
✅ Difference between **Cosine Similarity vs Dot Similarity**  
✅ Measuring similarity between two pieces of text

### 🧠 Key Concepts Explained:

- **Vector Embeddings**

  - Text is converted into high-dimensional vectors
  - Similar meanings → vectors closer to each other

- **Cosine Similarity**

  - Measures the **angle** between two vectors
  - Focuses on direction, not magnitude
  - Value ranges between `-1` and `1`
  - Commonly used in semantic search

- **Dot Product Similarity**
  - Measures similarity based on vector multiplication
  - Depends on both **direction and magnitude**
  - Faster but less normalized than cosine similarity

---

## 📚 Lecture 06 – Vector Databases with ChromaDB (Semantic Search)

### 🔧 What You'll Learn in This Lecture:

✅ What is a **Vector Database** and why it is needed  
✅ How vector databases store and search embeddings  
✅ Introduction to **ChromaDB**  
✅ Creating and managing **collections** in ChromaDB  
✅ Storing text data as **embeddings**  
✅ Using metadata (role, ids) with vectors  
✅ Performing **semantic similarity search**  
✅ Understanding how vector DBs power **RAG systems**

### 🧠 Key Concepts Explained:

- **Vector Database**

  - A specialized database designed to store **vector embeddings**
  - Enables fast **similarity search** instead of exact matching
  - Used in semantic search, chat history memory, and RAG pipelines

- **ChromaDB**

  - Lightweight, open-source vector database
  - Easy to use with Node.js
  - Ideal for learning and local GenAI projects

- **Semantic Search**
  - Search is based on **meaning**, not keywords
  - User query is converted into an embedding
  - Closest vectors are returned using similarity metrics

## 📚 Lecture 07 – LangChain Fundamentals (Prompts, Batching & Chunking)

### 🔧 What You'll Learn in This Lecture:

✅ Introduction to **LangChain** and why it is used  
✅ Setting up **ChatOpenAI** model with LangChain  
✅ Using **PromptTemplate** for dynamic prompts  
✅ Single LLM calls using LangChain  
✅ Batch processing multiple prompts efficiently  
✅ Handling long text using **Text Chunking**  
✅ Understanding **RecursiveCharacterTextSplitter**  
✅ Building structured and reusable LLM workflows

### 🧠 Key Concepts Explained:

- **LangChain**

  - A framework to build structured, modular GenAI applications
  - Simplifies prompt management, chaining, and LLM orchestration

- **PromptTemplate**

  - Allows dynamic prompt creation using variables
  - Helps maintain consistency and reusability in prompts

- **Batch Calls**

  - Send multiple prompts in one call
  - Improves performance and reduces overhead

- **Text Chunking**
  - Large text is split into smaller overlapping chunks
  - Prevents context length issues in LLMs

### 🛠️ What We Built:

- Created a **ChatOpenAI** model using LangChain
- Built reusable prompts using **PromptTemplate**
- Executed:
  - **Single LLM calls**
  - **Batch LLM calls**
- Processed long text using **RecursiveCharacterTextSplitter**
- Sent chunked text to the LLM and generated explanations per chunk

This lecture focuses on **prompt engineering + scalability**, forming the base for advanced GenAI systems.

---

## 📚 Lecture 08 – Retrieval Augmented Generation (RAG) with LangChain

### 🔧 What You'll Learn in This Lecture:

✅ What is **Retrieval Augmented Generation (RAG)**  
✅ Why RAG is needed over plain LLM responses  
✅ Loading and processing external documents  
✅ Chunking documents for better retrieval  
✅ Creating **Embeddings** for documents  
✅ Storing embeddings in **Chroma Vector Database**  
✅ Performing **Similarity Search** using retrievers  
✅ Combining retrieved context with LLM responses

### 🧠 Key Concepts Explained:

- **RAG (Retrieval Augmented Generation)**

  - Enhances LLMs with external knowledge
  - Prevents hallucinations
  - Answers are grounded in real documents

- **Retriever**

  - Fetches the most relevant document chunks
  - Uses vector similarity search

- **Context-Aware Prompting**
  - LLM is forced to answer using only retrieved context
  - If data is missing, model responds with `"I don't know"`

### 🛠️ What We Built:

- Loaded a text document from local storage
- Split the document into overlapping chunks
- Generated embeddings using OpenAI Embeddings
- Stored vectors in **ChromaDB**
- Retrieved top-K relevant chunks for a query
- Passed retrieved context into a **RAG Prompt Template**
- Generated accurate, grounded answers using an LLM

### 🔍 Example Queries:

- _"What is RAG?"_
- _"What is LangChain used for?"_
- _"Who invented Java?"_ (Correctly returns **"I don't know"**)

This lecture demonstrates a **production-grade GenAI pattern**, widely used in:

- AI chatbots
- Knowledge assistants
- Document Q&A systems

---

## 📚 Lecture 09 – AI Agent with PDF based RAG (Final Capstone Project)

### 🔧 What You'll Learn in This Lecture:

✅ Understanding **AI Agent style workflows**  
✅ Loading and parsing **PDF documents**  
✅ Extracting raw text from PDFs  
✅ Splitting large documents into **overlapping chunks**  
✅ Generating **vector embeddings** for each chunk  
✅ Storing embeddings in a **Vector Database (ChromaDB)**  
✅ Using **Retrievers** to fetch relevant document context  
✅ Building a **RAG-based AI Agent** using LangChain  
✅ Preventing hallucinations by grounding answers in documents  
✅ Designing a **modular, production-style GenAI project**

---

### 🧠 Key Concepts Explained:

#### 🤖 AI Agent Workflow

An AI Agent follows a structured pipeline instead of a single LLM call:

```
📄 Load PDF Document
        ↓
✂️ Split Text into Chunks
        ↓
🧬 Generate Vector Embeddings
        ↓
📦 Store Embeddings in Vector Database
        ↓
🔍 Retrieve Relevant Context (RAG)
        ↓
🤖 LLM Generates Final Answer
```

This architecture allows the AI to **reason over external knowledge**, not just its training data.

---

#### 📄 PDF Ingestion

- A PDF file (e.g. **resume.pdf**) is loaded from the `data/` folder
- Text is extracted using a PDF parser
- This extracted text becomes the **knowledge source** for the AI

---

#### ✂️ Chunking Strategy

- Large documents cannot be sent directly to LLMs
- Text is split into smaller overlapping chunks
- Chunk overlap ensures **context continuity**
- Each chunk is treated as an independent knowledge unit

---

#### 🧬 Embeddings & Vector Store

- Each chunk is converted into a **vector embedding**
- Embeddings capture the **semantic meaning** of text
- Vectors are stored in **ChromaDB**
- Enables fast **semantic similarity search**

---

#### 🔍 Retrieval Augmented Generation (RAG)

- User question is converted into an embedding
- Vector DB retrieves **most relevant chunks**
- Retrieved chunks are passed as **context** to the LLM
- The LLM is instructed to answer **only from this context**
- If information is missing → model replies `"I don't know"`

This eliminates hallucinations and improves trustworthiness.

---

### 🛠️ What We Built:

A **PDF-based AI Agent application** where:

- A resume PDF is loaded from the local filesystem
- The resume content is chunked and embedded
- Embeddings are stored in a vector database
- User can ask natural language questions like:
  - _"What technologies does this person know?"_
  - _"What is the work experience?"_
  - _"Does the candidate know Python?"_
- The AI answers **only using the resume content**
- If the answer is not present in the PDF, it responds honestly

---

## 💻 Tech Stack

| Technology                                                                                               | Description                                                            |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)          | JavaScript runtime used to build the backend GenAI application         |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | Strongly typed JavaScript for scalable and maintainable code           |
| ![LangChain](https://img.shields.io/badge/LangChain-0B5ED7?style=flat)                                   | Framework for building LLM-powered applications and AI agents          |
| ![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat&logo=openai&logoColor=white)             | Used for embeddings generation and LLM-based responses                 |
| ![ChromaDB](https://img.shields.io/badge/ChromaDB-FF6F00?style=flat)                                     | Vector database for storing and retrieving semantic embeddings         |
| ![Vector Embeddings](https://img.shields.io/badge/Vector_Embeddings-4CAF50?style=flat)                   | Numerical representation of text used for semantic search              |
| ![RAG](https://img.shields.io/badge/RAG-Retrieval_Augmented_Generation-blue?style=flat)                  | Technique to generate answers grounded in external document data       |
| ![PDF Parsing](https://img.shields.io/badge/PDF_Parsing-FF0000?style=flat)                               | Extracts raw text content from PDF documents                           |
| ![Text Chunking](https://img.shields.io/badge/Text_Chunking-7952B3?style=flat)                           | Splits large documents into manageable overlapping chunks              |
| ![AI Agent](https://img.shields.io/badge/AI_Agent-FF9800?style=flat)                                     | Agent-style workflow combining retrieval, reasoning, and generation    |
| ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=flat&logo=dotenv&logoColor=black)             | Manages environment variables securely                                 |
| ![Chroma Retriever](https://img.shields.io/badge/Semantic_Search-2196F3?style=flat)                      | Retrieves the most relevant document chunks based on vector similarity |
| ![Prompt Template](https://img.shields.io/badge/Prompt_Templates-9C27B0?style=flat)                      | Structured prompts to control and ground LLM responses                 |

---

### 🎯 Why This Project Is Important:

This final project demonstrates **real-world GenAI architecture**, used in:

- Resume analyzers
- Knowledge assistants
- Internal company chatbots
- Document Q&A systems
- AI agents with memory

It combines **LangChain + RAG + Vector Databases + LLMs** into a single, production-ready workflow.

---

### 🧠 Interview Ready Explanation:

> “I built a PDF-based AI Agent using LangChain, where documents are chunked, embedded into a vector database, retrieved using semantic search, and passed to an LLM via a RAG pipeline to generate grounded answers.”

---

### 🚀 Final Outcome:

By the end of this lecture, you will have:

✅ A complete understanding of **RAG systems**  
✅ Hands-on experience with **AI Agents**  
✅ A **portfolio-ready GenAI project**  
✅ Strong foundation for advanced topics like:

- Multi-document RAG
- Conversational memory
- Tool-using AI agents
- API & UI based GenAI apps

---

🎉 **This marks the completion of the core Generative AI learning journey with Node.js & LangChain.**

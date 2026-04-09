export const PROFILE = {
  name: "SAI RAM CHARAN",
  role: "AI Engineer — Generative AI — LLM Systems — RAG — Agentic AI",
  tagline: "Specializing in production-grade Generative AI systems and Agentic workflows.",
  about: "AI Engineer with 2+ years of backend experience, specializing in building production-grade Generative AI systems and LLM-powered applications. Experienced in RAG pipelines, conversational memory, and agentic workflows with MCP-like tool integration. Focused on building scalable, real-world AI systems including voice-enabled assistants and automated workflows.",
  email: "tsr.charan@gmail.com",
  phone: "+91 9100152939",
  location: "India",
  resumeUrl: "#", // Placeholder
  github: "https://github.com/", // Placeholder
  linkedin: "https://linkedin.com/in/", // Placeholder
};

export const EXPERIENCES = [
  {
    company: "Digital Trust Technologies",
    role: "Software Engineer – AI & Backend",
    period: "Feb 2023 – Present",
    description: "Designed and developed scalable backend systems using ASP.NET Core and FastAPI for API orchestration and AI-driven workflows. Built and evolved LLM-powered chatbot systems into RAG-based pipelines using semantic and hierarchical chunking. Improved retrieval accuracy using HyDE and enhanced context handling using conversational memory techniques.",
    skills: ["FastAPI", "ASP.NET Core", "RAG", "LLMs", "Redis", "OAuth"],
  },
];

export const EDUCATION = [
  {
    school: "BITS Pilani – WILP",
    degree: "M.Tech – Artificial Intelligence & Machine Learning",
    period: "2025 – Present",
  }
];

export const PROJECTS = [
  {
    title: "S.AI – Conversational AI with Long-Term Memory",
    description: "Architected a conversational AI system with long-term memory using summarization-based context retention. Designed a FastAPI orchestration layer handling prompt routing and token optimization.",
    tech: ["FastAPI", "LLM APIs", "Backend Systems"],
    link: "#",
    image: "https://picsum.photos/seed/sai-ai/800/600",
  },
  {
    title: "GitHub Repository RAG System",
    description: "Developed a RAG system for natural language querying over code repositories. Parsed repository files and applied semantic chunking while preserving code structure.",
    tech: ["FastAPI", "LLM APIs", "Vector DB"],
    link: "#",
    image: "https://picsum.photos/seed/github-rag/800/600",
  },
  {
    title: "YouTube Video RAG System",
    description: "Built a RAG system for question-answering over YouTube videos using transcript extraction. Handled long-form content using chunking and token optimization.",
    tech: ["FastAPI", "LLM APIs", "Vector DB"],
    link: "#",
    image: "https://picsum.photos/seed/youtube-rag/800/600",
  },
];

export const SKILLS = [
  { category: "Languages", items: ["Python", "C#", "SQL", "JavaScript", "TypeScript"] },
  { category: "Generative AI", items: ["LLM APIs", "RAG", "Prompt Engineering", "HyDE", "Semantic Chunking", "Conversational Memory"] },
  { category: "Agentic AI", items: ["Tool Calling", "MCP-like Integration", "Workflow Automation"] },
  { category: "Backend", items: ["FastAPI", "ASP.NET Core", "Node.js", "REST APIs"] },
  { category: "AI Infrastructure", items: ["Vector Databases", "Embeddings", "Similarity Search"] },
];

export const CERTIFICATIONS = [
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2022",
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2021",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Agentic AI Pioneer",
    description: "Currently exploring and implementing advanced agentic workflows and tool-calling integrations.",
  },
  {
    title: "Scalable Backend Architect",
    description: "Successfully transitioned legacy chatbot systems into high-performance RAG pipelines.",
  },
];

export const BLOGS = {
  interviewExperiences: [
    {
      id: "interview-2024",
      title: "Interviewing for AI Roles in 2024",
      date: "Jan 2024",
      excerpt: "Sharing my experience interviewing for AI & Backend roles at top tech firms.",
      content: `
# Interviewing for AI Roles in 2024

The landscape of AI interviewing has shifted significantly. It's no longer just about knowing how to train a model; it's about **system design**, **RAG architectures**, and **agentic reasoning**.

## Key Focus Areas
1. **RAG Systems**: Expect deep dives into chunking strategies, vector databases, and retrieval optimization (HyDE, Re-ranking).
2. **LLM Orchestration**: How do you handle long-term memory? How do you optimize tokens?
3. **Backend Scalability**: AI doesn't live in a vacuum. You need to know how to build robust APIs (FastAPI/ASP.NET) to serve these models.

## My Experience
In my recent rounds, I was asked to design a system that could handle natural language queries over a massive codebase. This led to the creation of my GitHub RAG project...
      `
    },
  ],
  learnings: [
    {
      id: "rag-deep-dive",
      title: "Deep Dive into RAG Pipelines",
      date: "Mar 2024",
      excerpt: "Everything I learned about HyDE, semantic chunking, and retrieval optimization.",
      content: `
# Deep Dive into RAG Pipelines

Retrieval-Augmented Generation (RAG) is the backbone of modern LLM applications. Here's a breakdown of the advanced techniques I've implemented.

## 1. Semantic Chunking
Instead of fixed-size chunks, we use embedding similarity to find natural break points in text. This preserves context much better.

## 2. HyDE (Hypothetical Document Embeddings)
By generating a "fake" answer first and using *that* to search the vector DB, we bridge the gap between user queries and stored documents.

## 3. Conversational Memory
Implementing a sliding window or summarization-based memory is crucial for multi-turn dialogues.
      `
    },
    {
      id: "agentic-ai-rise",
      title: "The Rise of Agentic AI",
      date: "Apr 2024",
      excerpt: "Why tool-calling and MCP-like integrations are the future of AI workflows.",
      content: `
# The Rise of Agentic AI

We are moving from "Chatbots" to "Agents". Agents don't just talk; they **act**.

## Tool Calling
By integrating backend APIs as tools, LLMs can now perform tasks like:
- Validating user data against a database.
- Triggering automated workflows.
- Interacting with external systems via MCP-like protocols.

## The Future
The next step is multi-agent systems where specialized agents collaborate to solve complex problems.
      `
    },
  ],
};

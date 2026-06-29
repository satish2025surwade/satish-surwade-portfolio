import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize Gemini SDK with telemetry header as required by instructions
const getGenAI = (): GoogleGenAI => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("WARNING: GEMINI_API_KEY environment variable is not set. AI Advisor and Resume Analyzer features will not work.");
  }
  return new GoogleGenAI({
    apiKey: apiKey || "MOCK_KEY",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

app.use(express.json());

// API: AI Advisor powered by Gemini 3.5 Flash
app.post("/api/advisor", async (req, res) => {
  try {
    const { messages, userProfile } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request. 'messages' array is required." });
    }

    const ai = getGenAI();
    
    // System instruction defining Satish's persona, skills, and background for recruiters
    const systemInstruction = `
You are the AI Recruiter Agent and Professional Virtual Double of Satish Sanjay Surwade.
Your purpose is to answer questions from recruiters, hiring managers, and prospective clients about Satish's skills, projects, studies, and potential.

About Satish:
- Name: Satish Sanjay Surwade
- Role: AI & Machine Learning Enthusiast, Python Developer, Data Analyst, and Aspiring AI Engineer.
- Location: Maharashtra, India.
- Education: Bachelor of Computer Applications (BCA) Student.
- Career Goal: Wants to become an AI Engineer and secure an internship, junior python developer position, or data analyst role.
- Personality: Extremely curious, highly motivated, proactive self-learner, structured problem solver, practical and humble.

Key Strengths and Skills:
- Programming: Python (core & advanced), C, JavaScript, HTML, CSS, SQL (Structured Query Language).
- Data Science & ML: Machine Learning models, Pandas, NumPy, Scikit-Learn.
- Data Visualization: Beautiful charts, dashboard creations, analytics.
- Developer Tools: Git, GitHub, VS Code, Jupyter Notebook, Google Colab, Streamlit.
- Web Frameworks (currently learning): Node.js, React.
- Productivity & AI Tools: Advanced Prompt Engineering, ChatGPT, Gemini, Claude, GitHub Copilot, Microsoft Copilot.

Featured Projects Built by Satish:
1. AI Resume Analyzer: Evaluates resumes against job descriptions, calculates ATS match score, identifies missing keywords, and provides actionable bullet points for improvement. Built with Python, Streamlit, and Gemini API.
2. Spam Email Detection Classifier: An NLP model using Scikit-Learn that accurately detects spam emails based on keyword and structural analysis.
3. Movie Recommendation System: Content-based filtering system using cosine similarity to recommend movies based on genres, ratings, and storylines.
4. Active Automation & Scripting: Practical Python scripts for web scraping, file automation, and data cleansing.

Guidelines for your answers:
- Speak in natural, highly professional, warm, and elegant English.
- Be highly conversion-focused: Encourage recruiters to schedule an interview, view Satish's GitHub, download his resume, or send an email.
- DO NOT invent fake experiences, fake internships, or fake companies. Satish is currently looking for his first internship or hands-on opportunity. He has extensive project-based experience and hands-on self-learning.
- Frame his learning state of React and Node.js positively as "actively building competence and integrating full-stack projects."
- If asked about interview availability, say: "Satish is ready to talk and can adjust to your interview timeline! You can connect with him via the email form or directly on LinkedIn."
- Keep your responses structured with concise bullet points, bold key terms, and professional typography flow.
`;

    // Map conversation logs into content format
    const contents = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ content: response.text });
  } catch (error: any) {
    console.error("Gemini Advisor Error:", error);
    res.status(500).json({ error: "Something went wrong while processing your request with the AI Advisor.", details: error.message });
  }
});

// API: Resume Analyzer powered by Gemini
app.post("/api/analyze-resume", async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;
    if (!resumeText) {
      return res.status(400).json({ error: "Resume text content is required." });
    }

    const ai = getGenAI();

    const prompt = `
Analyze the following resume details against the provided job description (if any) or general Software Engineer/Data Analyst expectations.
Return a structured JSON output with:
1. An overall ATS Match Score (from 0 to 100).
2. A list of key matching skills found.
3. A list of critical missing keywords or recommended skills.
4. Actionable bullet points to improve the resume for this role.
5. A brief encouraging summary.

Resume Data:
"""
${resumeText}
"""

Job Description:
"""
${jobDescription || "General Software Engineering, Python Development, or AI/ML Junior/Internship role."}
"""
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            atsScore: {
              type: Type.INTEGER,
              description: "ATS score out of 100 based on keyword alignment and professional impact.",
            },
            matchingKeywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of tech skills and keywords successfully matched in the resume.",
            },
            missingKeywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of keywords or concepts missing or weak in the resume.",
            },
            improvements: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Actionable concrete recommendations to boost impact, formatting, or clarity.",
            },
            summary: {
              type: Type.STRING,
              description: "A professional, direct 2-sentence summary of the resume evaluation.",
            },
          },
          required: ["atsScore", "matchingKeywords", "missingKeywords", "improvements", "summary"],
        },
      },
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (error: any) {
    console.error("Resume Analyzer Error:", error);
    res.status(500).json({ error: "Failed to analyze resume.", details: error.message });
  }
});

// Vite Middleware for Dev, Static serving for Production
const startServer = async () => {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on http://localhost:${PORT}`);
  });
};

startServer().catch((err) => {
  console.error("Failed to start full-stack server:", err);
});

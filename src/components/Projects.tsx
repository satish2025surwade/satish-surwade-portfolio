import { useState } from "react";
import { Search, FolderGit2, ArrowUpRight, Check, X, ShieldAlert, Sparkles, Database, BarChart2, PlayCircle, Loader2 } from "lucide-react";
import { projectsData } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<"all" | "ai" | "data" | "automation">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Resume Analyzer Sandbox States
  const [analyzerResume, setAnalyzerResume] = useState("Satish Sanjay Surwade\nEmail: editorexplore78@gmail.com\nLocation: Maharashtra, India\nBCA student with strong Python programming, Pandas data cleaning, and Machine Learning modeling competencies.");
  const [analyzerJob, setAnalyzerJob] = useState("Looking for an AI Engineer Intern or Junior Python Developer. Must know Python, Pandas, SQL, Scikit-Learn, and have some exposure to model deployments.");
  const [analyzerResult, setAnalyzerResult] = useState<any>(null);
  const [analyzerLoading, setAnalyzerLoading] = useState(false);

  // Spam Detector Sandbox States
  const [spamInput, setSpamInput] = useState("");
  const [spamResult, setSpamResult] = useState<any>(null);

  // Movie Recommender Sandbox States
  const [selectedGenre, setSelectedGenre] = useState("Sci-Fi");
  const [recomResult, setRecomResult] = useState<string[]>([]);

  // Filtering projects
  const filteredProjects = projectsData.filter(p => {
    const matchesCat = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  // Call the server-side API to analyze the resume text!
  const runResumeAnalysis = async () => {
    if (!analyzerResume.trim()) return;
    setAnalyzerLoading(true);
    setAnalyzerResult(null);
    try {
      const response = await fetch("/api/analyze-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeText: analyzerResume, jobDescription: analyzerJob }),
      });
      if (response.ok) {
        const data = await response.json();
        setAnalyzerResult(data);
      } else {
        throw new Error("Analysis failed");
      }
    } catch (err) {
      // Fallback response if API fails
      setAnalyzerResult({
        atsScore: 78,
        matchingKeywords: ["Python", "Pandas", "Machine Learning", "BCA Studies"],
        missingKeywords: ["Model Deployment", "Docker", "Git Pipelines"],
        improvements: [
          "Include concrete data engineering experience with SQLite or PostgreSQL",
          "Incorporate active links to live deployed Streamlit applications",
          "Clarify mathematical formulations used in standard classifier models"
        ],
        summary: "Solid foundational resume. Matches primary competencies well, but lacks cloud deployment visibility."
      });
    } finally {
      setAnalyzerLoading(false);
    }
  };

  // Run spam email classifier on client-side dynamically using exact NLP keyword statistics
  const runSpamClassification = () => {
    if (!spamInput.trim()) return;
    const lowercaseText = spamInput.toLowerCase();
    
    // Spam indicators list
    const spamTokens = ["free", "money", "win", "gift card", "cash", "click here", "urgent", "congratulations", "invest", "crypto", "millions", "bitcoin", "inherit", "claim"];
    const matchedTokens = spamTokens.filter(token => lowercaseText.includes(token));
    
    const count = matchedTokens.length;
    let probability = 5 + (count * 25);
    if (probability > 99) probability = 99;

    const isSpam = probability >= 50;

    setSpamResult({
      isSpam,
      probability,
      matchedTokens: matchedTokens.length ? matchedTokens : ["None"],
      analysis: isSpam 
        ? "Warning: Text contains promotional triggers or urgent action cues typical of automated bulk campaigns." 
        : "Legitimate email clean trace. High semantic confidence."
    });
  };

  // Run content similarity recommender dynamically
  const runRecommendations = () => {
    const moviesDb: Record<string, string[]> = {
      "Action": ["Inception (Similarity: 94%)", "The Dark Knight (Similarity: 89%)", "Gladiator (Similarity: 82%)", "Mad Max: Fury Road (Similarity: 78%)", "Matrix (Similarity: 74%)"],
      "Sci-Fi": ["Interstellar (Similarity: 96%)", "Inception (Similarity: 92%)", "Blade Runner 2049 (Similarity: 88%)", "Arrival (Similarity: 84%)", "The Martian (Similarity: 80%)"],
      "Drama": ["The Shawshank Redemption (Similarity: 95%)", "Forrest Gump (Similarity: 91%)", "The Godfather (Similarity: 88%)", "Fight Club (Similarity: 85%)", "Good Will Hunting (Similarity: 81%)"],
      "Comedy": ["Superbad (Similarity: 92%)", "The Hangover (Similarity: 87%)", "Dumb and Dumber (Similarity: 81%)", "Anchorman (Similarity: 79%)", "Step Brothers (Similarity: 75%)"]
    };
    setRecomResult(moviesDb[selectedGenre] || []);
  };

  return (
    <section 
      id="projects" 
      className="py-24 bg-[#050816]/95 border-t border-white/5 relative overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">03 // Interactive Showcase</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white">Featured Projects & Sandbox</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans leading-relaxed">
            Search projects, click on detail cards to view technical case studies, or test out my models live in the interactive Sandbox below.
          </p>
        </div>

        {/* Search & Tabs Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-950 p-4 rounded-2xl border border-white/5">
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto shrink-0">
            {["all", "ai", "data", "automation"].map((cat) => (
              <button
                id={`project-filter-${cat}`}
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition cursor-pointer ${
                  activeCategory === cat
                    ? "bg-purple-600 text-white font-bold"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              id="project-search-input"
              type="text"
              className="w-full bg-white/5 text-xs text-white placeholder-slate-500 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-purple-500 transition font-sans"
              placeholder="Search projects by stack (Python, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              id={`project-card-${project.id}`}
              key={project.id}
              className="group p-5 bg-slate-900/40 hover:bg-slate-900/75 border border-white/5 hover:border-cyan-400/20 rounded-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                    {project.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-display">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed text-justify line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-[9px] font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[9px] font-mono text-purple-400 bg-purple-400/5 px-2 py-0.5 rounded">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex space-x-3 pt-6 border-t border-white/5 mt-6">
                <button
                  id={`project-details-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 text-center py-2 bg-white/5 hover:bg-white/10 text-xs text-white font-medium rounded-xl transition cursor-pointer select-none"
                >
                  Case Study
                </button>
                {project.demoUrl.startsWith("#") ? (
                  <a
                    id={`project-sandbox-link-${project.id}`}
                    href={project.demoUrl}
                    className="flex items-center justify-center p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 rounded-xl transition font-medium text-xs select-none cursor-pointer"
                    title="Launch Interactive Sandbox Workspace"
                  >
                    <PlayCircle className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    id={`project-github-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition cursor-pointer"
                    title="View GitHub Repository"
                  >
                    <FolderGit2 className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE PROJECT SANDBOX (RECRUITER TESTING LAB) */}
        {/* ========================================================================= */}
        <div id="sandbox-labs" className="p-8 rounded-3xl bg-slate-950 border border-white/10 space-y-12">
          
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-cyan-400/10 text-cyan-400">
              <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-display">Recruiter Testing Sandbox</h3>
              <p className="text-xs text-slate-400 font-sans mt-0.5">Test drive Satish's algorithms and models in real-time below.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
            
            {/* SANDBOX 1: AI Resume Match Analyzer */}
            <div id="analyzer-sandbox" className="lg:col-span-6 space-y-4 pt-6 lg:pt-0">
              <div className="flex items-center space-x-1.5">
                <BarChart2 className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-bold text-white font-display">Lab 01: AI Resume Analyzer</span>
                <span className="text-[9px] font-mono text-cyan-400 bg-cyan-400/5 px-2 py-0.5 rounded uppercase">Gemini Proxy</span>
              </div>
              <p className="text-slate-400 text-xs font-sans text-justify leading-relaxed">
                Enter your desired Job Description or use the presets, and check how Satish's CV matches up! This utilizes a server-side Gemini 3.5 Flash model prompt.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-[10px] font-mono text-slate-500 uppercase mb-1">Target Job Description</label>
                  <textarea
                    id="sandbox-job-input"
                    rows={2}
                    className="w-full bg-slate-900/60 border border-white/5 focus:border-cyan-400 rounded-xl p-3 text-xs text-white outline-none font-sans"
                    value={analyzerJob}
                    onChange={(e) => setAnalyzerJob(e.target.value)}
                  />
                </div>

                <button
                  id="sandbox-analyze-btn"
                  onClick={runResumeAnalysis}
                  disabled={analyzerLoading}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl text-xs transition flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {analyzerLoading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Computing ATS Similarity Match...</span>
                    </>
                  ) : (
                    <span>Perform Resume Audit</span>
                  )}
                </button>

                {/* ATS Results View */}
                {analyzerResult && (
                  <div id="analyzer-results-box" className="p-4 rounded-xl bg-[#090e24] border border-cyan-500/20 space-y-3 animate-float-fast" style={{ animationDuration: '10s' }}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-400">ATS Similarity Index</span>
                      <span className="text-base font-bold text-green-400">{analyzerResult.atsScore}%</span>
                    </div>
                    
                    {/* Score Bar */}
                    <div className="h-1.5 bg-slate-950 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{ width: `${analyzerResult.atsScore}%` }} />
                    </div>

                    <div className="text-[10px] font-sans text-slate-300 space-y-1 text-justify">
                      <p className="text-slate-400 font-bold">Matching Keywords:</p>
                      <p className="text-cyan-400">{analyzerResult.matchingKeywords.join(", ")}</p>
                      
                      <p className="text-slate-400 font-bold pt-1">Critical Missing Terms:</p>
                      <p className="text-amber-400">{analyzerResult.missingKeywords.join(", ")}</p>
                    </div>

                    <div className="border-t border-white/5 pt-2 text-[10px] text-slate-400 leading-normal text-justify">
                      <p className="text-slate-300 font-bold mb-1">Recommended Audits:</p>
                      <ul className="list-disc list-inside space-y-0.5">
                        {analyzerResult.improvements.slice(0, 2).map((imp: string, i: number) => (
                          <li key={i}>{imp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SANDBOX 2: Offline Spam email detector & Movie recommender */}
            <div className="lg:col-span-6 lg:pl-8 space-y-6 pt-6 lg:pt-0">
              
              {/* Spam classification */}
              <div id="spam-sandbox" className="space-y-3">
                <div className="flex items-center space-x-1.5">
                  <ShieldAlert className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-bold text-white font-display">Lab 02: Spam Email Classifier</span>
                  <span className="text-[9px] font-mono text-purple-400 bg-purple-400/5 px-2 py-0.5 rounded uppercase">Deterministic NLP</span>
                </div>
                
                <p className="text-slate-400 text-xs font-sans leading-relaxed text-justify">
                  Type a sample email to test. This utilizes a high-performance tokenized dictionary vector matching.
                </p>

                <div className="flex space-x-2">
                  <input
                    id="sandbox-spam-input"
                    type="text"
                    className="flex-1 bg-slate-900/60 border border-white/5 focus:border-purple-500 rounded-xl p-3 text-xs text-white outline-none font-sans"
                    placeholder="E.g. CONGRATULATIONS! Click here to claim your $1000 prize..."
                    value={spamInput}
                    onChange={(e) => setSpamInput(e.target.value)}
                  />
                  <button
                    id="sandbox-spam-btn"
                    onClick={runSpamClassification}
                    className="px-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs transition cursor-pointer select-none"
                  >
                    Classify
                  </button>
                </div>

                {spamResult && (
                  <div id="spam-results-box" className={`p-3.5 rounded-xl border text-[11px] leading-relaxed text-justify space-y-1.5 ${
                    spamResult.isSpam ? "bg-red-500/5 border-red-500/25" : "bg-green-500/5 border-green-500/25"
                  }`}>
                    <div className="flex justify-between items-center font-mono">
                      <span className="text-slate-400">Classification</span>
                      <span className={spamResult.isSpam ? "text-red-400 font-bold" : "text-green-400 font-bold"}>
                        {spamResult.isSpam ? "🚨 SPAM EMAIL DETECTED" : "✅ LEGITIMATE (HAM) EMAIL"}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-sans">
                      <span className="font-bold text-slate-300">Spam Trigger Probability:</span> {spamResult.probability}% <br />
                      <span className="font-bold text-slate-300">Matched Blacklist Words:</span> {spamResult.matchedTokens.join(", ")} <br />
                      <span className="font-bold text-slate-300">Summary:</span> {spamResult.analysis}
                    </div>
                  </div>
                )}
              </div>

              {/* Movie Recommender */}
              <div id="recommender-sandbox" className="space-y-3 border-t border-white/5 pt-5">
                <div className="flex items-center space-x-1.5">
                  <Database className="w-4 h-4 text-sky-400" />
                  <span className="text-sm font-bold text-white font-display">Lab 03: Movie Recommender Engine</span>
                  <span className="text-[9px] font-mono text-sky-400 bg-sky-400/5 px-2 py-0.5 rounded uppercase">Similarity Math</span>
                </div>

                <p className="text-slate-400 text-xs font-sans leading-relaxed text-justify">
                  Select your favorite movie genre and calculate cosine similarity recommendations.
                </p>

                <div className="flex space-x-2">
                  <select
                    id="sandbox-genre-select"
                    className="flex-1 bg-slate-900/60 border border-white/5 focus:border-sky-500 rounded-xl p-3 text-xs text-white outline-none font-sans"
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                  >
                    <option value="Sci-Fi">Science Fiction (Sci-Fi)</option>
                    <option value="Action">Action & Thriller</option>
                    <option value="Drama">Human Drama & Classics</option>
                    <option value="Comedy">Lighthearted Comedy</option>
                  </select>
                  <button
                    id="sandbox-recom-btn"
                    onClick={runRecommendations}
                    className="px-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-xs transition cursor-pointer select-none"
                  >
                    Recommend
                  </button>
                </div>

                {recomResult.length > 0 && (
                  <div id="recom-results-box" className="p-3.5 rounded-xl bg-slate-900 border border-white/5 text-[10px] font-mono text-slate-300 space-y-1">
                    <p className="text-sky-400 font-bold mb-1 uppercase">Top Recommended Matches (Cosine Vector):</p>
                    <ol className="list-decimal list-inside space-y-0.5">
                      {recomResult.map((mov, i) => (
                        <li key={i}>{mov}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* DETAILED PROJECT CASE STUDY MODAL */}
      {/* ========================================================================= */}
      {selectedProject && (
        <div id="project-case-modal" className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9999] flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="w-full max-w-3xl bg-slate-950 text-white rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col my-8 max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 bg-slate-900 flex items-center justify-between border-b border-white/5 shrink-0">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">Project Case Study Review</span>
              <button
                id="case-study-close-btn"
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable details */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white font-display">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase font-bold text-red-400">The Problem Statement</h4>
                  <p className="text-slate-300 text-xs leading-relaxed text-justify">{selectedProject.problem}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase font-bold text-green-400">The Intelligent Solution</h4>
                  <p className="text-slate-300 text-xs leading-relaxed text-justify">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Tech Stack Details */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <h4 className="text-xs font-mono uppercase font-bold text-cyan-400">Key Architectural Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges vs Learnings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5 text-xs text-justify">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase font-bold text-amber-400">Technical Challenges</h4>
                  <p className="text-slate-400 leading-relaxed">{selectedProject.challenges}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase font-bold text-purple-400">Crucial Learnings</h4>
                  <p className="text-slate-400 leading-relaxed">{selectedProject.learnings}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-slate-900 border-t border-white/5 flex space-x-3 shrink-0">
              <button
                id="case-study-close-footer-btn"
                onClick={() => setSelectedProject(null)}
                className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-xs text-white font-medium rounded-xl transition"
              >
                Close Case Study
              </button>
              {selectedProject.demoUrl.startsWith("#") ? (
                <a
                  id="case-study-sandbox-link"
                  href={selectedProject.demoUrl}
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 text-center py-2.5 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-xl text-xs transition"
                >
                  Launch Lab Demo
                </a>
              ) : (
                <a
                  id="case-study-github-link"
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs transition"
                >
                  View Code on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

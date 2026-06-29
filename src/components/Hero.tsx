import { useState, useEffect } from "react";
import { ArrowRight, FileText, Github, Linkedin, Mail, Sparkles, Terminal, ChevronDown } from "lucide-react";
import { personalInfo } from "../data";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "AI & Machine Learning Enthusiast",
    "Python Developer",
    "Future AI Engineer",
    "Data Analyst"
  ];

  useEffect(() => {
    const activeRole = roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setTypedText(activeRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else {
      // Adding character
      timer = setTimeout(() => {
        setTypedText(activeRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);
    }

    // End of typing current word
    if (!isDeleting && charIndex === activeRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Wait before delete
    }

    // End of deleting word
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // Floating ambient items in background
  const ambientEquations = [
    { text: "f(x) = wx + b", top: "15%", left: "12%", delay: "0s" },
    { text: "import numpy as np", top: "35%", left: "80%", delay: "1.5s" },
    { text: "P(A|B) = P(B|A)P(A)/P(B)", top: "75%", left: "15%", delay: "3s" },
    { text: "model.fit(X_train, y_train)", top: "25%", left: "70%", delay: "0.5s" },
    { text: "def train_epoch():", top: "60%", left: "85%", delay: "2.2s" },
    { text: "loss = criterion(out, y)", top: "82%", left: "72%", delay: "4s" },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050816] px-6"
    >
      {/* Background radial highlight gradient */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Floating math equations / code syntax snippets for high-tech premium ambiance */}
      {ambientEquations.map((eq, idx) => (
        <div
          key={idx}
          className="absolute hidden md:block text-slate-600/35 font-mono text-xs select-none pointer-events-none hover:text-cyan-400/50 transition-colors animate-float-slow duration-[10s]"
          style={{
            top: eq.top,
            left: eq.left,
            animationDelay: eq.delay,
          }}
        >
          {eq.text}
        </div>
      ))}

      {/* Grid Content Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Professional copywriting and CTAs */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Tag status */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold tracking-wide animate-pulse">
            <Terminal className="w-3.5 h-3.5" />
            <span>Seeking Junior / Internship Roles 2026</span>
          </div>

          <div className="space-y-3">
            <p className="text-cyan-400 font-mono text-sm tracking-wider font-semibold uppercase">Hi, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-display leading-[1.1]">
              Satish Sanjay <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
                Surwade
              </span>
            </h1>
            
            {/* Animated Role Typing effect */}
            <div className="h-8 md:h-10 flex items-center">
              <span className="text-lg md:text-2xl font-mono text-slate-300 font-medium caret-pulse">
                {typedText}
              </span>
            </div>
          </div>

          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed max-w-xl text-justify">
            {personalInfo.objective}
          </p>

          {/* Social icons + quick connection coordinates */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all duration-200"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all duration-200"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:editorexplore78@gmail.com" 
              className="p-3 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all duration-200"
              title="Send Direct Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <div className="h-6 w-[1px] bg-white/10 hidden sm:block mx-2" />
            <span className="text-slate-500 text-xs font-mono hidden sm:inline-block">
              📍 {personalInfo.location}
            </span>
          </div>

          {/* Core Action Call To Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              id="hero-hire-btn"
              href="#contact"
              className="flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl text-sm tracking-wide shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Hire Satish</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <button
              id="hero-resume-btn"
              onClick={onOpenResume}
              className="flex items-center justify-center space-x-2 px-6 py-4 bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-white hover:text-cyan-400 font-bold rounded-xl text-sm tracking-wide transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Printable Resume</span>
            </button>
          </div>
        </div>

        {/* Right Side: Futuristic Apple-inspired UI Mockup / Interactive Node Network SVG */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-[420px] aspect-square rounded-3xl p-0.5 bg-gradient-to-tr from-cyan-400/30 via-slate-800/10 to-purple-500/30">
            <div className="w-full h-full bg-[#070b1e] rounded-[22px] overflow-hidden flex flex-col justify-between p-6 relative">
              
              {/* Card Title Header styled like macOS code editor */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] text-slate-500 font-mono">predict_model.py</div>
                <div className="w-12 h-1 bg-white/5 rounded-full" />
              </div>

              {/* Main SVG Visualization */}
              <div className="flex-1 flex items-center justify-center relative py-6">
                
                {/* Embedded SVG Brain-Data-Network Visualization with custom animations */}
                <svg className="w-full h-full max-h-[220px]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Central node glowing */}
                  <circle cx="100" cy="100" r="16" fill="url(#radialGlow)" className="animate-pulse" />
                  <circle cx="100" cy="100" r="6" fill="#00E5FF" />

                  {/* Satellite network nodes */}
                  <g className="animate-float-slow">
                    <line x1="100" y1="100" x2="60" y2="60" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="1.5" />
                    <line x1="100" y1="100" x2="140" y2="60" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1.5" />
                    <line x1="100" y1="100" x2="50" y2="120" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="1.5" />
                    <line x1="100" y1="100" x2="150" y2="125" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1.5" />
                    <line x1="100" y1="100" x2="100" y2="160" stroke="rgba(0, 229, 255, 0.3)" strokeWidth="1.5" />

                    <circle cx="60" cy="60" r="10" fill="#0c112b" stroke="#00E5FF" strokeWidth="2" />
                    <circle cx="60" cy="60" r="3" fill="#00E5FF" />
                    
                    <circle cx="140" cy="60" r="10" fill="#0c112b" stroke="#8B5CF6" strokeWidth="2" />
                    <circle cx="140" cy="60" r="3" fill="#8B5CF6" />

                    <circle cx="50" cy="120" r="8" fill="#0c112b" stroke="#00E5FF" strokeWidth="1.5" />
                    <circle cx="150" cy="125" r="9" fill="#0c112b" stroke="#8B5CF6" strokeWidth="1.5" />
                    <circle cx="100" cy="160" r="7" fill="#0c112b" stroke="#00E5FF" strokeWidth="1.5" />
                  </g>

                  {/* Intersecting data streams */}
                  <circle cx="75" cy="75" r="2" fill="#00E5FF">
                    <animate attributeName="cx" values="100;60" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="100;60" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="120" cy="80" r="2" fill="#8B5CF6">
                    <animate attributeName="cx" values="100;140" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="100;60" dur="2.5s" repeatCount="indefinite" />
                  </circle>

                  {/* Linear gradient color definers */}
                  <defs>
                    <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* Micro tech card overlays */}
                <div className="absolute top-4 right-4 p-2 bg-slate-900/90 border border-white/10 rounded-lg text-[9px] font-mono text-green-400">
                  ACCURACY: 98.4%
                </div>
                <div className="absolute bottom-4 left-4 p-2 bg-slate-900/90 border border-white/10 rounded-lg text-[9px] font-mono text-cyan-400">
                  ML_PIPELINE: ACTIVE
                </div>
              </div>

              {/* Code command lines */}
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-white/5 text-[10px] font-mono text-slate-400 space-y-1">
                <p className="text-cyan-400">$ python -m satish_brain</p>
                <p className="text-slate-500">&gt; Loading NumPy & Scikit-Learn libraries...</p>
                <p className="text-slate-500">&gt; Loading custom trained weights (8.4M params)...</p>
                <p className="text-purple-400">&gt; Status: READY. Satish Sanjay Surwade online.</p>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Mouse scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 select-none pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500">Scroll Down</span>
        <div className="w-5 h-8.5 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

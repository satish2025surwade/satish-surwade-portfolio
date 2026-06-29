import { useState, useEffect } from "react";
import { ArrowUp, Terminal, Star, Sparkles, Command, Eye } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceEducation from "./components/ExperienceEducation";
import Services from "./components/Services";
import TestimonialsCertifications from "./components/TestimonialsCertifications";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import AIAdvisor from "./components/AIAdvisor";
import CommandPalette from "./components/CommandPalette";
import ResumeViewer from "./components/ResumeViewer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Bootstrapping Python & ML dependencies...");
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Custom cursor coordinates
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    // Sequence of funny loading mock steps representing high quality developer context
    const steps = [
      { text: "Bootstrapping Python & ML dependencies...", delay: 500 },
      { text: "Verifying Scikit-Learn models and precision rates...", delay: 1000 },
      { text: "Optimizing database relational query trees...", delay: 1500 },
      { text: "Launching Satish Surwade AI representational double...", delay: 2000 },
      { text: "Initialization Complete. Welcome!", delay: 2400 }
    ];

    steps.forEach((step) => {
      setTimeout(() => {
        setLoadingText(step.text);
      }, step.delay);
    });

    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    // Scroll to Top visibility
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Custom cursor motion tracker
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      // Inner dot lagging slightly behind for luxury spring momentum physics
      setTimeout(() => {
        setDotPos({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="portfolio-root" className="min-h-screen bg-bg-dark text-white font-sans selection:bg-cyan-500/30 selection:text-white overflow-hidden relative">
      
      {/* Custom Cursor particles */}
      <div 
        id="luxury-cursor"
        className="custom-cursor hidden sm:block" 
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }} 
      />
      <div 
        id="luxury-cursor-dot"
        className="custom-cursor-dot hidden sm:block" 
        style={{ left: `${dotPos.x}px`, top: `${dotPos.y}px` }} 
      />

      {/* ENTRANCE LOADER */}
      {loading && (
        <div id="entrance-loader" className="fixed inset-0 bg-bg-dark z-[10000] flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center text-slate-950 font-bold font-mono text-2xl animate-float-slow shadow-xl">
            S
          </div>
          <div className="space-y-2.5 mt-8 max-w-sm">
            <h3 className="text-sm font-mono text-cyan-400 tracking-widest uppercase font-bold animate-pulse">Initializing System</h3>
            <p className="text-slate-400 text-xs font-mono h-4 truncate">
              {loadingText}
            </p>
          </div>
          {/* Subtle loading gauge */}
          <div className="w-48 h-1 bg-white/5 rounded-full mt-6 overflow-hidden">
            <div className="h-full bg-cyan-400 rounded-full animate-[loading_2.8s_ease-in-out]" />
          </div>
        </div>
      )}

      {/* MAIN APPLICATION SECTIONS */}
      {!loading && (
        <>
          {/* Floating Command Center palette toggler bar (fixed left rail for fast keyboard visibility!) */}
          <div className="fixed left-6 bottom-6 z-[998] hidden md:block">
            <button
              id="rail-cmd-btn"
              onClick={() => setCommandPaletteOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-2 bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/20 rounded-full text-[10px] font-mono text-slate-400 hover:text-cyan-400 transition cursor-pointer select-none"
              title="Click or press Ctrl+K to access commands search console"
            >
              <Command className="w-3.5 h-3.5" />
              <span>CMD Console</span>
            </button>
          </div>

          <Navbar 
            onOpenCommandPalette={() => setCommandPaletteOpen(true)} 
            onOpenResume={() => setResumeOpen(true)} 
          />

          <main id="main-content" className="relative z-10">
            <Hero onOpenResume={() => setResumeOpen(true)} />
            <About />
            <Skills />
            <Projects />
            <ExperienceEducation />
            <Services />
            <TestimonialsCertifications />
            <Blog />
            <Contact />
          </main>

          {/* Core Footer section */}
          <footer id="footer-main" className="bg-slate-950/80 border-t border-white/5 py-12 px-6 print:hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
              <div>
                <p className="text-white font-bold font-display text-sm tracking-wide">Satish Sanjay Surwade</p>
                <p className="text-slate-500 text-xs font-mono mt-1">Aspiring AI Engineer & Python Specialist</p>
              </div>
              
              <div className="flex justify-center space-x-6 text-xs font-mono font-bold tracking-wider">
                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition">About</a>
                <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition">Skills</a>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition">Projects</a>
                <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition">Contact</a>
              </div>

              <div className="text-center md:text-right text-[11px] text-slate-500 font-mono">
                <p>© {new Date().getFullYear()} Satish Sanjay Surwade. All rights reserved.</p>
                <p className="mt-1 text-slate-600">Built with React, Express & Gemini AI</p>
              </div>
            </div>
          </footer>

          {/* FLOATING CORNER WIDGETS */}
          <AIAdvisor />

          {/* BACK TO TOP FLOATING BUTTON */}
          {showScrollTop && (
            <button
              id="back-to-top-btn"
              onClick={handleScrollTop}
              className="fixed bottom-24 right-6 p-3 bg-slate-900/90 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/20 text-slate-400 hover:text-cyan-400 rounded-xl transition cursor-pointer select-none shadow-xl shrink-0 z-[997]"
              title="Back To Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          )}

          {/* OVERLAYS & MODALS */}
          <CommandPalette 
            isOpen={commandPaletteOpen} 
            onClose={() => setCommandPaletteOpen(false)} 
            onOpenAdvisor={() => {}} // Widget has its own trigger, can connect if wanted
            onViewResume={() => setResumeOpen(true)}
          />

          <ResumeViewer 
            isOpen={resumeOpen} 
            onClose={() => setResumeOpen(false)} 
          />
        </>
      )}

    </div>
  );
}

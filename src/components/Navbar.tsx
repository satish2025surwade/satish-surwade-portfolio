import { useState, useEffect } from "react";
import { Sparkles, Terminal, FileText, Command, Menu, X, Eye } from "lucide-react";
import { personalInfo } from "../data";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ onOpenCommandPalette, onOpenResume }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visitorCount, setVisitorCount] = useState(124);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll progress bar
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    // Simulated Visitor Counter persisted in localStorage
    const storedCount = localStorage.getItem("satish_portfolio_visitors");
    if (storedCount) {
      const count = parseInt(storedCount, 10);
      setVisitorCount(count + 1);
      localStorage.setItem("satish_portfolio_visitors", (count + 1).toString());
    } else {
      const initialCount = Math.floor(Math.random() * 50) + 120;
      setVisitorCount(initialCount);
      localStorage.setItem("satish_portfolio_visitors", initialCount.toString());
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#timeline" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav id="navbar-main" className="fixed top-0 left-0 w-full z-[1000] bg-bg-dark/80 backdrop-blur-md border-b border-white/5 print:hidden">
      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress-indicator"
        className="h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-600 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        
        {/* Logo / Branding */}
        <a 
          href="#hero" 
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center text-slate-950 font-bold font-mono text-lg shadow-lg group-hover:scale-105 transition-all duration-300">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-white text-base tracking-tight leading-none group-hover:text-cyan-400 transition-colors">
              Satish Surwade
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase mt-1 leading-none">
              BCA Student • AI Enthusiast
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-7 font-sans">
          {navLinks.map((link) => (
            <a
              id={`nav-link-${link.label.toLowerCase()}`}
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition duration-200 hover:translate-y-[-1px]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Widgets */}
        <div className="hidden sm:flex items-center space-x-4">
          
          {/* Visitor Counter badge */}
          <div 
            id="visitor-counter-badge"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-slate-300 text-xs font-mono"
            title="Total portfolio visitors in this session"
          >
            <Eye className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Visitor #{visitorCount}</span>
          </div>

          {/* Command Palette Button */}
          <button
            id="nav-cmd-btn"
            onClick={onOpenCommandPalette}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/25 text-slate-300 hover:text-cyan-400 text-xs font-mono transition cursor-pointer"
            title="Press Ctrl+K for search command center"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Ctrl+K</span>
          </button>

          {/* Resume Quick Access Button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center space-x-1.5 px-4 py-2 bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-bold rounded-lg text-xs tracking-wider uppercase shadow-md hover:shadow-cyan-400/10 transform hover:scale-[1.02] transition cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Get Resume</span>
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex sm:hidden items-center space-x-2">
          {/* CMD button on mobile header */}
          <button
            id="nav-cmd-mobile-btn"
            onClick={onOpenCommandPalette}
            className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300"
          >
            <Command className="w-4 h-4" />
          </button>

          <button
            id="nav-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="sm:hidden absolute top-18 left-0 w-full bg-slate-950/95 border-b border-white/10 backdrop-blur-lg flex flex-col py-6 px-6 space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              id={`mobile-nav-link-${link.label.toLowerCase()}`}
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-300 hover:text-cyan-400 py-1 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/5 flex flex-col space-y-3">
            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
              <span className="flex items-center"><Eye className="w-3.5 h-3.5 text-purple-400 mr-1.5" /> Session Visitors</span>
              <span>#{visitorCount}</span>
            </div>
            <button
              id="mobile-nav-resume-btn"
              onClick={() => { onOpenResume(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center space-x-1.5 py-3 bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition"
            >
              <FileText className="w-4 h-4" />
              <span>Get Resume (Printable CV)</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

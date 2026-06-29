import { Brain, Star, Clock, Laptop, Compass, Heart } from "lucide-react";
import { personalInfo } from "../data";

export default function About() {
  const corePillars = [
    {
      id: "pillars-problem",
      title: "Problem Solving",
      desc: "Deep love for breaking down complex relational database schemas, algorithm limits, and statistical classifications into logical modules.",
      icon: Brain,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      id: "pillars-study",
      title: "Rigorous Study",
      desc: "Devoted 1,500+ hours in pure independent learning to master Pandas operations, Scikit-Learn pipelines, regression models, and neural architecture.",
      icon: Clock,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      id: "pillars-bca",
      title: "BCA Framework",
      desc: "Combining the scientific discipline of a Computer Applications degree with modern software engineering and automation frameworks.",
      icon: Laptop,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20"
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-[#050816]/95 border-t border-white/5 relative overflow-hidden px-6"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section title */}
        <div className="text-center space-y-3">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">01 // The Story</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white">About Satish Surwade</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Narrative layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative text block */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white font-display flex items-center">
              <Compass className="w-5 h-5 mr-2 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              My Professional Mission & Vision
            </h3>
            <p className="text-slate-300 font-sans text-sm md:text-base leading-relaxed text-justify">
              {personalInfo.aboutStory}
            </p>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 relative">
              <div className="absolute top-4 right-4 text-purple-400 opacity-20">
                <Heart className="w-12 h-12 fill-purple-400/20" />
              </div>
              <h4 className="text-sm font-bold text-cyan-400 font-mono uppercase tracking-wider mb-2">My Pledge of Integrity</h4>
              <p className="text-slate-400 text-xs italic leading-relaxed text-justify">
                "I believe in building real skills rather than hiding behind buzzwords. Every project listed here was coded by me from scratch, line-by-line, resolving errors manually. I do not claim fake years of corporate experience, but I offer extreme curiosity, a strong computer science foundation, and a relentless work ethic."
              </p>
            </div>
          </div>

          {/* Quick Metrics & Pillars */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-base font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">
              Foundational Pillars
            </h3>
            
            <div className="space-y-4">
              {corePillars.map((pillar) => {
                const PillIcon = pillar.icon;
                return (
                  <div 
                    id={`about-pillar-${pillar.id}`}
                    key={pillar.id}
                    className="p-5 rounded-2xl bg-slate-900/50 border border-white/5 flex items-start space-x-4 hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <div className={`p-2.5 rounded-xl border shrink-0 ${pillar.color}`}>
                      <PillIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display mb-1">{pillar.title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed text-justify">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Dynamic Highlight Stats banner */}
        <div id="about-stats-banner" className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-950 border border-white/10 text-center">
          <div>
            <p className="text-2xl md:text-4xl font-bold font-display text-cyan-400">1,500+</p>
            <p className="text-[10px] md:text-xs font-mono text-slate-400 uppercase mt-1 tracking-wider">Independent Study Hours</p>
          </div>
          <div className="border-l border-white/10">
            <p className="text-2xl md:text-4xl font-bold font-display text-purple-400">4+</p>
            <p className="text-[10px] md:text-xs font-mono text-slate-400 uppercase mt-1 tracking-wider">Complex ML/AI Projects</p>
          </div>
          <div className="border-l border-white/10">
            <p className="text-2xl md:text-4xl font-bold font-display text-sky-400">BCA</p>
            <p className="text-[10px] md:text-xs font-mono text-slate-400 uppercase mt-1 tracking-wider">Open University Studies</p>
          </div>
          <div className="border-l border-white/10">
            <p className="text-2xl md:text-4xl font-bold font-display text-emerald-400">98%</p>
            <p className="text-[10px] md:text-xs font-mono text-slate-400 uppercase mt-1 tracking-wider">Precision Metric Target</p>
          </div>
        </div>

      </div>
    </section>
  );
}

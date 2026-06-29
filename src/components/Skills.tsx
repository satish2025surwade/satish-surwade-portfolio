import { useState } from "react";
import { Terminal, Database, Shield, Layout, Sparkles, Filter, Code } from "lucide-react";
import { skillsData } from "../data";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"all" | "programming" | "data-science" | "dev-tools" | "ai-automation">("all");

  const categories = [
    { id: "all", label: "All Skills", icon: Filter },
    { id: "programming", label: "Languages & Core", icon: Code },
    { id: "data-science", label: "Data Science & ML", icon: Database },
    { id: "dev-tools", label: "Developer Tools", icon: Terminal },
    { id: "ai-automation", label: "AI & Automation", icon: Sparkles }
  ];

  const filteredSkills = activeTab === "all" 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section 
      id="skills" 
      className="py-24 bg-[#050816] border-t border-white/5 relative overflow-hidden px-6"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">02 // Capability Matrix</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white">Technical Skills & Expertise</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans leading-relaxed">
            Click on a category to filter. My skill bars are conservatively calibrated to reflect genuine functional capacity.
          </p>
        </div>

        {/* Category Tabs / Filters */}
        <div id="skills-filter-tabs" className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto p-1.5 rounded-2xl bg-slate-950/80 border border-white/5 shrink-0">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <button
                id={`skills-tab-${cat.id}`}
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-medium tracking-wide transition duration-200 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950 font-bold shadow-md shadow-cyan-400/10"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <CatIcon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Skill Cards */}
        <div id="skills-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredSkills.map((skill, idx) => {
            // Determine skill color theme dynamically
            const isLearning = skill.proficiency < 50;
            const barColor = isLearning 
              ? "from-amber-400 to-orange-500" 
              : skill.category === "data-science"
              ? "from-purple-500 to-indigo-600"
              : skill.category === "ai-automation"
              ? "from-cyan-400 to-sky-500"
              : "from-cyan-400 to-purple-600";

            return (
              <div
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                key={idx}
                className="p-5 rounded-2xl glass-panel bg-slate-900/40 hover:border-white/15 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="font-display font-bold text-base text-white tracking-tight">
                      {skill.name}
                    </span>
                    {isLearning ? (
                      <span className="text-[9px] font-mono font-bold uppercase text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
                        Actively Learning
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/5 border border-cyan-400/10 px-2 py-0.5 rounded">
                        {skill.proficiency}%
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-400 text-xs font-sans leading-relaxed text-justify">
                    {skill.desc}
                  </p>
                </div>

                {/* Progress bar meter */}
                <div className="pt-4 space-y-1">
                  <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                    <div 
                      id={`skill-bar-${skill.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`h-full rounded-full bg-gradient-to-r ${barColor} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

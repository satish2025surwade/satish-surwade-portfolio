import { Code2, BarChart3, BrainCircuit, Cpu, ArrowUpRight } from "lucide-react";
import { servicesData } from "../data";

export default function Services() {
  const iconMapping: Record<string, any> = {
    Code2: Code2,
    BarChart3: BarChart3,
    BrainCircuit: BrainCircuit,
    Cpu: Cpu
  };

  return (
    <section 
      id="services" 
      className="py-24 bg-[#050816]/95 border-t border-white/5 relative overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">05 // Value Offerings</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white">Services & Collaboration Scope</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans leading-relaxed">
            I offer reliable development, clean analytics pipelines, and rapid concept deployment with transparent, structured scopes.
          </p>
        </div>

        {/* Services Grid */}
        <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service) => {
            const IconComp = iconMapping[service.iconName] || Code2;
            return (
              <div
                id={`service-card-${service.id}`}
                key={service.id}
                className="p-6 bg-slate-900/40 hover:bg-slate-900/70 border border-white/5 hover:border-cyan-400/20 rounded-2xl flex flex-col justify-between transition-all duration-300 group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-cyan-400/10 text-cyan-400 rounded-xl border border-cyan-400/20">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      Code Scope // {service.id}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-display">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex flex-wrap gap-1.5">
                  {service.skills.map((skill, i) => (
                    <span key={i} className="text-[10px] font-mono text-cyan-400 bg-cyan-400/5 px-2.5 py-1 rounded border border-cyan-400/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

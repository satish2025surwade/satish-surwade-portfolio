import { GraduationCap, Award, Briefcase, Zap, Star } from "lucide-react";
import { timelineEvents } from "../data";

export default function ExperienceEducation() {
  const education = timelineEvents.filter(t => t.type === "education");
  const achievements = timelineEvents.filter(t => t.type === "achievement");
  const experiences = timelineEvents.filter(t => t.type === "experience");

  return (
    <section 
      id="timeline" 
      className="py-24 bg-[#050816] border-t border-white/5 relative overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section title */}
        <div className="text-center space-y-3">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">04 // Chronology & Path</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white">Education & Self-Learning Path</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Triple Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Education Timeline */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 pb-2 border-b border-white/10">
              <GraduationCap className="text-cyan-400 w-5 h-5" />
              <h3 className="text-base font-bold font-mono uppercase tracking-wider text-white">Academics (Degree)</h3>
            </div>
            
            <div className="space-y-6 relative pl-4 border-l border-white/10">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Left bullet circle */}
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#050816] group-hover:bg-purple-400 transition-all duration-300" />
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold bg-cyan-400/5 px-2 py-0.5 rounded border border-cyan-400/10">
                      {edu.date}
                    </span>
                    <h4 className="text-sm font-bold text-white font-display mt-2 group-hover:text-cyan-400 transition-colors">
                      {edu.title}
                    </h4>
                    <p className="text-slate-400 text-xs">{edu.subtitle}</p>
                    <p className="text-slate-500 text-[11px] leading-relaxed text-justify mt-1">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Self-Learning Experience */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 pb-2 border-b border-white/10">
              <Briefcase className="text-purple-400 w-5 h-5" />
              <h3 className="text-base font-bold font-mono uppercase tracking-wider text-white">Project Experience</h3>
            </div>
            
            <div className="space-y-6 relative pl-4 border-l border-white/10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Left bullet circle */}
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-purple-400 border-2 border-[#050816] group-hover:bg-cyan-400 transition-all duration-300" />
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-purple-400 font-bold bg-purple-400/5 px-2 py-0.5 rounded border border-purple-400/10">
                      {exp.date}
                    </span>
                    <h4 className="text-sm font-bold text-white font-display mt-2 group-hover:text-purple-400 transition-colors">
                      {exp.title}
                    </h4>
                    <p className="text-slate-400 text-xs">{exp.subtitle}</p>
                    <p className="text-slate-500 text-[11px] leading-relaxed text-justify mt-1">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Milestones */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 pb-2 border-b border-white/10">
              <Award className="text-sky-400 w-5 h-5" />
              <h3 className="text-base font-bold font-mono uppercase tracking-wider text-white">Accomplishments</h3>
            </div>
            
            <div className="space-y-6 relative pl-4 border-l border-white/10">
              {achievements.map((ach, idx) => (
                <div key={idx} className="relative group">
                  {/* Left bullet circle */}
                  <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-sky-400 border-2 border-[#050816] group-hover:bg-cyan-400 transition-all duration-300" />
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-sky-400 font-bold bg-sky-400/5 px-2 py-0.5 rounded border border-sky-400/10">
                      {ach.date}
                    </span>
                    <h4 className="text-sm font-bold text-white font-display mt-2 group-hover:text-sky-400 transition-colors">
                      {ach.title}
                    </h4>
                    <p className="text-slate-400 text-xs">{ach.subtitle}</p>
                    <p className="text-slate-500 text-[11px] leading-relaxed text-justify mt-1">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Call for hiring recruiter */}
        <div id="timeline-cta-card" className="p-6 rounded-2xl bg-slate-950 border border-white/5 flex flex-col md:flex-row items-center justify-between text-left gap-4">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-cyan-400/10 text-cyan-400 rounded-xl">
              <Zap className="w-5 h-5 animate-bounce" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Seeking Internships & Open-Source Opportunities</h4>
              <p className="text-slate-400 text-xs font-sans mt-0.5 leading-normal max-w-xl text-justify">
                Currently looking to join a high-performing engineering team as a Python developer, machine learning assistant, or data analyst intern. Eager to solve real business challenges, clean huge files, write unit tests, and deploy models.
              </p>
            </div>
          </div>
          <a
            id="timeline-hire-btn"
            href="#contact"
            className="w-full md:w-auto text-center shrink-0 px-6 py-3 bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition cursor-pointer"
          >
            Schedule Brief Talk
          </a>
        </div>

      </div>
    </section>
  );
}

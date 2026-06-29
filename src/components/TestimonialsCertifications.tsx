import { Award, Quote, CheckCircle, ExternalLink, Calendar, Bookmark } from "lucide-react";
import { certificationsData, testimonialsData } from "../data";

export default function TestimonialsCertifications() {
  return (
    <section 
      id="credentials" 
      className="py-24 bg-[#050816]/95 border-t border-white/5 relative overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Grids containing both certifications and testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Certifications (BCA specific credentials and independent milestones) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">Verified Learning</p>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white">Certifications & Milestones</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationsData.map((cert) => (
                <div
                  id={`cert-card-${cert.id}`}
                  key={cert.id}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-cyan-400/20 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden group h-full"
                >
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="p-2 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                        <Award className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" /> {cert.date}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white font-display group-hover:text-cyan-400 transition-colors leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-slate-400 text-xs font-sans">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-3 flex flex-wrap gap-1">
                    {cert.topics.map((topic, i) => (
                      <span key={i} className="text-[9px] font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Professional Testimonials (Professors, Clients, Collaborators) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <p className="text-purple-400 font-mono text-xs tracking-widest uppercase font-bold">Social Evidence</p>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white">Mentors & Recommendations</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-indigo-600 rounded-full" />
            </div>

            <div className="space-y-6">
              {testimonialsData.map((test, idx) => (
                <div
                  id={`testimonial-card-${idx}`}
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-purple-400/20 hover:bg-slate-900/60 transition-all duration-300 relative group"
                >
                  <div className="absolute top-4 right-4 text-purple-400/15">
                    <Quote className="w-8 h-8 rotate-180" />
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed text-justify italic relative z-10">
                    "{test.quote}"
                  </p>

                  <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-white/5">
                    <img
                      src={test.avatar}
                      alt={test.author}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full border border-white/10 shrink-0"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white font-display">{test.author}</h4>
                      <p className="text-[10px] text-purple-400 font-mono">{test.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

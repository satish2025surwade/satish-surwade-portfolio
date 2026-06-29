import { Printer, Download, X, Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";
import { personalInfo, skillsData, timelineEvents, certificationsData } from "../data";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    // Elegant system print option
    window.print();
  };

  const programmingSkills = skillsData.filter(s => s.category === "programming").map(s => s.name).join(", ");
  const dsSkills = skillsData.filter(s => s.category === "data-science").map(s => s.name).join(", ");
  const devTools = skillsData.filter(s => s.category === "dev-tools").map(s => s.name).join(", ");
  const aiAutomation = skillsData.filter(s => s.category === "ai-automation").map(s => s.name).join(", ");

  const educationEvents = timelineEvents.filter(t => t.type === "education");
  const achievements = timelineEvents.filter(t => t.type === "achievement");

  return (
    <div id="resume-viewer-overlay" className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
      <div 
        id="resume-viewer-modal"
        className="w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-8 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar for actions */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 print:hidden shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span className="text-sm font-mono tracking-wider text-cyan-400 uppercase font-bold">Recruiter Print-Ready CV</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="flex items-center space-x-1 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-medium rounded-lg text-xs transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              id="resume-close-btn"
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Container */}
        <div id="resume-printable-area" className="overflow-y-auto p-8 md:p-12 print:p-0 bg-white">
          <div className="max-w-[210mm] mx-auto print:mx-0">
            
            {/* Header */}
            <div className="border-b-2 border-slate-800 pb-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-end">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 uppercase font-display">{personalInfo.fullName}</h1>
                <p className="text-cyan-600 font-mono text-sm uppercase font-bold mt-1 tracking-wide">{personalInfo.title} | {personalInfo.subtitle}</p>
                <p className="text-slate-500 text-xs mt-2 flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" /> {personalInfo.location}</p>
              </div>
              <div className="mt-4 md:mt-0 text-left md:text-right space-y-1 text-slate-600 text-xs font-mono">
                <p className="flex items-center md:justify-end"><Mail className="w-3.5 h-3.5 mr-1.5" /> {personalInfo.email}</p>
                <p className="flex items-center md:justify-end"><Linkedin className="w-3.5 h-3.5 mr-1.5" /> linkedin.com/in/satish-surwade</p>
                <p className="flex items-center md:justify-end"><Github className="w-3.5 h-3.5 mr-1.5" /> github.com/satishsurwade</p>
              </div>
            </div>

            {/* Profile / Career Objective */}
            <div className="mb-6">
              <h2 className="text-sm font-mono uppercase font-bold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Professional Summary</h2>
              <p className="text-slate-700 text-sm leading-relaxed text-justify">
                {personalInfo.objective}
              </p>
            </div>

            {/* Core Skills Grid */}
            <div className="mb-6">
              <h2 className="text-sm font-mono uppercase font-bold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Technical Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <div>
                  <p className="text-slate-800 font-bold"><span className="text-cyan-600">▪</span> Programming Languages:</p>
                  <p className="text-slate-600 text-xs pl-4">{programmingSkills}</p>
                </div>
                <div>
                  <p className="text-slate-800 font-bold"><span className="text-cyan-600">▪</span> Machine Learning & Analytics:</p>
                  <p className="text-slate-600 text-xs pl-4">{dsSkills}</p>
                </div>
                <div className="mt-2">
                  <p className="text-slate-800 font-bold"><span className="text-cyan-600">▪</span> Development & Dev Tools:</p>
                  <p className="text-slate-600 text-xs pl-4">{devTools}</p>
                </div>
                <div className="mt-2">
                  <p className="text-slate-800 font-bold"><span className="text-cyan-600">▪</span> AI Systems & Productivity:</p>
                  <p className="text-slate-600 text-xs pl-4">{aiAutomation}</p>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="mb-6">
              <h2 className="text-sm font-mono uppercase font-bold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">Key Projects (Hands-on Development)</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">AI Resume Analyzer</h3>
                    <span className="text-xs font-mono text-slate-500">Python, Streamlit, Gemini API</span>
                  </div>
                  <p className="text-slate-700 text-xs mt-1 text-justify">
                    Engineered an intelligent natural language processing pipeline to calculate ATS alignment ratings. Computes score gauges, identifies missing semantic target vocabularies, and displays constructive feedback on experience statements.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">Spam Email Detection System</h3>
                    <span className="text-xs font-mono text-slate-500">Python, Scikit-Learn, Pandas</span>
                  </div>
                  <p className="text-slate-700 text-xs mt-1 text-justify">
                    Designed a lightweight vectorized classifier achieving 98.4% model validation accuracy. Implemented TF-IDF token weighting and Multinomial Naive Bayes pipelines for low-latency offline email classification.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">Movie Recommendation Engine</h3>
                    <span className="text-xs font-mono text-slate-500">Python, Pandas, Cosine Similarity</span>
                  </div>
                  <p className="text-slate-700 text-xs mt-1 text-justify">
                    Implemented an interactive content-based recommender processing metadata bags from 5,000+ films. Uses cosine similarity calculations to render instant, localized recommendations in a minimal client GUI.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-sm font-mono uppercase font-bold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Education</h2>
              {educationEvents.map((edu) => (
                <div key={edu.id} className="mb-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-slate-900">{edu.title}</h3>
                    <span className="text-xs font-mono text-slate-500">{edu.date}</span>
                  </div>
                  <p className="text-slate-600 text-xs">{edu.subtitle}</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certifications & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-sm font-mono uppercase font-bold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Certifications</h2>
                <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                  {certificationsData.map((cert) => (
                    <li key={cert.id} className="leading-snug">
                      <span className="font-bold">{cert.title}</span> — {cert.issuer} ({cert.date})
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sm font-mono uppercase font-bold tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Key Accomplishments</h2>
                <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                  {achievements.map((ach) => (
                    <li key={ach.id} className="leading-snug">
                      <span className="font-bold">{ach.title}</span>: {ach.subtitle}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer declaration */}
            <div className="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400 font-mono print:hidden">
              This document was generated in real-time from Satish's web application. Click "Print / Save PDF" to save a clean physical copy.
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

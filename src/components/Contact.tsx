import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check, MessageSquare } from "lucide-react";
import { personalInfo } from "../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSending(true);
    // Simulate API mail sending
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      // Clear success alert after 4s
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-[#050816] border-t border-white/5 relative overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section title */}
        <div className="text-center space-y-3">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">07 // Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white">Let's Connect & Collaborate</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans leading-relaxed">
            Interested in starting an internship, building a custom Python script, or scheduling a technical interview? Let's talk!
          </p>
        </div>

        {/* Contact layout grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact coordinates & values */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-xl font-bold text-white font-display">Contact Channels</h3>
            
            <div className="space-y-6">
              
              {/* Copy Email Action Card */}
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">Direct Communication</span>
                <p className="text-xs text-slate-400 font-sans">Click below to instantly copy my email to clipboard:</p>
                <button
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-950 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/20 text-slate-300 hover:text-cyan-400 transition cursor-pointer font-mono text-xs"
                >
                  <span className="truncate">{personalInfo.email}</span>
                  {copied ? (
                    <span className="text-green-400 flex items-center text-[10px] font-bold">
                      <Check className="w-3.5 h-3.5 mr-1" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>
              </div>

              {/* Coordinates */}
              <div className="space-y-4 font-sans text-xs">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-display mb-0.5">Location Hub</h4>
                    <p className="text-slate-400">{personalInfo.location}</p>
                    <p className="text-slate-500 text-[10px] font-mono mt-0.5">YCMOU Open University Study Circle</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                    <Linkedin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-display mb-0.5">LinkedIn Profile</h4>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                      linkedin.com/in/satish-surwade
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                    <Github className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-display mb-0.5">GitHub Repositories</h4>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                      github.com/satishsurwade
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Message Submission Form */}
          <div className="lg:col-span-7 bg-slate-950 p-6 md:p-8 rounded-3xl border border-white/5 space-y-6">
            <div className="flex items-center space-x-2">
              <MessageSquare className="text-purple-400 w-5 h-5 animate-pulse" />
              <h3 className="text-lg font-bold text-white font-display">Send a Message</h3>
            </div>

            <form id="contact-message-form" onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-mono text-slate-500 uppercase">Your Name</label>
                  <input
                    id="contact-name-input"
                    type="text"
                    required
                    className="w-full bg-slate-900 border border-white/5 focus:border-cyan-400 rounded-xl p-3.5 text-white outline-none"
                    placeholder="E.g. Sanjay Patil"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="block font-mono text-slate-500 uppercase">Your Email</label>
                  <input
                    id="contact-email-input"
                    type="email"
                    required
                    className="w-full bg-slate-900 border border-white/5 focus:border-cyan-400 rounded-xl p-3.5 text-white outline-none"
                    placeholder="E.g. sanjay@patil.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-slate-500 uppercase">Subject</label>
                <input
                  id="contact-subject-input"
                  type="text"
                  className="w-full bg-slate-900 border border-white/5 focus:border-cyan-400 rounded-xl p-3.5 text-white outline-none"
                  placeholder="E.g. Internship Interview Proposal"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-slate-500 uppercase">Message Content</label>
                <textarea
                  id="contact-message-input"
                  rows={4}
                  required
                  className="w-full bg-slate-900 border border-white/5 focus:border-cyan-400 rounded-xl p-3.5 text-white outline-none"
                  placeholder="Type your message, query, or invitation here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Alert Message for completion */}
              {sent && (
                <div id="contact-success-alert" className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center space-x-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Your message has been simulated sent successfully! Satish will respond shortly at your provided address.</span>
                </div>
              )}

              <button
                id="contact-submit-btn"
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl uppercase tracking-wider transition duration-150 flex items-center justify-center space-x-2 cursor-pointer"
              >
                {sending ? (
                  <span>Sending simulated email...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Secure Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

import { useState, useRef, useEffect } from "react";
import { Sparkles, MessageSquare, X, Send, User, ChevronDown, RefreshCw, Briefcase, Code } from "lucide-react";

interface Message {
  role: "user" | "model";
  content: string;
}

export default function AIAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: "Hi there! I am Satish's AI representative, powered by Gemini. Ask me anything about Satish's technical skills, computer application studies (BCA), projects, or availability for internships!"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = { role: "user", content: textToSend };
    const updatedMessages = [...messages, userMsg];
    
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setShowPulse(false);

    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error("Failed to receive response from server.");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", content: data.content || "I couldn't generate an answer. Please try again." }]);
    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "Apologies, I encountered a connection issue. Please verify that your Gemini API Key is configured in Settings > Secrets." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handlePresetQuestion = (question: string) => {
    handleSend(question);
  };

  const handleClear = () => {
    setMessages([
      {
        role: "model",
        content: "Reset complete! Let's start over. What would you like to know about Satish Sanjay Surwade?"
      }
    ]);
  };

  const presets = [
    { text: "Why hire Satish?", icon: Briefcase },
    { text: "Tell me about his AI Resume Analyzer.", icon: Code },
    { text: "What are his Python skills?", icon: Sparkles }
  ];

  return (
    <div id="ai-advisor-wrapper" className="fixed bottom-6 right-6 z-[999] font-sans print:hidden">
      {/* Collapsed Button */}
      {!isOpen && (
        <button
          id="advisor-toggle-open-btn"
          onClick={() => { setIsOpen(true); setShowPulse(false); }}
          className="relative flex items-center space-x-2.5 px-4.5 py-3.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-900 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 font-medium select-none group cursor-pointer"
        >
          {showPulse && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500"></span>
            </span>
          )}
          <Sparkles className="w-5 h-5 animate-pulse text-slate-900" />
          <span className="text-slate-950 font-bold text-sm tracking-wide">Ask Satish's AI Double</span>
        </button>
      )}

      {/* Floating Chat Dialog */}
      {isOpen && (
        <div 
          id="advisor-chat-window"
          className="w-[380px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[80vh] glass-panel rounded-2xl shadow-2xl flex flex-col overflow-hidden border-white/10 animate-float-slow"
        >
          {/* Header */}
          <div className="px-4 py-3.5 bg-slate-950/95 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">Satish's AI Assistant</h4>
                <p className="text-[10px] text-cyan-400 font-mono flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
                  Powered by Gemini 3.5 Flash
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                id="advisor-reset-btn"
                onClick={handleClear}
                title="Reset Chat"
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                id="advisor-toggle-close-btn"
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 transition"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div id="advisor-messages-container" className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-950/30">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2.5 ${msg.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <div 
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border ${
                    msg.role === "user" 
                      ? "bg-purple-500/10 border-purple-500/20 text-purple-400" 
                      : "bg-cyan-500/10 border-cyan-500/20 text-cyan-400"
                  }`}
                >
                  {msg.role === "user" ? <User className="w-4 h-4" /> : <Sparkles className="w-3.5 h-3.5" />}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs font-sans leading-relaxed text-justify ${
                    msg.role === "user"
                      ? "bg-purple-600 text-white rounded-tr-none"
                      : "bg-white/5 text-slate-100 border border-white/5 rounded-tl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {loading && (
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                </div>
                <div className="bg-white/5 text-slate-400 border border-white/5 rounded-2xl rounded-tl-none px-4 py-2.5 text-xs font-sans italic flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Chips */}
          <div id="advisor-presets" className="px-3 py-2 bg-slate-950/60 border-t border-white/5 flex gap-1.5 overflow-x-auto shrink-0 scrollbar-none">
            {presets.map((preset, idx) => {
              const PresIcon = preset.icon;
              return (
                <button
                  id={`advisor-preset-${idx}`}
                  key={idx}
                  onClick={() => handlePresetQuestion(preset.text)}
                  disabled={loading}
                  className="flex items-center space-x-1 shrink-0 px-2.5 py-1 text-[10px] bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/20 text-slate-300 hover:text-cyan-400 rounded-full transition cursor-pointer select-none"
                >
                  <PresIcon className="w-3 h-3" />
                  <span>{preset.text}</span>
                </button>
              );
            })}
          </div>

          {/* Form Input */}
          <form
            id="advisor-input-form"
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            className="p-3 bg-slate-950 border-t border-white/10 flex items-center space-x-2 shrink-0"
          >
            <input
              id="advisor-chat-input"
              type="text"
              className="flex-1 bg-white/5 text-xs text-white placeholder-slate-400 border border-white/10 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 rounded-xl px-3.5 py-2.5 outline-none font-sans"
              placeholder="Type message or click a preset..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
            />
            <button
              id="advisor-send-btn"
              type="submit"
              disabled={loading || !input.trim()}
              className="p-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-xl transition cursor-pointer disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

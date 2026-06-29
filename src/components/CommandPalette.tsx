import { useState, useEffect } from "react";
import { Search, Hash, CornerDownLeft, Link2, Copy, Check, Sparkles, FileText, Send } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAdvisor: () => void;
  onViewResume: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenAdvisor, onViewResume }: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: "hero", label: "Jump to Home", category: "Navigation", icon: Hash, action: () => { window.location.hash = "#hero"; onClose(); } },
    { id: "about", label: "Jump to About Me", category: "Navigation", icon: Hash, action: () => { window.location.hash = "#about"; onClose(); } },
    { id: "skills", label: "Jump to Technical Skills", category: "Navigation", icon: Hash, action: () => { window.location.hash = "#skills"; onClose(); } },
    { id: "projects", label: "Jump to Featured Projects & Sandbox", category: "Navigation", icon: Hash, action: () => { window.location.hash = "#projects"; onClose(); } },
    { id: "timeline", label: "Jump to Education & Path", category: "Navigation", icon: Hash, action: () => { window.location.hash = "#timeline"; onClose(); } },
    { id: "services", label: "Jump to Services Provided", category: "Navigation", icon: Hash, action: () => { window.location.hash = "#services"; onClose(); } },
    { id: "blog", label: "Jump to SEO Articles / Blog", category: "Navigation", icon: Hash, action: () => { window.location.hash = "#blog"; onClose(); } },
    { id: "contact", label: "Jump to Contact Form", category: "Navigation", icon: Hash, action: () => { window.location.hash = "#contact"; onClose(); } },
    { id: "advisor", label: "Launch AI Recruiter Double (Chat)", category: "Actions", icon: Sparkles, action: () => { onOpenAdvisor(); onClose(); } },
    { id: "resume", label: "View/Print Premium HTML Resume", category: "Actions", icon: FileText, action: () => { onViewResume(); onClose(); } },
    {
      id: "copy-email",
      label: "Copy Email (editorexplore78@gmail.com)",
      category: "Utility",
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText("editorexplore78@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    },
    { id: "github", label: "Open GitHub Profile", category: "Links", icon: Link2, action: () => { window.open("https://github.com", "_blank"); onClose(); } },
    { id: "linkedin", label: "Open LinkedIn Profile", category: "Links", icon: Link2, action: () => { window.open("https://linkedin.com", "_blank"); onClose(); } }
  ];

  const filteredActions = actions.filter(action =>
    action.label.toLowerCase().includes(search.toLowerCase()) ||
    action.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="cmd-palette-container" className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-start justify-center pt-[15vh] px-4">
      <div 
        id="cmd-palette-box"
        className="w-full max-w-2xl glass-panel rounded-2xl overflow-hidden shadow-2xl border-white/10 flex flex-col max-h-[60vh] animate-float-slow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-4 border-b border-white/15 bg-white/5">
          <Search className="text-cyan-400 w-5 h-5 mr-3 shrink-0" />
          <input
            id="cmd-palette-input"
            type="text"
            className="w-full bg-transparent border-none outline-none text-white placeholder-slate-400 text-lg font-sans"
            placeholder="Type a command or search section..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
          <button 
            id="cmd-palette-close-btn"
            onClick={onClose}
            className="text-slate-400 hover:text-white px-2 py-1 text-xs border border-white/10 rounded bg-white/5 transition"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div id="cmd-palette-results" className="overflow-y-auto py-2 max-h-[40vh] divide-y divide-white/5">
          {filteredActions.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-sm">
              No results found for "<span className="text-cyan-400">{search}</span>"
            </div>
          ) : (
            Object.entries(
              filteredActions.reduce((acc, curr) => {
                acc[curr.category] = acc[curr.category] || [];
                acc[curr.category].push(curr);
                return acc;
              }, {} as Record<string, typeof actions>)
            ).map(([category, items]) => (
              <div key={category} className="p-2">
                <div className="text-xs font-mono font-bold tracking-wider text-purple-400 uppercase px-3 py-1.5">
                  {category}
                </div>
                <div className="space-y-1">
                  {items.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        id={`cmd-action-${item.id}`}
                        key={item.id}
                        onClick={item.action}
                        className="w-full text-left flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-cyan-500/10 group transition duration-150 font-sans"
                      >
                        <div className="flex items-center space-x-3">
                          <IconComp className="text-slate-400 group-hover:text-cyan-400 w-4 h-4 transition-colors" />
                          <span className="text-slate-200 group-hover:text-white text-sm font-medium">
                            {item.label}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {item.id === "copy-email" && copied && (
                            <span className="text-xs text-green-400 flex items-center">
                              <Check className="w-3.5 h-3.5 mr-1" /> Copied
                            </span>
                          )}
                          <span className="opacity-0 group-hover:opacity-100 text-[10px] text-cyan-400 font-mono flex items-center transition-opacity bg-cyan-500/10 border border-cyan-500/20 px-1.5 py-0.5 rounded">
                            <CornerDownLeft className="w-3 h-3 mr-1" /> Action
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-4 py-3 bg-white/5 border-t border-white/10 text-xs text-slate-400 font-sans">
          <div>
            Search and navigate instantly
          </div>
          <div className="flex items-center space-x-3">
            <span className="flex items-center">
              <span className="bg-slate-800 border border-slate-700 text-[10px] px-1 rounded mr-1">↑↓</span> Move
            </span>
            <span className="flex items-center">
              <span className="bg-slate-800 border border-slate-700 text-[10px] px-1 rounded mr-1">Enter</span> Select
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

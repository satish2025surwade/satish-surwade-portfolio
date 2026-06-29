import { useState } from "react";
import { BookOpen, Calendar, Clock, X, Check, Eye } from "lucide-react";
import { blogPostsData } from "../data";
import { BlogPost } from "../types";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section 
      id="blog" 
      className="py-24 bg-[#050816] border-t border-white/5 relative overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section title */}
        <div className="text-center space-y-3">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase font-bold">06 // Technical Insights</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white">SEO Articles & Tech Blogs</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto font-sans leading-relaxed">
            I write short, educational articles on mathematical machine learning foundations, NLP algorithms, and clean Pandas workflows.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div id="blog-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPostsData.map((post) => (
            <div
              id={`blog-card-${post.slug}`}
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group p-5 bg-slate-900/40 hover:bg-slate-900/70 border border-white/5 hover:border-purple-400/20 rounded-2xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden cursor-pointer h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span className="text-purple-400 uppercase font-bold bg-purple-400/5 px-2 py-0.5 rounded border border-purple-400/10">
                    {post.category}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors font-display line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed text-justify line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 flex justify-between items-center text-[10px] font-mono">
                <span className="text-slate-500">{post.date}</span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center">
                  Read Article →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* DETAILED BLOG MODAL POPUP */}
      {/* ========================================================================= */}
      {selectedPost && (
        <div id="blog-reader-overlay" className="fixed inset-0 bg-black/85 backdrop-blur-md z-[9999] flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="w-full max-w-3xl bg-slate-950 text-white rounded-2xl shadow-2xl overflow-hidden border border-white/10 flex flex-col my-8 max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 bg-slate-900 flex items-center justify-between border-b border-white/5 shrink-0">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Reader Mode</span>
              <button
                id="blog-reader-close-btn"
                onClick={() => setSelectedPost(null)}
                className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Blog Content */}
            <div id="blog-reader-content" className="overflow-y-auto p-6 md:p-10 space-y-6">
              
              {/* Blog Title details */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-purple-400 bg-purple-400/5 px-2.5 py-1 rounded border border-purple-400/10 uppercase tracking-widest font-bold">
                  {selectedPost.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-display leading-tight">{selectedPost.title}</h3>
                
                <div className="flex items-center space-x-4 text-xs font-mono text-slate-500 pt-1">
                  <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {selectedPost.date}</span>
                  <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {selectedPost.readTime}</span>
                </div>
              </div>

              {/* Core summary */}
              <div className="p-4 bg-white/5 border-l-4 border-cyan-400 rounded-r-xl text-xs text-slate-300 italic leading-relaxed text-justify">
                {selectedPost.summary}
              </div>

              {/* Main Content (HTML rendered elegantly) */}
              <div className="prose prose-invert max-w-none text-slate-300 text-xs md:text-sm leading-relaxed space-y-4 text-justify font-sans">
                {selectedPost.content.split("\n\n").map((para, i) => {
                  if (para.startsWith("###")) {
                    return (
                      <h4 key={i} className="text-sm md:text-base font-bold font-display text-white pt-4">
                        {para.replace("###", "").trim()}
                      </h4>
                    );
                  }
                  if (para.startsWith("1.") || para.startsWith("-")) {
                    return (
                      <ul key={i} className="list-disc pl-5 space-y-2 text-slate-400 font-mono text-xs">
                        {para.split("\n").map((li, idx) => (
                          <li key={idx}>{li.replace(/^[-\d.]\s*/, "").trim()}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (para.startsWith("`")) {
                    return (
                      <pre key={i} className="p-4 bg-slate-900 rounded-xl border border-white/5 overflow-x-auto text-xs text-cyan-400 font-mono">
                        <code>{para.replace(/`/g, "").trim()}</code>
                      </pre>
                    );
                  }
                  return <p key={i}>{para}</p>;
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/5">
                {selectedPost.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded">
                    #{tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-slate-900 border-t border-white/5 shrink-0">
              <button
                id="blog-reader-close-footer-btn"
                onClick={() => setSelectedPost(null)}
                className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs transition"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

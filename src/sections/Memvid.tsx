import { useEffect, useRef, useState } from 'react';
import { Database, Search, Brain, Zap, FileText, MessageSquare } from 'lucide-react';

const Memvid = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation cycle for the vector database visualization
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: 'Write Entry',
      description: 'Your diary entry is captured',
      icon: FileText,
      color: '#00ff41',
    },
    {
      title: 'Vectorize',
      description: 'Text converted to embeddings',
      icon: Brain,
      color: '#ffbd2e',
    },
    {
      title: 'Store',
      description: 'Compressed in video frames',
      icon: Database,
      color: '#ff5f56',
    },
    {
      title: 'Query',
      description: 'Semantic search retrieval',
      icon: Search,
      color: '#27c93f',
    },
  ];

  return (
    <section id="memvid" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#333] bg-[#1a1a1a] text-[10px] tracking-widest text-[#00ff41] mb-6">
            <Database className="w-3 h-3" />
            VECTOR DATABASE TECHNOLOGY
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What is <span className="text-[#00ff41] terminal-glow">Memvid</span>?
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto text-sm sm:text-base">
            A revolutionary approach to memory storage. Your thoughts compressed into video frames,
            searchable by meaning, not just keywords.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Animated Visualization */}
          <div className="relative">
            <div className="border border-[#333] bg-[#0d0d0d] p-8 relative overflow-hidden">
              {/* Terminal header */}
              <div className="absolute top-0 left-0 right-0 bg-[#1a1a1a] px-3 py-2 flex items-center gap-2 border-b border-[#333]">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-[#666] text-[9px] flex-1 text-center">memvid — vector-db — visualization</span>
              </div>

              <div className="pt-8">
                {/* Flow Visualization */}
                <div className="flex flex-col items-center space-y-4">
                  {/* Steps with connecting lines */}
                  <div className="flex items-center w-full max-w-md justify-center">
                    {steps.map((step, index) => {
                      const Icon = step.icon;
                      const isActive = activeStep === index;
                      const isPast = activeStep > index;

                      return (
                        <div key={index} className="flex items-center">
                          {/* Step container */}
                          <div className="flex flex-col items-center">
                            {/* Icon container */}
                            <div
                              className={`w-10 h-10 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                                isActive
                                  ? 'border-[#00ff41] bg-[#00ff41]/20 scale-110'
                                  : isPast
                                    ? 'border-[#00ff41]/50 bg-[#00ff41]/10'
                                    : 'border-[#333] bg-[#1a1a1a]'
                              }`}
                            >
                              <Icon
                                className={`w-5 h-5 transition-colors duration-300 ${
                                  isActive ? 'text-[#00ff41]' : isPast ? 'text-[#00ff41]/70' : 'text-[#666]'
                                }`}
                              />
                            </div>

                            {/* Label */}
                            <span className={`text-[9px] mt-2 transition-colors duration-300 whitespace-nowrap ${
                              isActive ? 'text-[#00ff41]' : 'text-[#666]'
                            }`}>
                              {step.title}
                            </span>
                          </div>

                          {/* Connection line between icons */}
                          {index < steps.length - 1 && (
                            <div className="w-12 sm:w-16 h-[2px] mx-1 bg-[#333] relative overflow-hidden">
                              <div
                                className="absolute top-0 left-0 h-full bg-[#00ff41] transition-all duration-500"
                                style={{
                                  width: isPast ? '100%' : isActive ? '100%' : '0%',
                                  boxShadow: isPast || isActive ? '0 0 10px rgba(0,255,65,0.5)' : 'none'
                                }}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Active step description */}
                  <div className="mt-8 text-center h-24">
                    <div className="border border-[#333] bg-[#1a1a1a] p-4 inline-block min-w-[280px]">
                      <div className="text-[#00ff41] text-sm font-mono mb-1">
                        {`> ${steps[activeStep].title.toUpperCase()}`}
                      </div>
                      <div className="text-[#888] text-xs">
                        {steps[activeStep].description}
                      </div>
                      <div className="mt-2 flex justify-center gap-1">
                        {steps.map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                              i === activeStep ? 'bg-[#00ff41]' : 'bg-[#333]'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Vector representation animation - Enhanced */}
                  <div className="w-full mt-4 border border-[#333] bg-[#0a0a0a] overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#333] bg-[#111]">
                      <span className="text-[9px] text-[#666] font-mono">EMBEDDING SPACE</span>
                      <span className="text-[9px] text-[#00ff41] font-mono animate-pulse">● LIVE</span>
                    </div>
                    <div className="h-44 relative p-4">
                      {/* Grid background */}
                      <div className="absolute inset-0 opacity-20">
                        <svg width="100%" height="100%">
                          <defs>
                            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00ff41" strokeWidth="0.5" opacity="0.3"/>
                            </pattern>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                      </div>

                      {/* Cluster labels */}
                      <div className="absolute top-2 left-3 text-[8px] text-[#ff5f56] font-mono opacity-70">EMOTIONS</div>
                      <div className="absolute top-2 right-3 text-[8px] text-[#27c93f] font-mono opacity-70">WORK</div>
                      <div className="absolute bottom-2 left-3 text-[8px] text-[#ffbd2e] font-mono opacity-70">MEMORIES</div>
                      <div className="absolute bottom-2 right-3 text-[8px] text-[#00ff41] font-mono opacity-70">IDEAS</div>

                      {/* Connection lines SVG */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        {/* Emotion cluster connections */}
                        <line x1="15%" y1="25%" x2="22%" y2="35%" stroke="#ff5f56" strokeWidth="1" opacity="0.4" />
                        <line x1="22%" y1="35%" x2="18%" y2="42%" stroke="#ff5f56" strokeWidth="1" opacity="0.4" />
                        <line x1="15%" y1="25%" x2="18%" y2="42%" stroke="#ff5f56" strokeWidth="1" opacity="0.3" />

                        {/* Work cluster connections */}
                        <line x1="78%" y1="22%" x2="85%" y2="32%" stroke="#27c93f" strokeWidth="1" opacity="0.4" />
                        <line x1="85%" y1="32%" x2="75%" y2="38%" stroke="#27c93f" strokeWidth="1" opacity="0.4" />
                        <line x1="78%" y1="22%" x2="75%" y2="38%" stroke="#27c93f" strokeWidth="1" opacity="0.3" />

                        {/* Memory cluster connections */}
                        <line x1="20%" y1="68%" x2="28%" y2="75%" stroke="#ffbd2e" strokeWidth="1" opacity="0.4" />
                        <line x1="28%" y1="75%" x2="15%" y2="82%" stroke="#ffbd2e" strokeWidth="1" opacity="0.4" />

                        {/* Ideas cluster connections */}
                        <line x1="80%" y1="65%" x2="72%" y2="75%" stroke="#00ff41" strokeWidth="1" opacity="0.4" />
                        <line x1="72%" y1="75%" x2="82%" y2="82%" stroke="#00ff41" strokeWidth="1" opacity="0.4" />

                        {/* Cross-cluster query line - animated */}
                        <line
                          x1="50%" y1="50%" x2="22%" y2="35%"
                          stroke="#00ff41"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          opacity={activeStep === 3 ? 0.8 : 0}
                          style={{ transition: 'opacity 0.5s' }}
                        />
                        <line
                          x1="50%" y1="50%" x2="28%" y2="75%"
                          stroke="#00ff41"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          opacity={activeStep === 3 ? 0.6 : 0}
                          style={{ transition: 'opacity 0.5s' }}
                        />
                      </svg>

                      {/* Emotion cluster - red */}
                      <div className={`absolute w-3 h-3 rounded-full bg-[#ff5f56] transition-all duration-700`}
                        style={{ left: '15%', top: '25%', boxShadow: '0 0 10px #ff5f56', opacity: activeStep >= 2 ? 1 : 0.3 }} />
                      <div className={`absolute w-2.5 h-2.5 rounded-full bg-[#ff5f56] transition-all duration-700`}
                        style={{ left: '22%', top: '35%', boxShadow: '0 0 8px #ff5f56', opacity: activeStep >= 2 ? 0.8 : 0.2 }} />
                      <div className={`absolute w-2 h-2 rounded-full bg-[#ff5f56] transition-all duration-700`}
                        style={{ left: '18%', top: '42%', boxShadow: '0 0 6px #ff5f56', opacity: activeStep >= 2 ? 0.6 : 0.2 }} />

                      {/* Work cluster - green */}
                      <div className={`absolute w-3 h-3 rounded-full bg-[#27c93f] transition-all duration-700`}
                        style={{ left: '78%', top: '22%', boxShadow: '0 0 10px #27c93f', opacity: activeStep >= 2 ? 1 : 0.3 }} />
                      <div className={`absolute w-2.5 h-2.5 rounded-full bg-[#27c93f] transition-all duration-700`}
                        style={{ left: '85%', top: '32%', boxShadow: '0 0 8px #27c93f', opacity: activeStep >= 2 ? 0.8 : 0.2 }} />
                      <div className={`absolute w-2 h-2 rounded-full bg-[#27c93f] transition-all duration-700`}
                        style={{ left: '75%', top: '38%', boxShadow: '0 0 6px #27c93f', opacity: activeStep >= 2 ? 0.6 : 0.2 }} />

                      {/* Memory cluster - yellow */}
                      <div className={`absolute w-3 h-3 rounded-full bg-[#ffbd2e] transition-all duration-700`}
                        style={{ left: '20%', top: '68%', boxShadow: '0 0 10px #ffbd2e', opacity: activeStep >= 2 ? 1 : 0.3 }} />
                      <div className={`absolute w-2.5 h-2.5 rounded-full bg-[#ffbd2e] transition-all duration-700`}
                        style={{ left: '28%', top: '75%', boxShadow: '0 0 8px #ffbd2e', opacity: activeStep >= 2 ? 0.8 : 0.2 }} />
                      <div className={`absolute w-2 h-2 rounded-full bg-[#ffbd2e] transition-all duration-700`}
                        style={{ left: '15%', top: '82%', boxShadow: '0 0 6px #ffbd2e', opacity: activeStep >= 2 ? 0.6 : 0.2 }} />

                      {/* Ideas cluster - bright green */}
                      <div className={`absolute w-3 h-3 rounded-full bg-[#00ff41] transition-all duration-700`}
                        style={{ left: '80%', top: '65%', boxShadow: '0 0 10px #00ff41', opacity: activeStep >= 2 ? 1 : 0.3 }} />
                      <div className={`absolute w-2.5 h-2.5 rounded-full bg-[#00ff41] transition-all duration-700`}
                        style={{ left: '72%', top: '75%', boxShadow: '0 0 8px #00ff41', opacity: activeStep >= 2 ? 0.8 : 0.2 }} />
                      <div className={`absolute w-2 h-2 rounded-full bg-[#00ff41] transition-all duration-700`}
                        style={{ left: '82%', top: '82%', boxShadow: '0 0 6px #00ff41', opacity: activeStep >= 2 ? 0.6 : 0.2 }} />

                      {/* Query point - center, appears on search step */}
                      <div
                        className={`absolute w-4 h-4 rounded-full border-2 border-[#00ff41] bg-[#0a0a0a] transition-all duration-500 flex items-center justify-center`}
                        style={{
                          left: '48%',
                          top: '46%',
                          transform: activeStep === 3 ? 'scale(1)' : 'scale(0)',
                          boxShadow: activeStep === 3 ? '0 0 20px #00ff41, 0 0 40px #00ff41' : 'none'
                        }}
                      >
                        <Search className="w-2 h-2 text-[#00ff41]" />
                      </div>

                      {/* Floating text labels that appear during vectorization */}
                      <div
                        className="absolute text-[7px] font-mono text-[#ff5f56] transition-all duration-700"
                        style={{
                          left: '8%',
                          top: '30%',
                          opacity: activeStep === 1 ? 1 : 0,
                          transform: activeStep === 1 ? 'translateY(0)' : 'translateY(-10px)'
                        }}
                      >
                        [0.82, -0.14, ...]
                      </div>
                      <div
                        className="absolute text-[7px] font-mono text-[#27c93f] transition-all duration-700"
                        style={{
                          left: '70%',
                          top: '28%',
                          opacity: activeStep === 1 ? 1 : 0,
                          transform: activeStep === 1 ? 'translateY(0)' : 'translateY(-10px)'
                        }}
                      >
                        [0.31, 0.67, ...]
                      </div>

                      {/* New entry animation */}
                      {activeStep === 0 && (
                        <div
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] font-mono text-[#00ff41] border border-[#00ff41] px-2 py-1 bg-[#0a0a0a] animate-pulse"
                        >
                          "Today I felt..."
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Explanation */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-mono text-xl text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#00ff41]" />
                Why Memvid for Reminor?
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Traditional databases store your diary entries as plain text. When you search,
                they look for exact keyword matches. But memories don't work that way.
              </p>
              <p className="text-[#888] text-sm leading-relaxed">
                <span className="text-[#00ff41]">Memvid</span> transforms your entries into
                mathematical vectors—numerical representations of meaning. Similar thoughts
                cluster together in this "embedding space", making semantic search possible.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid gap-4">
              <div className="border border-[#333] bg-[#0d0d0d] p-4 hover:border-[#00ff41]/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 border border-[#00ff41] flex items-center justify-center flex-shrink-0">
                    <Database className="w-4 h-4 text-[#00ff41]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-mono mb-1">Video Compression</h4>
                    <p className="text-[#666] text-xs">
                      Vectors stored as video frames. Years of memories in megabytes, not gigabytes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[#333] bg-[#0d0d0d] p-4 hover:border-[#00ff41]/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 border border-[#00ff41] flex items-center justify-center flex-shrink-0">
                    <Search className="w-4 h-4 text-[#00ff41]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-mono mb-1">Semantic Search</h4>
                    <p className="text-[#666] text-xs">
                      Ask "when did I feel anxious about work?" and find entries about job stress,
                      deadlines, and career worries—without those exact words.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[#333] bg-[#0d0d0d] p-4 hover:border-[#00ff41]/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 border border-[#00ff41] flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-[#00ff41]" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-mono mb-1">Chat with Your Past</h4>
                    <p className="text-[#666] text-xs">
                      Have conversations with your memories. The AI retrieves relevant entries
                      to answer questions about your own life.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Code snippet */}
            <div className="border border-[#333] bg-[#0d0d0d] overflow-hidden">
              <div className="bg-[#1a1a1a] px-3 py-1.5 border-b border-[#333]">
                <span className="text-[9px] text-[#666]">example query</span>
              </div>
              <div className="p-4 font-mono text-xs">
                <div className="text-[#666]">
                  <span className="text-[#00ff41]">$</span> reminor search "moments of clarity"
                </div>
                <div className="mt-2 text-[#888]">
                  <span className="text-[#ffbd2e]">Found 12 semantically similar entries:</span>
                </div>
                <div className="mt-1 text-[#666] text-[10px]">
                  → 2024-03-15: "Today I finally understood..."<br/>
                  → 2024-01-22: "The realization hit me..."<br/>
                  → 2023-11-08: "Everything clicked into place..."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memvid;

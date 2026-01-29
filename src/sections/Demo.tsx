import { useEffect, useRef, useState } from 'react';
import { Calendar, MessageSquare, BarChart3, Settings, FileText, Search, Bot } from 'lucide-react';

const tabs = [
  { id: 'dashboard', label: '[1] DASHBOARD', icon: BarChart3 },
  { id: 'diario', label: '[2] DIARIO', icon: FileText },
  { id: 'archivio', label: '[3] ARCHIVIO', icon: Search },
  { id: 'chat', label: '[4] CHAT', icon: Bot },
  { id: 'settings', label: '[5] SETTINGS', icon: Settings },
];

const Demo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState('diario');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-4">
            <div className="text-[#00ff41] mb-4">SYSTEM OVERVIEW</div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#333] p-3">
                <div className="text-xs text-[#666]">TOTAL ENTRIES</div>
                <div className="text-2xl text-[#00ff41] font-ascii">1,247</div>
              </div>
              <div className="border border-[#333] p-3">
                <div className="text-xs text-[#666]">STREAK</div>
                <div className="text-2xl text-[#00ff41] font-ascii">42 days</div>
              </div>
              <div className="border border-[#333] p-3">
                <div className="text-xs text-[#666]">WORDS WRITTEN</div>
                <div className="text-2xl text-[#00ff41] font-ascii">89,432</div>
              </div>
              <div className="border border-[#333] p-3">
                <div className="text-xs text-[#666]">MOOD AVG</div>
                <div className="text-2xl text-[#00ff41] font-ascii">7.3/10</div>
              </div>
            </div>
          </div>
        );
      case 'diario':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#333] pb-2">
              <span className="text-[#00ff41]">January 15, 2025</span>
              <span className="text-xs text-[#666]">08:42:17</span>
            </div>
            <div className="text-[#888] text-sm leading-relaxed space-y-2">
              <p>Finally started learning Rust today. The borrow checker is both fascinating and frustrating at the same time. Spent three hours fighting with lifetimes before realizing I was overcomplicating everything.</p>
              <p className="text-[#666]">---</p>
              <p>The satisfaction when the code finally compiled was worth it though. There's something deeply rewarding about understanding memory management at this level. It makes me appreciate how much high-level languages abstract away.</p>
              <p>Going to build a small CLI tool this weekend to practice. Maybe a todo app, or perhaps something more interesting like a markdown parser.</p>
            </div>
            <div className="flex gap-2 mt-4">
              <span className="text-xs bg-[#1a1a1a] px-2 py-1 text-[#666]">#coding</span>
              <span className="text-xs bg-[#1a1a1a] px-2 py-1 text-[#666]">#rust</span>
              <span className="text-xs bg-[#1a1a1a] px-2 py-1 text-[#666]">#learning</span>
            </div>
          </div>
        );
      case 'archivio':
        return (
          <div className="space-y-4">
            <div className="text-[#00ff41] mb-4">SEMANTIC SEARCH</div>
            <div className="border border-[#333] p-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-[#666]" />
              <span className="text-[#888]">Search your thoughts...</span>
            </div>
            <div className="space-y-2 mt-4">
              {[
                { date: '2025-01-15', preview: 'Finally started learning Rust today...' },
                { date: '2025-01-12', preview: 'Went hiking in the mountains...' },
                { date: '2025-01-08', preview: 'Thinking about starting a new project...' },
              ].map((entry, i) => (
                <div key={i} className="border border-[#333] p-3 hover:border-[#00ff41] cursor-pointer transition-colors">
                  <div className="text-xs text-[#666] mb-1">{entry.date}</div>
                  <div className="text-sm text-[#888]">{entry.preview}</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'chat':
        return (
          <div className="space-y-4">
            <div className="text-[#00ff41] mb-4">AI CONVERSATION</div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-[#00ff41]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00ff41] text-xs">U</span>
                </div>
                <div className="text-[#888] text-sm">What did I write about last week?</div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-[#1a1a1a] flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-[#00ff41]" />
                </div>
                <div className="text-[#888] text-sm">
                  <p>Last week you wrote about:</p>
                  <ul className="list-disc list-inside mt-1 text-[#666]">
                    <li>Starting to learn Rust programming</li>
                    <li>A hiking trip in the mountains</li>
                    <li>Ideas for a new side project</li>
                  </ul>
                  <p className="mt-2">Would you like me to search for specific entries?</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-[#00ff41]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00ff41] text-xs">U</span>
                </div>
                <div className="text-[#666] text-sm">Show me the Rust entry...</div>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="space-y-4">
            <div className="text-[#00ff41] mb-4">AI CONFIGURATION</div>
            <div className="space-y-2">
              {[
                { key: 'LLM_PROVIDER', value: 'anthropic' },
                { key: 'MODEL', value: 'claude-3-sonnet' },
                { key: 'API_KEY', value: '••••••••••••' },
              ].map((setting, i) => (
                <div key={i} className="flex justify-between border-b border-[#333] py-2">
                  <span className="text-[#666]">{setting.key}</span>
                  <span className="text-[#00ff41]">{setting.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#333]">
              <div className="text-xs text-[#666] mb-2">AVAILABLE PROVIDERS (via LiteLLM)</div>
              <div className="flex flex-wrap gap-2">
                {['OpenAI', 'Anthropic', 'Groq', 'Gemini', 'Mistral', 'Ollama', 'DeepSeek'].map((p, i) => (
                  <span key={i} className={`text-[10px] px-2 py-1 border ${i === 1 ? 'border-[#00ff41] text-[#00ff41]' : 'border-[#333] text-[#666]'}`}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="demo" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 matrix-bg" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience the <span className="text-[#00ff41] terminal-glow">Interface</span>
          </h2>
          <p className="text-[#888] max-w-2xl mx-auto">
            A keyboard-first, distraction-free environment designed for deep reflection and personal growth.
          </p>
        </div>

        {/* Terminal Demo */}
        <div className="reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="terminal-window rounded-sm overflow-hidden shadow-2xl shadow-[#00ff41]/5">
            {/* OS Header */}
            <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-[#333]">
              <div className="flex items-center gap-4">
                <span className="text-xs text-[#00ff41] font-bold">REMINOR OS v2.4</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#666]">
                <span>MEM: 1024KB OK</span>
                <span>24 OTT 1989</span>
                <span>14:32:05</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-[#333] bg-[#0d0d0d] overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-xs transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#1a1a1a] text-[#00ff41] border-t-2 border-[#00ff41]'
                      : 'text-[#666] hover:text-[#888]'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-[#0d0d0d] p-6 min-h-[400px] scanlines">
              {renderContent()}
            </div>

            {/* Status Bar */}
            <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between text-xs border-t border-[#333]">
              <div className="flex items-center gap-4 text-[#666]">
                <span>↑↓ NAVIGA</span>
                <span>[ENTER] SELEZIONA</span>
                <span>[ESC] ESCI</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#666]">DISK: 82% FREE</span>
                <span className="text-[#00ff41]">SYSTEM READY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12 reveal" style={{ transitionDelay: '0.4s' }}>
          {[
            { icon: MessageSquare, title: 'AI Chat', desc: 'Talk with your past self' },
            { icon: Calendar, title: 'Calendar View', desc: 'Visual timeline of entries' },
            { icon: BarChart3, title: 'Analytics', desc: 'Mood & writing patterns' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 border border-[#333] bg-[#0d0d0d]">
              <div className="w-10 h-10 border border-[#00ff41] flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#00ff41]" />
              </div>
              <div>
                <div className="text-white font-mono">{item.title}</div>
                <div className="text-xs text-[#666]">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demo;

import { useEffect, useRef, useState } from 'react';
import { Terminal, Play, Download } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Open-source, self-hosted personal diary app.';
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

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

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center py-12 pb-16 px-4 sm:px-6 lg:px-8 matrix-bg grid-pattern">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="reveal">
              <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Your diary,</span>
                <br />
                <span className="text-[#00ff41] terminal-glow">your mind,</span>
                <br />
                <span className="text-white">your PC.</span>
              </h1>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.2s' }}>
              <p className="font-mono text-[#00ff41] text-lg">
                <span className="text-[#666]">$</span> {typedText}
                <span className="terminal-cursor" />
              </p>
              <p className="text-[#888] mt-4 text-sm leading-relaxed max-w-lg">
                Retro, minimalist, high-contrast B&W aesthetic for the keyboard-focused mind. 
                Your thoughts, encrypted and stored locally. No cloud. No tracking. Just you and your memories.
              </p>
            </div>

            <div className="reveal flex flex-wrap gap-4" style={{ transitionDelay: '0.4s' }}>
              <a
                href="https://github.com/cristal-orion/Reminor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal-primary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                GET_STARTED.SH
              </a>
              <a
                href="https://app.reminor.it"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                VIEW_DEMO
              </a>
            </div>

            <div className="reveal" style={{ transitionDelay: '0.6s' }}>
              <div className="flex items-center gap-4 text-xs text-[#666]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse" />
                  v2.4 STABLE
                </span>
                <span>|</span>
                <span>MIT LICENSE</span>
                <span>|</span>
                <span>DOCKER READY</span>
              </div>
            </div>
          </div>

          {/* Right Content - Terminal Preview - Migliorato */}
          <div className="reveal" style={{ transitionDelay: '0.3s' }} ref={terminalRef}>
            <div className="border border-[#333] bg-[#0d0d0d] overflow-hidden shadow-2xl shadow-[#00ff41]/10">
              {/* Terminal Header */}
              <div className="bg-[#1a1a1a] px-3 py-2 flex items-center gap-2 border-b border-[#333]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-[#666] text-[10px]">reminor — bash — 80x24</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="bg-[#0d0d0d] p-4 font-mono text-xs sm:text-sm scanlines">
                {/* System Status */}
                <div className="mb-3">
                  <div className="text-[#666]">
                    <span className="text-[#00ff41]">$</span> systemctl status reminor
                  </div>
                  <div className="text-[#27c93f] mt-1">● reminor.service - Personal Diary Daemon</div>
                  <div className="text-[#888] pl-2">Loaded: loaded (/etc/systemd/system/reminor.service)</div>
                  <div className="text-[#888] pl-2">Active: <span className="text-[#27c93f]">active (running)</span> since Mon 2025-01-27</div>
                  <div className="text-[#888] pl-2">Memory: 128.0M</div>
                </div>

                {/* Menu Command */}
                <div className="text-[#666] mt-3">
                  <span className="text-[#00ff41]">$</span> reminor --menu
                </div>

                {/* Menu Box */}
                <div className="border border-[#333] bg-[#0a0a0a] mt-2">
                  {/* Menu Header */}
                  <div className="bg-[#1a1a1a] px-3 py-1.5 border-b border-[#333]">
                    <span className="text-[#00ff41] text-xs">[ MAIN MENU ]</span>
                  </div>
                  {/* Menu Items */}
                  <div className="p-2 space-y-0.5">
                    {[
                      '[1] NUOVA PAGINA',
                      '[2] CALENDARIO', 
                      '[3] RICERCA',
                      '[4] CHAT PENSIERI',
                      '[5] EMOZIONI',
                      '[6] STATISTICHE',
                      '[7] IMPOSTAZIONI',
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 px-2 py-1 hover:bg-[#1a1a1a] cursor-pointer transition-colors"
                      >
                        <Terminal className="w-3 h-3 text-[#00ff41] flex-shrink-0" />
                        <span className={i === 0 ? 'text-[#00ff41] text-xs' : 'text-[#888] text-xs'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prompt */}
                <div className="mt-3 text-[#666]">
                  <span className="text-[#00ff41]">$</span> <span className="terminal-cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

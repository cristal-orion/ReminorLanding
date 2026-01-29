import { useEffect, useRef, useState } from 'react';
import { Copy, Check, Download, ExternalLink } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const dockerCommand = 'docker pull cristalorion/reminor:latest';

  const handleCopy = () => {
    navigator.clipboard.writeText(dockerCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff41]/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        <div className="reveal text-center space-y-8">
          {/* Main Heading */}
          <h2 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-white">Own your thoughts.</span>
            <br />
            <span className="text-[#00ff41] terminal-glow">Forever.</span>
          </h2>

          <p className="text-[#888] text-lg max-w-2xl mx-auto leading-relaxed">
            Reminor is open-source, privacy-first, and built for the long term. 
            Start your self-hosted journey today.
          </p>

          {/* Docker Command */}
          <div className="max-w-2xl mx-auto">
            <div className="border border-[#333] bg-[#0d0d0d] overflow-hidden">
              <div className="bg-[#1a1a1a] px-4 py-2 flex items-center justify-between border-b border-[#333]">
                <span className="text-xs text-[#666]">terminal — bash</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                </div>
              </div>
              <div className="p-4 flex items-center justify-between gap-4">
                <code className="font-mono text-sm text-[#00ff41] break-all">
                  <span className="text-[#666]">$</span> {dockerCommand}
                </code>
                <button
                  onClick={handleCopy}
                  className="flex-shrink-0 p-2 border border-[#333] hover:border-[#00ff41] hover:bg-[#00ff41]/5 transition-all"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#00ff41]" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#666]" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/cristal-orion/Reminor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terminal-primary flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              DOCKER PULL REMINOR
            </a>
            <a
              href="https://app.reminor.it"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-terminal flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              TRY DEMO
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="https://github.com/cristal-orion/Reminor#readme" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#00ff41] transition-colors"
            >
              Documentation →
            </a>
            <a 
              href="https://github.com/cristal-orion/Reminor/issues" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#00ff41] transition-colors"
            >
              GitHub Issues →
            </a>
            <a 
              href="https://github.com/cristal-orion/Reminor/blob/main/CHANGELOG.md" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666] hover:text-[#00ff41] transition-colors"
            >
              Changelog →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

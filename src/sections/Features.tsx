import { useEffect, useRef } from 'react';
import { Cpu, Container, Database, Search, Heart, Keyboard } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'API Agnostic',
    description: 'Use any LLM provider. Bring your own intelligence without being locked into a single ecosystem. OpenAI, Ollama, or your custom endpoint.',
  },
  {
    icon: Container,
    title: 'Docker Ready',
    description: 'Self-hosted architecture. Deploy in one command with Docker and maintain full control. Your data never leaves your machine.',
  },
  {
    icon: Database,
    title: 'Memvid Sync',
    description: 'Safe & Downloadable memory storage. Your personal data stays localized and encrypted. Export anytime, anywhere.',
  },
  {
    icon: Search,
    title: 'Semantic Search',
    description: 'Find patterns in thoughts effortlessly. Talk to your past self using natural language queries. AI-powered retrieval.',
  },
  {
    icon: Heart,
    title: 'Emotion Tracking',
    description: 'Monitor moods over time. Visualizing the psyche through data-driven sentiment analysis. Understand yourself better.',
  },
  {
    icon: Keyboard,
    title: 'No-Mouse UI',
    description: 'Zero distraction interface. A keyboard-driven flow designed for deep work and reflection. Vim-like navigation.',
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#333] bg-[#1a1a1a] mb-6">
            <span className="w-2 h-2 bg-[#00ff41] animate-pulse" />
            <span className="text-xs tracking-[0.3em] text-[#666]">SYSTEM FEATURES</span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Optimized for <span className="text-[#00ff41] terminal-glow">Privacy</span> & Flow
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="reveal group relative"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="border border-[#333] bg-[#0d0d0d] p-6 h-full transition-all duration-500 hover:border-[#00ff41] hover:shadow-[0_0_30px_rgba(0,255,65,0.1)]">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#333] group-hover:border-[#00ff41] transition-colors" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#333] group-hover:border-[#00ff41] transition-colors" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#333] group-hover:border-[#00ff41] transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#333] group-hover:border-[#00ff41] transition-colors" />

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 border border-[#333] flex items-center justify-center group-hover:border-[#00ff41] group-hover:bg-[#00ff41]/5 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-[#666] group-hover:text-[#00ff41] transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-mono text-lg font-bold text-white mb-3 group-hover:text-[#00ff41] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#888] leading-relaxed">
                  {feature.description}
                </p>

                {/* Index Number */}
                <div className="absolute top-4 right-4 text-xs text-[#333] font-mono">
                  [{String(index + 1).padStart(2, '0')}]
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 reveal" style={{ transitionDelay: '0.6s' }}>
          <div className="border border-[#333] bg-[#0d0d0d] p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '2.4K+', label: 'GITHUB STARS' },
                { value: '180+', label: 'FORKS' },
                { value: '100%', label: 'OPEN SOURCE' },
                { value: '0', label: 'TRACKING' },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="font-ascii text-3xl sm:text-4xl text-[#00ff41] terminal-glow">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-widest text-[#666]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Are my diary entries secure?',
    answer:
      'Yes. Reminor is fully self-hosted—your data never leaves your machine. Entries are stored locally with encrypted passwords, and you have full control over backups. No cloud, no third-party access.',
  },
  {
    question: 'Can I use it completely offline?',
    answer:
      'Absolutely. Reminor works offline with local LLMs like Ollama. You only need internet if you choose to use cloud AI providers (OpenAI, Anthropic, etc.). The diary itself requires zero internet connection.',
  },
  {
    question: 'Which AI providers are supported?',
    answer:
      'Thanks to LiteLLM, Reminor supports virtually any LLM provider: OpenAI, Anthropic Claude, Google Gemini, Groq, Mistral, DeepSeek, Azure OpenAI, AWS Bedrock, Ollama, and any OpenAI-compatible API. Just add your API key in settings.',
  },
  {
    question: 'How much storage space do I need?',
    answer:
      'Very little. Memvid compresses your memories into video frames—years of daily entries fit in megabytes, not gigabytes. A 16GB microSD card is more than enough for a lifetime of journaling.',
  },
  {
    question: 'Can I export all my data?',
    answer:
      'Yes, always. You can download your complete diary as a compressed backup at any time. No lock-in, no data hostage situations. Your thoughts belong to you.',
  },
  {
    question: 'What emotions does Reminor track?',
    answer:
      'Reminor automatically analyzes 8 emotions in your entries: joy, sadness, anger, fear, surprise, disgust, trust, and anticipation. This is powered by your configured LLM and visualized over time.',
  },
];

const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section id="faq" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#333] bg-[#1a1a1a] mb-6">
            <HelpCircle className="w-4 h-4 text-[#00ff41]" />
            <span className="text-xs tracking-[0.3em] text-[#666]">FAQ</span>
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-[#00ff41] terminal-glow">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 reveal" style={{ transitionDelay: '0.2s' }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#333] bg-[#0d0d0d] overflow-hidden transition-all hover:border-[#00ff41]/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left"
              >
                <span className="font-mono text-sm text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#00ff41] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-4 text-sm text-[#888] leading-relaxed border-t border-[#333] pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center reveal" style={{ transitionDelay: '0.4s' }}>
          <p className="text-xs text-[#666]">
            More questions?{' '}
            <a
              href="https://github.com/cristal-orion/Reminor/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ff41] hover:underline"
            >
              Open an issue on GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

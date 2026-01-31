import { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Download, Bot, Brain } from 'lucide-react';
import { createTimeline, utils } from 'animejs';

const { stagger } = utils;

type VideoPhase = 'playing' | 'transitioning' | 'done';

const Hero = () => {
  const [videoPhase, setVideoPhase] = useState<VideoPhase>('playing');
  const [typedText, setTypedText] = useState('');
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const fullText = 'Open-source, self-hosted personal diary app.';

  // Video refs
  const videoOverlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Content refs
  const heroContentRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const titleLine3Ref = useRef<HTMLSpanElement>(null);
  const typewriterRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const btnPrimaryRef = useRef<HTMLAnchorElement>(null);
  const btnSecondaryRef = useRef<HTMLAnchorElement>(null);
  const statusBarRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const entryBlockRef = useRef<HTMLDivElement>(null);
  const emotionBarsRef = useRef<HTMLDivElement>(null);
  const aiBlockRef = useRef<HTMLDivElement>(null);

  // Track mobile viewport
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Trigger transition — called when video is about to end
  const triggerTransition = useCallback(() => {
    setVideoPhase((prev) => (prev === 'playing' ? 'transitioning' : prev));
  }, []);

  // Video end detection
  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoPhase !== 'playing') return;

    const handleTimeUpdate = () => {
      if (video.duration && video.duration - video.currentTime < 1) {
        triggerTransition();
      }
    };

    const handleEnded = () => triggerTransition();

    // Fallback: if video can't play or stalls, skip after 12s
    const fallbackTimer = setTimeout(triggerTransition, 12000);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', triggerTransition);

    return () => {
      clearTimeout(fallbackTimer);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', triggerTransition);
    };
  }, [videoPhase, triggerTransition]);

  // Transition animation — video fades out, content scales up, elements stagger in
  useEffect(() => {
    if (videoPhase !== 'transitioning') return;

    const titleLines = [titleLine1Ref.current, titleLine2Ref.current, titleLine3Ref.current].filter(Boolean);
    const buttons = [btnPrimaryRef.current, btnSecondaryRef.current].filter(Boolean);

    const tl = createTimeline({
      defaults: {
        ease: 'outExpo',
        duration: 900,
      },
    });

    // Video overlay fade out
    if (videoOverlayRef.current) {
      tl.add(videoOverlayRef.current, {
        opacity: [1, 0],
        duration: 1000,
        ease: 'outQuad',
      }, 0);
    }

    // Content wrapper: scale up from center
    if (heroContentRef.current) {
      tl.add(heroContentRef.current, {
        scale: [0.82, 1],
        opacity: [0, 1],
        duration: 1300,
      }, 0);
    }

    // Title lines — stagger from below
    tl.add(titleLines, {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: stagger(120),
    }, 300);

    // Typewriter line
    if (typewriterRef.current) {
      tl.add(typewriterRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 700,
      }, 700);
    }

    // Description
    if (descriptionRef.current) {
      tl.add(descriptionRef.current, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 700,
      }, 900);
    }

    // Buttons — stagger from left
    if (buttons.length) {
      tl.add(buttons, {
        opacity: [0, 1],
        translateX: [-30, 0],
        delay: stagger(100),
        duration: 700,
      }, 1100);
    }

    // Status bar
    if (statusBarRef.current) {
      tl.add(statusBarRef.current, {
        opacity: [0, 1],
        duration: 600,
      }, 1300);
    }

    // Terminal preview — scale + fade (in parallel with buttons)
    if (terminalRef.current) {
      tl.add(terminalRef.current, {
        opacity: [0, 1],
        scale: [0.95, 1],
        translateY: [30, 0],
      }, 1100);
    }

    // Diary entry
    if (entryBlockRef.current) {
      tl.add(entryBlockRef.current, {
        opacity: [0, 1],
        translateY: [15, 0],
        duration: 600,
      }, 1400);
    }

    // Emotion bars
    if (emotionBarsRef.current) {
      const bars = emotionBarsRef.current.children;
      if (bars.length) {
        tl.add(bars, {
          opacity: [0, 1],
          translateX: [-10, 0],
          delay: stagger(80),
          duration: 500,
        }, 1600);
      }
    }

    // AI insight
    if (aiBlockRef.current) {
      tl.add(aiBlockRef.current, {
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 600,
      }, 1800);
    }

    // Start typewriter after the typewriter element is visible
    const typewriterTimer = setTimeout(() => {
      setVideoPhase('done');
    }, 800);

    return () => clearTimeout(typewriterTimer);
  }, [videoPhase]);

  // Typewriter effect — only starts after transition reveals it
  useEffect(() => {
    if (videoPhase !== 'done') return;
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
  }, [videoPhase]);

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center py-12 pb-16 px-4 sm:px-6 lg:px-8 matrix-bg grid-pattern relative overflow-hidden">
      {/* Video Overlay */}
      {videoPhase !== 'done' && (
        <div
          ref={videoOverlayRef}
          className="absolute inset-0 z-10 bg-black flex items-center justify-center"
          style={{ pointerEvents: videoPhase === 'transitioning' ? 'none' : 'auto' }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            src={isMobile
              ? "/upload/Video_Generation_From_Image.mp4"
              : "/upload/From_Physical_Object_to_Digital_Void.mp4"
            }
          />
        </div>
      )}

      {/* Hero Content — starts hidden & scaled down, revealed by animation */}
      <div
        ref={heroContentRef}
        style={{ opacity: 0, transform: 'scale(0.82)' }}
        className="max-w-7xl mx-auto w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span ref={titleLine1Ref} style={{ opacity: 0, display: 'block' }} className="text-white">
                  Your diary,
                </span>
                <span ref={titleLine2Ref} style={{ opacity: 0, display: 'block' }} className="text-[#00ff41] terminal-glow">
                  your mind,
                </span>
                <span ref={titleLine3Ref} style={{ opacity: 0, display: 'block' }} className="text-white">
                  your PC.
                </span>
              </h1>
            </div>

            <div>
              <p ref={typewriterRef} style={{ opacity: 0 }} className="font-mono text-[#00ff41] text-lg">
                <span className="text-[#666]">$</span> {typedText}
                <span className="terminal-cursor" />
              </p>
              <p ref={descriptionRef} style={{ opacity: 0 }} className="text-[#888] mt-4 text-sm leading-relaxed max-w-lg">
                Retro, minimalist, high-contrast B&W aesthetic for the keyboard-focused mind.
                Your thoughts, encrypted and stored locally. No cloud. No tracking. Just you and your memories.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                ref={btnPrimaryRef}
                style={{ opacity: 0 }}
                href="https://github.com/cristal-orion/Reminor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal-primary flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                GET_STARTED.SH
              </a>
              <a
                ref={btnSecondaryRef}
                style={{ opacity: 0 }}
                href="https://app.reminor.it"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-terminal flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                VIEW_DEMO
              </a>
            </div>

            <div ref={statusBarRef} style={{ opacity: 0 }}>
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

          {/* Right Content - App Mockup */}
          <div ref={terminalRef} style={{ opacity: 0 }}>
            <div className="border border-[#333] bg-[#0d0d0d] overflow-hidden shadow-2xl shadow-[#00ff41]/10">
              {/* Terminal Header */}
              <div className="bg-[#1a1a1a] px-3 py-2 flex items-center justify-between border-b border-[#333]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-[#00ff41] text-[10px] font-bold">REMINOR OS v2.4</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-[#666]">
                  <span>27 JAN 2025</span>
                  <span>08:42</span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-[#0d0d0d] font-mono text-xs sm:text-sm scanlines">
                {/* Diary Entry */}
                <div ref={entryBlockRef} style={{ opacity: 0 }} className="p-4 border-b border-[#333]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#00ff41] text-xs">DIARY ENTRY — January 27, 2025</span>
                    <span className="text-[#666] text-[10px]">08:42:17</span>
                  </div>
                  <div className="text-[#888] text-xs leading-relaxed space-y-2">
                    <p>
                      Today I finally understood why I've been feeling restless.
                      It's not about the job — it's about not creating anything.
                      I need to build something meaningful again.
                    </p>
                    <p className="text-[#666]">
                      The morning walk helped clear my thoughts. There's a clarity
                      that comes from movement that screens can never provide.
                    </p>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <span className="text-[10px] bg-[#1a1a1a] px-2 py-0.5 text-[#666] border border-[#333]">#reflection</span>
                    <span className="text-[10px] bg-[#1a1a1a] px-2 py-0.5 text-[#666] border border-[#333]">#creativity</span>
                    <span className="text-[10px] bg-[#1a1a1a] px-2 py-0.5 text-[#666] border border-[#333]">#wellbeing</span>
                  </div>
                </div>

                {/* Emotion Analysis */}
                <div className="p-4 border-b border-[#333]">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-3 h-3 text-[#00ff41]" />
                    <span className="text-[#00ff41] text-[10px]">EMOTION ANALYSIS</span>
                    <span className="text-[#666] text-[10px] ml-auto">powered by AI</span>
                  </div>
                  <div ref={emotionBarsRef} className="space-y-1.5">
                    {[
                      { label: 'anticipation', value: 78, color: '#00ff41' },
                      { label: 'trust', value: 62, color: '#27c93f' },
                      { label: 'joy', value: 45, color: '#00ff41' },
                      { label: 'sadness', value: 28, color: '#666' },
                    ].map((emotion) => (
                      <div key={emotion.label} style={{ opacity: 0 }} className="flex items-center gap-2">
                        <span className="text-[10px] text-[#888] w-20 text-right">{emotion.label}</span>
                        <div className="flex-1 h-1.5 bg-[#1a1a1a] overflow-hidden">
                          <div
                            className="h-full transition-all duration-1000"
                            style={{ width: `${emotion.value}%`, backgroundColor: emotion.color }}
                          />
                        </div>
                        <span className="text-[10px] text-[#666] w-8">{emotion.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Insight */}
                <div ref={aiBlockRef} style={{ opacity: 0 }} className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-3 h-3 text-[#00ff41]" />
                    <span className="text-[#00ff41] text-[10px]">AI INSIGHT</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-0.5 bg-[#333] flex-shrink-0" />
                    <p className="text-[#888] text-[11px] leading-relaxed">
                      You've mentioned the need to create something
                      <span className="text-[#00ff41]"> 4 times this month</span>.
                      Similar patterns appeared in March 2024 — that's when you started your last project.
                      Consider channeling this energy.
                    </p>
                  </div>
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

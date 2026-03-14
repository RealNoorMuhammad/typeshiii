import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DISPLAY_DURATION = 2.8;
const EXIT_DURATION = 0.8;

function LoadingScreen({ onComplete }) {
  const wrapRef = useRef(null);
  const titleRef = useRef(null);
  const lettersRef = useRef([]);
  const shineRef = useRef(null);
  const glowRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const title = titleRef.current;
    const letters = lettersRef.current.filter(Boolean);
    const shine = shineRef.current;
    const glow = glowRef.current;
    const bg = bgRef.current;

    if (!wrap || !title) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial state
    gsap.set(wrap, { opacity: 1 });
    gsap.set(letters, { opacity: 0, y: 60, rotationX: -85, transformOrigin: '50% 100%', backfaceVisibility: 'hidden' });
    gsap.set(shine, { scaleX: 0, transformOrigin: 'center center' });
    gsap.set(glow, { scale: 0.8, opacity: 0 });
    gsap.set(bg, { scale: 1 });

    // Glow fades in
    tl.to(glow, { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, 0);

    // Letters stagger in (3D flip + fade up)
    tl.to(letters, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.9,
      stagger: 0.04,
      ease: 'back.out(1.4)',
      overwrite: true,
    }, 0.25);

    // Shine line draws across
    tl.to(shine, { scaleX: 1, duration: 1, ease: 'power2.inOut' }, 0.7);

    // Hold, then exit
    tl.add(() => {
      const exitTl = gsap.timeline({ onComplete: () => onComplete?.() });
      exitTl.to(letters, {
        opacity: 0,
        y: -40,
        scale: 1.08,
        duration: EXIT_DURATION * 0.6,
        stagger: 0.02,
        ease: 'power2.in',
      }, 0);
      exitTl.to([shine, glow], { opacity: 0, duration: EXIT_DURATION * 0.5 }, 0);
      exitTl.to(wrap, { opacity: 0, duration: EXIT_DURATION * 0.4 }, EXIT_DURATION * 0.3);
      exitTl.to(bg, { scale: 1.08, opacity: 0, duration: EXIT_DURATION * 0.8 }, 0);
    }, DISPLAY_DURATION);
  }, [onComplete]);

  const text = 'TypeShii';

  return (
    <div ref={wrapRef} className="loader-wrap">
      <div ref={bgRef} className="loader-bg" />
      <div className="loader-wrap-grid" aria-hidden="true" />
      <div ref={glowRef} className="loader-glow" />
      <div className="loader-content">
        <h1 ref={titleRef} className="loader-title" aria-label={text}>
          {text.split('').map((char, i) => (
            <span
              key={i}
              ref={(el) => { lettersRef.current[i] = el; }}
              className="loader-letter"
              style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
              {char}
            </span>
          ))}
        </h1>
        <div ref={shineRef} className="loader-shine" />
        <p className="loader-prompt">root@typeshii:~# <span className="loader-cursor" /></p>
      </div>
    </div>
  );
}

export default LoadingScreen;

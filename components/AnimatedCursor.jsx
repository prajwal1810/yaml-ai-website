'use client';

import { useEffect, useRef, useState } from 'react';

const interactiveSelector = [
  'a',
  'button',
  'input',
  'textarea',
  'select',
  'summary',
  '[role="button"]',
  '[data-cursor="interactive"]'
].join(',');

export function AnimatedCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const frameRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const ringRefPosition = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');

    const updateEnabled = () => {
      setEnabled(pointerQuery.matches && motionQuery.matches);
    };

    updateEnabled();
    pointerQuery.addEventListener('change', updateEnabled);
    motionQuery.addEventListener('change', updateEnabled);

    return () => {
      pointerQuery.removeEventListener('change', updateEnabled);
      motionQuery.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      setVisible(false);
      document.documentElement.classList.remove('custom-cursor-enabled');
      cancelAnimationFrame(frameRef.current);
      return undefined;
    }

    document.documentElement.classList.add('custom-cursor-enabled');

    const move = (event) => {
      targetRef.current = { x: event.clientX, y: event.clientY };
      setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);
    const pointerOver = (event) => setActive(Boolean(event.target.closest(interactiveSelector)));
    const pointerOut = (event) => {
      if (!event.relatedTarget || !event.relatedTarget.closest?.(interactiveSelector)) {
        setActive(false);
      }
    };

    const animate = () => {
      const target = targetRef.current;
      const current = ringRefPosition.current;
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    document.addEventListener('pointerenter', enter);
    document.addEventListener('pointerover', pointerOver);
    document.addEventListener('pointerout', pointerOut);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      document.removeEventListener('pointerenter', enter);
      document.removeEventListener('pointerover', pointerOver);
      document.removeEventListener('pointerout', pointerOut);
      document.documentElement.classList.remove('custom-cursor-enabled');
      cancelAnimationFrame(frameRef.current);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <span
        ref={ringRef}
        className={`cursor-ring ${visible ? 'cursor-visible' : ''} ${active ? 'cursor-active' : ''}`}
        aria-hidden="true"
      />
      <span
        ref={dotRef}
        className={`cursor-dot ${visible ? 'cursor-visible' : ''} ${active ? 'cursor-active' : ''}`}
        aria-hidden="true"
      >
        Y
      </span>
    </>
  );
}

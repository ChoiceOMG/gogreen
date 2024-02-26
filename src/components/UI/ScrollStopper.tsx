'use client';
import { FixPage } from '@/utils/fixPage';
import React, { useEffect, useRef } from 'react';

const ScrollStopper: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    const checkMobileAndTouch = () => {
      if (typeof window === 'undefined') return;

      isMobile.current = window.innerWidth <= 768;
      const isTouch = window.matchMedia('(pointer: coarse)').matches;

      if (isMobile.current || isTouch) {
        console.log('isMobile or isTouch');
        FixPage(false, ref);
      }
    };

    // Run on mount
    checkMobileAndTouch();

    // Run on resize
    window.addEventListener('resize', checkMobileAndTouch);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', checkMobileAndTouch);
    };
  }, []);

  useEffect(() => {
    if (isMobile.current) return;

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          FixPage(true, ref);
          if (timeoutId.current) {
            clearTimeout(timeoutId.current);
          }
          timeoutId.current = setTimeout(() => {
            FixPage(false, ref);
          }, 1000); // Задержка в 1 секунду
        } else {
          FixPage(false, ref);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default ScrollStopper;

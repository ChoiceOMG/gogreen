'use client';
import { FixPage } from '@/utils/fixPage';
import React, { useEffect, useRef } from 'react';

const ScrollStopper: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
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

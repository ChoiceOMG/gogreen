'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

export const FixButton = () => {
  const [showText, setShowText] = useState(false);

  const isDesktopOrLaptop =
    typeof window !== 'undefined' && window.innerWidth >= 770;
  const [hover, setHover] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;

    const toggleText = () => {
      setShowText(prev => !prev);
    };

    if (!hover) {
      intervalId = setInterval(toggleText, 5000);
    }

    return () => clearInterval(intervalId);
  }, [hover]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const footer = document.getElementById('footer_bottom');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <motion.div
      className="fixed right-0 sm:right-5 bottom-5 flex justify-end FixButton z-[2] max-w-[275px]"
      onMouseEnter={() => {
        setHover(true); // stop interval on hover
        setShowText(true); // show text on hover
      }}
      onMouseLeave={() => setHover(false)} // start interval on leave
      animate={{ y: footerVisible ? (isDesktopOrLaptop ? -50 : -100) : 0 }}
    >
      <Link
        href="/contact"
        target="_blank"
        className="w-full bg-goGreen-green rounded-full flex items-center justify-center px-[16px] py-[11px] group relative overflow-hidden transition-all duration-300 ease-in-out hover:bg-goGreen-darkGreen"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        <AnimatePresence>
          <motion.span
            animate={{
              opacity: showText ? 1 : 0,
              x: showText ? 0 : 20,
              width: showText ? 'auto' : 0
            }}
          >
            <span className="mr-2 text-white whitespace-nowrap">
              Request a Quote
            </span>
          </motion.span>
        </AnimatePresence>
        <div
          className={'bg-goGreen-green absolute right-0 top-0 w-[50px] h-full'}
        ></div>
        <motion.svg
          width="28"
          height="38"
          viewBox="0 0 28 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className={'relative z-[1] outline-none'}
        >
          <motion.path
            d="M4.66667 0C2.09271 0 0 2.13008 0 4.75V33.25C0 35.8699 2.09271 38 4.66667 38H23.3333C25.9073 38 28 35.8699 28 33.25V4.75C28 2.13008 25.9073 0 23.3333 0H4.66667ZM7 4.75H21C22.2906 4.75 23.3333 5.81133 23.3333 7.125V9.5C23.3333 10.8137 22.2906 11.875 21 11.875H7C5.70937 11.875 4.66667 10.8137 4.66667 9.5V7.125C4.66667 5.81133 5.70937 4.75 7 4.75ZM9.33333 16.625C9.33333 17.2549 9.0875 17.859 8.64992 18.3044C8.21233 18.7498 7.61884 19 7 19C6.38116 19 5.78767 18.7498 5.35008 18.3044C4.9125 17.859 4.66667 17.2549 4.66667 16.625C4.66667 15.9951 4.9125 15.391 5.35008 14.9456C5.78767 14.5002 6.38116 14.25 7 14.25C7.61884 14.25 8.21233 14.5002 8.64992 14.9456C9.0875 15.391 9.33333 15.9951 9.33333 16.625ZM7 26.125C6.38116 26.125 5.78767 25.8748 5.35008 25.4294C4.9125 24.984 4.66667 24.3799 4.66667 23.75C4.66667 23.1201 4.9125 22.516 5.35008 22.0706C5.78767 21.6252 6.38116 21.375 7 21.375C7.61884 21.375 8.21233 21.6252 8.64992 22.0706C9.0875 22.516 9.33333 23.1201 9.33333 23.75C9.33333 24.3799 9.0875 24.984 8.64992 25.4294C8.21233 25.8748 7.61884 26.125 7 26.125ZM4.66667 30.875C4.66667 29.5613 5.70937 28.5 7 28.5H14C15.2906 28.5 16.3333 29.5613 16.3333 30.875C16.3333 32.1887 15.2906 33.25 14 33.25H7C5.70937 33.25 4.66667 32.1887 4.66667 30.875ZM14 19C13.3812 19 12.7877 18.7498 12.3501 18.3044C11.9125 17.859 11.6667 17.2549 11.6667 16.625C11.6667 15.9951 11.9125 15.391 12.3501 14.9456C12.7877 14.5002 13.3812 14.25 14 14.25C14.6188 14.25 15.2123 14.5002 15.6499 14.9456C16.0875 15.391 16.3333 15.9951 16.3333 16.625C16.3333 17.2549 16.0875 17.859 15.6499 18.3044C15.2123 18.7498 14.6188 19 14 19ZM16.3333 23.75C16.3333 24.3799 16.0875 24.984 15.6499 25.4294C15.2123 25.8748 14.6188 26.125 14 26.125C13.3812 26.125 12.7877 25.8748 12.3501 25.4294C11.9125 24.984 11.6667 24.3799 11.6667 23.75C11.6667 23.1201 11.9125 22.516 12.3501 22.0706C12.7877 21.6252 13.3812 21.375 14 21.375C14.6188 21.375 15.2123 21.6252 15.6499 22.0706C16.0875 22.516 16.3333 23.1201 16.3333 23.75ZM21 19C20.3812 19 19.7877 18.7498 19.3501 18.3044C18.9125 17.859 18.6667 17.2549 18.6667 16.625C18.6667 15.9951 18.9125 15.391 19.3501 14.9456C19.7877 14.5002 20.3812 14.25 21 14.25C21.6188 14.25 22.2123 14.5002 22.6499 14.9456C23.0875 15.391 23.3333 15.9951 23.3333 16.625C23.3333 17.2549 23.0875 17.859 22.6499 18.3044C22.2123 18.7498 21.6188 19 21 19ZM23.3333 23.75C23.3333 24.3799 23.0875 24.984 22.6499 25.4294C22.2123 25.8748 21.6188 26.125 21 26.125C20.3812 26.125 19.7877 25.8748 19.3501 25.4294C18.9125 24.984 18.6667 24.3799 18.6667 23.75C18.6667 23.1201 18.9125 22.516 19.3501 22.0706C19.7877 21.6252 20.3812 21.375 21 21.375C21.6188 21.375 22.2123 21.6252 22.6499 22.0706C23.0875 22.516 23.3333 23.1201 23.3333 23.75ZM21 33.25C20.3812 33.25 19.7877 32.9998 19.3501 32.5544C18.9125 32.109 18.6667 31.5049 18.6667 30.875C18.6667 30.2451 18.9125 29.641 19.3501 29.1956C19.7877 28.7502 20.3812 28.5 21 28.5C21.6188 28.5 22.2123 28.7502 22.6499 29.1956C23.0875 29.641 23.3333 30.2451 23.3333 30.875C23.3333 31.5049 23.0875 32.109 22.6499 32.5544C22.2123 32.9998 21.6188 33.25 21 33.25Z"
            fill="white"
          />
        </motion.svg>
      </Link>
    </motion.div>
  );
};

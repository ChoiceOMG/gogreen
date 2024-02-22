'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MenuItem } from '@/types/types';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import MobileMenuIcon from '../UI/SVG/MobileMenuIcon';
import { Button } from '../UI/button';
import { MenuHeaderMobile } from '@/utils/URL';
import Arrows from '../UI/SVG/Arrows';

function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    const menu = document.querySelector('.mobile-menu');

    if (menu && !menu.contains(target)) {
      setActiveDropdown(null);
    }
  };

  // Add event listener using our hook when the component mounts
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }

    // Clear up
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isOpen]);
  const variants = {
    open: { opacity: 1, left: 0 },
    closed: { opacity: 0, left: '-100%' }
  };

  return (
    <div className="flex justify-between gap-2">
      <div className="relative flex items-center w-full z-[11] max-w-[45px]">
        <MobileMenuIcon
          isOpen={isOpen}
          onOpen={() => setIsOpen(prev => !prev)}
        />
      </div>

      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.25 }}
        className="fixed top-[128px] pb-[128px]  flex flex-col items-end left-0 w-screen  z-10 overflow-hidden h-screen bg-goGreen-mint"
      >
        <div className="container overflow-y-auto h-full flex justify-center">
          <div className="flex flex-col  w-full justify-between py-10 overflow-auto">
            <nav className="flex flex-col text-left space-y-7 mobile-menu">
              {MenuHeaderMobile.map((item, index) => (
                <>
                  <div className="relative" key={index}>
                    <Link
                      href={item.link || '#'}
                      onClick={() => setIsOpen(prev => !prev)}
                      className={` whitespace-nowrap font-Avenir font-black uppercase  ${
                        pathname === item.link ? ' text-goGreen-green' : ''
                      } transition-colors duration-300 ease-in-out hover:text-goGreen-green `}
                    >
                      {item.title}
                    </Link>
                    {item.subMenu && (
                      <span
                        onClick={() => toggleDropdown(index)}
                        className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      >
                        <Arrows
                          variant="down"
                          className="max-w-[20px] "
                          color="#08A510"
                        />
                      </span>
                    )}
                  </div>
                  {item.subMenu && activeDropdown === index && (
                    <div className="flex flex-col text-left space-y-7">
                      {item.subMenu.map((item, index) => (
                        <Link
                          href={item.link || '#'}
                          onClick={() => setIsOpen(prev => !prev)}
                          key={item.link}
                          className={` whitespace-nowrap font-Avenir font-black uppercase  ${
                            pathname === item.link ? ' text-goGreen-green' : ''
                          } transition-colors duration-300 ease-in-out hover:text-goGreen-green `}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ))}
            </nav>
            <Button
              link="/contact"
              linkProps={{ title: 'Contact Page' }}
              className="mt-4"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MobileMenu;

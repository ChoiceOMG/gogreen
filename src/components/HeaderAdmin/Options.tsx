'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { MenuAdmin } from '@/utils/URL';
import { useSession } from 'next-auth/react';
import { Button } from '../UI/button';
import Arrows from '../UI/SVG/Arrows';

function Options() {
  const { data: session } = useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);
  const name = user?.name || user?.email || 'Admin';

  if (!user) return null;

  return (
    <div className="relative ml-auto w-fit">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-2 rounded-3xl w-full text-white text-center flex items-center justify-center  font-bold uppercase bg-goGreen-green max-w-[270px] 
          ${isOpen && 'rounded-b-none'}`}
        whileTap={{ scale: 0.95 }}
      >
        Hi, <span className="max-w-[70%] overflow-hidden">{name}</span>
        <span
          className={`w-fit inline-block ml-2 ${
            isOpen && 'rotate-180'
          } transition-transform duration-300`}
        >
          <Arrows variant={'down'} color="#fff" className="max-w-[20px]" />
        </span>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -11 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute  bg-white rounded-3xl top-full mt-2 rounded-t-none w-full shadow-lg z-10 overflow-hidden"
          >
            <div className="py-3">
              {MenuAdmin.map((item, i) => (
                <Link
                  key={i}
                  href={item.link || '/'}
                  className="block text-black font-bold hover:scale-105 transition-transform duration-300 px-5 outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <Button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="w-full h-[40px]  bg-goGreen-green rounded-3xl rounded-t-none "
            >
              Sign Out
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          className="fixed w-screen h-screen top-0 left-0 z-[1]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default Options;

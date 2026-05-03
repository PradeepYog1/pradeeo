'use client';

import Link from 'next/link';
import { Menu, X, Instagram } from 'lucide-react';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Retreats', href: '/retreats' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full overflow-hidden border-b border-stone-200/60 bg-stone-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-wide text-sage-900">Yogashalarishikesh</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-12 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium uppercase tracking-widest text-stone-600 transition-colors hover:text-sage-700',
                pathname === link.href && 'text-sage-900'
              )}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="mt-1 h-0.5 w-full bg-sage-500"
                />
              )}
            </Link>
          ))}
          <Link
            href="/registration"
            className="rounded-full bg-sage-900 px-6 py-2.5 text-xs uppercase tracking-widest text-white transition-colors hover:bg-sage-800"
          >
            Register
          </Link>
          <a
            href="https://instagram.com/pradeepyoga_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-sage-700"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href="https://instagram.com/pradeepyoga_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-sage-700"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-stone-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-stone-200/60 bg-stone-50 md:hidden"
          >
            <nav className="flex flex-col space-y-4 px-6 py-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium tracking-wide text-stone-600 transition-colors',
                    pathname === link.href && 'text-sage-900'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/registration"
                  onClick={() => setIsOpen(false)}
                  className="inline-block rounded-full bg-sage-900 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-sage-800"
                >
                  Register Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

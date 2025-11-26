'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const navigation = [
  { name: "What's the Buzz About", href: '/about' },
  { 
    name: 'Read', 
    href: '/library',
    dropdown: [
      { name: 'All Content', href: '/library?filter=all' },
      { name: 'Books', href: '/library?filter=books' },
      { name: 'Kanyini Earth Journal', href: '/library?filter=articles' },
      { name: 'Submit Article', href: '/library?filter=submit' },
      { name: 'KEJ Editor', href: '/library?filter=editor' },
    ]
  },
  { name: 'Listen & Watch', href: '/media' },
  { name: 'Fellowship', href: '/fellowship' },
  { name: 'Kanyini Collective', href: '/collective' },
  { name: 'Kanyini Connect', href: '/kanyini-connect' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-kanyini-primary/10 border-b border-kanyini-primary/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <Image 
                src="/logo.webp"
                alt="KanYini Earth Projects" 
                width={48}
                height={40}
                className="h-12 w-auto object-contain"
                priority
              />
              <span className="text-xl font-bold text-kanyini-primary hidden sm:inline">
              KanYini
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium ${scrolled ? 'text-gray-300' : 'text-gray-700'} hover:text-kanyini-primary transition-colors duration-200 relative group flex items-center space-x-1`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-kanyini-primary to-cyan-400 group-hover:w-full transition-all duration-300 shadow-sm shadow-kanyini-primary/50"></span>
                    </Link>
                    
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-kanyini-primary/30 rounded-lg shadow-xl overflow-hidden"
                        >
                          {item.dropdown.map((subItem, idx) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-300 hover:bg-kanyini-primary/20 hover:text-kanyini-primary transition-all duration-200 border-b border-gray-800 last:border-b-0"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : item.name === 'Contact' ? (
                  <Link
                    href={item.href}
                    className="ml-2 px-5 py-2 text-sm font-semibold bg-kanyini-primary text-white rounded-full hover:bg-kanyini-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium ${scrolled ? 'text-gray-300' : 'text-gray-700'} hover:text-kanyini-primary transition-colors duration-200 relative group`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-kanyini-primary to-cyan-400 group-hover:w-full transition-all duration-300 shadow-sm shadow-kanyini-primary/50"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-white' : 'text-gray-700'} hover:bg-kanyini-primary/20 transition-colors border border-kanyini-primary/30`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-kanyini-primary/30"
          >
            <div className="px-4 py-6 space-y-3">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.dropdown ? (
                    <div>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-gray-300 hover:bg-kanyini-primary/20 hover:text-kanyini-primary rounded-lg transition-all duration-200 border border-transparent hover:border-kanyini-primary/30"
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-400 hover:text-kanyini-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.name === 'Contact' ? (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-6 py-4 text-base font-bold text-white bg-kanyini-primary hover:bg-kanyini-dark rounded-xl transition-all duration-200 text-center shadow-lg"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-gray-300 hover:bg-kanyini-primary/20 hover:text-kanyini-primary rounded-lg transition-all duration-200 border border-transparent hover:border-kanyini-primary/30"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


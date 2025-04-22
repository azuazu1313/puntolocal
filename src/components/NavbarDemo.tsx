import React, { useState, useEffect } from 'react';
import NavBar from "./ui/NavBar";
import Button from './Button';
import LanguageSelector from './LanguageSelector';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menus = [
  {
    id: 1,
    title: 'Google Maps SEO',
    url: '#services',
    dropdown: false,
  },
  {
    id: 2,
    title: 'Social Media Boost',
    url: '#services',
    dropdown: false,
  },
  {
    id: 3,
    title: 'Landing Pages',
    url: '#services',
    dropdown: false,
  },
  {
    id: 4,
    title: 'Pricing',
    url: '#services',
    dropdown: false,
  },
];

export function NavBarDemo() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm ${
        isScrolled ? 'py-2 shadow-md' : 'py-4'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <a href="/" className="flex-shrink-0">
              <picture>
                <source srcSet="/assets/header_logo_720x350.webp" type="image/webp" />
                <img 
                  src="/assets/header_logo_720x350_pressed.png" 
                  alt="LocalBoost" 
                  className="h-10"
                />
              </picture>
            </a>
            
            <div className="hidden md:flex items-center justify-center flex-1">
              <NavBar list={menus} />
            </div>
            
            <div className="flex items-center space-x-3">
              <LanguageSelector />
              <Button size="small" className="flex-shrink-0 hidden md:inline-flex">Book Call</Button>
              <button 
                className="md:hidden text-text focus:outline-none z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Sliding mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-xl z-50 md:hidden flex flex-col pt-24 px-6"
          >
            {/* Close button at top left */}
            <button
              className="absolute top-6 left-6 p-1 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} className="text-text" />
            </button>
            
            <div className="flex flex-col space-y-6">
              {menus.map((item) => (
                <a 
                  key={item.id}
                  href={item.url} 
                  className="text-text hover:text-primary transition-colors font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
            
            <div className="mt-auto mb-8 pt-6 border-t border-gray-100 space-y-4">
              <LanguageSelector />
              <Button size="small" className="w-full mt-4">Book Call</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
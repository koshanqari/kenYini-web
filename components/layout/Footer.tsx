'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import Button from '../ui/Button';

const footerLinks = {
  about: [
    { name: 'Our Story', href: '/about' },
    { name: 'Team', href: '/about#team' },
    { name: 'Mission & Values', href: '/about#mission' },
  ],
  explore: [
    { name: 'Journal', href: '/journal' },
    { name: 'Books', href: '/books' },
    { name: 'Fellowship', href: '/fellowship' },
    { name: 'Media', href: '/media' },
  ],
  engage: [
    { name: 'Donate', href: '/get-involved#donate' },
    { name: 'Partner', href: '/get-involved#partner' },
    { name: 'Volunteer', href: '/get-involved#volunteer' },
    { name: 'Submit Article', href: '/get-involved#submit' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-kanyini-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/logo.webp"
                alt="KanYini Earth Projects" 
                width={96}
                height={80}
                className="h-16 w-auto object-contain mb-2"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              One Earth. Many Voices. One Shared Future. A not-for-profit
              educational movement inspiring sustainable co-habitation.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  G10 'Quayside, Eastlake Parade
                  <br />
                  Kingston ACT 2604, AUSTRALIA
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:admin@keaprojects.com.au" className="hover:text-white transition-colors">
                  admin@keaprojects.com.au
                </a>
              </div>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-3">
              {footerLinks.engage.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold mb-2">Stay Connected</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest stories and updates
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-gray-600 focus:border-kanyini-primary focus:outline-none focus:ring-2 focus:ring-kanyini-primary/50 transition-all"
              />
              <Button size="md" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-kanyini-primary flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <span>© 2025 KanYini Earth Projects. All rights reserved.</span>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


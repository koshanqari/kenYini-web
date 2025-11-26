'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, BookOpen, Users, Globe } from 'lucide-react';
import Button from '../ui/Button';
import { useRef } from 'react';
import Link from 'next/link';

export default function HomeHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(89, 114, 66, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(89, 114, 66, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Gradient Orbs - More subtle */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-kanyini-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-kanyini-accent/10 rounded-full blur-3xl"
      />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-kanyini-primary/20 border border-kanyini-primary/30 text-kanyini-light rounded-full text-sm font-medium">
                One Earth. Many Voices. One Shared Future.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Inspiring{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kanyini-primary via-kanyini-light to-kanyini-accent">
                Sustainable
              </span>
              <br />
              Co-habitation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl"
            >
              A not-for-profit educational movement fostering connection, responsibility, and oneness 
              through storytelling, social entrepreneurship, and meaningful action.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/kanyini-connect">
                <Button size="lg" className="bg-kanyini-primary hover:bg-kanyini-dark text-white shadow-lg shadow-kanyini-primary/30 group">
                  Join Our Community
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:border-kanyini-primary hover:text-kanyini-light">
                  Learn More
                </Button>
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800"
            >
              <div>
                <div className="text-3xl font-bold text-kanyini-primary mb-1">10K+</div>
                <div className="text-sm text-gray-400">Community Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-kanyini-primary mb-1">50+</div>
                <div className="text-sm text-gray-400">Active Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-kanyini-primary mb-1">100+</div>
                <div className="text-sm text-gray-400">Published Stories</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Interactive Card Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {/* Card 1 - Library */}
            <Link href="/library">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-gradient-to-br from-kanyini-dark to-kanyini-primary p-6 rounded-2xl border border-white/10 cursor-pointer group"
              >
                <BookOpen className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Read</h3>
                <p className="text-white/70 text-sm">Explore our journal, books, and articles</p>
              </motion.div>
            </Link>

            {/* Card 2 - Media */}
            <Link href="/media">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="bg-gradient-to-br from-kanyini-accent to-kanyini-dark p-6 rounded-2xl border border-white/10 cursor-pointer group mt-8"
              >
                <Play className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Watch</h3>
                <p className="text-white/70 text-sm">Podcasts, videos, and documentaries</p>
              </motion.div>
            </Link>

            {/* Card 3 - Fellowship */}
            <Link href="/fellowship">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-white/10 cursor-pointer group"
              >
                <Users className="w-10 h-10 text-kanyini-light mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Fellowship</h3>
                <p className="text-white/70 text-sm">Join our leadership program</p>
              </motion.div>
            </Link>

            {/* Card 4 - Collective */}
            <Link href="/collective">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-gradient-to-br from-kanyini-primary/50 to-kanyini-accent/50 p-6 rounded-2xl border border-white/10 cursor-pointer group mt-8"
              >
                <Globe className="w-10 h-10 text-white mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-2">Projects</h3>
                <p className="text-white/70 text-sm">Community-driven initiatives</p>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-kanyini-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}


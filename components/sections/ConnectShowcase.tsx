'use client';

import { motion } from 'framer-motion';
import { Zap, MessageSquare, Globe, Heart, Users, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';
import Image from 'next/image';

const features = [
  {
    icon: MessageSquare,
    title: 'Connect & Collaborate',
    description: 'Join conversations that matter with changemakers worldwide'
  },
  {
    icon: Globe,
    title: 'Share Your Story',
    description: 'Create content, share projects, and amplify your impact'
  },
  {
    icon: Heart,
    title: 'Support Projects',
    description: 'Fund and volunteer for causes you believe in'
  }
];

export default function ConnectShowcase() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24 md:py-32 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(89, 114, 66, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(89, 114, 66, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-kanyini-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-kanyini-accent/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Phone Mockup with Screenshot */}
            <div className="relative mx-auto" style={{ maxWidth: '400px' }}>
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl ring-1 ring-white/20">
                {/* Phone Inner Frame */}
                <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10" />
                  
                  {/* Screenshot */}
                  <div className="relative">
                    <Image
                      src="/app_images/Feed.png"
                      alt="Kanyini Connect Platform"
                      width={400}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Phone Buttons */}
                <div className="absolute right-0 top-24 w-1 h-12 bg-gray-700 rounded-l" />
                <div className="absolute right-0 top-40 w-1 h-8 bg-gray-700 rounded-l" />
                <div className="absolute left-0 top-32 w-1 h-16 bg-gray-700 rounded-r" />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -top-6 -right-6 bg-kanyini-primary/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-kanyini-light/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-white/90 text-xs">Active Users</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-kanyini-accent/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-kanyini-light/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-white/90 text-xs">Projects Live</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-kanyini-primary/20 border border-kanyini-primary/30 text-kanyini-light rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Kanyini Connect Platform
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Social Network for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kanyini-primary to-kanyini-accent">
                Changemakers
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              More than a platform—it's where ideas become action, strangers become collaborators, 
              and individual efforts transform into collective impact.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-kanyini-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-kanyini-light" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://kan-yini-connect.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-kanyini-primary hover:bg-kanyini-dark text-white font-bold shadow-lg shadow-kanyini-primary/30 group w-full sm:w-auto">
                  <Zap className="w-5 h-5 mr-2" />
                  Join Kanyini Connect
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link href="/kanyini-connect">
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:border-kanyini-primary hover:text-kanyini-light w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              Free to join • No credit card required • 10,000+ members worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


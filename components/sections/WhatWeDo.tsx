'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Lightbulb, Heart, Globe, Podcast } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const pillars = [
  {
    icon: BookOpen,
    title: 'Publishing & Storytelling',
    description: 'KanYini Earth Journal shares diverse voices exploring themes of belonging, connection, and conscious living through essays, poetry, and visual narratives.',
    link: '/library',
    linkText: 'Explore Library',
    color: 'from-kanyini-primary to-kanyini-dark',
    size: 'large'
  },
  {
    icon: Podcast,
    title: 'Media & Conversations',
    description: 'Podcasts, videos, and documentaries that spark meaningful dialogue about our shared future.',
    link: '/media',
    linkText: 'Watch & Listen',
    color: 'from-kanyini-accent to-kanyini-primary',
    size: 'small'
  },
  {
    icon: Users,
    title: 'Fellowship Program',
    description: 'Empowering young leaders with skills, mentorship, and opportunities to drive real-world change.',
    link: '/fellowship',
    linkText: 'Learn More',
    color: 'from-kanyini-dark to-kanyini-accent',
    size: 'small'
  },
  {
    icon: Globe,
    title: 'Community Projects',
    description: 'Grassroots initiatives addressing local challenges—from urban reforestation to mental health support and sustainable agriculture.',
    link: '/collective',
    linkText: 'View Projects',
    color: 'from-kanyini-primary to-kanyini-light',
    size: 'medium'
  },
  {
    icon: Lightbulb,
    title: 'Kanyini Connect',
    description: 'A social platform built for changemakers—connect, collaborate, and amplify your impact.',
    link: '/kanyini-connect',
    linkText: 'Join Platform',
    color: 'from-kanyini-accent to-kanyini-dark',
    size: 'medium'
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-kanyini-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-kanyini-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-kanyini-primary/10 text-kanyini-dark rounded-full text-sm font-semibold mb-6">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Movement Built on{' '}
              <span className="text-kanyini-primary">Connection</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're not just another NGO. We're a community-driven platform where storytelling meets action, 
              education meets empowerment, and individual voices create collective change.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1 - Large Card Spanning 2 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 group"
          >
            <Link href={pillars[0].link}>
              <div className="relative h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-10 border-2 border-gray-200 hover:border-kanyini-primary transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(89, 114, 66, 0.5) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillars[0].color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {(() => {
                      const Icon = pillars[0].icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-kanyini-primary transition-colors">
                    {pillars[0].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {pillars[0].description}
                  </p>
                  <span className="inline-flex items-center text-kanyini-primary font-semibold group-hover:gap-2 transition-all">
                    {pillars[0].linkText}
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Row 1 - Small Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
            <Link href={pillars[1].link}>
              <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 border-2 border-gray-200 hover:border-kanyini-accent transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillars[1].color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {(() => {
                    const Icon = pillars[1].icon;
                    return <Icon className="w-7 h-7 text-white" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kanyini-accent transition-colors">
                  {pillars[1].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {pillars[1].description}
                </p>
                <span className="inline-flex items-center text-kanyini-accent font-semibold text-sm group-hover:gap-1 transition-all">
                  {pillars[1].linkText}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Row 2 - Small Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group"
          >
            <Link href={pillars[2].link}>
              <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 border-2 border-gray-200 hover:border-kanyini-dark transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillars[2].color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {(() => {
                    const Icon = pillars[2].icon;
                    return <Icon className="w-7 h-7 text-white" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kanyini-dark transition-colors">
                  {pillars[2].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {pillars[2].description}
                </p>
                <span className="inline-flex items-center text-kanyini-dark font-semibold text-sm group-hover:gap-1 transition-all">
                  {pillars[2].linkText}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Row 2 - Medium Card Spanning 2 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 group"
          >
            <Link href={pillars[3].link}>
              <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border-2 border-gray-200 hover:border-kanyini-primary transition-all duration-300 hover:shadow-xl cursor-pointer">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillars[3].color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {(() => {
                      const Icon = pillars[3].icon;
                      return <Icon className="w-8 h-8 text-white" />;
                    })()}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-kanyini-primary transition-colors">
                      {pillars[3].title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {pillars[3].description}
                    </p>
                    <span className="inline-flex items-center text-kanyini-primary font-semibold group-hover:gap-2 transition-all">
                      {pillars[3].linkText}
                      <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Row 3 - Full Width Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 group"
          >
            <Link href={pillars[4].link}>
              <div className="relative bg-gradient-to-r from-kanyini-dark via-kanyini-primary to-kanyini-accent rounded-3xl p-8 md:p-10 border-2 border-kanyini-primary hover:border-white transition-all duration-300 hover:shadow-2xl cursor-pointer overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                </motion.div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
                      {(() => {
                        const Icon = pillars[4].icon;
                        return <Icon className="w-10 h-10 text-white" />;
                      })()}
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {pillars[4].title}
                    </h3>
                    <p className="text-white/90 text-lg leading-relaxed mb-4">
                      {pillars[4].description}
                    </p>
                    <span className="inline-flex items-center text-white font-bold text-lg group-hover:gap-3 transition-all">
                      {pillars[4].linkText}
                      <svg className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


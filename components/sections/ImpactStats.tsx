'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { Users, BookOpen, Globe, Heart, TrendingUp, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Community Members',
    description: 'Across 25+ countries'
  },
  {
    icon: BookOpen,
    value: 150,
    suffix: '+',
    label: 'Published Works',
    description: 'Articles, stories, and books'
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'Active Projects',
    description: 'Making real-world impact'
  },
  {
    icon: Heart,
    value: 500,
    suffix: 'K+',
    label: 'Lives Impacted',
    description: 'Through our initiatives'
  },
  {
    icon: Award,
    value: 100,
    suffix: '+',
    label: 'Fellows Trained',
    description: 'Next-gen changemakers'
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: '%',
    label: 'Project Success Rate',
    description: 'Community-verified impact'
  },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function ImpactStats() {
  return (
    <section className="relative bg-gradient-to-br from-kanyini-primary via-kanyini-dark to-kanyini-accent py-24 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
          opacity: [0.2, 0.1, 0.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building a Movement,<br />One Connection at a Time
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            From local initiatives to global conversations, our community is creating ripples of change across the world.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                </div>

                {/* Number */}
                <div className="mb-2">
                  <div className="text-3xl md:text-5xl font-bold text-white flex items-baseline">
                    <Counter value={stat.value} />
                    <span className="text-2xl md:text-4xl ml-1">{stat.suffix}</span>
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-white font-semibold text-base md:text-lg mb-1">
                  {stat.label}
                </h3>
                <p className="text-white/70 text-sm md:text-base">
                  {stat.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed italic mb-6">
                "We're not saving the world. We're asking: what if we tried a different way? 
                What if connection, not competition, guided our actions?"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RJ</span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">Dr. Rajeev Jyoti (Jeevak)</div>
                  <div className="text-white/70 text-sm">Founder, KanYini Earth Projects</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';
import Image from 'next/image';

const benefits = [
  {
    icon: Award,
    title: 'Leadership Training',
    description: 'Develop essential skills for creating lasting impact'
  },
  {
    icon: Users,
    title: 'Mentorship Network',
    description: 'Connect with experienced changemakers and guides'
  },
  {
    icon: TrendingUp,
    title: 'Real-World Projects',
    description: 'Apply your learning through meaningful initiatives'
  }
];

export default function FellowshipCTA() {
  return (
    <section className="relative bg-gradient-to-br from-kanyini-dark via-kanyini-primary to-kanyini-accent py-24 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                KEaP Fellowship Program
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering the Next Generation of{' '}
              <span className="text-kanyini-light">Changemakers</span>
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Join a transformative journey where young leaders gain the skills, network, 
              and support to create meaningful impact in their communities and beyond.
            </p>

            {/* Benefits Grid */}
            <div className="grid gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-white/80 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/fellowship">
                <Button size="lg" className="bg-white text-kanyini-dark hover:bg-gray-100 font-bold shadow-lg group">
                  Explore Fellowship
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="https://kan-yini-connect.vercel.app/app/post" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-kanyini-dark font-semibold">
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="Fellowship Program"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kanyini-dark/80 to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                    <div className="text-3xl font-bold text-white mb-1">100+</div>
                    <div className="text-white/90 text-sm">Fellows Trained</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                    <div className="text-3xl font-bold text-white mb-1">5</div>
                    <div className="text-white/90 text-sm">Active Programs</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


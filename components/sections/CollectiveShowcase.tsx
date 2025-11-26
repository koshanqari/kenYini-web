'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Heart, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Button from '../ui/Button';

const highlights = [
  {
    icon: Users,
    stat: '50+',
    label: 'Active Projects',
    description: 'Community-driven initiatives'
  },
  {
    icon: Calendar,
    stat: '200+',
    label: 'Events Hosted',
    description: 'Bringing people together'
  },
  {
    icon: Heart,
    stat: '500K+',
    label: 'Lives Impacted',
    description: 'Creating real change'
  }
];

const featured = [
  {
    title: 'Urban Reforestation',
    location: 'Multiple Cities',
    members: '2.5K',
    impact: 'Planting 10,000+ trees across urban spaces',
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Mental Health Support',
    location: 'Online & In-Person',
    members: '1.8K',
    impact: 'Providing accessible mental health resources',
    color: 'from-blue-500 to-cyan-600'
  }
];

export default function CollectiveShowcase() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-kanyini-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-kanyini-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 bg-kanyini-primary/10 text-kanyini-dark rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Kanyini Collective
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Community-Powered <span className="text-kanyini-primary">Projects & Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From grassroots initiatives to global movements—discover projects making real impact 
            and events bringing our community together.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-gray-200 hover:border-kanyini-primary transition-all hover:shadow-lg group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-kanyini-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{item.stat}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-1">{item.label}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className={`relative h-full bg-gradient-to-br ${project.color} rounded-2xl p-8 overflow-hidden hover:shadow-2xl transition-all cursor-pointer`}>
                {/* Animated Background Pattern */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:scale-105 transition-transform">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/90 text-sm mb-4">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.members} members
                    </span>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {project.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link href="/collective">
            <Button size="lg" className="bg-kanyini-primary hover:bg-kanyini-dark text-white font-bold shadow-lg group">
              Explore All Projects & Events
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


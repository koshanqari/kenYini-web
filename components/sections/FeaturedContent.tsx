'use client';

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, FileText, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const features = [
  {
    icon: FileText,
    title: 'Latest from the Journal',
    subtitle: 'From Ownership to Kinship',
    description: 'Rethinking Our Place on Earth - A transformative exploration of our relationship with nature and each other.',
    category: 'Creative Article',
    author: 'Dr. Awadhesh Prasad',
    date: 'Nov 22, 2025',
    gradient: 'from-emerald-500 to-teal-600',
    href: '/journal/ownership-to-kinship',
  },
  {
    icon: BookOpen,
    title: 'Featured Book',
    subtitle: 'Dancing with the Universe',
    description: 'A meditative, philosophical novel exploring the universal longing for purpose, belonging and oneness.',
    category: 'Book',
    author: 'Jeevak',
    readMore: 'Available Now',
    gradient: 'from-purple-500 to-indigo-600',
    href: '/books',
  },
  {
    icon: GraduationCap,
    title: 'KEap Fellowship',
    subtitle: '2025 Spring Cohort',
    description: 'Applications now open for our next cohort of changemakers. Join a global community of impact-driven leaders.',
    category: 'Fellowship',
    author: 'Apply by Dec 31, 2025',
    readMore: 'Learn More',
    gradient: 'from-amber-500 to-orange-600',
    href: '/fellowship',
  },
];

export default function FeaturedContent() {
  return (
    <Section background="white" className="bg-white relative overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-40 right-20 w-40 h-40 border-4 border-kanyini-primary/10 rounded-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-40 left-20 w-32 h-32 border-4 border-cyan-500/10 rounded-full"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-kanyini-primary to-cyan-600 bg-clip-text text-transparent">Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest articles, books, and opportunities
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group cursor-pointer bg-white border-gray-200 hover:border-kanyini-primary/50" glow>
                  <div className="p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-kanyini-primary/10 text-kanyini-primary text-sm font-medium rounded-full mb-4 w-fit">
                      {feature.category}
                    </span>

                    {/* Content */}
                    <h3 className="text-sm text-gray-500 uppercase tracking-wide mb-2 font-mono">
                      {feature.title}
                    </h3>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-kanyini-primary transition-colors">
                      {feature.subtitle}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {feature.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {feature.author}
                        </p>
                        {feature.date && (
                          <p className="text-xs text-gray-500">{feature.date}</p>
                        )}
                        {feature.readMore && (
                          <p className="text-xs text-kanyini-primary font-medium">
                            {feature.readMore}
                          </p>
                        )}
                      </div>
                      <ArrowRight className="w-5 h-5 text-kanyini-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}


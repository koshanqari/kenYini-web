'use client';

import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const articles = [
  {
    id: 1,
    title: 'From Ownership to Kinship: Rethinking Our Place on Earth',
    excerpt: 'A transformative exploration of how we relate to our planet and each other, moving from dominance to partnership.',
    category: 'Creative Article',
    author: {
      name: 'Dr. Awadhesh Prasad',
      avatar: 'AP',
    },
    date: 'November 22, 2025',
    readTime: '8 min read',
    color: 'primary',
  },
  {
    id: 2,
    title: 'Departure at Noon',
    excerpt: 'A contemplative short story about transitions, letting go, and finding peace in the journey rather than the destination.',
    category: 'Short Story',
    author: {
      name: 'Jeevak',
      avatar: 'J',
    },
    date: 'November 21, 2025',
    readTime: '12 min read',
    color: 'accent',
  },
  {
    id: 3,
    title: 'Aging Bodies, Anxious Minds',
    excerpt: 'An honest reflection on the intersection of physical aging and mental well-being in our modern world.',
    category: 'Essay',
    author: {
      name: 'Jeevak',
      avatar: 'J',
    },
    date: 'September 18, 2025',
    readTime: '10 min read',
    color: 'dark',
  },
];

export default function LatestArticles() {
  return (
    <Section background="beige" className="bg-white relative">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <motion.path
                d="M0 50 Q 25 20, 50 50 T 100 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-kanyini-primary"
                animate={{ d: [
                  "M0 50 Q 25 20, 50 50 T 100 50",
                  "M0 50 Q 25 80, 50 50 T 100 50",
                  "M0 50 Q 25 20, 50 50 T 100 50"
                ]}}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
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
            Latest <span className="bg-gradient-to-r from-kanyini-primary to-cyan-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thought-provoking stories and insights from our community
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group cursor-pointer overflow-hidden bg-white border-gray-200 hover:border-kanyini-primary/30">
                {/* Featured Image Placeholder */}
                <div className={`h-48 bg-kanyini-${article.color} relative overflow-hidden`}>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center text-white text-6xl font-bold opacity-40"
                  >
                    {article.author.avatar}
                  </motion.div>
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kanyini-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full bg-kanyini-${article.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                        {article.author.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {article.author.name}
                        </p>
                        <p className="text-xs text-gray-500">{article.date}</p>
                      </div>
                    </div>
                  </div>

                  {/* Read Time */}
                  <div className="flex items-center space-x-1 text-gray-500 text-sm mt-4">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="group">
            Explore All Articles
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}


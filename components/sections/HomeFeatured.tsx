'use client';

import { motion } from 'framer-motion';
import { BookOpen, FileText, Play, ArrowRight, Clock, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featured = {
  book: {
    id: 9,
    title: 'Dancing with the Universe',
    author: 'Jeevak',
    excerpt: 'On a train winding through the Himalayan foothills, two strangers find themselves thrown together by chance...',
    image: 'https://keaprojects.com.au/wp-content/uploads/2025/07/2.jpg',
    category: 'Book',
    link: '/library?filter=books'
  },
  article: {
    id: 1,
    title: 'From Ownership to Kinship: Rethinking Our Place on Earth',
    author: 'Dr. Awadhesh Prasad',
    excerpt: 'We need a new story—one that does not begin with conquest or dominion, but with reciprocity, gratitude, and care...',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop',
    readTime: '8 min read',
    date: 'Nov 22, 2025',
    link: '/library/1'
  },
  media: {
    id: 1,
    title: 'Dancing with the Universe: The Journey',
    description: 'A visual exploration of the book that started it all. Join Jeevak as he recounts the philosophical journey.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    duration: '18:42',
    views: '12.5K',
    link: '/media/watch/1'
  }
};

export default function HomeFeatured() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-kanyini-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-kanyini-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-kanyini-primary/10 text-kanyini-dark rounded-full text-sm font-semibold mb-6">
            Featured Content
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stories That <span className="text-kanyini-primary">Inspire Change</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our latest book, articles, and media that challenge perspectives and spark meaningful conversations.
          </p>
        </motion.div>

        {/* Featured Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Feature - Book (Spans 7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 group"
          >
            <Link href={featured.book.link}>
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={featured.book.image}
                    alt={featured.book.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-kanyini-primary/90 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {featured.book.category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-kanyini-light transition-colors">
                    {featured.book.title}
                  </h3>
                  <p className="text-white/90 text-lg mb-4 line-clamp-2">
                    {featured.book.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">By {featured.book.author}</span>
                    <span className="inline-flex items-center text-kanyini-light font-semibold group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right Column - Article and Media (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Article */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group flex-1"
            >
              <Link href={featured.article.link}>
                <div className="h-full bg-white rounded-2xl border-2 border-gray-200 hover:border-kanyini-primary transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={featured.article.image}
                      alt={featured.article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-kanyini-accent/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                        <FileText className="w-3 h-3 mr-1" />
                        Article
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-kanyini-primary transition-colors">
                      {featured.article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {featured.article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{featured.article.author}</span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {featured.article.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Media */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group flex-1"
            >
              <Link href={featured.media.link}>
                <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-gray-700 hover:border-kanyini-accent">
                  {/* Image with Play Button */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={featured.media.thumbnail}
                      alt={featured.media.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-90"
                    />
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-kanyini-accent/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-7 h-7 text-white ml-1" fill="white" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-black/70 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                        <Play className="w-3 h-3 mr-1" />
                        Video
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-kanyini-accent transition-colors">
                      {featured.media.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {featured.media.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center text-gray-400">
                        <Clock className="w-3 h-3 mr-1" />
                        {featured.media.duration}
                      </span>
                      <span className="flex items-center text-gray-400">
                        <Eye className="w-3 h-3 mr-1" />
                        {featured.media.views}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* View All Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <Link href="/library" className="group">
            <span className="inline-flex items-center px-6 py-3 bg-kanyini-primary/10 hover:bg-kanyini-primary text-kanyini-dark hover:text-white rounded-full font-semibold transition-all">
              Explore Library
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link href="/media" className="group">
            <span className="inline-flex items-center px-6 py-3 bg-kanyini-accent/10 hover:bg-kanyini-accent text-kanyini-dark hover:text-white rounded-full font-semibold transition-all">
              Watch More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


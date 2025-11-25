'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { BookOpen, FileText, Layers, Search, Clock, TrendingUp, Sparkles, Filter, X } from 'lucide-react';
import Image from 'next/image';

type ContentType = 'book' | 'article' | 'story';

interface ContentItem {
  id: number;
  type: ContentType;
  title: string;
  subtitle?: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  trending?: boolean;
  featured?: boolean;
  image?: string | null;
}

// Mock data
const content: ContentItem[] = [
  {
    id: 1,
    type: 'book',
    title: 'Dancing with the Universe',
    subtitle: 'A philosophical journey through existence',
    excerpt: 'On a train winding through the Himalayan foothills, two strangers find themselves thrown together by chance. What begins as casual conversation becomes a transformative dialogue.',
    author: 'Jeevak',
    date: '2024-11-15',
    readTime: '4 hours',
    category: 'Philosophy',
    trending: true,
    featured: true,
    image: 'https://keaprojects.com.au/wp-content/uploads/2025/07/2.jpg',
  },
  {
    id: 2,
    type: 'article',
    title: 'From Ownership to Kinship: Rethinking Our Place on Earth',
    excerpt: 'A transformative exploration of how we relate to our planet and each other, moving from dominance to partnership.',
    author: 'Dr. Awadhesh Prasad',
    date: '2025-11-22',
    readTime: '8 min',
    category: 'Creative Article',
    trending: true,
    image: null,
  },
  {
    id: 3,
    type: 'story',
    title: 'Departure at Noon',
    excerpt: 'A contemplative short story about transitions, letting go, and finding peace in the journey rather than the destination.',
    author: 'Jeevak',
    date: '2025-11-21',
    readTime: '12 min',
    category: 'Short Story',
    image: null,
  },
  {
    id: 4,
    type: 'article',
    title: 'Aging Bodies, Anxious Minds',
    excerpt: 'An honest reflection on the intersection of physical aging and mental well-being in our modern world.',
    author: 'Jeevak',
    date: '2025-09-18',
    readTime: '10 min',
    category: 'Essay',
    image: null,
  },
  {
    id: 5,
    type: 'article',
    title: 'The Silence Between Thoughts',
    excerpt: 'Meditation isn\'t about emptying the mind—it\'s about learning to sit with yourself, unfiltered and unafraid.',
    author: 'Priya',
    date: '2025-10-05',
    readTime: '6 min',
    category: 'Essay',
    image: null,
  },
  {
    id: 6,
    type: 'story',
    title: 'The Last Monsoon',
    excerpt: 'In a village where rain used to dance on rooftops, drought has become the new reality. A grandmother remembers.',
    author: 'Antonio',
    date: '2025-08-12',
    readTime: '15 min',
    category: 'Short Story',
    image: null,
  },
];

const typeColors: Record<ContentType, { bg: string; text: string; border: string }> = {
  book: { bg: 'from-kanyini-primary to-kanyini-dark', text: 'text-kanyini-primary', border: 'border-kanyini-primary' },
  article: { bg: 'from-kanyini-accent to-orange-600', text: 'text-kanyini-accent', border: 'border-kanyini-accent' },
  story: { bg: 'from-purple-600 to-indigo-600', text: 'text-purple-400', border: 'border-purple-400' },
};

const typeLabels: Record<ContentType, string> = {
  book: 'Book',
  article: 'Article',
  story: 'Story',
};

export default function LibraryPage() {
  const [activeType, setActiveType] = useState<ContentType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'trending'>('recent');

  const filteredContent = useMemo(() => {
    let filtered = content;

    // Filter by type
    if (activeType !== 'all') {
      filtered = filtered.filter(item => item.type === activeType);
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === 'trending') {
      filtered = filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    } else {
      filtered = filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return filtered;
  }, [activeType, searchQuery, sortBy]);

  const featuredItem = content.find(item => item.featured);

  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(89, 114, 66, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(89, 114, 66, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            animation: 'slideGrid 20s linear infinite',
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-kanyini-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-kanyini-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Layers className="w-16 h-16 text-kanyini-primary" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              The{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-kanyini-primary via-kanyini-light to-kanyini-accent bg-clip-text text-transparent">
                  Library
                </span>
                <motion.div
                  animate={{ width: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-kanyini-primary to-kanyini-accent"
                />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Books that move you. Articles that make you think. Stories that stay with you.
            </p>
          </motion.div>

          {/* Search & Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for anything..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-kanyini-primary/50 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Sort */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSortBy('recent')}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl border transition-all ${
                      sortBy === 'recent'
                        ? 'bg-kanyini-primary border-kanyini-primary text-white'
                        : 'bg-black/50 border-white/10 text-gray-400 hover:border-white/30'
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    <span className="hidden sm:inline">Recent</span>
                  </button>
                  <button
                    onClick={() => setSortBy('trending')}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl border transition-all ${
                      sortBy === 'trending'
                        ? 'bg-kanyini-primary border-kanyini-primary text-white'
                        : 'bg-black/50 border-white/10 text-gray-400 hover:border-white/30'
                    }`}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="hidden sm:inline">Trending</span>
                  </button>
                </div>
              </div>

              {/* Type Filters */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={() => setActiveType('all')}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    activeType === 'all'
                      ? 'bg-white text-black border-white'
                      : 'bg-transparent border-white/20 text-gray-400 hover:border-white/50 hover:text-white'
                  }`}
                >
                  All Content
                </button>
                <button
                  onClick={() => setActiveType('book')}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    activeType === 'book'
                      ? `bg-gradient-to-r ${typeColors.book.bg} text-white border-kanyini-primary`
                      : 'bg-transparent border-kanyini-primary/30 text-gray-400 hover:border-kanyini-primary hover:text-kanyini-primary'
                  }`}
                >
                  <BookOpen className="w-4 h-4 inline mr-2" />
                  Books
                </button>
                <button
                  onClick={() => setActiveType('article')}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    activeType === 'article'
                      ? `bg-gradient-to-r ${typeColors.article.bg} text-white border-kanyini-accent`
                      : 'bg-transparent border-kanyini-accent/30 text-gray-400 hover:border-kanyini-accent hover:text-kanyini-accent'
                  }`}
                >
                  <FileText className="w-4 h-4 inline mr-2" />
                  Articles
                </button>
                <button
                  onClick={() => setActiveType('story')}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    activeType === 'story'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400'
                      : 'bg-transparent border-purple-400/30 text-gray-400 hover:border-purple-400 hover:text-purple-400'
                  }`}
                >
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Stories
                </button>
              </div>
            </div>
          </motion.div>

          {/* Featured Content - Hero Card */}
          {featuredItem && activeType === 'all' && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
            >
              <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-kanyini-primary/20 to-kanyini-dark/20 border border-kanyini-primary/30 hover:border-kanyini-primary transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-kanyini-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative grid md:grid-cols-2 gap-8 p-12">
                  {/* Left - Content */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div className="flex items-center space-x-3">
                      <span className={`px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${typeColors[featuredItem.type].bg} text-white`}>
                        Featured {typeLabels[featuredItem.type]}
                      </span>
                      {featuredItem.trending && (
                        <span className="flex items-center space-x-1 text-orange-400">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm">Trending</span>
                        </span>
                      )}
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight group-hover:text-kanyini-primary transition-colors">
                      {featuredItem.title}
                    </h2>

                    {featuredItem.subtitle && (
                      <p className="text-xl text-gray-400">
                        {featuredItem.subtitle}
                      </p>
                    )}

                    <p className="text-lg text-gray-300 leading-relaxed">
                      {featuredItem.excerpt}
                    </p>

                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <span>{featuredItem.author}</span>
                      <span>•</span>
                      <span>{featuredItem.readTime}</span>
                    </div>

                    <button className="w-fit px-8 py-4 bg-kanyini-primary hover:bg-kanyini-dark text-white rounded-xl font-medium transition-all transform hover:scale-105">
                      Start Reading
                    </button>
                  </div>

                  {/* Right - Visual */}
                  <div className="flex items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-64 h-96 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      {featuredItem.image ? (
                        <>
                          <Image
                            src={featuredItem.image}
                            alt={featuredItem.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </>
                      ) : (
                        <>
                          <div className="w-full h-full bg-gradient-to-br from-kanyini-primary to-kanyini-dark flex items-center justify-center">
                            <BookOpen className="w-24 h-24 text-white/20" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 text-gray-400"
          >
            {filteredContent.length} {filteredContent.length === 1 ? 'item' : 'items'} found
          </motion.div>

          {/* Content Grid - Bento Box Style */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeType}-${searchQuery}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredContent.map((item, idx) => {
                if (item.featured && activeType === 'all' && !searchQuery) return null;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border ${typeColors[item.type].border}/20 hover:border-${typeColors[item.type].border} transition-all duration-300 cursor-pointer ${
                      idx === 0 && activeType === 'all' ? 'md:col-span-2' : ''
                    }`}
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${typeColors[item.type].bg} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    <div className="relative p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[item.type].text} bg-${typeColors[item.type].border}/10`}>
                          {typeLabels[item.type]}
                        </span>
                        {item.trending && (
                          <TrendingUp className="w-5 h-5 text-orange-400" />
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-kanyini-primary transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">
                        {item.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-white/10">
                        <span>{item.author}</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-kanyini-primary flex items-center justify-center"
                    >
                      <span className="text-white">→</span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredContent.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <Filter className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No results found</h3>
              <p className="text-gray-500">Try adjusting your filters or search query</p>
            </motion.div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideGrid {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100px);
          }
        }
      `}</style>
    </main>
  );
}


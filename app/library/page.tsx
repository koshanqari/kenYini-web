'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { BookOpen, FileText, Layers, Search, Clock, TrendingUp, Sparkles, Filter, X, PenLine, User, Mail, Upload, Send, ArrowLeftRight, ShoppingCart, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/ui/Button';

type ContentType = 'book' | 'article' | 'story';
type FilterType = ContentType | 'all' | 'submit' | 'editor';

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
  authorBio?: string;
  authorTitle?: string;
  authorImage?: string;
  buyLinks?: {
    amazon?: string;
    booktopia?: string;
    rakuten?: string;
  };
}

// Articles from KanYini Earth Journal
const content: ContentItem[] = [
  {
    id: 9,
    type: 'book',
    title: 'Dancing with the Universe',
    excerpt: 'On a train winding through the Himalayan foothills, two strangers find themselves thrown together by chance. What begins as a casual conversation over sweet chai and coffee soon unravels into a playful, honest and transformative dialogue into the heart of ancient philosophies and the invisible threads that bind us all. Dancing with the Universe is a meditative, philosophical novel that explores the universal longing for purpose, belonging and oneness. Step aboard this journey of discovery and transformation—and find the courage to live each day in wonder.',
    author: 'Jeevak',
    authorTitle: 'The Radiologist who Writes, Rights, and Unites',
    authorBio: 'Jeevak is the pen name for Clinical Associate Professor RaJeev Jyoti, AKA \'Jeev\'. He bears poet\'s heart, a scientist\'s mind and a philosopher\'s soul.\n\n\'Dancing with the Universe\' is his first book- a philosophical novel that explores the journey of two individuals with two distinct perspectives on life. Through their encounters, Jeevak beautifully demonstrates that, no matter our differences, we can all find rhythm in the same song of connection, self-discovery, and fulfillment.\n\nIn his other life, Jeevak is a Radiologist and an expert in Prostate cancer diagnosis. He has published multiple internationally recognised research papers on Medical Imaging and has travelled the world as a guest speaker on a wide range of Radiology topics.\n\nHe is also the founder of the Oneness Mission- KanYini Earth Projects (KEaP Ltd), a social enterprise that seeks to inspire and facilitate sustainable human co-habitation on earth by reducing conflict and deepening our connections. In both his professional and creative pursuits, Jeevak aims to enhance people\'s connection to our planet and with each other. He\'s working to lessen the burden of conflict and promote the ethics of sustainability.',
    authorImage: '/human_photos/jeevak.png',
    date: '2025-11-25',
    readTime: 'Novel',
    category: 'Book',
    trending: true,
    featured: false,
    image: 'https://keaprojects.com.au/wp-content/uploads/2025/07/2.jpg',
    buyLinks: {
      amazon: 'https://www.amazon.com/',
      booktopia: 'https://www.booktopia.com.au/',
      rakuten: 'https://www.kobo.com/',
    },
  },
  {
    id: 1,
    type: 'article',
    title: 'From Ownership to Kinship: Rethinking Our Place on Earth',
    excerpt: 'A transformative exploration of how we relate to our planet and each other, moving from dominance to partnership.',
    author: 'Dr. Awadhesh Prasad',
    date: '2025-11-22',
    readTime: '8 min',
    category: 'Creative Article',
    trending: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    type: 'story',
    title: 'Departure at Noon',
    excerpt: 'A contemplative short story about transitions, letting go, and finding peace in the journey rather than the destination.',
    author: 'Jeevak',
    date: '2025-11-21',
    readTime: '12 min',
    category: 'Short Story',
    trending: true,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    type: 'article',
    title: 'Aging Bodies. Anxious minds',
    excerpt: 'An honest reflection on the intersection of physical aging and mental well-being in our modern world.',
    author: 'Jeevak',
    date: '2025-09-18',
    readTime: '10 min',
    category: 'Creative Article',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    type: 'article',
    title: 'The first day of more days of being good to each other',
    excerpt: 'Exploring the power of daily kindness and how small acts of goodness compound to create lasting change.',
    author: 'Antonio',
    date: '2025-09-03',
    readTime: '7 min',
    category: 'Creative Article',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    type: 'article',
    title: 'Ancient Code Powering the Modern World',
    excerpt: 'Discovering timeless wisdom and ancient principles that continue to shape our contemporary existence.',
    author: 'Dr. Awadhesh Prasad',
    date: '2025-07-31',
    readTime: '9 min',
    category: 'Creative Article',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    type: 'story',
    title: 'Snake in the ward',
    excerpt: 'An unexpected visitor in the hospital ward becomes a catalyst for reflection on nature, fear, and our place in the world.',
    author: 'Jeevak',
    date: '2025-07-31',
    readTime: '11 min',
    category: 'Short Story',
    image: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 7,
    type: 'article',
    title: 'One Big, Dysfunctional Family: A Mitochondrial Memoir of Humanity',
    excerpt: 'Through the lens of our shared mitochondrial DNA, a story of human interconnectedness across all boundaries.',
    author: 'Abhijit Deonath',
    date: '2025-07-31',
    readTime: '13 min',
    category: 'Creative Article',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 8,
    type: 'article',
    title: 'Horn effect— the dark lord of prejudices',
    excerpt: 'Understanding how a single negative trait can color our entire perception of a person, and how to break free from this cognitive bias.',
    author: 'Jeevak',
    date: '2025-07-31',
    readTime: '8 min',
    category: 'Creative Article',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2070&auto=format&fit=crop',
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

// Book Card Component with Toggle
function BookCard({ item, idx }: { item: ContentItem; idx: number }) {
  const [showAuthor, setShowAuthor] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className="col-span-full"
    >
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-kanyini-primary/30 overflow-hidden">
        {/* Toggle Button */}
        <div className="bg-gradient-to-r from-kanyini-primary/20 to-kanyini-dark/20 px-8 py-4 flex items-center justify-between border-b border-kanyini-primary/20">
          <h3 className="text-xl font-bold text-white flex items-center">
            <BookOpen className="w-6 h-6 mr-3 text-kanyini-primary" />
            {showAuthor ? 'Meet the Author' : 'Featured Book'}
          </h3>
          <button
            onClick={() => setShowAuthor(!showAuthor)}
            className="group flex items-center space-x-2 px-6 py-3 bg-kanyini-primary hover:bg-kanyini-dark text-white rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-kanyini-primary/50"
          >
            <ArrowLeftRight className="w-5 h-5 transition-transform group-hover:rotate-180 duration-300" />
            <span>{showAuthor ? 'View Book' : 'View Author'}</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {!showAuthor ? (
              // Book View
              <motion.div
                key="book"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-[300px,1fr] gap-8 items-start"
              >
                {/* Book Cover */}
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-[2/3] w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden shadow-2xl"
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>

                {/* Book Info */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {item.title}
                    </h2>
                    <p className="text-xl text-kanyini-light">by {item.author}</p>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {item.excerpt}
                  </p>

                  {/* Buy Links */}
                  {item.buyLinks && (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white flex items-center">
                        <ShoppingCart className="w-5 h-5 mr-2 text-kanyini-primary" />
                        Available Now
                      </h4>
                      <div className="flex flex-wrap gap-4">
                        {item.buyLinks.amazon && (
                          <a
                            href={item.buyLinks.amazon}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
                          >
                            <span>Buy on Amazon</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {item.buyLinks.booktopia && (
                          <a
                            href={item.buyLinks.booktopia}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
                          >
                            <span>Buy on Booktopia</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {item.buyLinks.rakuten && (
                          <a
                            href={item.buyLinks.rakuten}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
                          >
                            <span>Buy on Rakuten</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ) : (
              // Author View
              <motion.div
                key="author"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-[300px,1fr] gap-8 items-start"
              >
                {/* Author Photo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden shadow-2xl"
                >
                  {item.authorImage && (
                    <Image
                      src={item.authorImage}
                      alt={item.author}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>

                {/* Author Info */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {item.author}
                    </h2>
                    {item.authorTitle && (
                      <p className="text-xl text-kanyini-light italic">{item.authorTitle}</p>
                    )}
                  </div>

                  {item.authorBio && (
                    <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                      {item.authorBio.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function LibraryPageContent() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  const [activeType, setActiveType] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'trending'>('recent');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    title: '',
    content: '',
  });

  // Set filter from URL params
  useEffect(() => {
    if (filterParam === 'book' || filterParam === 'books') {
      setActiveType('book');
    } else if (filterParam === 'article' || filterParam === 'articles') {
      setActiveType('article');
    } else if (filterParam === 'submit') {
      setActiveType('submit');
    } else if (filterParam === 'editor') {
      setActiveType('editor');
    } else if (filterParam === 'all') {
      setActiveType('all');
    }
  }, [filterParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      city: '',
      title: '',
      content: '',
    });
  };

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

    // Sort - prioritize books in "all content" view
    if (sortBy === 'trending') {
      filtered = filtered.sort((a, b) => {
        // Books always come first
        if (a.type === 'book' && b.type !== 'book') return -1;
        if (a.type !== 'book' && b.type === 'book') return 1;
        // Then sort by trending
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0);
      });
    } else {
      filtered = filtered.sort((a, b) => {
        // Books always come first in "all content" view
        if (activeType === 'all') {
          if (a.type === 'book' && b.type !== 'book') return -1;
          if (a.type !== 'book' && b.type === 'book') return 1;
        }
        // Then sort by date
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
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
                  onClick={() => setActiveType('submit')}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    activeType === 'submit'
                      ? 'bg-kanyini-primary text-white border-kanyini-primary'
                      : 'bg-transparent border-kanyini-primary/30 text-gray-400 hover:border-kanyini-primary hover:text-kanyini-primary hover:bg-kanyini-primary/10'
                  }`}
                >
                  <PenLine className="w-4 h-4 inline mr-2" />
                  Submit Article
                </button>
                <button
                  onClick={() => setActiveType('editor')}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    activeType === 'editor'
                      ? 'bg-kanyini-accent text-white border-kanyini-accent'
                      : 'bg-transparent border-kanyini-accent/30 text-gray-400 hover:border-kanyini-accent hover:text-kanyini-accent hover:bg-kanyini-accent/10'
                  }`}
                >
                  <User className="w-4 h-4 inline mr-2" />
                  KEJ Editor
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
              <Link href={`/library/${featuredItem.id}`}>
                <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-kanyini-primary/20 to-kanyini-dark/20 border border-kanyini-primary/30 hover:border-kanyini-primary transition-all duration-500 cursor-pointer">
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
              </Link>
            </motion.div>
          )}

          {/* Results Count */}
          {activeType !== 'submit' && activeType !== 'editor' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-gray-400"
            >
              {filteredContent.length} {filteredContent.length === 1 ? 'item' : 'items'} found
            </motion.div>
          )}

          {/* Submit Article Form */}
          {activeType === 'submit' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              {/* Submission Form */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 mb-8">
                <h2 className="text-4xl font-bold text-white mb-2">Submit Your Article</h2>
                <p className="text-gray-400 mb-8">Share your work with the KanYini Earth Journal community</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-kanyini-primary/50 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-kanyini-primary/50 transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-kanyini-primary/50 transition-colors"
                      placeholder="Enter your city"
                    />
                  </div>

                  {/* Article Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <FileText className="w-4 h-4 inline mr-2" />
                      Article Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-kanyini-primary/50 transition-colors"
                      placeholder="Enter article title"
                      required
                    />
                  </div>

                  {/* Article Content */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Article Content
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={10}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-kanyini-primary/50 transition-colors resize-vertical"
                      placeholder="Write your article here..."
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <Upload className="w-4 h-4 inline mr-2" />
                      Upload Article (PDF or Word)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-kanyini-primary file:text-white hover:file:bg-kanyini-dark cursor-pointer"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Upload your article as a PDF or Word document</p>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button 
                      type="submit"
                      size="lg" 
                      className="w-full bg-kanyini-primary hover:bg-kanyini-dark text-white"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Submit Article
                    </Button>
                  </div>
                </form>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 text-center text-gray-400 text-sm"
                >
                  <p>
                    By submitting, you agree to our submission guidelines below
                  </p>
                </motion.div>
              </div>

              {/* Submission Guidelines */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 mb-8">
                <h2 className="text-4xl font-bold text-white mb-6">Submission Guidelines</h2>
                <h3 className="text-2xl font-semibold text-kanyini-primary mb-8">KanYini Earth Journal</h3>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Thank you for your interest in contributing to KanYini Journal, a nonprofit journal exploring themes of oneness, belonging, and conscious cohabitation.
                  </p>
                  
                  <p>
                    We welcome thoughtful, original work in any form — essays, short stories, photo essays, poetry, drawings, or hybrid formats. We publish two pieces per month, and submissions are open on a rolling basis.
                  </p>

                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-white mb-4">What We're Looking For</h4>
                    <p className="mb-3">We're open to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Personal essays or reflections (typically 1,000–2000 words)</li>
                      <li>Fiction or nonfiction short stories</li>
                      <li>Poems (single or in sets)</li>
                      <li>Photo essays or visual submissions with an accompanying note or narrative</li>
                      <li>Hybrid or experimental pieces that engage with the journal's themes</li>
                    </ul>
                  </div>

                  <div className="bg-kanyini-primary/10 border border-kanyini-primary/30 rounded-xl p-6 mt-6">
                    <h5 className="text-lg font-semibold text-kanyini-light mb-3">Note</h5>
                    <ul className="space-y-2">
                      <li>• Your work must be original and previously unpublished.</li>
                      <li>• At this time, we can only accept submissions in English. Translations are welcome if you hold the rights.</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-white mb-4">How to Submit</h4>
                    <p className="mb-4">
                      Please use the submission form above to send us your work as a Word document or PDF. You can either paste your content directly or upload a file.
                    </p>
                    
                    <p className="mt-4">
                      If your work includes visual or multimedia content, feel free to include attachments or provide a shared drive link with access permissions enabled in your submission.
                    </p>
                    
                    <p className="mt-4">
                      If you're unsure whether something fits, feel free to write to us first — we're happy to discuss.
                    </p>
                    
                    <div className="mt-6 space-y-2">
                      <p className="font-semibold text-white">Contact us at:</p>
                      <div className="flex items-center space-x-2 text-kanyini-light">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:admin@keaprojects.com.au" className="hover:underline">admin@keaprojects.com.au</a>
                      </div>
                      <div className="flex items-center space-x-2 text-kanyini-light">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:kanyini.earth2025@gmail.com" className="hover:underline">kanyini.earth2025@gmail.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-kanyini-accent/10 border border-kanyini-accent/30 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-white mb-4">Honorarium</h4>
                    <p className="mb-4">
                      While the KanYini Earth Journal is a volunteer-led, nonprofit publication, we occasionally commission select essays or features that align closely with our editorial themes. Such commissioned pieces are eligible for a modest honorarium of <span className="font-semibold text-white">AUD 60</span>.
                    </p>
                    <p>
                      Please note that open submissions are unpaid, as we seek to keep the Journal community-driven and accessible to diverse voices.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-white mb-4">Rights and Usage</h4>
                    <ul className="space-y-3">
                      <li>• By submitting your work, you confirm that it is your original, unpublished creation.</li>
                      <li>• The contributor confirms the work is their own and previously unpublished.</li>
                      <li>• If accepted, we ask for first publishing rights and the right to keep the work archived on our journal site.</li>
                      <li>• All other rights remain with you, and you are free to republish the work elsewhere after it appears with us (with appropriate attribution).</li>
                    </ul>
                  </div>

                  <div className="mt-8 bg-gray-800/50 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-white mb-4">A Note on Pseudonyms and Previously Published Work</h4>
                    <ul className="space-y-3">
                      <li>• All submissions must be original and previously unpublished, including work that has appeared on personal blogs, Medium, Substack, or other public websites.</li>
                      <li>• Because our journal is rooted in themes of presence and connection, we prefer contributors to publish under their real names. However, if there is a strong reason to use a pseudonym, we're open to discussing it — please email us before submitting.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </motion.div>
          ) : activeType === 'editor' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-5 gap-8">
                  {/* Left - Photo */}
                  <div className="md:col-span-2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
                    >
                      <Image
                        src="/human_photos/priya.png"
                        alt="Priya - KEJ Editor"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </div>

                  {/* Right - Content */}
                  <div className="md:col-span-3 space-y-6">
                    <div>
                      <span className="inline-block px-4 py-1 bg-kanyini-accent/20 text-kanyini-accent rounded-full text-sm font-medium mb-4">
                        KEJ EDITOR
                      </span>
                      <h2 className="text-5xl font-bold mb-2">PRIYA</h2>
                    </div>

                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Priya Talwar is a literary agent, editor, and founder of Editor's Atelier, a boutique agency that helps authors, thinkers, and professionals shape their ideas into powerful, credible stories.
                      </p>
                      
                      <p>
                        With over 14 years of experience across publishing, journalism, and storytelling, she has worked with 55+ authors on memoirs, novels, and nonfiction books—guiding them from manuscript to market. Priya is also a former features journalist and commissioning editor, with by-lines and editorial work in Down to Earth, India Today, First City, and more.
                      </p>
                      
                      <p>
                        She regularly advises debut and experienced authors on positioning their work for traditional and hybrid publishing, and has served on juries for book and documentary awards.
                      </p>
                    </div>

                    <div className="pt-6 flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-kanyini-primary/10 border border-kanyini-primary/30 text-kanyini-light rounded-lg text-sm">
                        Literary Agent
                      </span>
                      <span className="px-4 py-2 bg-kanyini-primary/10 border border-kanyini-primary/30 text-kanyini-light rounded-lg text-sm">
                        Editor
                      </span>
                      <span className="px-4 py-2 bg-kanyini-primary/10 border border-kanyini-primary/30 text-kanyini-light rounded-lg text-sm">
                        Publishing Expert
                      </span>
                      <span className="px-4 py-2 bg-kanyini-primary/10 border border-kanyini-primary/30 text-kanyini-light rounded-lg text-sm">
                        14+ Years Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Content Grid - Bento Box Style */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeType}-${searchQuery}-${sortBy}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
              {filteredContent.map((item, idx) => {
                if (item.featured && activeType === 'all' && !searchQuery) return null;

                // Special rendering for books
                if (item.type === 'book') {
                  return <BookCard key={item.id} item={item} idx={idx} />;
                }

                return (
                  <Link href={`/library/${item.id}`} key={item.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-white/10 hover:border-kanyini-primary/50 transition-all duration-300 cursor-pointer flex flex-col shadow-xl hover:shadow-2xl hover:shadow-kanyini-primary/20"
                      style={{ minHeight: '420px' }}
                    >
                      {/* Image */}
                      {item.image && (
                        <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                          {/* Category Badge */}
                          <span className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${typeColors[item.type].bg} text-white text-xs font-medium rounded-full`}>
                            {typeLabels[item.type]}
                          </span>
                          {item.trending && (
                            <span className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full flex items-center space-x-1">
                              <TrendingUp className="w-3 h-3" />
                              <span>Trending</span>
                            </span>
                          )}
                        </div>
                      )}

                      {/* Content */}
                      <div className="relative p-5 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-kanyini-primary transition-colors line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 mb-3 line-clamp-2 text-sm leading-relaxed">
                          {item.excerpt}
                        </p>

                        {/* Spacer */}
                        <div className="flex-grow"></div>

                        {/* Meta */}
                        <div className="flex items-center justify-between text-sm pt-3 border-t border-white/10 mt-auto">
                          <div className="flex items-center space-x-2">
                            <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${typeColors[item.type].bg} flex items-center justify-center text-white font-bold text-xs`}>
                              {item.author.split(' ').map(n => n.charAt(0)).join('').slice(0, 2)}
                            </div>
                            <span className="text-gray-300 text-xs font-medium truncate">{item.author}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-500 flex-shrink-0">
                            <Clock className="w-3 h-3" />
                            <span className="text-xs">{item.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
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
            </>
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

export default function LibraryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-kanyini-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading library...</p>
        </div>
      </div>
    }>
      <LibraryPageContent />
    </Suspense>
  );
}

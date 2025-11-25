'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { Play, Clock, Eye, TrendingUp, Sparkles, Filter, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type MediaType = 'podcast' | 'video' | 'series';
type CategoryType = 'philosophy' | 'sustainability' | 'culture' | 'science' | 'stories';

interface MediaItem {
  id: number;
  type: MediaType;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  date: string;
  category: CategoryType;
  featured?: boolean;
  trending?: boolean;
  episodeNumber?: number;
  season?: number;
  host?: string;
}

const mediaContent: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    title: 'Dancing with the Universe: The Journey',
    description: 'A visual exploration of the book that started it all. Join Jeevak as he recounts the train journey through the Himalayas that sparked a philosophical revolution.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    duration: '18:42',
    views: '12.5K',
    date: '2025-11-15',
    category: 'philosophy',
    featured: true,
    trending: true,
    videoUrl: 'https://www.youtube.com/embed/29XymHesxa0',
  },
  {
    id: 2,
    type: 'podcast',
    title: 'KanYini Conversations: Ep 01 - The Meaning of Belonging',
    description: 'Our first deep-dive into what it means to belong—not to a place, but to the Earth itself.',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    duration: '45:12',
    views: '8.2K',
    date: '2025-11-10',
    category: 'philosophy',
    episodeNumber: 1,
    season: 1,
    host: 'Jeevak & OJ',
    videoUrl: 'https://www.youtube.com/embed/29XymHesxa0',
  },
  {
    id: 3,
    type: 'video',
    title: 'The Last Monsoon: A Short Film',
    description: 'Based on our viral short story. In a village where rain used to dance on rooftops, drought has become the new reality.',
    thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
    duration: '12:30',
    views: '25.1K',
    date: '2025-10-22',
    category: 'stories',
    trending: true,
    videoUrl: 'https://www.youtube.com/embed/29XymHesxa0',
  },
  {
    id: 4,
    type: 'podcast',
    title: 'KanYini Conversations: Ep 02 - Science Meets Spirit',
    description: 'Can rational inquiry and spiritual wisdom coexist? Featuring Dr. Awadhesh Prasad.',
    thumbnail: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80',
    duration: '52:18',
    views: '6.8K',
    date: '2025-11-20',
    category: 'science',
    episodeNumber: 2,
    season: 1,
    host: 'Jeevak & Dr. Awadhesh',
    videoUrl: 'https://www.youtube.com/embed/29XymHesxa0',
  },
  {
    id: 5,
    type: 'video',
    title: 'Indigenous Wisdom: Lessons from the Pitjantjatjara',
    description: 'Understanding KanYini through the eyes of the Aboriginal people who gifted us this word.',
    thumbnail: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=800&q=80',
    duration: '22:45',
    views: '15.3K',
    date: '2025-09-30',
    category: 'culture',
    videoUrl: 'https://www.youtube.com/embed/29XymHesxa0',
  },
  {
    id: 6,
    type: 'series',
    title: 'Sustainable Futures: A 6-Part Series',
    description: 'Real solutions from real people building regenerative communities across the globe.',
    thumbnail: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80',
    duration: '6 episodes',
    views: '32.4K',
    date: '2025-08-15',
    category: 'sustainability',
    trending: true,
    videoUrl: 'https://www.youtube.com/embed/29XymHesxa0',
  },
];

const categories: { id: CategoryType | 'all'; label: string }[] = [
  { id: 'all', label: 'All Content' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'culture', label: 'Culture' },
  { id: 'science', label: 'Science' },
  { id: 'stories', label: 'Stories' },
];

export default function MediaPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<CategoryType | 'all'>('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  const handleItemClick = (id: number) => {
    router.push(`/media/watch/${id}`);
  };

  const featuredItem = mediaContent.find(item => item.featured);
  const filteredContent = activeCategory === 'all' 
    ? mediaContent 
    : mediaContent.filter(item => item.category === activeCategory);

  const trendingContent = mediaContent.filter(item => item.trending);

  return (
    <main ref={containerRef} className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Featured Hero Section - Netflix Style */}
      {featuredItem && (
        <motion.section 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative h-screen w-full"
        >
          {/* Background Video/Image */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full bg-gradient-to-br from-kanyini-dark via-black to-kanyini-primary/20">
              {featuredItem.thumbnail ? (
                <Image
                  src={featuredItem.thumbnail}
                  alt={featuredItem.title}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-32 h-32 text-white/10" />
                </div>
              )}
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-center px-4 sm:px-8 lg:px-16">
            <div className="max-w-3xl space-y-8">
              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <span className="px-4 py-1.5 bg-red-600 text-white text-sm font-bold uppercase rounded">
                  Featured
                </span>
                {featuredItem.trending && (
                  <span className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded">
                    <TrendingUp className="w-4 h-4" />
                    <span>Trending</span>
                  </span>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight"
              >
                {featuredItem.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                {featuredItem.description}
              </motion.p>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center space-x-6 text-sm text-gray-400"
              >
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredItem.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{featuredItem.views} views</span>
                </div>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium uppercase">
                  {featuredItem.type}
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap items-center gap-4"
              >
                <button 
                  onClick={() => handleItemClick(featuredItem.id)}
                  className="flex items-center space-x-3 px-8 py-4 bg-white text-black rounded-lg font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-2xl"
                >
                  <Play className="w-6 h-6 fill-black" />
                  <span>Watch Now</span>
                </button>
                <button className="flex items-center space-x-3 px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white/30 transition-all border border-white/30">
                  <Sparkles className="w-5 h-5" />
                  <span>More Info</span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/50"
          >
            <span className="text-sm uppercase tracking-widest">Explore More</span>
            <ChevronRight className="w-6 h-6 rotate-90" />
          </motion.div>
        </motion.section>
      )}

      {/* Main Content Area */}
      <div className="relative z-20 bg-black">
        {/* Categories - Netflix Style Pills */}
        <div className="sticky top-20 z-30 bg-black/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 lg:px-16 py-6">
          <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white text-black shadow-lg shadow-white/20'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Trending Row - Horizontal Scroll */}
        {trendingContent.length > 0 && (
          <section className="px-4 sm:px-8 lg:px-16 py-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold flex items-center space-x-3">
                <TrendingUp className="w-8 h-8 text-red-500" />
                <span>Trending Now</span>
              </h2>
            </div>

            <div className="relative">
              <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
                {trendingContent.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                    onClick={() => handleItemClick(item.id)}
                    className="flex-shrink-0 w-80 group cursor-pointer"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-kanyini-primary to-kanyini-dark">
                      {item.thumbnail ? (
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-16 h-16 text-white/30" />
                        </div>
                      )}
                      
                      {/* Overlay on Hover */}
                      <AnimatePresence>
                        {hoveredItem === item.id && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center"
                          >
                            <motion.button
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center backdrop-blur-sm shadow-2xl"
                            >
                              <Play className="w-8 h-8 text-black fill-black ml-1" />
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs font-medium">
                        {item.duration}
                      </div>

                      {/* Trending Badge */}
                      <div className="absolute top-3 left-3 px-2 py-1 bg-red-600 rounded text-xs font-bold uppercase">
                        #Top {idx + 1}
                      </div>
                    </div>

                    <div className="mt-3 space-y-1">
                      <h3 className="font-bold text-lg line-clamp-1 group-hover:text-kanyini-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-3 text-sm text-gray-400">
                        <span>{item.views} views</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Grid - YouTube Style */}
        <section className="px-4 sm:px-8 lg:px-16 py-12">
          <h2 className="text-3xl font-bold mb-8">
            {activeCategory === 'all' ? 'All Content' : categories.find(c => c.id === activeCategory)?.label}
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredContent.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  onClick={() => handleItemClick(item.id)}
                  className="group cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-kanyini-primary to-kanyini-dark mb-3">
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white/30" />
                      </div>
                    )}

                    {/* Play Overlay */}
                    <AnimatePresence>
                      {hoveredItem === item.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-black/50 flex items-center justify-center"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl"
                          >
                            <Play className="w-7 h-7 text-black fill-black ml-0.5" />
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Duration */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/80 backdrop-blur-sm rounded text-xs font-medium">
                      {item.duration}
                    </div>

                    {/* Type Badge */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/90 backdrop-blur-sm text-black rounded text-xs font-bold uppercase">
                      {item.type}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-base line-clamp-2 leading-tight group-hover:text-kanyini-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    {item.host && (
                      <p className="text-sm text-gray-400">
                        {item.host}
                      </p>
                    )}

                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span>{item.views} views</span>
                      <span>•</span>
                      <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    {item.episodeNumber && (
                      <p className="text-xs text-kanyini-primary font-medium">
                        S{item.season} E{item.episodeNumber}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
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
              <h3 className="text-2xl font-bold text-gray-400 mb-2">No content found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </motion.div>
          )}
        </section>

        {/* Subscribe CTA */}
        <section className="px-4 sm:px-8 lg:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-kanyini-primary via-kanyini-dark to-black p-12 text-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <Sparkles className="w-12 h-12 mx-auto text-white" />
              <h2 className="text-4xl sm:text-5xl font-bold">
                Never Miss a Moment
              </h2>
              <p className="text-xl text-gray-300">
                Subscribe to get notified when we drop new videos, podcasts, and series
              </p>
              <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-2xl">
                Subscribe Now
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}


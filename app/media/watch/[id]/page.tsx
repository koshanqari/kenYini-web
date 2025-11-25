'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Share2, ThumbsUp, Eye, Clock, ChevronRight } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

// Same mock data structure
const mediaContent = [
  {
    id: 1,
    type: 'video',
    title: 'Dancing with the Universe: The Journey',
    description: 'A visual exploration of the book that started it all. Join Jeevak as he recounts the train journey through the Himalayas that sparked a philosophical revolution.',
    fullDescription: 'In this deeply personal documentary, Jeevak takes us on a journey through the Himalayan foothills, retracing the train ride that changed everything. Through stunning cinematography and intimate conversations, we explore how a chance encounter on a train became the foundation for an entire movement. This is more than a story about a book—it\'s about the moments that shift our perspective forever.',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    duration: '18:42',
    views: '12.5K',
    date: '2025-11-15',
    category: 'philosophy',
    host: 'Jeevak',
    videoUrl: 'https://www.youtube.com/embed/29XymHesxa0',
  },
  {
    id: 2,
    type: 'podcast',
    title: 'KanYini Conversations: Ep 01 - The Meaning of Belonging',
    description: 'Our first deep-dive into what it means to belong—not to a place, but to the Earth itself.',
    fullDescription: 'In our inaugural episode, we explore one of humanity\'s most fundamental questions: what does it mean to truly belong? Not to a country, not to a community, but to the Earth itself. Featuring insights from philosophers, indigenous elders, and everyday people grappling with displacement and connection.',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    duration: '45:12',
    views: '8.2K',
    date: '2025-11-10',
    category: 'philosophy',
    host: 'Jeevak & OJ',
    videoUrl: 'https://www.youtube.com/embed/29XymHesxa0',
  },
  {
    id: 3,
    type: 'video',
    title: 'The Last Monsoon: A Short Film',
    description: 'Based on our viral short story. In a village where rain used to dance on rooftops, drought has become the new reality.',
    fullDescription: 'Adapted from our most-read short story, this poignant film captures the slow transformation of a village as climate change reshapes not just the land, but the very fabric of community life. Through the eyes of a grandmother who remembers when rain was abundant, we witness both loss and resilience.',
    thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
    duration: '12:30',
    views: '25.1K',
    date: '2025-10-22',
    category: 'stories',
    videoUrl: 'https://www.youtube.com/embed/29XymHesxa0',
  },
];

const relatedContent = [
  {
    id: 4,
    title: 'Science Meets Spirit - Episode 2',
    thumbnail: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80',
    duration: '52:18',
    views: '6.8K',
  },
  {
    id: 5,
    title: 'Indigenous Wisdom',
    thumbnail: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=800&q=80',
    duration: '22:45',
    views: '15.3K',
  },
  {
    id: 6,
    title: 'Sustainable Futures Series',
    thumbnail: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80',
    duration: '6 episodes',
    views: '32.4K',
  },
];

export default function WatchPage() {
  const router = useRouter();
  const params = useParams();
  const id = parseInt(params.id as string);
  const [liked, setLiked] = useState(false);
  
  const currentItem = mediaContent.find(item => item.id === id);
  
  if (!currentItem) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Content not found</h1>
          <button 
            onClick={() => router.push('/media')}
            className="px-6 py-3 bg-kanyini-primary text-white rounded-lg hover:bg-kanyini-dark transition-colors"
          >
            Back to Media
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      {/* Video Player Section */}
      <div className="relative bg-black">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push('/media')}
          className="absolute top-8 left-8 z-50 flex items-center space-x-2 px-4 py-2 bg-black/80 backdrop-blur-sm text-white rounded-lg hover:bg-black transition-all border border-white/20"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </motion.button>

        {/* Video Player */}
        <div className="relative w-full aspect-video bg-gray-900">
          <iframe
            src={`${currentItem.videoUrl}?autoplay=1&mute=0&rel=0&modestbranding=1`}
            title={currentItem.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentItem.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>{currentItem.views} views</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentItem.duration}</span>
                </div>
                <span>•</span>
                <span>{new Date(currentItem.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  liked
                    ? 'bg-kanyini-primary text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <ThumbsUp className={`w-5 h-5 ${liked ? 'fill-white' : ''}`} />
                <span>{liked ? 'Liked' : 'Like'}</span>
              </button>

              <button className="flex items-center space-x-2 px-6 py-3 bg-white/10 text-gray-300 hover:bg-white/20 rounded-full font-medium transition-all">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </motion.div>

            {/* Host Info */}
            {currentItem.host && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-4 p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-kanyini-primary flex items-center justify-center text-white font-bold text-xl">
                  {currentItem.host.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{currentItem.host}</p>
                  <p className="text-sm text-gray-400">Host</p>
                </div>
              </motion.div>
            )}

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 bg-white/5 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4">About</h3>
              <p className="text-gray-300 leading-relaxed">
                {currentItem.fullDescription || currentItem.description}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-4 text-sm">
                  <span className="px-3 py-1 bg-kanyini-primary/20 text-kanyini-primary rounded-full font-medium uppercase">
                    {currentItem.type}
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full">
                    {currentItem.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Related Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Up Next</h3>
            
            <div className="space-y-4">
              {relatedContent.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  onClick={() => router.push(`/media/watch/${item.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="flex space-x-3">
                    <div className="relative w-40 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-kanyini-primary to-kanyini-dark">
                      {item.thumbnail ? (
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-8 h-8 text-white/30" />
                        </div>
                      )}
                      <div className="absolute bottom-1 right-1 px-1.5 py-0.5 bg-black/80 backdrop-blur-sm rounded text-xs font-medium">
                        {item.duration}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold line-clamp-2 group-hover:text-kanyini-primary transition-colors mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-400">{item.views} views</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => router.push('/media')}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-all"
            >
              <span>View All</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}


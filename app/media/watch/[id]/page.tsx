'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, ThumbsUp, Eye, Clock, ChevronRight, MessageSquare, User, Play } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';

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
    videoUrl: 'https://www.youtube.com/embed/JrqtU4T870Y',
    comments: [
      {
        id: 1,
        author: 'Sarah Mitchell',
        date: '2025-11-16',
        content: 'This documentary gave me chills. The cinematography is stunning, but it\'s the raw honesty in Jeevak\'s storytelling that really moved me. Can\'t wait to read the book now!',
      },
      {
        id: 2,
        author: 'Raj Patel',
        date: '2025-11-17',
        content: 'As someone who grew up in the Himalayas, this hit home. The way you captured the essence of those train journeys—the conversations with strangers that change you—is beautiful.',
      },
      {
        id: 3,
        author: 'Emma Chen',
        date: '2025-11-18',
        content: 'I\'ve watched this three times already. Every time I notice something new—a small gesture, a moment of silence that speaks volumes. This is more than a documentary; it\'s a meditation.',
      },
    ],
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
    comments: [
      {
        id: 1,
        author: 'Michael Torres',
        date: '2025-11-11',
        content: 'The conversation with the elder about "belonging to the land, not owning it" really shifted something in me. I keep coming back to that moment.',
      },
      {
        id: 2,
        author: 'Priya Sharma',
        date: '2025-11-12',
        content: 'This is exactly the kind of deep, meaningful dialogue we need more of. Thank you for creating a space where philosophy meets real life.',
      },
    ],
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
    comments: [
      {
        id: 1,
        author: 'Ananya Desai',
        date: '2025-10-23',
        content: 'I cried watching this. My grandmother used to tell similar stories about her village. This film is a powerful reminder of what we stand to lose.',
      },
      {
        id: 2,
        author: 'James Anderson',
        date: '2025-10-24',
        content: 'Haunting and beautiful. The way you portray climate change not as an abstract concept but as a lived experience is what makes this so impactful.',
      },
      {
        id: 3,
        author: 'Lakshmi Reddy',
        date: '2025-10-25',
        content: 'This should be shown in schools. The storytelling is accessible yet profound, perfect for starting difficult but necessary conversations about our future.',
      },
      {
        id: 4,
        author: 'David Kim',
        date: '2025-10-26',
        content: 'The cinematography is incredible, but what stays with you is the humanity. You\'ve made climate change personal, and that\'s when real change begins.',
      },
    ],
  },
];

const relatedContent = [
  {
    id: 2,
    title: 'KanYini Conversations: Ep 01 - The Meaning of Belonging',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    duration: '45:12',
    views: '8.2K',
  },
  {
    id: 3,
    title: 'The Last Monsoon: A Short Film',
    thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
    duration: '12:30',
    views: '25.1K',
  },
  {
    id: 4,
    title: 'KanYini Conversations: Ep 02 - Science Meets Spirit',
    thumbnail: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80',
    duration: '52:18',
    views: '6.8K',
  },
  {
    id: 5,
    title: 'Indigenous Wisdom: Lessons from the Pitjantjatjara',
    thumbnail: 'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=800&q=80',
    duration: '22:45',
    views: '15.3K',
  },
  {
    id: 6,
    title: 'Sustainable Futures: Urban Farming Revolution',
    thumbnail: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80',
    duration: '28:15',
    views: '18.7K',
  },
  {
    id: 7,
    title: 'The Art of Deep Listening',
    thumbnail: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    duration: '15:30',
    views: '9.4K',
  },
];

export default function WatchPage() {
  const router = useRouter();
  const params = useParams();
  const id = parseInt(params.id as string);
  const [liked, setLiked] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    comment: '',
  });
  
  const currentItem = mediaContent.find(item => item.id === id);
  
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Comment submitted:', commentData);
    // Reset form
    setCommentData({ name: '', email: '', comment: '' });
    setShowCommentForm(false);
    // Show success message
    alert('Thank you for your comment! (This is a mock submission)');
  };
  
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
    <main className="min-h-screen bg-black text-white pt-24 pb-20">
      {/* Back Button */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 mb-4">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push('/media')}
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Media</span>
        </motion.button>
      </div>

      {/* YouTube-like Layout */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Video & Details */}
          <div className="flex-1 max-w-[1200px]">
            {/* Video Player */}
            <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden mb-4">
              <iframe
                src={`${currentItem.videoUrl}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                title={currentItem.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="space-y-4">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-2xl font-bold mb-3">{currentItem.title}</h1>
                
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>{currentItem.views} views</span>
                    </div>
                    <span>•</span>
                    <span>{new Date(currentItem.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        liked
                          ? 'bg-kanyini-primary text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${liked ? 'fill-white' : ''}`} />
                      <span className="hidden sm:inline">{liked ? 'Liked' : 'Like'}</span>
                    </button>

                    <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-gray-300 hover:bg-white/20 rounded-full text-sm font-medium transition-all">
                      <Share2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Share</span>
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Host Info & Description Combined */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-4 bg-white/5 rounded-xl"
              >
                {currentItem.host && (
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-kanyini-primary flex items-center justify-center text-white font-bold">
                      {currentItem.host.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{currentItem.host}</p>
                      <p className="text-xs text-gray-400">Host</p>
                    </div>
                  </div>
                )}
                
                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  {currentItem.fullDescription || currentItem.description}
                </p>

                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-kanyini-primary/20 text-kanyini-primary rounded text-xs font-medium uppercase">
                    {currentItem.type}
                  </span>
                  <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs">
                    {currentItem.category}
                  </span>
                  <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{currentItem.duration}</span>
                  </span>
                </div>
              </motion.div>

              {/* Comments Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6 text-kanyini-primary" />
                  <span>Comments ({currentItem.comments?.length || 0})</span>
                </h3>
                
                {currentItem.comments && currentItem.comments.length > 0 ? (
                  <div className="space-y-6">
                    {currentItem.comments.map((comment) => (
                      <div key={comment.id} className="flex space-x-4 p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                        <div className="w-10 h-10 rounded-full bg-kanyini-primary flex items-center justify-center text-white font-bold flex-shrink-0">
                          {comment.author.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-sm">{comment.author}</h4>
                            <span className="text-xs text-gray-500">
                              {new Date(comment.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric', 
                                year: 'numeric' 
                              })}
                            </span>
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">{comment.content}</p>
                        </div>
                      </div>
                    ))}

                    {/* Comment Form */}
                    {!showCommentForm ? (
                      <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center mt-8">
                        <p className="text-gray-400 mb-4">
                          Join the conversation! Share your thoughts on this video.
                        </p>
                        <Button 
                          onClick={() => setShowCommentForm(true)}
                          className="bg-kanyini-primary hover:bg-kanyini-dark"
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Leave a Comment
                        </Button>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/5 rounded-xl p-8 border border-white/10 mt-8"
                      >
                        <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
                          <User className="w-5 h-5 text-kanyini-primary" />
                          <span>Leave a Comment</span>
                        </h4>
                        <form onSubmit={handleCommentSubmit} className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Name *
                            </label>
                            <input
                              type="text"
                              value={commentData.name}
                              onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              value={commentData.email}
                              onChange={(e) => setCommentData({ ...commentData, email: e.target.value })}
                              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Comment *
                            </label>
                            <textarea
                              value={commentData.comment}
                              onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                              rows={6}
                              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent resize-vertical"
                              required
                            />
                          </div>

                          <div className="flex items-center space-x-4">
                            <Button 
                              type="submit"
                              className="bg-kanyini-primary hover:bg-kanyini-dark"
                            >
                              Submit Comment
                            </Button>
                            <Button 
                              type="button"
                              onClick={() => setShowCommentForm(false)}
                              variant="outline"
                              className="border-white/20 text-gray-300 hover:bg-white/10"
                            >
                              Cancel
                            </Button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <div>
                    {/* No comments yet - show comment form directly */}
                    {!showCommentForm ? (
                      <div className="bg-white/5 rounded-xl p-8 border border-white/10 text-center">
                        <p className="text-gray-400">
                          Be the first to share your thoughts!
                        </p>
                        <Button 
                          onClick={() => setShowCommentForm(true)}
                          className="mt-4 bg-kanyini-primary hover:bg-kanyini-dark"
                        >
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Leave a Comment
                        </Button>
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/5 rounded-xl p-8 border border-white/10"
                      >
                        <h4 className="text-xl font-bold mb-6 flex items-center space-x-2">
                          <User className="w-5 h-5 text-kanyini-primary" />
                          <span>Leave a Comment</span>
                        </h4>
                        <form onSubmit={handleCommentSubmit} className="space-y-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Name *
                            </label>
                            <input
                              type="text"
                              value={commentData.name}
                              onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              value={commentData.email}
                              onChange={(e) => setCommentData({ ...commentData, email: e.target.value })}
                              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent"
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Comment *
                            </label>
                            <textarea
                              value={commentData.comment}
                              onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                              rows={6}
                              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent resize-vertical"
                              required
                            />
                          </div>

                          <div className="flex items-center space-x-4">
                            <Button 
                              type="submit"
                              className="bg-kanyini-primary hover:bg-kanyini-dark"
                            >
                              Submit Comment
                            </Button>
                            <Button 
                              type="button"
                              onClick={() => setShowCommentForm(false)}
                              variant="outline"
                              className="border-white/20 text-gray-300 hover:bg-white/10"
                            >
                              Cancel
                            </Button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Right Sidebar - Recommendations (YouTube-style) */}
          <div className="w-full lg:w-[400px] space-y-3">
            <h3 className="text-lg font-bold mb-4">Related Videos</h3>
            
            <div className="space-y-2">
              {relatedContent.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  onClick={() => router.push(`/media/watch/${item.id}`)}
                  className="group cursor-pointer hover:bg-white/5 rounded-lg p-2 transition-colors"
                >
                  <div className="flex gap-2">
                    <div className="relative w-[168px] h-[94px] rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-kanyini-primary to-kanyini-dark">
                      {item.thumbnail ? (
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-6 h-6 text-white/30" />
                        </div>
                      )}
                      <div className="absolute bottom-1 right-1 px-1 py-0.5 bg-black/90 backdrop-blur-sm rounded text-[10px] font-semibold">
                        {item.duration}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-kanyini-primary transition-colors mb-1 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 mb-0.5">KanYini Earth</p>
                      <p className="text-xs text-gray-500">{item.views} views</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => router.push('/media')}
              className="w-full flex items-center justify-center space-x-2 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-all mt-4"
            >
              <span>Show more</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}


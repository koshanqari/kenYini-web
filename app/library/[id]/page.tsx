'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Mail, MessageCircle, Send } from 'lucide-react';
import { articlesData } from '../../../lib/articles';
import Button from '../../../components/ui/Button';

export default function ArticlePage() {
  const router = useRouter();
  const { id } = useParams();
  const article = articlesData[Number(id)];
  const [showCommentForm, setShowCommentForm] = React.useState(false);
  const [commentData, setCommentData] = React.useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle comment submission
    console.log('Comment submitted:', commentData);
    // Reset form
    setCommentData({ name: '', email: '', comment: '' });
    setShowCommentForm(false);
    // Show success message
    alert('Thank you for your comment! It will be reviewed before being published.');
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/library')}>
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Library
          </Button>
        </div>
      </div>
    );
  }

  const recentPosts = [
    { title: 'From Ownership to Kinship: Rethinking Our Place on Earth', date: 'Nov 22, 2025', id: 1 },
    { title: 'Departure at Noon', date: 'Nov 21, 2025', id: 2 },
    { title: 'Aging Bodies. Anxious minds', date: 'Sep 18, 2025', id: 3 },
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Back Button - Fixed */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => router.push('/library')}
        className="fixed top-24 left-8 z-50 flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-900 rounded-lg hover:bg-gray-100 transition-all border border-gray-200 shadow-lg"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Library</span>
      </motion.button>

      {/* Hero Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.category.map((cat: string) => (
                <span key={cat} className="px-3 py-1 bg-kanyini-primary text-white rounded-full text-sm">
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {article.title}
            </h1>
            <div className="flex items-center space-x-6 text-white/90 text-sm">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-em:text-gray-800"
            >
              {article.content.split('\n\n').map((paragraph: string, idx: number) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  // Heading
                  return (
                    <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                  // Italic quote
                  return (
                    <blockquote key={idx} className="border-l-4 border-kanyini-primary pl-6 italic text-gray-700 my-6">
                      {paragraph.replace(/\*/g, '')}
                    </blockquote>
                  );
                } else {
                  return (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </motion.article>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12 p-8 bg-gray-50 rounded-2xl border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Author</h3>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-kanyini-primary flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{article.author.name}</h4>
                  <p className="text-gray-600 mt-2 leading-relaxed">{article.author.bio}</p>
                  {article.author.email && (
                    <div className="flex items-center space-x-2 mt-3 text-kanyini-primary">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${article.author.email}`} className="hover:underline">
                        {article.author.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Comments Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <MessageCircle className="w-6 h-6" />
                <span>Comments ({article.comments?.length || 0})</span>
              </h3>
              
              {article.comments && article.comments.length > 0 ? (
                <div className="space-y-6">
                  {article.comments.map((comment: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-kanyini-primary flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                          {comment.author.charAt(0)}
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-bold text-gray-900">{comment.author}</h4>
                            <span className="text-sm text-gray-500">{comment.date}</span>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {!showCommentForm ? (
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center mt-8">
                      <p className="text-gray-600 mb-4">
                        Join the conversation! Share your thoughts on this article.
                      </p>
                      <Button 
                        onClick={() => setShowCommentForm(true)}
                        className="bg-kanyini-primary hover:bg-kanyini-dark"
                      >
                        Leave a Comment
                      </Button>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-2xl p-8 border border-gray-200 mt-8"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Leave a Reply</h4>
                      <form onSubmit={handleCommentSubmit} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            value={commentData.name}
                            onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={commentData.email}
                            onChange={(e) => setCommentData({ ...commentData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Comment *
                          </label>
                          <textarea
                            value={commentData.comment}
                            onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent resize-vertical"
                            required
                          />
                        </div>

                        <div className="flex space-x-4">
                          <Button 
                            type="submit"
                            className="bg-kanyini-primary hover:bg-kanyini-dark text-white"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Submit Comment
                          </Button>
                          <Button 
                            type="button"
                            onClick={() => setShowCommentForm(false)}
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </div>
              ) : (
                <>
                  {!showCommentForm ? (
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 text-center">
                      <p className="text-gray-600">
                        Be the first to comment on this article. Share your thoughts and engage with the community.
                      </p>
                      <Button 
                        onClick={() => setShowCommentForm(true)}
                        className="mt-4 bg-kanyini-primary hover:bg-kanyini-dark"
                      >
                        Leave a Comment
                      </Button>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-2xl p-8 border border-gray-200"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Leave a Reply</h4>
                      <form onSubmit={handleCommentSubmit} className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            value={commentData.name}
                            onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            value={commentData.email}
                            onChange={(e) => setCommentData({ ...commentData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Comment *
                          </label>
                          <textarea
                            value={commentData.comment}
                            onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent resize-vertical"
                            required
                          />
                        </div>

                        <div className="flex space-x-4">
                          <Button 
                            type="submit"
                            className="bg-kanyini-primary hover:bg-kanyini-dark text-white"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Submit Comment
                          </Button>
                          <Button 
                            type="button"
                            onClick={() => setShowCommentForm(false)}
                            variant="outline"
                            className="border-gray-300 text-gray-700 hover:bg-gray-50"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recent Posts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200 sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/library/${post.id}`}
                    className="block group"
                  >
                    <div className="p-4 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-gray-200">
                      <h4 className="font-semibold text-gray-900 group-hover:text-kanyini-primary transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-kanyini-primary hover:text-kanyini-primary transition-colors cursor-pointer">
                    Creative Article
                  </span>
                  <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-kanyini-primary hover:text-kanyini-primary transition-colors cursor-pointer">
                    Short Story
                  </span>
                  <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-kanyini-primary hover:text-kanyini-primary transition-colors cursor-pointer">
                    Uncategorized
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}


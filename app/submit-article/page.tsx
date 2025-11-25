'use client';

import { motion } from 'framer-motion';
import { PenLine, Upload, User, Mail, FileText, Send } from 'lucide-react';
import { useState } from 'react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';

export default function SubmitArticlePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    title: '',
    content: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Animated Background Grid */}
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
        <div className="max-w-4xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <PenLine className="w-16 h-16 text-kanyini-primary" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Submit Your{' '}
              <span className="bg-gradient-to-r from-kanyini-primary via-kanyini-light to-kanyini-accent bg-clip-text text-transparent">
                Article
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Share your story, insights, or creative work with the KanYini community
            </p>
          </motion.div>

          {/* Submission Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
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
                    Upload Article (PDF)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-kanyini-primary file:text-white hover:file:bg-kanyini-dark cursor-pointer"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Optional: Upload your article as a PDF document</p>
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
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center text-gray-400 text-sm"
            >
              <p>
                By submitting your article, you agree to our{' '}
                <a href="#" className="text-kanyini-primary hover:underline">
                  submission guidelines
                </a>
                {' '}and{' '}
                <a href="#" className="text-kanyini-primary hover:underline">
                  terms of service
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}


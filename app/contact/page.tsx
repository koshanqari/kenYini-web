'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, Clock, Globe } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you soon. (This is a mock submission)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['admin@keaprojects.com.au', 'kanyini.earth2025@gmail.com'],
      color: 'from-kanyini-primary to-kanyini-dark',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Sydney, Australia', 'Working globally, thinking locally'],
      color: 'from-kanyini-accent to-orange-600',
    },
    {
      icon: Clock,
      title: 'Response Time',
      details: ['We typically respond within 2-3 business days', 'Your message matters to us'],
      color: 'from-kanyini-dark to-gray-700',
    },
    {
      icon: Globe,
      title: 'Connect',
      details: ['Join our global community', 'Follow our journey on social media'],
      color: 'from-kanyini-light to-kanyini-primary',
    },
  ];

  return (
    <main ref={containerRef} className="relative bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(89, 114, 66, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(89, 114, 66, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
          
          {/* Floating orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-20 w-96 h-96 bg-kanyini-primary rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-kanyini-accent rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 mx-auto mb-8 relative"
            >
              <MessageSquare className="w-full h-full text-kanyini-primary" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Get in{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-kanyini-primary via-kanyini-light to-kanyini-primary bg-clip-text text-transparent animate-pulse">
                  Touch
                </span>
                <motion.div
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-kanyini-primary"
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
              Have a question, idea, or just want to connect? We'd love to hear from you.
            </p>
            <p className="text-lg md:text-xl text-kanyini-light max-w-3xl mx-auto mb-12 leading-relaxed font-semibold">
              Let's build a more connected world together.
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-kanyini-primary mt-16"
            >
              <span className="text-sm uppercase tracking-widest">Scroll to reach out</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="relative bg-white text-gray-900 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Ways to Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the way that works best for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className={`text-gray-600 ${i === 0 ? 'font-medium' : 'text-sm'}`}>
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative bg-gradient-to-br from-kanyini-dark to-black text-white py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Send Us a <span className="text-kanyini-primary">Message</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <User className="w-4 h-4 text-kanyini-primary" />
                  <span>Your Name *</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-kanyini-primary" />
                  <span>Your Email *</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4 text-kanyini-primary" />
                  <span>Subject *</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent transition-all"
                  placeholder="What is this about?"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center space-x-2">
                  <Send className="w-4 h-4 text-kanyini-primary" />
                  <span>Your Message *</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={8}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-kanyini-primary focus:border-transparent resize-vertical transition-all"
                  placeholder="Tell us what's on your mind..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-kanyini-primary hover:bg-kanyini-dark"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>

              <p className="text-sm text-gray-400 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="relative bg-black py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What to <span className="text-kanyini-primary">Expect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here's what happens after you reach out
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-kanyini-primary/50 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kanyini-primary to-kanyini-dark flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">We Receive</h3>
              <p className="text-gray-400">
                Your message lands directly in our inbox, and we review it carefully.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-kanyini-primary/50 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kanyini-accent to-orange-600 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">We Respond</h3>
              <p className="text-gray-400">
                Within 2-3 business days, we'll send you a thoughtful response.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-kanyini-primary/50 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kanyini-dark to-gray-700 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">We Connect</h3>
              <p className="text-gray-400">
                From there, we'll explore how we can work together or support you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}


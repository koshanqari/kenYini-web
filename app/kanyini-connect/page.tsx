'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Zap, Globe, MessageSquare, Award, Share2, Heart, TrendingUp, Calendar, Shield, Sparkles, ArrowRight, CheckCircle, Target, BarChart3, Layers, Network } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function KanyiniConnectPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const coreFeatures = [
    {
      icon: Users,
      title: 'Dynamic User Profiles',
      description: 'Track your complete journey with contribution history, achievements, and impact metrics. Every action tells your story.',
      color: 'from-kanyini-primary to-kanyini-light',
      stats: { label: 'Active Profiles', value: '5,000+' }
    },
    {
      icon: Target,
      title: 'Project Collaboration',
      description: 'Join projects, track funding progress, and collaborate with teams. QR code sharing makes joining effortless.',
      color: 'from-kanyini-accent to-orange-500',
      stats: { label: 'Active Projects', value: '250+' }
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Feed',
      description: 'Stay updated with posts, podcasts, journals, events, and new projects. All in one intelligent, filterable feed.',
      color: 'from-purple-600 to-indigo-600',
      stats: { label: 'Daily Posts', value: '1,200+' }
    },
    {
      icon: MessageSquare,
      title: 'Smart Messaging',
      description: 'Individual chats, group conversations, and direct admin query system. Communication made seamless.',
      color: 'from-blue-600 to-cyan-600',
      stats: { label: 'Messages/Day', value: '10,000+' }
    },
    {
      icon: Award,
      title: 'Fellowship Discovery',
      description: 'Explore opportunities, apply for programs, and grow your career. From leadership to technical roles.',
      color: 'from-pink-600 to-red-600',
      stats: { label: 'Fellowships', value: '50+' }
    },
    {
      icon: Calendar,
      title: 'Event Management',
      description: 'Discover, RSVP, and attend community events. From workshops to conferences, stay connected.',
      color: 'from-green-600 to-emerald-600',
      stats: { label: 'Monthly Events', value: '100+' }
    }
  ];

  const techStack = [
    { name: 'Real-time Sync', icon: Zap, description: 'Instant updates across all devices' },
    { name: 'Cloud Storage', icon: Layers, description: 'Secure, scalable media hosting' },
    { name: 'AI Moderation', icon: Shield, description: 'Smart content filtering' },
    { name: 'Analytics', icon: BarChart3, description: 'Deep impact insights' },
    { name: 'Network Effect', icon: Network, description: 'Growing community power' },
    { name: 'Global Reach', icon: Globe, description: 'Connect across borders' }
  ];

  const impactMetrics = [
    { label: 'Total Impact Created', value: '$2.5M+', icon: TrendingUp, color: 'text-green-400' },
    { label: 'Communities Served', value: '150+', icon: Users, color: 'text-blue-400' },
    { label: 'Lives Changed', value: '50,000+', icon: Heart, color: 'text-red-400' },
    { label: 'Active Contributors', value: '5,000+', icon: Sparkles, color: 'text-yellow-400' }
  ];

  return (
    <main ref={containerRef} className="relative bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        {/* Animated Matrix Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(89, 114, 66, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(89, 114, 66, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(89, 114, 66, 0.08) 0%, transparent 50%)
            `,
          }} />
          
          {/* Floating Grid */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(89, 114, 66, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(89, 114, 66, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
            }}
          />

          {/* Animated Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-kanyini-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo Animation */}
            <motion.div
              animate={{
                rotateY: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-32 h-32 mx-auto mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-kanyini-primary via-kanyini-light to-kanyini-accent rounded-3xl blur-2xl opacity-50 animate-pulse" />
              <Globe className="relative w-full h-full text-kanyini-primary drop-shadow-2xl" />
            </motion.div>

            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-kanyini-primary via-kanyini-light to-kanyini-accent bg-clip-text text-transparent">
                Kanyini Connect
              </span>
            </h1>

            {/* Subtitle with typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-2xl md:text-4xl font-bold text-white mb-4">
                The Future of <span className="text-kanyini-primary">Social Impact</span>
              </p>
              <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
                Where technology meets purpose. A revolutionary platform connecting changemakers, 
                amplifying impact, and building the NGO ecosystem of tomorrow.
              </p>
            </motion.div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {impactMetrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-kanyini-primary/50 transition-all"
                >
                  <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-2`} />
                  <p className="text-2xl md:text-3xl font-bold mb-1">{metric.value}</p>
                  <p className="text-xs text-gray-400">{metric.label}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="https://kan-yini-connect.vercel.app" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-kanyini-primary hover:bg-kanyini-dark text-lg px-12 py-6 group">
                  Launch Platform
                  <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-kanyini-primary text-kanyini-primary hover:bg-kanyini-primary/10 text-lg px-12 py-6">
                Explore Features
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-20"
            >
              <p className="text-sm text-gray-500 uppercase tracking-widest">Scroll to discover</p>
              <div className="w-6 h-10 border-2 border-kanyini-primary/50 rounded-full mx-auto mt-4 relative">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-kanyini-primary rounded-full absolute left-1/2 top-2 -translate-x-1/2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* App In Action Section */}
      <section className="relative bg-black py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-kanyini-primary/20 text-kanyini-primary rounded-full text-sm font-bold uppercase mb-6">
              See It In Action
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              The <span className="text-kanyini-primary">Platform</span> In Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a peek at the beautiful, intuitive interface powering social impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Screenshot 1 - Community Feed */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative"
            >
              {/* Phone Frame */}
              <div className="relative mx-auto" style={{ maxWidth: '300px' }}>
                {/* Phone Outer Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-white/10 group-hover:ring-kanyini-primary/50 transition-all">
                  {/* Phone Inner Frame */}
                  <div className="relative bg-white rounded-[2.5rem] pt-8 px-2 pb-2">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10" />
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-kanyini-primary/20 to-kanyini-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none" />
                    
                    {/* Screenshot */}
                    <div className="relative rounded-[1.5rem] overflow-hidden shadow-lg">
                      <Image
                        src="/app_images/messages.png"
                        alt="Community Feed - Stay updated with latest activities"
                        width={300}
                        height={650}
                        className="w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Phone Button */}
                  <div className="absolute right-0 top-24 w-1 h-12 bg-gray-700 rounded-l" />
                  <div className="absolute right-0 top-40 w-1 h-8 bg-gray-700 rounded-l" />
                  <div className="absolute left-0 top-32 w-1 h-16 bg-gray-700 rounded-r" />
                </div>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <span className="px-3 py-1 bg-kanyini-primary/20 text-kanyini-light rounded-full text-xs font-semibold">
                  Community Feed
                </span>
                <span className="px-3 py-1 bg-kanyini-primary/20 text-kanyini-light rounded-full text-xs font-semibold">
                  Real-time
                </span>
              </div>
            </motion.div>

            {/* Screenshot 2 - Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative"
            >
              {/* Phone Frame */}
              <div className="relative mx-auto" style={{ maxWidth: '300px' }}>
                {/* Phone Outer Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-white/10 group-hover:ring-kanyini-primary/50 transition-all">
                  {/* Phone Inner Frame */}
                  <div className="relative bg-white rounded-[2.5rem] pt-8 px-2 pb-2">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10" />
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-kanyini-primary/20 to-kanyini-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none" />
                    
                    {/* Screenshot */}
                    <div className="relative rounded-[1.5rem] overflow-hidden shadow-lg">
                      <Image
                        src="/app_images/project_overview.png"
                        alt="Project Details - Track funding and team progress"
                        width={300}
                        height={650}
                        className="w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Phone Button */}
                  <div className="absolute right-0 top-24 w-1 h-12 bg-gray-700 rounded-l" />
                  <div className="absolute right-0 top-40 w-1 h-8 bg-gray-700 rounded-l" />
                  <div className="absolute left-0 top-32 w-1 h-16 bg-gray-700 rounded-r" />
                </div>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <span className="px-3 py-1 bg-kanyini-primary/20 text-kanyini-light rounded-full text-xs font-semibold">
                  Project Details
                </span>
                <span className="px-3 py-1 bg-kanyini-primary/20 text-kanyini-light rounded-full text-xs font-semibold">
                  Funding Tracker
                </span>
              </div>
            </motion.div>

            {/* Screenshot 3 - Messages */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative"
            >
              {/* Phone Frame */}
              <div className="relative mx-auto" style={{ maxWidth: '300px' }}>
                {/* Phone Outer Frame */}
                <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-white/10 group-hover:ring-kanyini-primary/50 transition-all">
                  {/* Phone Inner Frame */}
                  <div className="relative bg-white rounded-[2.5rem] pt-8 px-2 pb-2">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10" />
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-kanyini-primary/20 to-kanyini-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none" />
                    
                    {/* Screenshot */}
                    <div className="relative rounded-[1.5rem] overflow-hidden shadow-lg">
                      <Image
                        src="/app_images/Feed.png"
                        alt="Smart Messaging - Connect with your community"
                        width={300}
                        height={650}
                        className="w-full h-auto"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Phone Button */}
                  <div className="absolute right-0 top-24 w-1 h-12 bg-gray-700 rounded-l" />
                  <div className="absolute right-0 top-40 w-1 h-8 bg-gray-700 rounded-l" />
                  <div className="absolute left-0 top-32 w-1 h-16 bg-gray-700 rounded-r" />
                </div>
              </div>

              {/* Feature Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                <span className="px-3 py-1 bg-kanyini-primary/20 text-kanyini-light rounded-full text-xs font-semibold">
                  Messaging
                </span>
                <span className="px-3 py-1 bg-kanyini-primary/20 text-kanyini-light rounded-full text-xs font-semibold">
                  Admin Queries
                </span>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">Experience the platform yourself</p>
            <a href="https://kan-yini-connect.vercel.app" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-kanyini-primary hover:bg-kanyini-dark">
                <Zap className="w-5 h-5 mr-2" />
                Try Kanyini Connect
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Platform Vision */}
      <section className="relative bg-gradient-to-br from-kanyini-dark to-black py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-kanyini-primary/20 text-kanyini-primary rounded-full text-sm font-bold uppercase mb-6">
              Revolutionary Platform
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Reimagining <span className="text-kanyini-primary">NGO Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Traditional NGO platforms are fragmented, outdated, and disconnected. 
              Kanyini Connect unifies everything into one intelligent, beautiful, and powerful ecosystem.
            </p>
          </motion.div>

          {/* 3D Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                className="group relative"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-kanyini-primary/50 transition-all overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity blur-2xl`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-kanyini-light transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-500 mb-1">{feature.stats.label}</p>
                    <p className="text-3xl font-bold text-kanyini-primary">{feature.stats.value}</p>
                  </div>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative bg-white text-gray-900 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Built on <span className="text-kanyini-primary">Cutting-Edge Tech</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade infrastructure powering social impact at scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-gradient-to-br from-kanyini-beige to-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-kanyini-primary to-kanyini-dark flex items-center justify-center mb-6">
                  <tech.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative bg-gradient-to-br from-kanyini-dark to-black py-32 px-4 overflow-hidden">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-kanyini-primary to-transparent"
              style={{
                top: `${i * 5}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scaleX: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Experience the <span className="text-kanyini-primary">Difference</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Join thousands of changemakers already using Kanyini Connect to amplify their impact
            </p>
          </motion.div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Features List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { title: 'Instant Collaboration', description: 'Connect with projects and teams in real-time' },
                { title: 'Impact Tracking', description: 'Visualize your contribution and growth journey' },
                { title: 'Smart Networking', description: 'AI-powered connections with like-minded changemakers' },
                { title: 'Seamless Funding', description: 'Track donations and funding progress transparently' },
                { title: 'Event Management', description: 'RSVP, attend, and organize community gatherings' },
                { title: 'Global Community', description: 'Connect across borders and time zones effortlessly' },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-kanyini-primary/50 transition-all cursor-pointer group"
                >
                  <CheckCircle className="w-6 h-6 text-kanyini-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h4 className="text-xl font-bold mb-1 group-hover:text-kanyini-light transition-colors">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Mockup/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-kanyini-primary/20 to-kanyini-accent/20 border border-kanyini-primary/30 overflow-hidden backdrop-blur-sm">
                {/* Placeholder for app mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-64 h-64 text-kanyini-primary/30" />
                </div>
                
                {/* Floating Icons Animation */}
                {[Users, Heart, Share2, Award, MessageSquare].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <Icon className="w-8 h-8 text-kanyini-primary" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}


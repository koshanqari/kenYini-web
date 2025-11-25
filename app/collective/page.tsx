'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Calendar, MapPin, Clock, Sparkles, Heart, Globe, CheckCircle, Droplet, Trees, Leaf, GraduationCap, Sun, Sprout, BookOpen } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from '@/components/ui/Button';

export default function CollectivePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'projects' | 'events'>('all');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const events = [
    {
      id: 1,
      title: 'Community Networking Night',
      type: 'social',
      date: 'December 18, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Nairobi City Hall',
      attendees: 45,
      maxAttendees: 80,
      description: 'Join fellow community members for an evening of networking, food, and conversations about environmental action. A great opportunity to make new connections and share ideas.',
      organizer: 'Sarah Mwangi',
      isVirtual: false,
      projectId: 1,
      projectName: 'Clean Water for Rural Communities'
    },
    {
      id: 2,
      title: 'Climate Action Workshop',
      type: 'workshop',
      date: 'December 22, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Virtual (Zoom)',
      attendees: 67,
      maxAttendees: 100,
      description: 'Interactive workshop on practical climate action strategies. Learn how to reduce your carbon footprint and engage your community in sustainability efforts.',
      organizer: 'John Kariuki',
      isVirtual: true,
      projectId: 3,
      projectName: 'Coastal Ecosystem Restoration'
    },
    {
      id: 3,
      title: 'Monthly Community Meetup',
      type: 'meetup',
      date: 'January 5, 2026',
      time: '3:00 PM - 5:00 PM',
      location: 'Java House, Westlands',
      attendees: 23,
      maxAttendees: 40,
      description: 'Casual monthly gathering to catch up with community members, share updates on projects, and discuss upcoming initiatives over coffee.',
      organizer: 'Grace Wanjiru',
      isVirtual: false,
      projectId: 4,
      projectName: 'Youth Environmental Leadership Program'
    },
    {
      id: 4,
      title: 'Environmental Leadership Webinar',
      type: 'webinar',
      date: 'January 12, 2026',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual (Teams)',
      attendees: 89,
      maxAttendees: 150,
      description: 'Learn from experienced environmental leaders about building effective grassroots movements and scaling impact. Q&A session included.',
      organizer: 'Emma Akinyi',
      isVirtual: true,
      projectId: 2,
      projectName: 'Indigenous Knowledge Documentation'
    },
    {
      id: 5,
      title: 'East Africa Climate Conference 2026',
      type: 'conference',
      date: 'February 15-17, 2026',
      time: 'All Day',
      location: 'KICC, Nairobi',
      attendees: 234,
      maxAttendees: 500,
      description: '3-day conference bringing together climate activists, researchers, and policymakers from across East Africa. Includes keynotes, panels, and networking sessions.',
      organizer: 'Kanyini Earth Project',
      isVirtual: false,
      projectId: 5,
      projectName: 'Urban Reforestation Initiative'
    },
    {
      id: 6,
      title: 'Youth Climate Forum',
      type: 'meetup',
      date: 'January 20, 2026',
      time: '4:00 PM - 7:00 PM',
      location: 'University of Nairobi',
      attendees: 56,
      maxAttendees: 100,
      description: 'Forum for young environmental activists to share experiences, collaborate on projects, and build a stronger youth climate movement.',
      organizer: 'Robert Otieno',
      isVirtual: false,
      projectId: 4,
      projectName: 'Youth Environmental Leadership Program'
    }
  ];

  const projects = [
    {
      id: '1',
      name: 'Clean Water for Rural Communities',
      type: 'Infrastructure',
      location: 'Nairobi, Kenya',
      description: 'Building sustainable water wells and filtration systems in 15 rural villages. Providing clean drinking water to over 5,000 families and reducing waterborne diseases.',
      impact: 'Over 5,000 families will have access to clean water',
      followers: 456,
      activeMembers: 23,
      status: 'Active',
      moneyRequired: 500000,
      moneyRaised: 380000,
      icon: Droplet,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: '2',
      name: 'Indigenous Knowledge Documentation',
      type: 'Cultural Preservation',
      location: 'Multiple Locations',
      description: 'Documenting and preserving traditional ecological knowledge from indigenous communities. Creating digital archives and educational resources for future generations.',
      impact: 'Preserving knowledge from 50+ indigenous communities',
      followers: 289,
      activeMembers: 12,
      status: 'Active',
      moneyRequired: 50000,
      moneyRaised: 50000,
      icon: BookOpen,
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: '3',
      name: 'Coastal Ecosystem Restoration',
      type: 'Environmental Conservation',
      location: 'Mombasa, Kenya',
      description: 'Restoring mangrove forests and coral reefs along the Kenyan coast. Working with local communities to protect marine biodiversity and improve coastal resilience.',
      impact: '100 hectares of mangrove forest restored',
      followers: 523,
      activeMembers: 45,
      status: 'Active',
      moneyRequired: 150000,
      moneyRaised: 142000,
      icon: Leaf,
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: '4',
      name: 'Youth Environmental Leadership Program',
      type: 'Education & Training',
      location: 'Nairobi, Kenya',
      description: 'Training young environmental leaders through mentorship, workshops, and hands-on projects. Building a network of youth activists driving climate action across East Africa.',
      impact: '200+ youth leaders trained annually',
      followers: 367,
      activeMembers: 18,
      status: 'Active',
      moneyRequired: 300000,
      moneyRaised: 185000,
      icon: GraduationCap,
      color: 'from-indigo-500 to-blue-600',
    },
    {
      id: '5',
      name: 'Urban Reforestation Initiative',
      type: 'Community',
      location: 'Nairobi, Kenya',
      description: 'Planting 50,000 native trees in urban areas to combat air pollution and create green spaces. Partnering with schools and community groups for long-term maintenance.',
      impact: '50,000 trees planted across urban areas',
      followers: 678,
      activeMembers: 52,
      status: 'Active',
      moneyRequired: 200000,
      moneyRaised: 200000,
      icon: Trees,
      color: 'from-green-600 to-lime-600',
    },
    {
      id: '6',
      name: 'Renewable Energy for Schools',
      type: 'Fundraiser',
      location: 'Multiple Locations',
      description: 'Installing solar panels in 20 rural schools to provide reliable electricity for classrooms and computer labs. Enabling digital learning and reducing carbon footprint.',
      impact: '20 schools powered by renewable energy',
      followers: 1240,
      activeMembers: 8,
      status: 'Active',
      moneyRequired: 800000,
      moneyRaised: 620000,
      icon: Sun,
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: '7',
      name: 'Sustainable Agriculture Training',
      type: 'Community',
      location: 'Nairobi, Kenya',
      description: 'Teaching smallholder farmers organic farming techniques, soil conservation, and water management. Improving crop yields while protecting the environment.',
      impact: '500+ farmers trained in sustainable practices',
      followers: 234,
      activeMembers: 6,
      status: 'Active',
      moneyRequired: 75000,
      moneyRaised: 45000,
      icon: Sprout,
      color: 'from-green-500 to-teal-600',
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
              <Users className="w-full h-full text-kanyini-primary" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              KanYini Earth{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-kanyini-primary via-kanyini-light to-kanyini-primary bg-clip-text text-transparent animate-pulse">
                  COLLECTIVE
                </span>
                <motion.div
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-kanyini-primary"
                />
              </span>
            </h1>

            <div className="space-y-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              <p className="font-semibold text-kanyini-light">
                Community-driven initiatives making real impact across the globe
              </p>
              <p>
                Explore {events.length} upcoming events and {projects.length} active projects
              </p>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-kanyini-primary mt-16"
            >
              <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Tabs Navigation */}
      <section className="relative bg-white py-8 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-4 flex-wrap gap-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-kanyini-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              View All
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'events'
                  ? 'bg-kanyini-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Events ({events.length})
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'projects'
                  ? 'bg-kanyini-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Projects ({projects.length})
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      {(activeTab === 'events' || activeTab === 'all') && (
        <section className="relative bg-gradient-to-br from-kanyini-dark to-black text-white py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Upcoming <span className="text-kanyini-primary">Events</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join us at workshops, meetups, and conferences across East Africa
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-kanyini-primary/50 transition-all"
                >
                  {/* Event Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        event.type === 'workshop' ? 'bg-purple-500/20 text-purple-300' :
                        event.type === 'meetup' ? 'bg-blue-500/20 text-blue-300' :
                        event.type === 'webinar' ? 'bg-green-500/20 text-green-300' :
                        event.type === 'conference' ? 'bg-red-500/20 text-red-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {event.type}
                      </span>
                      {event.isVirtual && (
                        <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase">
                          Virtual
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{event.description}</p>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-kanyini-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400">Date & Time</p>
                        <p className="font-semibold">{event.date}</p>
                        <p className="text-sm text-gray-300">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-kanyini-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="font-semibold">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-kanyini-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-400">Organizer</p>
                        <p className="font-semibold">{event.organizer}</p>
                      </div>
                    </div>
                  </div>

                  {/* Project Link */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Associated Project</p>
                    <div className="px-4 py-2 bg-kanyini-primary/20 rounded-lg">
                      <p className="text-sm font-semibold text-kanyini-light">{event.projectName}</p>
                    </div>
                  </div>

                  {/* Attendee Progress */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Attendees</span>
                      <span className="font-bold">{event.attendees} / {event.maxAttendees}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-2 bg-gradient-to-r from-kanyini-primary to-kanyini-light rounded-full"
                      />
                    </div>
                  </div>

                  {/* RSVP Button */}
                  <a href="https://kan-yini-connect.vercel.app/app/community" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-kanyini-primary hover:bg-kanyini-dark">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      RSVP Now
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {(activeTab === 'projects' || activeTab === 'all') && (
        <section className="relative bg-white text-gray-900 py-32 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Our <span className="text-kanyini-primary">Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Community-driven initiatives making real impact across the globe
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <project.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Project Info */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-kanyini-primary/10 text-kanyini-primary rounded-full text-xs font-bold uppercase mb-3">
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-kanyini-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center space-x-1 mb-2">
                      <Sparkles className="w-4 h-4 text-kanyini-accent" />
                      <p className="text-sm font-semibold text-kanyini-accent">{project.impact}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">Members</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{project.activeMembers}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Heart className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">Followers</span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{project.followers}</p>
                    </div>
                  </div>

                  {/* Funding Progress */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Funding Progress</span>
                      <span className="text-kanyini-primary font-bold">
                        ${(project.moneyRaised / 1000).toFixed(0)}K / ${(project.moneyRequired / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(project.moneyRaised / project.moneyRequired) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className={`h-2.5 bg-gradient-to-r ${project.color} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* Action Button */}
                  <a href="https://kan-yini-connect.vercel.app/app/post" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-kanyini-primary hover:bg-kanyini-dark group-hover:scale-105 transition-transform">
                      View Project
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

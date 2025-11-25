'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, DollarSign, Clock, CheckCircle, ArrowRight, Sparkles, Globe, Award, GraduationCap, Briefcase, MapPin } from 'lucide-react';
import { useRef, useState } from 'react';
import Button from '@/components/ui/Button';

export default function FellowshipPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const fellowships = [
    {
      id: 1,
      title: 'Environmental Leadership Fellowship',
      organization: 'Kanyini Earth Project',
      duration: '12 months',
      stipend: '$1,500/month',
      location: 'Nairobi, Kenya',
      positions: 10,
      positionsFilled: 7,
      applicationDeadline: 'January 31, 2026',
      startDate: 'March 1, 2026',
      description: 'Join our flagship leadership program designed to train the next generation of environmental leaders. Work on real conservation projects while developing skills in project management, community organizing, and climate advocacy.',
      requirements: ['Bachelor\'s degree or equivalent', '2+ years experience in environmental work', 'Strong communication skills', 'Passion for climate action'],
      type: 'leadership',
      icon: Award,
      color: 'from-kanyini-primary to-kanyini-light'
    },
    {
      id: 2,
      title: 'Community Organizing Fellowship',
      organization: 'Kanyini Earth Project',
      duration: '6 months',
      stipend: '$1,200/month',
      location: 'Multiple Locations',
      positions: 15,
      positionsFilled: 12,
      applicationDeadline: 'December 20, 2025',
      startDate: 'January 15, 2026',
      description: 'Work directly with rural communities to implement sustainable practices. Learn grassroots organizing, conduct workshops, and build local capacity for environmental stewardship.',
      requirements: ['Experience working with communities', 'Fluent in Swahili and English', 'Willingness to travel', 'Cultural sensitivity'],
      type: 'community',
      icon: Users,
      color: 'from-kanyini-accent to-orange-500'
    },
    {
      id: 3,
      title: 'Research & Documentation Fellowship',
      organization: 'Kanyini Earth Project',
      duration: '9 months',
      stipend: '$1,300/month',
      location: 'Nairobi, Kenya (with field work)',
      positions: 5,
      positionsFilled: 3,
      applicationDeadline: 'February 15, 2026',
      startDate: 'April 1, 2026',
      description: 'Conduct environmental research, document indigenous knowledge, and contribute to policy papers. Ideal for those interested in bridging traditional wisdom with modern conservation science.',
      requirements: ['Master\'s degree or pursuing', 'Research experience', 'Strong writing skills', 'Data analysis capabilities'],
      type: 'research',
      icon: GraduationCap,
      color: 'from-kanyini-dark to-gray-700'
    },
    {
      id: 4,
      title: 'Youth Climate Action Fellowship',
      organization: 'Kanyini Earth Project',
      duration: '6 months',
      stipend: '$1,000/month',
      location: 'Virtual + On-site',
      positions: 20,
      positionsFilled: 15,
      applicationDeadline: 'January 10, 2026',
      startDate: 'February 1, 2026',
      description: 'Designed for young activists (18-25 years). Learn climate advocacy, social media campaigns, and organize youth-led initiatives. Includes mentorship from experienced environmental leaders.',
      requirements: ['Age 18-25', 'Active in climate advocacy', 'Social media savvy', 'Team player'],
      type: 'leadership',
      icon: Award,
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 5,
      title: 'Technical Conservation Fellowship',
      organization: 'Kanyini Earth Project',
      duration: '12 months',
      stipend: '$1,600/month',
      location: 'Coastal Region, Kenya',
      positions: 8,
      positionsFilled: 5,
      applicationDeadline: 'March 1, 2026',
      startDate: 'May 1, 2026',
      description: 'Hands-on work in mangrove restoration, coral reef protection, and coastal ecosystem monitoring. Technical training in marine conservation and GIS mapping included.',
      requirements: ['Background in marine biology/environmental science', 'Diving certification (preferred)', 'Physical fitness', 'Technical aptitude'],
      type: 'technical',
      icon: Briefcase,
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Programs' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'community', label: 'Community' },
    { id: 'research', label: 'Research' },
    { id: 'technical', label: 'Technical' }
  ];

  const filteredFellowships = fellowships.filter(fellowship => 
    activeFilter === 'all' || fellowship.type === activeFilter
  );

  const applicationSteps = [
    {
      number: '01',
      title: 'Prepare Your Story',
      description: 'Write a personal statement or create a video, poem, or other creative format that tells us who you are and why you care.',
    },
    {
      number: '02',
      title: 'Submit Application',
      description: 'Complete the online application form and submit your creative statement. Applications accepted on a rolling basis.',
    },
    {
      number: '03',
      title: 'Interview',
      description: 'If selected, you\'ll be invited to an interview with the KEaP team to discuss your vision and aspirations.',
    },
    {
      number: '04',
      title: 'Begin Your Journey',
      description: 'Join our cohort of five fellows and start making a difference in communities around the world.',
    },
  ];

  return (
    <main ref={containerRef} className="relative overflow-hidden bg-black text-white">
      {/* Hero Section - Consistent with About page */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(89, 114, 66, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(89, 114, 66, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
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
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <Users className="w-20 h-20 text-kanyini-primary" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              KEaP{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-kanyini-primary via-kanyini-light to-kanyini-accent bg-clip-text text-transparent">
                  Fellowships
                </span>
                <motion.div
                  animate={{ width: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-kanyini-primary to-kanyini-accent"
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
              Choose from 5 transformative programs designed for the next generation of changemakers
            </p>
            <p className="text-lg md:text-xl text-kanyini-light max-w-3xl mx-auto mb-12 leading-relaxed font-semibold">
              Find the perfect program to match your passion and expertise
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="https://kan-yini-connect.vercel.app/app/post" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-kanyini-primary hover:bg-kanyini-dark">
                  Apply Now
                </Button>
              </a>
              <a href="https://kan-yini-connect.vercel.app/app/post" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </a>
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

      {/* Fellowship Programs */}
      <section className="relative bg-gradient-to-br from-kanyini-dark to-black text-white py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-kanyini-primary">Fellowship Programs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose from our diverse range of fellowship opportunities designed to match your passion and expertise
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-kanyini-primary text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Fellowship Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredFellowships.map((fellowship, idx) => {
              const IconComponent = fellowship.icon;
              const positionsPercentage = Math.round((fellowship.positionsFilled / fellowship.positions) * 100);
              
              return (
                <motion.div
                  key={fellowship.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-kanyini-primary/50 transition-all"
                >
                  {/* Fellowship Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${fellowship.color} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{fellowship.title}</h3>
                        <p className="text-sm text-gray-400">{fellowship.organization}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">{fellowship.description}</p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-white/10">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Clock className="w-4 h-4 text-kanyini-primary" />
                        <span className="text-sm text-gray-400">Duration</span>
                      </div>
                      <p className="font-semibold">{fellowship.duration}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <MapPin className="w-4 h-4 text-kanyini-primary" />
                        <span className="text-sm text-gray-400">Location</span>
                      </div>
                      <p className="font-semibold text-sm">{fellowship.location}</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Users className="w-4 h-4 text-kanyini-primary" />
                        <span className="text-sm text-gray-400">Positions</span>
                      </div>
                      <p className="font-semibold">{fellowship.positionsFilled}/{fellowship.positions} filled</p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <DollarSign className="w-4 h-4 text-kanyini-primary" />
                        <span className="text-sm text-gray-400">Stipend</span>
                      </div>
                      <p className="font-semibold text-kanyini-accent">{fellowship.stipend}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Positions Filled</span>
                      <span className="font-bold">{positionsPercentage}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${positionsPercentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className={`h-2 bg-gradient-to-r ${fellowship.color} rounded-full`}
                      />
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {fellowship.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-kanyini-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deadlines */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/5 rounded-xl">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Application Deadline</p>
                      <p className="text-sm font-bold text-red-400">{fellowship.applicationDeadline}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Start Date</p>
                      <p className="text-sm font-bold text-kanyini-light">{fellowship.startDate}</p>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <a href="https://kan-yini-connect.vercel.app/app/post" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-kanyini-primary hover:bg-kanyini-dark">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* No results message */}
          {filteredFellowships.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No fellowship programs match your selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="relative bg-white text-gray-900 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept applications on a rolling basis. Your unique story matters to us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {idx < applicationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-kanyini-primary to-transparent" />
                )}

                <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all h-full">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-kanyini-primary to-kanyini-dark flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <a href="https://kan-yini-connect.vercel.app/app/post" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-kanyini-primary hover:bg-kanyini-dark">
                Start Your Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Applications accepted on a rolling basis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="relative bg-black text-white py-32 px-4 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
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
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Who Should <span className="text-kanyini-primary">Apply?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're looking for individuals who bring passion, curiosity, and a commitment to oneness
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
          >
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="text-kanyini-primary font-semibold">You care deeply</span> about community, connection, and creating positive change in the world.
              </p>
              <p>
                <span className="text-kanyini-primary font-semibold">You're a self-starter</span> who takes initiative, embraces responsibility, and thrives in self-directed work.
              </p>
              <p>
                <span className="text-kanyini-primary font-semibold">You believe in oneness</span> and see the interconnectedness of all life on Earth.
              </p>
              <p>
                <span className="text-kanyini-primary font-semibold">You're ready to grow</span> through both challenge and support, feedback and reflection.
              </p>
              <p>
                <span className="text-kanyini-primary font-semibold">You value collaboration</span> and want to be part of a cohort of like-minded changemakers.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-center text-gray-400 italic">
                "We don't look for perfect resumes. We look for authentic voices and genuine commitment."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


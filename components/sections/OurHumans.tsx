'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const team = [
  {
    name: 'Jeevak',
    role: 'Founder & Visionary',
    description: 'Dreaming loud, thinking deep—sometimes even it works.',
    subtitle: 'The Radiologist who Writes, Rights, and Unites',
    color: 'primary',
    image: '/human_photos/jeevak.png',
  },
  {
    name: 'OJ',
    role: 'Strategic Lead',
    description: 'The young gun, attempting to rein in the craziness.',
    color: 'dark',
    image: '/human_photos/OJ.png',
  },
  {
    name: 'Den',
    role: 'Chief Designer',
    description: 'The gregarious grand designer, crafting a future that lasts.',
    color: 'accent',
    image: '/human_photos/den.png',
  },
  {
    name: 'Prakhar',
    role: 'Ideas & Impact',
    description: 'Fueling ideas, chasing wonder, doing good—and yes, the bad jokes? Always complimentary.',
    color: 'light',
    image: '/human_photos/prakhar.png',
  },
  {
    name: 'Priya',
    role: 'Editor-in-Chief',
    description: 'Gently dismantling writers\' illusions; clarity always follows.',
    color: 'primary',
    image: '/human_photos/priya.png',
  },
  {
    name: 'Shreya',
    role: 'Social Media Lead',
    description: 'Powered by coffee, passion, and a borderline obsession with social media to spread big ideas!',
    color: 'dark',
    image: '/human_photos/Shreya.png',
  },
  {
    name: 'Antonio',
    role: 'Content Curator',
    description: 'Delightfully distracting, accidentally informative.',
    color: 'accent',
    image: '/human_photos/antonio.png',
  },
];

export default function OurHumans() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, team.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      // Loop back to start when reaching the end
      if (prev >= maxIndex) return 0;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      // Loop to end when going back from start
      if (prev <= 0) return maxIndex;
      return prev - 1;
    });
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, maxIndex]);

  const visibleMembers = team.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <Section background="gradient" className="bg-gradient-to-b from-gray-50 via-kanyini-beige/30 to-white relative overflow-hidden">
      {/* Animated Background Dots */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-kanyini-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet <span className="bg-gradient-to-r from-kanyini-primary to-cyan-600 bg-clip-text text-transparent">Our Humans</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate minds driving our mission forward
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden py-12 px-12 md:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
              >
                {visibleMembers.map((member, idx) => (
            <motion.div
              key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Avatar */}
                    <div className="relative mb-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`w-40 h-40 md:w-44 md:h-44 rounded-full ${
                          member.image ? 'bg-gray-100' : `bg-kanyini-${member.color}`
                        } flex items-center justify-center text-white text-6xl md:text-7xl font-bold shadow-2xl relative overflow-hidden`}
                      >
                        {member.image ? (
                          // Show actual photo if available
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          // Show initial letter if no photo
                          <>
                            {/* Shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 + idx }}
                            />
                            <span className="relative z-10">{member.name.charAt(0)}</span>
                          </>
                        )}
                      </motion.div>
                      
                      {/* Decorative ring */}
                      <div className={`absolute inset-0 rounded-full border-4 border-kanyini-${member.color}/30 scale-110 group-hover:scale-125 transition-transform duration-500`} />
                </div>

                {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-kanyini-primary transition-colors">
                  {member.name}
                </h3>
                      <p className={`text-lg md:text-xl font-medium text-kanyini-${member.color}`}>
                  {member.role}
                </p>
                      <p className="text-base text-gray-700 leading-relaxed px-2">
                  {member.description}
                </p>
                {member.subtitle && (
                        <p className="text-sm text-gray-500 italic px-2">
                    {member.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-gray-800 hover:text-kanyini-primary transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous team members"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-gray-800 hover:text-kanyini-primary transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next team members"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-kanyini-primary'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button size="lg" variant="outline">
            Learn More About Our Team
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}


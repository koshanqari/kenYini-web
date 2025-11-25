'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';

const team = [
  {
    name: 'Jeevak',
    role: 'Founder & Visionary',
    description: 'Dreaming loud, thinking deep—sometimes even it works.',
    subtitle: 'The Radiologist who Writes, Rights, and Unites',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    name: 'OJ',
    role: 'Strategic Lead',
    description: 'The young gun, attempting to rein in the craziness.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Den',
    role: 'Chief Designer',
    description: 'The gregarious grand designer, crafting a future that lasts.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Prakhar',
    role: 'Ideas & Impact',
    description: 'Fueling ideas, chasing wonder, doing good—and yes, the bad jokes? Always complimentary.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Priya',
    role: 'Editor-in-Chief',
    description: 'Gently dismantling writers\' illusions; clarity always follows.',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    name: 'Shreya',
    role: 'Social Media Lead',
    description: 'Powered by coffee, passion, and a borderline obsession with social media to spread big ideas!',
    gradient: 'from-fuchsia-500 to-purple-600',
  },
  {
    name: 'Antonio',
    role: 'Content Curator',
    description: 'Delightfully distracting, accidentally informative.',
    gradient: 'from-cyan-500 to-blue-600',
  },
];

export default function OurHumans() {
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

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-kanyini-primary/30 hover:-translate-y-2">
                {/* Avatar Placeholder */}
                <div className="mb-6">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-3xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {member.name.charAt(0)}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-kanyini-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-kanyini-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  {member.description}
                </p>
                {member.subtitle && (
                  <p className="text-sm text-gray-500 italic">
                    {member.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
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


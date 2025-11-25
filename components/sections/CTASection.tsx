'use client';

import { motion } from 'framer-motion';
import { PenTool, Heart } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <Section background="white" className="bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-kanyini-primary/10 rounded-full"
            style={{
              width: 300 + i * 200,
              height: 300 + i * 200,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Share Your Voice */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-kanyini-primary to-kanyini-dark rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-kanyini-primary/20 hover:border-kanyini-primary hover:-translate-y-1">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-kanyini-primary to-kanyini-dark flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <PenTool className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Share Your Voice
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Have a story to tell? An idea to share? Join our community of
                writers and contribute to the KanYini Earth Journal.
              </p>

              {/* CTA */}
              <Button size="lg" className="w-full md:w-auto">
                Submit Your Article
              </Button>

              {/* Decorative Element */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-kanyini-primary/10 rounded-full blur-3xl group-hover:bg-kanyini-primary/20 transition-colors" />
            </div>
          </motion.div>

          {/* Support Our Work */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-kanyini-accent to-orange-600 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-cyan-500/20 hover:border-cyan-500 hover:-translate-y-1">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-kanyini-accent to-orange-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Support Our Work
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Help us continue our mission of inspiring sustainable
                co-habitation. Every contribution makes a difference.
              </p>

              {/* CTA */}
              <Button size="lg" variant="outline" className="w-full md:w-auto border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white">
                Get Involved
              </Button>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-kanyini-accent/10 rounded-full blur-3xl group-hover:bg-kanyini-accent/20 transition-colors" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}


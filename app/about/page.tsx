'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Globe, Users, Target, BookOpen, Heart } from 'lucide-react';
import { useRef } from 'react';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main ref={containerRef} className="relative bg-black text-white overflow-hidden">
      {/* Hero Section - Parallax */}
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
              <Globe className="w-full h-full text-kanyini-primary" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              We Are{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-kanyini-primary via-kanyini-light to-kanyini-primary bg-clip-text text-transparent animate-pulse">
                  KanYini
                </span>
                <motion.div
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-kanyini-primary"
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              A not-for-profit movement reimagining what it means to be human on a shared planet.
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-kanyini-primary"
            >
              <span className="text-sm uppercase tracking-widest">Scroll to explore</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Origin Story - Asymmetric Layout */}
      <section className="relative bg-white text-gray-900 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Large Number */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="text-[200px] md:text-[300px] font-bold leading-none text-kanyini-primary/10 select-none">
                01
              </div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2">
                <h2 className="text-5xl md:text-6xl font-bold mb-6">
                  The <br />Beginning
                </h2>
                <div className="w-20 h-1 bg-kanyini-primary mb-6" />
                <p className="text-lg text-gray-600 max-w-md">
                  Born from a simple question asked during a train journey through the Himalayas
                </p>
              </div>
            </motion.div>

            {/* Right - Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg leading-relaxed"
            >
              <p>
                In 2024, a radiologist named Jeevak found himself on a train winding through 
                the foothills of the Himalayas. What started as casual conversation over chai 
                became something deeper—a philosophical exploration that would later become 
                <span className="font-semibold text-kanyini-primary"> "Dancing with the Universe."</span>
              </p>
              <p>
                That book wasn't just a story. It was a question posed to the world:{' '}
                <span className="italic">What if we saw ourselves not as owners of Earth, but as family to it?</span>
              </p>
              <p>
                From that question, <span className="font-bold">KanYini Earth Projects</span> emerged—
                not as an organization with answers, but as a space for asking better questions together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What "KanYini" Means - Split Screen */}
      <section className="relative bg-gradient-to-br from-kanyini-dark to-black text-white">
        <div className="grid md:grid-cols-2 min-h-screen">
          {/* Left - Interactive Word */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center p-16 relative overflow-hidden"
          >
            <div className="relative">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-8xl md:text-9xl font-bold text-kanyini-primary cursor-pointer select-none"
                style={{ textShadow: '0 0 80px rgba(89, 114, 66, 0.5)' }}
              >
                KanYini
              </motion.h3>
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-kanyini-primary blur-3xl -z-10"
              />
            </div>
          </motion.div>

          {/* Right - Meaning */}
          <div className="flex items-center justify-center p-16 bg-black/30 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-widest text-kanyini-light">Aboriginal Word</p>
                <h4 className="text-4xl font-bold">Responsibility & Care</h4>
              </div>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  From the Pitjantjatjara people of Central Australia, <span className="text-kanyini-primary font-semibold">KanYini</span> speaks 
                  to something ancient and urgent:
                </p>
                <p className="text-xl italic text-white">
                  "The principle of connectedness through caring and responsibility."
                </p>
                <p>
                  It's the idea that we're not separate from the land, the air, each other. 
                  We belong to it all, and it belongs to us. Not as property. As family.
                </p>
              </div>

              <div className="pt-8">
                <div className="inline-flex items-center space-x-2 text-kanyini-light">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm">This is our north star</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values - Diagonal Split Cards */}
      <section className="relative bg-white py-32 px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-kanyini-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-to-tr from-kanyini-accent/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600">Not a plan. A compass.</p>
          </motion.div>

          <div className="space-y-24">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid md:grid-cols-[2fr,3fr] gap-8 items-center">
                <div className="relative">
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-kanyini-primary rounded-full opacity-10" />
                  <Target className="w-24 h-24 text-kanyini-primary relative z-10" />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">Mission</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To inspire and facilitate sustainable human co-habitation on planet Earth 
                    by reducing conflict and deepening our connectedness.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision - Reversed */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid md:grid-cols-[3fr,2fr] gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">Vision</h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To create a not-for-profit educational and service-driven movement through 
                    media and social entrepreneurship—that honours our interconnectedness, 
                    celebrates our diversity, and acknowledges our shared dependence on planet Earth.
                  </p>
                </div>
                <div className="relative order-1 md:order-2 flex justify-end">
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-kanyini-dark rounded-full opacity-10" />
                  <BookOpen className="w-24 h-24 text-kanyini-dark relative z-10" />
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-kanyini-beige to-white rounded-3xl p-12 shadow-2xl">
                <div className="flex items-start space-x-6 mb-8">
                  <Heart className="w-16 h-16 text-kanyini-accent flex-shrink-0" />
                  <h3 className="text-4xl font-bold text-gray-900">Our Values</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-kanyini-primary rounded-full mt-2 flex-shrink-0" />
                      <p>We are an <span className="font-semibold">inclusive ecosystem</span>—free from the confines of religion, politics, race, gender, or language.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-kanyini-primary rounded-full mt-2 flex-shrink-0" />
                      <p>We value <span className="font-semibold">all forms of life</span> and encourage cohabitation, guided by compassion, not prejudice.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-kanyini-primary rounded-full mt-2 flex-shrink-0" />
                      <p>We embrace <span className="font-semibold">scientific knowledge</span> alongside philosophical and spiritual inquiry.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-kanyini-primary rounded-full mt-2 flex-shrink-0" />
                      <p>We commit to the <span className="font-semibold">highest standards of integrity</span>, cultivating trust that stands the test of time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do - Interactive Hover Cards */}
      <section className="relative bg-black text-white py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              What We <span className="text-kanyini-primary">Actually Do</span>
            </h2>
            <p className="text-xl text-gray-400">Four pillars. One purpose.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'KanYini Earth Journal',
                description: 'A digital space for voices that dare to question, explore, and reimagine.',
                detail: 'Creative articles, short stories, essays, and poetry exploring our relationship with Earth and each other.',
                color: 'primary',
                icon: BookOpen,
              },
              {
                title: 'Books & Publishing',
                description: 'Starting with "Dancing with the Universe"—stories that move the needle.',
                detail: 'Philosophical novels and non-fiction that bridge ancient wisdom with modern challenges.',
                color: 'accent',
                icon: BookOpen,
              },
              {
                title: 'KEap Fellowship',
                description: 'A 6-month program for changemakers who refuse to accept business as usual.',
                detail: 'Mentorship, community, and resources for leaders building regenerative futures.',
                color: 'dark',
                icon: Users,
              },
              {
                title: 'Media & Dialogue',
                description: 'Podcasts, videos, and conversations that make you think differently.',
                detail: 'Long-form discussions with thinkers, activists, and everyday humans doing extraordinary things.',
                color: 'light',
                icon: Sparkles,
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-kanyini-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-kanyini-${item.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <item.icon className={`w-12 h-12 text-kanyini-${item.color} mb-6`} />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Reference to Homepage */}
      <section className="relative bg-white py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="w-16 h-16 text-kanyini-primary mx-auto mb-8" />
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet Our Humans
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We're dreamers, designers, writers, and wanderers. 
              We're doctors and poets, strategists and storytellers. 
              Most importantly, we're humans trying to be better humans.
            </p>
            <Button size="lg" onClick={() => window.location.href = '/#team'}>
              See the Full Team
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Full Width Gradient */}
      <section className="relative bg-gradient-to-br from-kanyini-primary via-kanyini-dark to-black text-white py-32 px-4 overflow-hidden">
        {/* Animated circles */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 border-2 border-white/10 rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] border-2 border-white/10 rounded-full"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Ready to Be Part <br />of Something Real?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
              We're not saving the world. We're asking: what if we tried a different way?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-kanyini-primary">
                Explore Our Work
              </Button>
              <Button size="lg" className="bg-white text-kanyini-primary hover:bg-gray-100">
                Get Involved
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


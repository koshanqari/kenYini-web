'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Globe, Users, Target, BookOpen, Heart } from 'lucide-react';
import { useRef } from 'react';
import Image from 'next/image';
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

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              A not-for-profit movement reimagining what it means to be human on a shared planet.
            </p>

            <p className="text-2xl md:text-3xl font-semibold text-kanyini-light max-w-4xl mx-auto mb-12 leading-relaxed">
              One Earth. Many Voices. One Shared Future.
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
                    To build a transformative not-for-profit movement—where education, media, and social entrepreneurship 
                    converge to awaken our shared humanity, deepen our interconnectedness, and honour our collective 
                    stewardship of Earth, all while celebrating the rich mosaic of our global diversity.
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
                      <p>We are a <span className="font-semibold">broad inclusive ecosystem</span>—without confines of religion, politics, race, gender, language or bias.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-kanyini-primary rounded-full mt-2 flex-shrink-0" />
                      <p>We value <span className="font-semibold">all forms of life on earth</span> and championing a world where coexistence blossoms free from prejudices.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-kanyini-primary rounded-full mt-2 flex-shrink-0" />
                      <p>We embrace <span className="font-semibold">the harmony of science, philosophy and spiritual inquiry</span>—seeking truth through many windows.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-kanyini-primary rounded-full mt-2 flex-shrink-0" />
                      <p>We uphold the <span className="font-semibold">highest integrity</span>, nurturing trust as the bedrock of lasting connections.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do - How We Work Section */}
      <section className="relative bg-black text-white py-32 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(89,114,66,0.1),transparent_50%)]" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-kanyini-primary rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-kanyini-accent rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="inline-block mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-kanyini-primary to-kanyini-light rounded-2xl flex items-center justify-center mx-auto transform rotate-45">
                <Target className="w-10 h-10 text-white -rotate-45" />
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              What We <span className="bg-gradient-to-r from-kanyini-primary via-kanyini-light to-kanyini-primary bg-clip-text text-transparent">Actually Do</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Six principles guiding our work. Each one a commitment to deeper connection, trust, and collective transformation.
            </p>
          </motion.div>

          {/* How We Work - Individual Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Initiate & Support',
                description: 'We initiate and support new or ongoing projects that align with our mission, fostering deeper connections through trust building and dissolution of conflict.',
                icon: Target,
                gradient: 'from-kanyini-primary to-kanyini-light',
              },
              {
                number: '02',
                title: 'Collaborate',
                description: 'We collaborate with other social businesses and entrepreneurs on projects that advance our shared vision of oneness.',
                icon: Users,
                gradient: 'from-kanyini-dark to-kanyini-primary',
              },
              {
                number: '03',
                title: 'Insight & Guidance',
                description: 'We serve as a trusted source of human-centric insight into emerging challenges that impact our cohabitation.',
                icon: Sparkles,
                gradient: 'from-kanyini-accent to-kanyini-dark',
              },
              {
                number: '04',
                title: 'Inspire Dialogue',
                description: 'We inspire meaningful conversations that deepen mutual understanding and dissolve the root of conflict.',
                icon: Heart,
                gradient: 'from-kanyini-light to-kanyini-primary',
              },
              {
                number: '05',
                title: 'Create & Share',
                description: 'We create and share stories, poems, articles, podcasts, and videos that support harmonious, earth-centric living.',
                icon: BookOpen,
                gradient: 'from-kanyini-primary to-kanyini-accent',
              },
              {
                number: '06',
                title: 'Promote Oneness & Nurture Community',
                description: 'We promote and explore ideas of oneness through public gatherings, forums, meditation sessions and educational courses. We encourage engagement in reflective meditation and nurture communities rooted in our shared values of oneness.',
                icon: Globe,
                gradient: 'from-kanyini-dark to-kanyini-light',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-kanyini-primary/50 transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Animated corner accent */}
                  <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 45 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.3, type: 'spring' }}
                    className="absolute -top-8 -right-8 w-20 h-20 bg-kanyini-primary/10 rounded-xl"
                  />

                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <span className="text-6xl font-bold text-white/5 leading-none select-none">
                        {item.number}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-kanyini-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>

                    {/* Hover indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      className={`h-1 bg-gradient-to-r ${item.gradient} mt-6 rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-20"
          >
            <p className="text-2xl text-gray-400 italic">
              Every action, every conversation, every story—
              <span className="text-kanyini-primary font-semibold"> building bridges, not walls.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative bg-white py-32 px-4">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-kanyini-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-kanyini-accent rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-kanyini-primary font-semibold mb-4">Founder</p>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Jeev <span className="text-kanyini-dark">(Dr. Rajeev Jyoti)</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-gray-900">Jeev (Dr. Rajeev Jyoti)</span> is the founder of KanYini Earth Projects, 
                  an Australian non-profit dedicated to exploring how humans can live in deeper harmony with one another and with the planet. 
                  Trained as a radiologist, Jeev has spent decades peering beneath the surface—of bodies, of communities, of systems. 
                  That same gift for seeing what is hidden now shapes his work with KanYini, where he brings clarity, compassion, 
                  and presence to the question of how we cohabit the Earth.
                </p>
                <p>
                  Whether in medicine, systems thinking, or community-building, his practice is anchored in a single inquiry: 
                  <span className="italic text-kanyini-primary font-semibold"> how might we reduce conflict and nurture belonging in a divided world?</span>
                </p>
                <p>
                  Through KanYini, Jeev invites a new kind of imagination—one where sustainability is more than policy but shared practice, 
                  and where oneness is not a lofty idea but a lived ethic. His debut novel, 
                  <span className="font-semibold text-gray-900"> Dancing with the Universe</span>, is a philosophical coming-of-age tale 
                  and a gentle continuation of the themes he tends through KanYini Earth Projects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Our Humans */}
      <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-32 px-4 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[length:40px_40px] [background-image:linear-gradient(to_right,rgba(89,114,66,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(89,114,66,0.3)_1px,transparent_1px)]" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-kanyini-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-kanyini-primary to-kanyini-light rounded-xl flex items-center justify-center mx-auto transform rotate-12">
                <Users className="w-8 h-8 text-white -rotate-12" />
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-kanyini-primary to-kanyini-light bg-clip-text text-transparent">Humans</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The passionate minds and hearts driving our mission forward
            </p>
            <p className="text-sm text-kanyini-light mt-4 italic">Hover to reveal their story</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: 'Jeevak',
                description: 'Dreaming loud, thinking deep—sometimes even it works.',
                subtitle: 'The Radiologist who Writes, Rights, and Unites',
                image: '/human_photos/jeevak.png',
                color: 'from-kanyini-primary to-kanyini-light',
              },
              {
                name: 'OJ',
                description: 'The young gun, attempting to rein in the craziness.',
                image: '/human_photos/OJ.png',
                color: 'from-kanyini-dark to-gray-700',
              },
              {
                name: 'Den',
                description: 'The gregarious grand designer, crafting a future that lasts.',
                image: '/human_photos/den.png',
                color: 'from-kanyini-accent to-orange-700',
              },
              {
                name: 'Prakhar',
                description: 'Fueling ideas, chasing wonder, doing good—and yes, the bad jokes? Always complimentary.',
                image: '/human_photos/prakhar.png',
                color: 'from-kanyini-light to-green-600',
              },
              {
                name: 'Priya',
                description: 'Gently dismantling writers\' illusions; clarity always follows.',
                image: '/human_photos/priya.png',
                color: 'from-kanyini-primary to-emerald-600',
              },
              {
                name: 'Shreya',
                description: 'Powered by coffee, passion, and a borderline obsession with social media to spread big ideas!',
                image: '/human_photos/Shreya.png',
                color: 'from-kanyini-dark to-slate-700',
              },
              {
                name: 'Antonio',
                description: 'Delightfully distracting, accidentally informative.',
                image: '/human_photos/antonio.png',
                color: 'from-kanyini-accent to-amber-700',
              },
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] xl:w-[calc(25%-1.5rem)]"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 group-hover:border-kanyini-primary transition-all duration-500 shadow-2xl group-hover:shadow-kanyini-primary/50"
                >
                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`} />

                  <div className="relative p-6 flex flex-col h-full">
                    {/* Photo - enlarges on card hover */}
                    <div className="relative mb-6 flex items-center justify-center">
                      <div className="relative w-[120px] h-[120px] group-hover:w-[160px] group-hover:h-[160px] transition-all duration-500 mx-auto">
                        {/* Pulsing glow behind photo */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full blur-xl -z-10 group-hover:scale-110 transition-transform duration-500`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        {/* Rotating ring on hover */}
                        <div
                          className={`absolute inset-0 rounded-full border-2 border-dashed border-kanyini-primary/0 group-hover:border-kanyini-primary/50 transition-all duration-500 animate-spin-slow`}
                          style={{ animationDuration: '10s' }}
                        />
                      </div>
                    </div>

                    {/* Content - always visible */}
                    <div className="text-center flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-kanyini-light transition-colors duration-300">
                        {member.name}
                      </h3>
                      
                      {/* Animated underline */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '60%' }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                        className={`h-1 bg-gradient-to-r ${member.color} rounded-full mb-4 mx-auto`}
                      />

                      {member.subtitle && (
                        <p className="text-xs text-kanyini-light font-medium mb-3 italic">
                          {member.subtitle}
                        </p>
                      )}
                      
                      <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                        {member.description}
                      </p>

                      {/* Decorative dots */}
                      <div className="mt-auto pt-4 flex items-center justify-center space-x-2">
                        <motion.div
                          className="w-2 h-2 bg-kanyini-primary rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-kanyini-light rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-kanyini-accent rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Particle effects on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
        `}</style>
      </section>

      {/* Take Action for KEaP */}
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

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Take Action for <span className="text-kanyini-primary">KEaP</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Be part of the movement. Your voice, your creativity, your presence matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Read & Feedback',
                description: 'Read our stories and provide thoughtful feedback',
                icon: BookOpen,
              },
              {
                title: 'Write & Submit',
                description: 'Share your story or creative article with us',
                icon: Sparkles,
              },
              {
                title: 'Create Clips',
                description: 'Make and submit a oneness clip with a tagline',
                icon: Sparkles,
              },
              {
                title: 'Share Photos',
                description: 'Take and submit a photo with oneness caption',
                icon: Heart,
              },
              {
                title: 'Listen & Watch',
                description: 'Explore KanYini podcasts and videos',
                icon: Sparkles,
              },
              {
                title: 'Organize',
                description: 'Lead a walk or gathering in your community',
                icon: Users,
              },
              {
                title: 'Start a Project',
                description: 'Initiate your own KEaP-aligned initiative',
                icon: Target,
              },
              {
                title: 'Become a Fellow',
                description: 'Join our 6-month fellowship program',
                icon: Heart,
              },
            ].map((action, idx) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-kanyini-primary/50 transition-all duration-300 cursor-pointer"
              >
                <action.icon className="w-10 h-10 text-kanyini-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {action.description}
                </p>
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
            <Button size="lg" className="bg-kanyini-primary hover:bg-kanyini-dark">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


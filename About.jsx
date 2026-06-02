import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  CheckCircle, ArrowRight, Twitter, Linkedin, Github,
  Award, Users, Globe, Zap, Target, Eye, Lightbulb, Shield, TrendingUp,
  Heart, Sparkles, Handshake, Star
} from 'lucide-react'
import { teamMembers } from '../data/teamMembers';
import TeamMember from '../components/TeamMember';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

const features = [
  'Modern Design',
  'Mobile Responsive',
  'Fast Performance',
  'SEO Optimized',
  'Secure & Reliable',
  'Ongoing Support',
]

const stats = [
  { icon: Globe, value: '50+', label: 'Projects Delivered', color: 'from-teal-500 to-teal-600' },
  { icon: Users, value: '30+', label: 'Happy Clients', color: 'from-indigo-500 to-indigo-600' },
  { icon: Award, value: '4.9★', label: 'Average Rating', color: 'from-amber-500 to-orange-500' },
  { icon: Zap, value: '3yr+', label: 'Years Experience', color: 'from-pink-500 to-rose-500' },
]

const whyChooseUs = [
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    desc: 'We use modern technologies and creative strategies to solve complex business challenges.',
    gradient: 'from-amber-400 to-orange-500',
    bgLight: 'bg-amber-50',
  },
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Skilled professionals with expertise in design, development, and digital transformation.',
    gradient: 'from-blue-400 to-indigo-500',
    bgLight: 'bg-blue-50',
  },
  {
    icon: Shield,
    title: 'Reliable Partnership',
    desc: 'Transparent communication, timely delivery, and long-term support for every project.',
    gradient: 'from-emerald-400 to-teal-500',
    bgLight: 'bg-emerald-50',
  },
  {
    icon: TrendingUp,
    title: 'Results Driven',
    desc: 'Focused on measurable outcomes that help businesses grow and succeed.',
    gradient: 'from-pink-400 to-rose-500',
    bgLight: 'bg-pink-50',
  },
]
const coreValues = [
  {
    icon: Heart,
    title: 'Integrity',
    desc: 'We build trust through honesty, transparency, and accountability.',
    gradient: 'from-rose-400 to-pink-500',
    bgLight: 'bg-rose-50',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    desc: 'We embrace creativity and continuously explore new possibilities.',
    gradient: 'from-violet-400 to-purple-500',
    bgLight: 'bg-violet-50',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    desc: 'We believe great results come from strong teamwork and partnerships.',
    gradient: 'from-sky-400 to-blue-500',
    bgLight: 'bg-sky-50',
  },
  {
    icon: Star,
    title: 'Excellence',
    desc: 'We strive for the highest standards in every project we deliver.',
    gradient: 'from-amber-400 to-yellow-500',
    bgLight: 'bg-amber-50',
  },
]

function AboutHero() {
  return (
    <section className="py-32 overflow-hidden">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Animated Quote Symbol */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      animate={{
        y: [0, -10, 0],
      }}
      className="text-[140px] leading-none font-serif text-cyan-100"
    >
      ❝
    </motion.div>

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight -mt-10"
    >
      Behind every successful project
      <br />
      is a team passionate about
      <br />
      creating exceptional experiences.
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-8 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
    >
      Designers, developers, and innovators working together
      to transform ideas into impactful digital solutions.
    </motion.p>

    {/* Animated Line */}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "120px" }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: true }}
      className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-10 rounded-full"
    />
  </div>
  <div className="absolute inset-0 -z-10">
  <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
</div>
</section>
   
  )
}

         

        
            

            

          
         
            
   

/* ─────────────────────────────────────────────
   SECTION 1: Mission & Vision
   ───────────────────────────────────────────── */
function MissionVisionSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-[350px] h-[350px] rounded-full bg-teal-50/60 blur-3xl" />
        <div className="absolute bottom-20 right-0 w-[300px] h-[300px] rounded-full bg-indigo-50/60 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            PURPOSE & DIRECTION
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">
            Our Mission &{' '}
            <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Guided by purpose, driven by passion — here's what fuels everything we do.
          </p>
        </motion.div>

        {/* Two-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="relative group rounded-[24px] p-8 md:p-10 bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-[0_4px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            {/* Subtle gradient accent top */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[24px] bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center mb-6 shadow-lg shadow-teal-200/40">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">
              To empower businesses with innovative digital solutions that drive growth, efficiency, and long-term success. We are committed to delivering high-quality technology services that create real value for our clients.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="relative group rounded-[24px] p-8 md:p-10 bg-white/70 backdrop-blur-xl border border-slate-200/60 shadow-[0_4px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            {/* Subtle gradient accent top */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[24px] bg-gradient-to-r from-indigo-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center mb-6 shadow-lg shadow-indigo-200/40">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-500 leading-relaxed text-[15px]">
              To become a trusted global technology partner known for innovation, excellence, and transforming ideas into impactful digital experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   SECTION 2: Why Choose Us
   ───────────────────────────────────────────── */
function WhyChooseUsSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50/50">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(100,116,139) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            OUR ADVANTAGES
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">
            Why{' '}
            <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Four pillars that set us apart and make us the right choice for your next project.
          </p>
        </motion.div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative rounded-[20px] p-7 bg-white border border-slate-200/60 shadow-[0_2px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   SECTION 3: Core Values
   ───────────────────────────────────────────── */
function CoreValuesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-teal-50/40 to-indigo-50/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            WHAT WE STAND FOR
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-900 mb-4">
            Our Core{' '}
            <span className="gradient-text">Values</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            The principles that guide every decision, every project, and every partnership.
          </p>
        </motion.div>

        {/* 4-Card Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {coreValues.map((value, idx) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                className="group relative rounded-[20px] p-7 bg-white border border-slate-200/60 shadow-[0_2px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] transition-all duration-300 text-center"
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-b-full bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`w-14 h-14 rounded-2xl ${value.bgLight} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7`} style={{ color: value.gradient.includes('rose') ? '#f43f5e' : value.gradient.includes('violet') ? '#8b5cf6' : value.gradient.includes('sky') ? '#0ea5e9' : '#f59e0b' }} />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   SECTION: Team
   ───────────────────────────────────────────── */
function TeamSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            OUR TEAM
          </span>

          <h2 className="font-display font-bold text-5xl text-slate-900 mb-4 max-w-3xl mx-auto">
            Meet 
            <br />
            <span className="gradient-text">the Founders</span>
          </h2>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
The passionate team behind Autofy ai — building the future of digital business, one automation at a time.          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-12 max-w-5xl mx-auto"
        >
          {teamMembers.map((member, idx) => (
            <TeamMember key={member.name} member={member} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   PAGE EXPORT
   ───────────────────────────────────────────── */
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <AboutHero />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <CoreValuesSection />
      <TeamSection />
    </motion.div>
  )
}

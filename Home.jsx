import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Globe, ShoppingBag, Code2, Palette,
  Wrench, Search, Sparkles, ChevronRight, Star, Quote
} from 'lucide-react'
import HeroVisual from '../components/HeroVisual'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } }
}

// ─── HERO ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-teal-50/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-50/60 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                ⚡ Premium Web Development Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-bold leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
            >
              Build Websites That Drive Real{' '}
              <span className="gradient-text">Business Growth</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl"
            >
              We build premium websites, intelligent automations, and AI-powered solutions that help businesses grow faster, work smarter, and scale with confidence.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact" className="btn-primary">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Our Work <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8">
              {[
                { number: '10+', label: 'Solutions Delivered' },
                { number: '10+', label: 'Happy Clients' },
                { number: '100%', label: 'Responsive Design' },
              ].map(({ number, label }) => (
                <div key={label}>
                  <div className="font-display font-bold text-2xl text-slate-900">{number}</div>
                  <div className="text-slate-500 text-sm">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Visual */}
          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES (BENTO) ────────────────────────────────────────────────────────
const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    desc: 'High-converting landing pages and business websites built for growth and credibility.',
    color: 'from-teal-500 to-teal-600',
    size: 'lg:col-span-2',
    bg: 'hover:bg-teal-50/50',
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce Stores',
    desc: 'Scalable online stores with seamless checkout and conversion-optimized UX.',
    color: 'from-indigo-500 to-indigo-600',
    size: '',
    bg: 'hover:bg-indigo-50/50',
  },
  {
    icon: Code2,
    title: 'Web Applications',
    desc: 'Custom SaaS and web apps built with modern stacks that scale.',
    color: 'from-violet-500 to-violet-600',
    size: '',
    bg: 'hover:bg-violet-50/50',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Beautiful, intuitive interfaces designed to delight and convert.',
    color: 'from-pink-500 to-rose-500',
    size: '',
    bg: 'hover:bg-pink-50/50',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    desc: 'Keep your site fast, secure, and up-to-date with ongoing support.',
    color: 'from-amber-500 to-orange-500',
    size: '',
    bg: 'hover:bg-amber-50/50',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'Rank higher and drive organic traffic with technical & on-page SEO.',
    color: 'from-emerald-500 to-teal-500',
    size: 'lg:col-span-2',
    bg: 'hover:bg-emerald-50/50',
  },
]

function ServicesSection() {
  return (
    <section className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">What We Do</span>
          <h2 className="section-title text-5xl mb-4">Our Services</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Everything you need to build, launch, and grow your digital presence.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map(({ icon: Icon, title, desc, color, size, bg }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className={`bento-card ${size} ${bg}`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                Learn more <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── PROCESS ─────────────────────────────────────────────────────────────────
const steps = [
  { n: '01', title: 'Discovery call', desc: 'We learn about your goals, audience, and vision to map out a tailored strategy.' },
  { n: '02', title: 'Plan & Design', desc: 'We craft a stunning, conversion-focused design that reflects your brand perfectly.' },
  { n: '03', title: 'Build and Automate', desc: 'We build with clean code, fast performance, and mobile-first responsiveness.' },
  { n: '04', title: 'Launch & Scale', desc: 'We deploy, test thoroughly, and hand over a site ready to drive real results.' },
]

function ProcessSection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">How We Work</span>
          <h2 className="section-title text-5xl mb-4">Our Process</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            A proven, transparent process that delivers results every time.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map(({ n, title, desc }) => (
            <motion.div key={n} variants={fadeUp} className="relative">
              <div className="bento-card h-full">
                <div className="font-display font-bold text-5xl gradient-text mb-4 opacity-80">{n}</div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
              {/* Connector */}
              {n !== '04' && (
                <div className="hidden lg:block absolute top-12 -right-3 z-10">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-200 bg-white flex items-center justify-center">
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Sarah M.',
    role: 'CEO, TechFlow',
    text: 'Autofy.ai built our website in record time. The design is stunning and our leads tripled within the first month!',
    rating: 5,
  },
  {
    name: 'James K.',
    role: 'Founder, ShopKart',
    text: 'Our e-commerce store has never looked better. Sales increased 240% after the redesign. Absolutely worth every penny.',
    rating: 5,
  },
  {
    name: 'Priya R.',
    role: 'COO, FinDash',
    text: 'Professional, fast, and detail-oriented. The team at Autofy.ai exceeded every expectation we had.',
    rating: 5,
  },
]

function TestimonialsSection() {
  return (
    <section className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Client Love</span>
          <h2 className="section-title text-5xl mb-4">What Clients Say</h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map(({ name, role, text, rating }) => (
            <motion.div key={name} variants={fadeUp} className="bento-card">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed mb-6">"{text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm font-display">
                  {name[0]}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{name}</div>
                  <div className="text-slate-400 text-xs">{role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-warm text-warm" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── CTA SECTION ─────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
        >
          {/* Glow elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center py-24 px-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4" />
              Let's build something amazing
            </div>
            <h2 className="font-display font-bold text-5xl text-white mb-6 leading-tight">
              Ready to grow your<br />
              <span className="gradient-text">business online?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Book a free strategy call and let's discuss how we can help you build a website that drives real results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  )
}

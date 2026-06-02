import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  CheckCircle, ArrowRight, ChevronRight
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

const services = [
  {
    emoji: '🌐',
    title: 'Web Development',
    desc: 'High-performance websites and web apps built with Next.js, React, and modern stacks. SEO-ready and lightning fast.',
    tags: ['Next.js', 'React', 'Tailwind'],
    gradient: 'from-teal-400 to-emerald-500',
    hoverGlow: 'rgba(20, 184, 166, 0.12)',
    tagColor: 'bg-teal-50 text-teal-700 border-teal-100',
  },
  {
    emoji: '🤖',
    title: 'AI Automation',
    desc: 'Intelligent workflows that eliminate repetitive tasks, connect your tools, and let your team focus on what matters.',
    tags: ['n8n', 'Make', 'GPT-4'],
    gradient: 'from-violet-400 to-purple-500',
    hoverGlow: 'rgba(139, 92, 246, 0.12)',
    tagColor: 'bg-violet-50 text-violet-700 border-violet-100',
  },
  {
    emoji: '📱',
    title: 'SaaS Products',
    desc: 'Ready-to-launch SaaS tools with authentication, payments, and scalable cloud infrastructure built in.',
    tags: ['Supabase', 'Stripe', 'AWS'],
    gradient: 'from-blue-400 to-indigo-500',
    hoverGlow: 'rgba(99, 102, 241, 0.12)',
    tagColor: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    emoji: '📊',
    title: 'Analytics & Dashboards',
    desc: 'Real-time data dashboards that turn your business metrics into clear, actionable insights.',
    tags: ['Charts', 'APIs', 'Live Data'],
    gradient: 'from-amber-400 to-orange-500',
    hoverGlow: 'rgba(245, 158, 11, 0.12)',
    tagColor: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    emoji: '🎨',
    title: 'Brand & Design',
    desc: 'Logo design, brand identity, and creative strategy that makes your business unforgettable.',
    tags: ['Branding', 'UI/UX', 'Motion'],
    gradient: 'from-pink-400 to-rose-500',
    hoverGlow: 'rgba(244, 63, 94, 0.12)',
    tagColor: 'bg-pink-50 text-pink-700 border-pink-100',
  },
  {
    emoji: '🚀',
    title: 'Growth Strategy',
    desc: 'Content marketing, SEO, and digital growth campaigns designed to attract and convert your ideal customers.',
    tags: ['SEO', 'Content', 'Funnels'],
    gradient: 'from-emerald-400 to-teal-500',
    hoverGlow: 'rgba(16, 185, 129, 0.12)',
    tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
]

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="relative pt-36 pb-24 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-50/60 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-50/60 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">What We Offer</span>
            <h1 className="font-display font-bold leading-tight mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Services Built to<br />
              <span className="gradient-text">Scale Your Business</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              From design to development and beyond — everything you need to dominate your market online.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map(({ emoji, title, desc, tags, gradient, hoverGlow, tagColor }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  boxShadow: `0 20px 60px ${hoverGlow}, 0 8px 24px rgba(0,0,0,0.06)`,
                  transition: { duration: 0.3, ease: 'easeOut' }
                }}
                className="group relative bg-white rounded-[24px] overflow-hidden transition-all duration-300 cursor-pointer"
                style={{
                  boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
                  border: '1px solid rgba(241,245,249,0.8)'
                }}
              >
                {/* Top gradient strip */}
                <div className={`h-1 bg-gradient-to-r ${gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Hover glow overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

                <div className="p-8 relative">
                  {/* Emoji icon with animated background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-300`} />
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300 inline-block">{emoji}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                    {desc}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${tagColor} group-hover:scale-105 transition-transform duration-200`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-teal-700 transition-colors group/link"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-slate-500 mb-6">Not sure which service is right for you?</p>
            <Link to="/contact" className="btn-primary">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

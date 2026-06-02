import { Link } from 'react-router-dom'
import { Zap, Twitter, Linkedin, Instagram, Github, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display font-bold text-3xl text-white mb-2">
              Ready to grow your business?
            </h3>
            <p className="text-slate-400">Let's build something extraordinary together.</p>
          </div>
          <Link to="/contact" className="btn-primary whitespace-nowrap">
            Start Your Project
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-xl text-white tracking-tight">
                AUTO<span className="gradient-text">FY</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premium web development agency crafting digital experiences that drive real business growth.
            </p>
            <div className="flex gap-3">
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/rathod-rahul-63ab542b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              
              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/rathodspeaks1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Twitter/X Link */}
             

              {/* GitHub Link */}
              
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">
                  SaaS Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Analytics & Dashboards
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Brand & Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Growth Strategy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="autofy07@gmails.com" className="text-slate-400 hover:text-white text-sm transition-colors">
                  autofy07@gmails.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+919392472134" className="text-slate-400 hover:text-white text-sm transition-colors">
                  +91 9392472134
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">Remote, Available </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© 2026 Autofy.ai Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
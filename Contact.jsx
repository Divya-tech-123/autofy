import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Phone, Instagram, Linkedin, MapPin, MessageCircle, Github, Twitter, Globe } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

export default function Contact() {
  const [form, setForm] = useState({ 
    name: 'Rahul Sharma', 
    email: 'autofy07@gmails.com', 
    phone: '+91 98765 43210', 
    service: '', 
    budget: '', 
    message: '' 
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
    }, 3000)
  }

  const contactChannels = [
    { 
      icon: MessageCircle, 
      title: 'WhatsApp (Fastest Response)', 
      details: ['+91 93924 72134', '+91 77804 94171'],
      color: 'text-green-600',
      bg: 'bg-green-50',
      link: 'https://wa.me/919392472134'
    },
    { 
      icon: Instagram, 
      title: 'Instagram', 
      details: ['@rathodspeaks1'],
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      link: 'https://www.instagram.com/divyalearn_x?igsh=dzFuMjdxN3RuNXdl'
    },
    { 
      icon: Linkedin, 
      title: 'LinkedIn', 
      details: ['Rathod Rahul'],
      color: 'text-blue-700',
      bg: 'bg-blue-50',
      link: 'https://linkedin.com/in/rathod-rahul'
    },
    { 
      icon: MapPin, 
      title: 'Location', 
      details: ['Hyderabad, Telangana, India'],
      color: 'text-red-500',
      bg: 'bg-red-50',
      link: '#'
    },
  ]

  // Social media icons for bottom section
  const socialLinks = [
    { icon: MessageCircle, name: 'WhatsApp', color: 'text-green-600', hoverBg: 'hover:bg-green-50', link: 'https://wa.me/919392472134' },
    { icon: Instagram, name: 'Instagram', color: 'text-pink-600', hoverBg: 'hover:bg-pink-50', link: 'https://instagram.com/rathodspeaks1' },
    { icon: Linkedin, name: 'LinkedIn', color: 'text-blue-700', hoverBg: 'hover:bg-blue-50', link: 'https://linkedin.com/in/rathod-rahul' },
    { icon: Github, name: 'GitHub', color: 'text-gray-800', hoverBg: 'hover:bg-gray-100', link: 'https://github.com/rathodrahul' },
  ] 

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Let's Build <span className="text-teal-600">Something Great</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you're looking to launch a new website, automate your business workflows, 
            or build a SaaS product — we're ready to help. Reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Channels */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {contactChannels.map((channel, index) => (
              <motion.a
                key={index}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 25px -12px rgba(0, 0, 0, 0.1)',
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-teal-200 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className={`${channel.bg} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <channel.icon className={`w-6 h-6 ${channel.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{channel.title}</h3>
                    {channel.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp Chat Button */}
            <motion.a
              href="https://wa.me/919392472134"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="block bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4 text-center font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Chat on WhatsApp →
            </motion.a>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thanks for reaching out. We'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                      placeholder="Rahul Sharma"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                      placeholder="hello@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>UI/UX Design</option>
                        <option>Digital Marketing</option>
                        <option>SaaS Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none bg-white"
                      >
                        <option value="">Select budget...</option>
                        <option>$1,000 - $5,000</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000 - $25,000</option>
                        <option>$25,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your Project</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Describe your project, goals, and timeline..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-teal-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </motion.button>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    We typically respond within a few hours on WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Social Icons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-10 border-t border-gray-200"
        >
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">Connect with us on social media</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-300 ${social.hoverBg} border border-gray-100 hover:shadow-xl cursor-pointer`}
                title={social.name}
              >
                <social.icon className={`w-5 h-5 md:w-6 md:h-6 ${social.color} transition-all duration-300 group-hover:scale-110`} />
                
                {/* Tooltip on hover */}
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Copyright text */}
          <div className="text-center mt-10">
            <p className="text-gray-400 text-sm">
              © 2024 Rathod Rahul. All rights reserved. | <a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
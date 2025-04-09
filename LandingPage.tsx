import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Search, Shield, CheckCircle } from 'lucide-react';
import { useSession } from 'next-auth/react';
import FeaturedProjects from './components/FeaturedProjects'; // Adjust the path as necessary

export default function LandingPage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-8">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">CommunityBuild</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</a>
            <a href="#success-stories" className="text-sm font-medium hover:text-primary transition-colors">Success Stories</a>
          </nav>
          <div className="flex items-center gap-4">
            {session ? (
              <>
                <span className="text-sm font-medium">Welcome, {session.user.name}</span>
                <a href="/api/auth/signout" className="text-sm font-medium hover:text-primary transition-colors">Logout</a>
              </>
            ) : (
              <>
                <a href="/login" className="text-sm font-medium hover:text-primary transition-colors">Login</a>
                <button className="px-4 py-2 text-sm font-medium text-primary border border-primary rounded-full hover:bg-primary/10 transition-colors">
                  Donate Now
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-colors">
                  Start a Project
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-8 text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Empower Communities,<br />
            One Project at a Time
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of people supporting local initiatives with real-time transparency and measurable impact
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="px-6 py-3 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors">
              Explore Projects
            </button>
            <button className="px-6 py-3 text-primary border border-primary rounded-full hover:bg-primary/10 transition-colors">
              Start a Project
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-accent">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <FeaturedProjects projects={[]} />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Browse & Choose", desc: "Find a cause that matters to you" },
              { icon: Shield, title: "Contribute Securely", desc: "Make a donation via secure payment" },
              { icon: CheckCircle, title: "Track Impact", desc: "See your contribution make a difference" }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 bg-accent">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Sarah Johnson",
                role: "PROJECT CREATOR",
                description: "Thanks to CommunityBuild, we raised enough funds to renovate our local playground in just 3 weeks.",
                contributors: 42
              },
              {
                title: "Maple Street School",
                role: "COMPLETED PROJECT",
                description: "Our new computer lab is now helping 250+ students learn digital skills.",
                contributors: 78
              }
            ].map((story, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">
                  {story.role}
                </span>
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-muted-foreground mb-4">{story.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{story.contributors} contributors</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "500+", label: "Projects Funded" },
              { value: "$2.5M+", label: "Raised" },
              { value: "15,000+", label: "Contributors" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-8 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-muted-foreground mb-8">Join the movement! Start or support a project today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors">
                Start a Project
              </button>
              <button className="px-6 py-3 text-primary border border-primary rounded-full hover:bg-primary/10 transition-colors">
                Donate Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-300">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-white" />
                <span className="text-xl font-bold text-white">CommunityBuild</span>
              </div>
              <p className="text-sm">Empowering ideas through community support</p>
            </div>
            {[
              {
                title: "Quick Links",
                links: ["About Us", "How It Works", "Success Stories"]
              },
              {
                title: "Support",
                links: ["Help Center", "Contact Us", "FAQs"]
              },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms of Service", "Trust & Safety"]
              }
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            © 2024 CommunityBuild. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
} 
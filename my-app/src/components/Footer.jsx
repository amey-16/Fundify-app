"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    (<footer
      className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">CommunityImpact</h3>
          <p className="mb-4 text-indigo-200">
            Empowering communities through collaborative action and transparent initiatives.
          </p>
          <p className="text-indigo-300">&copy; 2025 CommunityImpact</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Projects", "How It Works", "Contact"].map((item, index) => (
              <motion.li key={index} whileHover={{ x: 5 }}>
                <Link
                  href="#"
                  className="text-indigo-200 hover:text-pink-300 transition-colors duration-300">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
              { icon: Instagram, label: "Instagram" },
              { icon: Mail, label: "Email" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                aria-label={item.label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-indigo-200 hover:text-pink-300 transition-colors duration-300">
                <item.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>)
  );
}


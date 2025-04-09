"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    (<section className="py-20 px-6 bg-gradient-to-br from-purple-100 to-indigo-100">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-indigo-800"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          Why Choose Our Platform?
        </motion.h2>
        <motion.p
          className="text-xl mb-12 text-center text-indigo-600"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          Our platform connects passionate individuals with impactful community-driven projects. Together, we create
          lasting change through collaboration and transparency.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Create Projects", icon: "🚀", description: "Start a project for a cause that matters to you." },
            {
              title: "Secure Contributions",
              icon: "🔒",
              description: "Contribute to active projects with confidence.",
            },
            { title: "Track Progress", icon: "📊", description: "Monitor real-time progress and impact of projects." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}>
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}>
          <p className="text-2xl font-bold mb-6 text-indigo-800">Ready to make an impact? Start your journey today!</p>
          <motion.button
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)" }}
            whileTap={{ scale: 0.95 }}>
            Explore Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </section>)
  );
}


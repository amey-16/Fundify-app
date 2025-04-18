"use client"

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import FeaturedProjects from "../components/FeaturedProjects"
import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"
// import DynamicBackground from "../components/"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100"
    >
      {/* <DynamicBackground /> */}
      <Navbar />
      <main className="flex-grow relative z-10">
        <Header />
        <FeaturedProjects />
        <AboutSection />
      </main>
      <Footer />
    </motion.div>
  )
}
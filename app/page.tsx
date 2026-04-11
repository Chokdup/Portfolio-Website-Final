"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ParticleField } from "@/components/portfolio/particles"
import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ServicesSection } from "@/components/portfolio/services-section"
import { FeaturedProject } from "@/components/portfolio/featured-project"
import { PortfolioSection } from "@/components/portfolio/portfolio-section"
import { ProcessSection } from "@/components/portfolio/process-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ResumeSection } from "@/components/portfolio/resume-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"
import { ContactModalProvider } from "@/components/portfolio/contact-modal-context"
import { ContactModal } from "@/components/portfolio/contact-modal"

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-background flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 102, 255, 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative text-center z-10">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Rotating ring */}
          <motion.div
            className="absolute -inset-8 border-2 border-primary/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-12 border border-primary/20 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Glowing dots on rings */}
          <motion.div
            className="absolute -inset-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50" />
          </motion.div>
          <motion.div
            className="absolute -inset-12"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary/70 rounded-full" />
          </motion.div>

          {/* Logo text with glow */}
          <div className="relative">
            <motion.span 
              className="text-5xl md:text-7xl font-bold inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(0, 102, 255, 0.3)",
                  "0 0 40px rgba(0, 102, 255, 0.5)",
                  "0 0 20px rgba(0, 102, 255, 0.3)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span 
                className="text-primary inline-block"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                C
              </motion.span>
              <span className="text-foreground">hokdup</span>
            </motion.span>
          </div>
        </motion.div>
        
        {/* Progress bar container */}
        <div className="relative max-w-[240px] mx-auto">
          {/* Background track */}
          <div className="h-1.5 bg-muted/30 rounded-full overflow-hidden">
            {/* Animated progress */}
            <motion.div
              initial={{ width: "0%", x: "-100%" }}
              animate={{ width: "100%", x: "0%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary via-primary to-accent rounded-full relative"
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>
          </div>
          
          {/* Glow under progress bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute -bottom-2 left-0 right-0 h-4 bg-primary/20 blur-xl rounded-full"
          />
        </div>
        
        {/* Loading text with typewriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <span className="text-muted-foreground text-sm tracking-wide">Crafting your experience</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary"
          >
            _
          </motion.span>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${20 + i * 12}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth entrance
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ContactModalProvider>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal />

      <main className="relative min-h-screen">
        {/* Particle background */}
        <ParticleField />

        {/* Navigation */}
        <Navigation />

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Hero Section */}
          <HeroSection />

          {/* Services / Expertise Section */}
          <ServicesSection />

          {/* Featured Project - SCAN2DINE */}
          <FeaturedProject />

          {/* Portfolio Section */}
          <PortfolioSection />

          {/* Process Section */}
          <ProcessSection />

          {/* About Section */}
          <AboutSection />

          {/* Resume Section */}
          <ResumeSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />
        </motion.div>

        {/* Background gradient overlays */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent" />
        </div>
      </main>
    </ContactModalProvider>
  )
}

"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react"
import Image from "next/image"

// Deterministic pseudo-random number generator for consistent SSR/client rendering
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const highlights = [
  { icon: MapPin, label: "Based in", value: "Thimphu, Bhutan" },
  { icon: Briefcase, label: "Experience", value: "3+ Years" },
  { icon: GraduationCap, label: "Background", value: "Interactive Design & Development" },
  { icon: Award, label: "Projects", value: "10+ Delivered" },
]

export function AboutSection() {
  // Generate deterministic particle positions
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      left: `${seededRandom(i * 37 + 13) * 100}%`,
      top: `${seededRandom(i * 41 + 17) * 100}%`,
    }))
  }, [])

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            About
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            The Designer Behind the Pixels
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Animated glow effect behind image */}
            <motion.div 
              className="absolute -inset-6 rounded-3xl blur-3xl opacity-60 max-w-[400px] mx-auto lg:mx-0"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0, 102, 255, 0.3) 0%, rgba(0, 102, 255, 0.1) 40%, transparent 70%)",
              }}
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Main image container */}
            <div className="relative aspect-[3/4] w-full max-w-[400px] rounded-2xl overflow-hidden">
              {/* Profile Image */}
              <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl shadow-2xl shadow-primary/30">
                {/* Solid dark background base */}
                <div className="absolute inset-0 bg-[#0a0a12] rounded-2xl" />
                
                {/* Geometric accent shapes */}
                <div className="absolute top-0 right-0 w-1/2 h-1/3 bg-gradient-to-bl from-primary/20 to-transparent rounded-2xl" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/15 to-transparent rounded-2xl" />
                
                {/* Profile image with dark blend */}
                <Image
                  src="/images/profile.jpg"
                  alt="Chokdup - UI/UX Designer"
                  fill
                  className="object-cover object-top rounded-2xl"
                  style={{
                    filter: "brightness(0.85) contrast(1.1) saturate(0.9)",
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                
                {/* Dark color wash overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a18]/60 via-transparent to-[#0a0a18]/50 rounded-2xl mix-blend-multiply" />
                
                {/* Blue tint overlay for tech aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-primary/5 to-primary/15 rounded-2xl mix-blend-color" />
                
                {/* Strong vignette for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)] rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30 rounded-2xl" />
                
                {/* Inner border glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/30" />
                <div className="absolute inset-[1px] rounded-2xl ring-1 ring-inset ring-white/5" />
                
                {/* Decorative floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {particles.map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/60 rounded-full shadow-sm shadow-primary/50"
                      style={{
                        left: pos.left,
                        top: pos.top,
                      }}
                      animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [0.5, 1.5, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating badge - Years */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-8 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-xl p-4 shadow-2xl shadow-primary/20"
              >
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </motion.div>

              {/* Floating badge - Projects */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-4 bottom-12 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-xl p-4 shadow-2xl shadow-primary/20"
              >
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-8 left-8 right-0 bottom-0 border border-primary/20 rounded-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Bio */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">
                I&apos;m Chokdup, a UI/UX Designer passionate about creating impactful digital experiences.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With 3+ years of experience, I help startups build user-centric applications that drive retention and growth. Based in Thimphu, Bhutan, I combine strategic thinking with attention to detail, bridging user needs and business goals through thoughtful, research-driven design.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <highlight.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{highlight.label}</div>
                    <div className="font-medium text-sm">{highlight.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

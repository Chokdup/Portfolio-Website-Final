"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, Filter } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"
import { ContactModalProvider, useContactModal } from "@/components/portfolio/contact-modal-context"
import { ContactModal } from "@/components/portfolio/contact-modal"

const categories = ["All", "Dashboard", "Mobile", "Web Apps"]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`}>
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl overflow-hidden cursor-pointer"
        >
          {/* Card Background with 3D depth effect */}
          <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} border border-primary/20 relative`}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: isHovered 
                    ? "radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.15) 0%, transparent 70%)"
                    : "radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.05) 0%, transparent 70%)"
                }}
                transition={{ duration: 0.5 }}
              />
              {/* Floating geometric elements */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-24 h-24 border border-primary/10 rounded-lg"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${15 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    rotate: isHovered ? [0, 90] : [0, 360],
                    scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
                  }}
                  transition={{
                    duration: isHovered ? 0.6 : 20,
                    repeat: isHovered ? 0 : Infinity,
                    ease: isHovered ? "easeOut" : "linear",
                  }}
                />
              ))}
            </div>

            {/* Project preview mockup */}
            <motion.div 
              className="absolute inset-6 flex items-center justify-center"
              animate={{ 
                y: isHovered ? -15 : 0,
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="w-full max-w-[85%] bg-card/90 backdrop-blur-sm rounded-xl border border-primary/30 shadow-2xl overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50 bg-muted/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="h-4 bg-background/60 rounded-md" />
                  </div>
                </div>
                {/* Content preview */}
                <div className="p-4 space-y-3">
                  <div className="h-3 w-2/3 bg-primary/30 rounded" />
                  <div className="h-2.5 w-1/2 bg-muted/50 rounded" />
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-14 bg-primary/20 rounded-lg" />
                    <div className="h-14 bg-primary/15 rounded-lg" />
                    <div className="h-14 bg-primary/10 rounded-lg" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Year badge */}
            <motion.div
              className="absolute top-4 left-4 px-3 py-1.5 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full"
              animate={{ scale: isHovered ? 1.05 : 1 }}
            >
              <span className="text-xs font-medium text-muted-foreground">{project.year}</span>
            </motion.div>

            {/* Metric badge */}
            <motion.div
              className="absolute top-4 right-4 px-3 py-1.5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-xs font-bold text-primary">{project.metrics}</span>
            </motion.div>

            {/* Hover overlay with CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center p-6"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-center"
              >
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.hook}
                </p>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/25">
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Card Content */}
          <div className="p-6 bg-card border border-t-0 border-primary/10 rounded-b-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {project.category}
              </span>
              <div className="flex gap-1">
                {project.contributions.slice(0, 2).map((contrib) => (
                  <span
                    key={contrib}
                    className="text-[10px] px-2 py-0.5 bg-primary/10 border border-primary/20 rounded-full text-primary"
                  >
                    {contrib}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-muted rounded-md text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { openContactModal } = useContactModal()

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link href="/#portfolio">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full"
              style={{ top: `${15 + i * 15}%` }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              className="inline-block text-primary text-sm font-medium uppercase tracking-widest mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Portfolio
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              All Projects
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A comprehensive collection of my work showcasing user-centered design solutions that drive measurable business outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-card border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <div className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let&apos;s discuss how thoughtful design can drive results for your product.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                onClick={openContactModal}
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link href="/#about">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  Learn About Me
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <ContactModalProvider>
      <ContactModal />
      <ProjectsContent />
    </ContactModalProvider>
  )
}

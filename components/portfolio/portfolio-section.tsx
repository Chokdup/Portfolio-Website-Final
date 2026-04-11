"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"

// Deterministic pseudo-random number generator for consistent SSR/client rendering
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const categories = ["All", "Web Apps", "Mobile", "Dashboard"]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  // Generate deterministic positions based on project id and index
  // Round to 2 decimal places to avoid hydration mismatch from floating point precision
  const bgElements = useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      left: `${Math.round(seededRandom(project.id * 100 + i * 17) * 10000) / 100}%`,
      top: `${Math.round(seededRandom(project.id * 100 + i * 23) * 10000) / 100}%`,
    }))
  }, [project.id])

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative rounded-2xl overflow-hidden cursor-pointer"
      >
        {/* Card Background */}
        <div className={`aspect-[4/3] bg-gradient-to-br ${project.color} border border-primary/20 relative`}>
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            {bgElements.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border border-primary/10 rounded-lg"
                style={{
                  left: pos.left,
                  top: pos.top,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          {/* Project mockup */}
          <div className="absolute inset-4 flex items-center justify-center">
            <motion.div
              animate={{ y: isHovered ? -10 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[80%] bg-card/80 backdrop-blur-sm rounded-lg border border-primary/30 shadow-2xl overflow-hidden"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-3 py-2 border-b border-border/50 bg-muted/50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 mx-2">
                  <div className="h-4 bg-background/50 rounded-sm" />
                </div>
              </div>
              {/* Content placeholder */}
              <div className="p-4 space-y-3">
                <div className="h-3 w-3/4 bg-primary/30 rounded" />
                <div className="h-3 w-1/2 bg-muted/50 rounded" />
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="h-12 bg-primary/20 rounded" />
                  <div className="h-12 bg-primary/15 rounded" />
                  <div className="h-12 bg-primary/10 rounded" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Metric badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 right-4 px-3 py-1.5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full"
          >
            <span className="text-xs font-medium text-primary">{project.metrics}</span>
          </motion.div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center"
          >
            <span className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2">
              View Case Study
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.div>
        </div>

        {/* Card Content */}
        <div className="p-6 bg-card border border-t-0 border-primary/10 rounded-b-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              {project.category}
            </span>
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
                className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

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
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A collection of projects where thoughtful design directly impacted business outcomes.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10 group"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

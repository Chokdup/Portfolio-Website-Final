"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Calendar, ExternalLink, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"

const categories = ["All", "Web Apps", "Mobile Apps", "Dashboard"]

// Project featured images - using first mockup as static preview
const projectPreviewImages: Record<string, string> = {
  "scan2dine": "/projects/scan2dine-home.jpg",
  "qube": "/projects/qube-home.jpg",
  "ndp": "/projects/ndp-login-dashboard.png",
  "q-less": "/projects/qless-landing.png",
  "green-guardian": "/projects/greenguardian-dashboard.png",
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const previewImage = projectPreviewImages[project.slug]
  const isFeatured = project.slug === "scan2dine"

  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
          isFeatured ? "md:col-span-2 md:row-span-2" : ""
        }`}
      >
        {/* Card Container */}
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {/* Image Section */}
          <div className={`relative ${isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"} bg-gradient-to-br ${project.color} border border-primary/20 overflow-hidden`}>
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(0,102,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />
            </div>

            {/* Floating geometric elements */}
            <motion.div
              className="absolute top-6 right-6 w-16 h-16 border border-primary/20 rounded-lg"
              animate={{
                rotate: isHovered ? 45 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute bottom-12 left-6 w-12 h-12 border border-primary/15 rounded-full"
              animate={{
                y: isHovered ? -10 : 0,
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.4 }}
            />

            {/* Project mockup preview - Static image with hover effects */}
            <div className="absolute inset-6 flex items-center justify-center">
              <motion.div
                animate={{ 
                  y: isHovered ? -15 : 0, 
                  scale: isHovered ? 1.02 : 1,
                  rotateX: isHovered ? 5 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ transformPerspective: 1000 }}
                className={`w-full ${isFeatured ? "max-w-[85%]" : "max-w-[90%]"} bg-card/95 backdrop-blur-sm rounded-xl border border-primary/30 shadow-2xl shadow-primary/10 overflow-hidden`}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border/50 bg-muted/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="h-4 bg-background/60 rounded-md flex items-center px-2">
                      <span className="text-[10px] text-muted-foreground truncate">{project.slug}.app</span>
                    </div>
                  </div>
                </div>
                
                {/* Project screenshot - Static preview */}
                {previewImage ? (
                  <div className={`relative ${isFeatured ? "aspect-video" : "aspect-[16/10]"} overflow-hidden`}>
                    <Image
                      src={previewImage}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes={isFeatured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    />
                    {/* Hover shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: isHovered ? "100%" : "-100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>
                ) : (
                  /* Fallback content preview */
                  <div className="p-4 space-y-3">
                    <div className="h-3 w-3/4 bg-primary/30 rounded" />
                    <div className="h-3 w-1/2 bg-muted/50 rounded" />
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-12 bg-primary/20 rounded" />
                      <div className="h-12 bg-primary/15 rounded" />
                      <div className="h-12 bg-primary/10 rounded" />
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Award badge for featured */}
            {isFeatured && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-amber-500/90 text-amber-950 rounded-full font-bold text-xs shadow-lg shadow-amber-500/25"
              >
                <Award className="w-3.5 h-3.5" />
                Best Project Award
              </motion.div>
            )}

            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`absolute ${isFeatured ? "top-4 right-4" : "top-4 left-4"} flex items-center gap-1.5 px-3 py-1.5 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full`}
            >
              <Calendar className="w-3 h-3 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">{project.year}</span>
            </motion.div>

            {/* Metric badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`absolute ${isFeatured ? "bottom-4 right-4" : "top-4 right-4"} px-3 py-1.5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full`}
            >
              <span className="text-xs font-bold text-primary">{project.metrics}</span>
            </motion.div>

            {/* Hover overlay with CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-center px-6"
              >
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.hook}
                </p>
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.div>
            </motion.div>

            {/* Glow effect on hover */}
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/30 blur-3xl" />
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
            <h3 className={`${isFeatured ? "text-2xl" : "text-xl"} font-bold mb-2 group-hover:text-primary transition-colors`}>
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, isFeatured ? 4 : 3).map((tag) => (
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
      </motion.div>
    </Link>
  )
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  // Reorder to put SCAN2DINE first for featured treatment
  const sortedProjects = useMemo(() => {
    const scan2dine = filteredProjects.find(p => p.slug === "scan2dine")
    const others = filteredProjects.filter(p => p.slug !== "scan2dine")
    return scan2dine ? [scan2dine, ...others] : filteredProjects
  }, [filteredProjects])

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
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {sortedProjects.map((project, index) => (
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
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 group px-8"
            >
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

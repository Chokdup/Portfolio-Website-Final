"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink, Quote, Calendar, Briefcase, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { projects, type Project } from "@/lib/projects-data"
import { ContactModalProvider, useContactModal } from "@/components/portfolio/contact-modal-context"
import { ContactModal } from "@/components/portfolio/contact-modal"

interface ProjectDetailClientProps {
  project: Project
}

// Get adjacent projects for navigation
function getAdjacentProjects(currentSlug: string) {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1]
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0]
  return { prevProject, nextProject }
}

function ProjectDetailContent({ project }: ProjectDetailClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { openContactModal } = useContactModal()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])
  
  const { prevProject, nextProject } = getAdjacentProjects(project.slug)

  // Get preview image for hero
  const heroPreviewImage = project.mockups[0]?.src

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
      />

      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link href="/projects">
          <Button variant="outline" size="sm" className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Projects
          </Button>
        </Link>
      </motion.div>

      {/* Premium Hero Section with UI Preview */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
        <div className="absolute inset-0 bg-background/60" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated rings */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-primary/10 rounded-full"
              style={{
                width: `${200 + i * 120}px`,
                height: `${200 + i * 120}px`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
          
          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Project Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Category and Year */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-6"
              >
                <span className="text-primary text-sm font-medium uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-primary/50" />
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {project.title}
              </motion.h1>

              {/* Hook / Tagline */}
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl text-pretty leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {project.hook}
              </motion.p>

              {/* My Contributions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    My Contributions
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.contributions.map((contribution, index) => (
                    <motion.span
                      key={contribution}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      className="px-4 py-2 bg-primary/15 border border-primary/30 rounded-full text-sm font-medium text-primary"
                    >
                      {contribution}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Key Metric */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-3 px-6 py-3 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-xl">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-xl font-bold text-primary">{project.metrics}</span>
                    <span className="text-sm text-muted-foreground ml-2">Key Impact</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: UI Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
              style={{ perspective: 1000 }}
            >
              <div className="relative">
                {/* Glow effect behind */}
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
                
                {/* Main mockup container */}
                <motion.div
                  className="relative bg-card/95 backdrop-blur-sm rounded-2xl border border-primary/30 shadow-2xl shadow-primary/20 overflow-hidden"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 bg-background/60 rounded-lg flex items-center px-3 max-w-md">
                        <span className="text-xs text-muted-foreground truncate">{project.slug}.app</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screenshot */}
                  {heroPreviewImage ? (
                    <div className="relative aspect-video">
                      <Image
                        src={heroPreviewImage}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-primary" />
                        </div>
                        <p className="text-muted-foreground">UI Preview</p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 border border-primary/20 rounded-xl backdrop-blur-sm bg-background/30"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 border border-primary/30 rounded-full backdrop-blur-sm bg-background/20"
                  animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-2.5 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* SAR Sections - Focused on Personal Contributions */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">My Design Journey</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A detailed look at my design thinking, decisions, and problem-solving process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-24">
            {/* Situation - The UX Challenge I Faced */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
              <div className="pl-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xl shadow-lg shadow-primary/10">
                    S
                  </span>
                  <div>
                    <span className="text-xs text-primary uppercase tracking-widest">The UX Challenge</span>
                    <h2 className="text-2xl md:text-3xl font-bold">Situation</h2>
                  </div>
                </div>
                <div className="bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-colors">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.situation}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action - My Design Approach */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
              <div className="pl-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xl shadow-lg shadow-primary/10">
                    A
                  </span>
                  <div>
                    <span className="text-xs text-primary uppercase tracking-widest">My Design Approach</span>
                    <h2 className="text-2xl md:text-3xl font-bold">Action</h2>
                  </div>
                </div>
                <div className="bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-colors">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.action}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Result - The Impact I Created */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
              <div className="pl-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xl shadow-lg shadow-primary/10">
                    R
                  </span>
                  <div>
                    <span className="text-xs text-primary uppercase tracking-widest">The Impact I Created</span>
                    <h2 className="text-2xl md:text-3xl font-bold">Result</h2>
                  </div>
                </div>
                <div className="bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/20 transition-colors">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Did Section - Process Breakdown */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Deep Dive
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">What I Did to Complete This Project</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A detailed breakdown of my design and development process
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {project.processBreakdown.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground leading-relaxed pt-1">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Timeline */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Design Process</h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {project.designProcess.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Connector line */}
                  {index < project.designProcess.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/30 to-primary/10 z-0" />
                  )}
                  
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-card border border-border/50 hover:border-primary/30 rounded-2xl p-6 relative z-10 h-full transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-bold mb-2 text-lg">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Product Showcase (renamed from Project Mockups) */}
      <section className="py-24 bg-card/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Visual Design
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Final Product Showcase</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              The completed interface designs that brought this project to life
            </p>
          </motion.div>

          <div className="space-y-20 max-w-5xl mx-auto">
            {project.mockups.map((mockup, index) => (
              <motion.div
                key={mockup.src}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className={`aspect-[16/10] rounded-3xl bg-gradient-to-br ${project.color} border border-primary/20 overflow-hidden shadow-2xl shadow-primary/10`}
                >
                  {/* Check if project has actual mockup images to show */}
                  {(project.slug === "scan2dine" || project.slug === "qube" || project.slug === "ndp" || project.slug === "q-less" || project.slug === "green-guardian") ? (
                    <div className="absolute inset-0">
                      <Image
                        src={mockup.src}
                        alt={mockup.alt}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 80vw"
                      />
                    </div>
                  ) : (
                    /* Mockup visualization for other projects */
                    <div className="absolute inset-6 md:inset-10 bg-card/95 backdrop-blur-sm rounded-2xl border border-primary/30 shadow-2xl overflow-hidden">
                      {/* Browser chrome */}
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/50">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/60" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                          <div className="w-3 h-3 rounded-full bg-green-500/60" />
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="h-5 bg-background/60 rounded-lg max-w-md" />
                        </div>
                      </div>
                      {/* Content placeholder */}
                      <div className="p-8 space-y-6">
                        <div className="h-5 w-1/3 bg-primary/30 rounded" />
                        <div className="h-4 w-2/3 bg-muted/50 rounded" />
                        <div className="h-3 w-1/2 bg-muted/30 rounded" />
                        <div className="grid grid-cols-3 gap-6 mt-8">
                          <div className="h-28 bg-primary/20 rounded-xl" />
                          <div className="h-28 bg-primary/15 rounded-xl" />
                          <div className="h-28 bg-primary/10 rounded-xl" />
                        </div>
                        <div className="grid grid-cols-2 gap-6 mt-4">
                          <div className="h-20 bg-muted/30 rounded-xl" />
                          <div className="h-20 bg-muted/30 rounded-xl" />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
                <p className="text-center text-muted-foreground mt-6 text-lg">{mockup.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Quote className="w-16 h-16 text-primary/30 mx-auto mb-8" />
              </motion.div>
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium mb-10 text-balance leading-relaxed">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-lg">{project.testimonial.author}</p>
                <p className="text-muted-foreground">{project.testimonial.role}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="py-16 border-t border-border/50 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              Continue Exploring
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">More Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Previous Project */}
            <Link href={`/projects/${prevProject.slug}`}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: -5 }}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all cursor-pointer overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ChevronLeft className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Previous Project</span>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{prevProject.title}</h3>
                    <p className="text-sm text-muted-foreground">{prevProject.category}</p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Next Project */}
            <Link href={`/projects/${nextProject.slug}`}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all cursor-pointer overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex-1 text-right">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Next Project</span>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{nextProject.title}</h3>
                    <p className="text-sm text-muted-foreground">{nextProject.category}</p>
                  </div>
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to create something impactful?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
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
              <Link href="/projects">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  View All Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <ContactModalProvider>
      <ContactModal />
      <ProjectDetailContent project={project} />
    </ContactModalProvider>
  )
}

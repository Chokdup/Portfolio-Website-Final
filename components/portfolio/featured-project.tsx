"use client"

import { motion } from "framer-motion"
import { ArrowRight, Award, Calendar, Briefcase, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"

export function FeaturedProject() {
  // Get only SCAN2DINE as the featured flagship project
  const scan2dine = projects.find(p => p.slug === "scan2dine")

  if (!scan2dine) return null

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 mb-4">
            <Award className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-500">Featured Project</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Flagship Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Award-winning project showcasing the impact of user-centered design on real-world dining experiences.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {/* SCAN2DINE - Primary Featured Project */}
          {scan2dine && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href={`/projects/${scan2dine.slug}`} className="block group">
                <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/10">
                  {/* Award Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 bg-amber-500 text-amber-950 rounded-full font-bold text-sm shadow-lg shadow-amber-500/25"
                  >
                    <Award className="w-4 h-4" />
                    Best Project Award
                  </motion.div>

                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Image / Mockup */}
                    <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-600/20">
                        <div className="absolute inset-0 overflow-hidden">
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-32 h-32 border border-amber-500/20 rounded-lg"
                              style={{
                                left: `${10 + i * 15}%`,
                                top: `${10 + (i % 3) * 25}%`,
                              }}
                              animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1],
                              }}
                              transition={{
                                duration: 20 + i * 3,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Project mockup preview */}
                      <div className="absolute inset-8 flex items-center justify-center">
                        <motion.div
                          whileHover={{ y: -10, scale: 1.02 }}
                          transition={{ duration: 0.4 }}
                          className="w-full max-w-[90%] bg-card/95 backdrop-blur-sm rounded-2xl border border-amber-500/30 shadow-2xl overflow-hidden"
                        >
                          {/* Browser chrome */}
                          <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/50">
                            <div className="flex gap-2">
                              <div className="w-3 h-3 rounded-full bg-red-500/60" />
                              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                              <div className="w-3 h-3 rounded-full bg-green-500/60" />
                            </div>
                            <div className="flex-1 mx-4">
                              <div className="h-5 bg-background/60 rounded-lg flex items-center px-3">
                                <Globe className="w-3 h-3 text-muted-foreground mr-2" />
                                <span className="text-xs text-muted-foreground">scan2dine.app</span>
                              </div>
                            </div>
                          </div>
                          {/* Hero content preview */}
                          <div className="relative aspect-video bg-gradient-to-br from-background to-muted/30">
                            <Image
                              src="/projects/scan2dine-home.jpg"
                              alt="SCAN2DINE - Hassle-Free Dining"
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      {/* Year and Category */}
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="flex items-center gap-2 text-amber-500 text-sm font-medium">
                          <Calendar className="w-4 h-4" />
                          {scan2dine.year}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                        <span className="text-muted-foreground text-sm uppercase tracking-wider">
                          {scan2dine.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 group-hover:text-amber-500 transition-colors">
                        {scan2dine.title}
                      </h3>

                      {/* Hook */}
                      <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                        {scan2dine.hook}
                      </p>

                      {/* Contributions */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-3">
                          <Briefcase className="w-4 h-4 text-amber-500" />
                          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            My Contributions
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {scan2dine.contributions.map((contribution) => (
                            <span
                              key={contribution}
                              className="px-3 py-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-sm font-medium text-amber-400"
                            >
                              {contribution}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div>
                        <Button
                          size="lg"
                          className="bg-amber-500 text-amber-950 hover:bg-amber-400 shadow-lg shadow-amber-500/25 group/btn"
                        >
                          View Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}


        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, PenTool, Rocket, type LucideIcon } from "lucide-react"

interface Step {
  number: string
  title: string
  description: string
  icon: LucideIcon
  details: string[]
  color: string
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into understanding your business goals, target users, and market landscape through research and stakeholder interviews.",
    icon: Search,
    details: ["User Research", "Competitive Analysis", "Stakeholder Interviews", "Goal Definition"],
    color: "from-cyan-500/30 to-blue-500/20",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Synthesize research insights into actionable strategies, defining user journeys and information architecture.",
    icon: Lightbulb,
    details: ["User Personas", "Journey Mapping", "Information Architecture", "Feature Prioritization"],
    color: "from-violet-500/30 to-purple-500/20",
  },
  {
    number: "03",
    title: "Design",
    description: "Create intuitive interfaces through iterative design, from wireframes to high-fidelity prototypes with user validation.",
    icon: PenTool,
    details: ["Wireframing", "Visual Design", "Prototyping", "Usability Testing"],
    color: "from-emerald-500/30 to-teal-500/20",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Hand off polished designs with comprehensive documentation, supporting development and measuring success post-launch.",
    icon: Rocket,
    details: ["Design Specs", "Developer Handoff", "Quality Assurance", "Success Metrics"],
    color: "from-amber-500/30 to-orange-500/20",
  },
]

// Modern icon-based visual component
function ProcessVisual({ step, index }: { step: Step; index: number }) {
  const IconComponent = step.icon

  return (
    <div
      className={`${
        index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
      } hidden lg:block`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="aspect-[4/3] rounded-2xl border border-primary/20 relative overflow-hidden group cursor-pointer"
      >
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${step.color}`} />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0,102,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} />
        </div>
        
        {/* Central icon display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Glowing rings */}
            <motion.div
              className="absolute -inset-8 border border-primary/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-16 border border-primary/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Icon container */}
            <div className="w-20 h-20 rounded-2xl bg-background/90 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-xl shadow-primary/20">
              <IconComponent className="w-10 h-10 text-primary" />
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-8 right-8 w-8 h-8 rounded-lg bg-background/60 backdrop-blur-sm border border-primary/20 flex items-center justify-center"
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-3 h-3 rounded bg-primary/40" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-8 left-8 w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border border-primary/20 flex items-center justify-center"
          animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 rounded-full bg-primary/30" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 left-8 w-6 h-6 rounded bg-primary/20 border border-primary/30"
          animate={{ rotate: [0, 90, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Step number watermark */}
        <div className="absolute bottom-4 right-4">
          <span className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-400">
            {step.number}
          </span>
        </div>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-400" />
      </motion.div>
    </div>
  )
}

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            How I Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            A proven design process that transforms ideas into impactful digital experiences.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  } mb-8 lg:mb-24`}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} border border-primary/30 flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-6 h-6 text-primary" />
                    </motion.div>

                    <div className="flex-1">
                      {/* Number & Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl font-bold text-primary/40">{step.number}</span>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <ProcessVisual step={step} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

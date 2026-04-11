"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, PenTool, Rocket, type LucideIcon } from "lucide-react"

interface Step {
  number: string
  title: string
  description: string
  icon: LucideIcon
  details: string[]
  image: string
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into understanding your business goals, target users, and market landscape through research and stakeholder interviews.",
    icon: Search,
    details: ["User Research", "Competitive Analysis", "Stakeholder Interviews", "Goal Definition"],
    image: "/images/process-discovery.jpg",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Synthesize research insights into actionable strategies, defining user journeys and information architecture.",
    icon: Lightbulb,
    details: ["User Personas", "Journey Mapping", "Information Architecture", "Feature Prioritization"],
    image: "/images/process-strategy.jpg",
  },
  {
    number: "03",
    title: "Design",
    description: "Create intuitive interfaces through iterative design, from wireframes to high-fidelity prototypes with user validation.",
    icon: PenTool,
    details: ["Wireframing", "Visual Design", "Prototyping", "Usability Testing"],
    image: "/images/process-design.jpg",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Hand off polished designs with comprehensive documentation, supporting development and measuring success post-launch.",
    icon: Rocket,
    details: ["Design Specs", "Developer Handoff", "Quality Assurance", "Success Metrics"],
    image: "/images/process-delivery.jpg",
  },
]

function ProcessVisual({ step, index }: { step: Step; index: number }) {
  return (
    <div
      className={`${
        index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
      } hidden lg:block`}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="aspect-[4/3] rounded-2xl border border-primary/20 relative overflow-hidden group cursor-pointer"
      >
        {/* Image with hover animation */}
        <motion.img
          src={step.image}
          alt={`${step.title} process illustration`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-400" />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-400" />
        
        {/* Icon overlay */}
        <div className="absolute bottom-4 right-4">
          <motion.div
            className="p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/30"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <step.icon className="w-6 h-6 text-primary" />
          </motion.div>
        </div>
        
        {/* Step number */}
        <div className="absolute top-4 left-4">
          <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-400">
            {step.number}
          </span>
        </div>
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
                      className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center"
                    >
                      <step.icon className="w-7 h-7 text-primary" />
                    </motion.div>

                    <div>
                      {/* Number & Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-4xl font-bold text-primary/30">{step.number}</span>
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

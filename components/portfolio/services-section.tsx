"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Users,
  MousePointerClick,
  Palette,
  Smartphone,
  Globe,
  Heart,
} from "lucide-react"

const services = [
  {
    id: "retention",
    title: "User Retention",
    icon: Users,
    description: "Designing interfaces that keep users coming back through intuitive workflows and delightful experiences.",
    image: "/images/expertise-retention.jpg",
  },
  {
    id: "usability",
    title: "Product Usability",
    icon: MousePointerClick,
    description: "Enhancing product usability through user research, testing, and iterative design improvements.",
    image: "/images/expertise-usability.jpg",
  },
  {
    id: "systems",
    title: "Design Systems",
    icon: Palette,
    description: "Creating scalable design systems that ensure consistency and accelerate product development.",
    image: "/images/expertise-systems.jpg",
  },
  {
    id: "mobile",
    title: "Mobile Experience",
    icon: Smartphone,
    description: "Designing responsive mobile interfaces that provide seamless experiences across all devices.",
    image: "/images/expertise-mobile.jpg",
  },
  {
    id: "webapp",
    title: "Web Application Interfaces",
    icon: Globe,
    description: "Crafting complex web applications that are powerful yet simple to use for diverse user bases.",
    image: "/images/expertise-webapp.jpg",
  },
  {
    id: "engagement",
    title: "User Engagement",
    icon: Heart,
    description: "Designing features that drive meaningful user engagement and create lasting product loyalty.",
    image: "/images/expertise-engagement.jpg",
  },
]

function ServiceVisual({ service }: { service: typeof services[0] }) {
  return (
    <motion.div
      key={service.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.02 }}
      className="relative w-full h-full rounded-2xl border border-primary/20 overflow-hidden group cursor-pointer"
    >
      {/* Image with hover zoom */}
      <motion.img
        src={service.image}
        alt={`${service.title} illustration`}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-400" />
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-400" />
      
      {/* Icon badge */}
      <motion.div
        className="absolute bottom-4 right-4 p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/30"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <service.icon className="w-6 h-6 text-primary" />
      </motion.div>
      
      {/* Floating accent elements */}
      <motion.div
        className="absolute top-6 right-6 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm"
        animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-16 left-6 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
        animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(services[0])

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            What Do I Help Startups Improve?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            I specialize in solving critical UX challenges that directly impact your business metrics and user satisfaction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
          {/* Service Cards - 3x3 Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-3"
          >
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedService(service)}
                className={`group relative p-3 rounded-xl border transition-all duration-300 text-left ${
                  selectedService.id === service.id
                    ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/10"
                    : "bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card"
                }`}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  <div
                    className={`p-2.5 rounded-lg transition-colors ${
                      selectedService.id === service.id
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground group-hover:text-primary"
                    }`}
                  >
                    <service.icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-medium transition-colors leading-tight ${
                      selectedService.id === service.id
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {service.title}
                  </span>
                </div>

                {/* Active indicator */}
                {selectedService.id === service.id && (
                  <motion.div
                    layoutId="activeService"
                    className="absolute inset-0 rounded-xl border-2 border-primary/50 pointer-events-none"
                    initial={false}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Service Visual & Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Visual - Adjusted aspect ratio */}
            <div className="aspect-[16/10] relative">
              <AnimatePresence mode="wait">
                <ServiceVisual service={selectedService} />
              </AnimatePresence>
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2">{selectedService.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {selectedService.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

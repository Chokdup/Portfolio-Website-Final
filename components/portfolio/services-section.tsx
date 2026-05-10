"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Users,
  MousePointerClick,
  Palette,
  Smartphone,
  Globe,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const services = [
  {
    id: "retention",
    title: "User Retention",
    icon: Users,
    description: "Designing interfaces that keep users coming back through intuitive workflows and delightful experiences.",
    visuals: [
      { type: "dashboard", label: "Analytics Dashboard", color: "from-blue-500/30 to-cyan-500/20" },
      { type: "chart", label: "Retention Metrics", color: "from-blue-600/30 to-blue-400/20" },
      { type: "flow", label: "User Journey Flow", color: "from-cyan-500/30 to-blue-500/20" },
    ],
  },
  {
    id: "usability",
    title: "Product Usability",
    icon: MousePointerClick,
    description: "Enhancing product usability through user research, testing, and iterative design improvements.",
    visuals: [
      { type: "testing", label: "Usability Testing", color: "from-emerald-500/30 to-teal-500/20" },
      { type: "heatmap", label: "Click Heatmap", color: "from-teal-500/30 to-emerald-500/20" },
      { type: "feedback", label: "User Feedback", color: "from-green-500/30 to-emerald-500/20" },
    ],
  },
  {
    id: "systems",
    title: "Design Systems",
    icon: Palette,
    description: "Creating scalable design systems that ensure consistency and accelerate product development.",
    visuals: [
      { type: "components", label: "Component Library", color: "from-violet-500/30 to-purple-500/20" },
      { type: "tokens", label: "Design Tokens", color: "from-purple-500/30 to-violet-500/20" },
      { type: "guidelines", label: "Style Guidelines", color: "from-indigo-500/30 to-purple-500/20" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Experience",
    icon: Smartphone,
    description: "Designing responsive mobile interfaces that provide seamless experiences across all devices.",
    visuals: [
      { type: "app", label: "Mobile App UI", color: "from-rose-500/30 to-pink-500/20" },
      { type: "responsive", label: "Responsive Design", color: "from-pink-500/30 to-rose-500/20" },
      { type: "gestures", label: "Touch Gestures", color: "from-red-500/30 to-pink-500/20" },
    ],
  },
  {
    id: "webapp",
    title: "Web Application Interfaces",
    icon: Globe,
    description: "Crafting complex web applications that are powerful yet simple to use for diverse user bases.",
    visuals: [
      { type: "webapp", label: "Web Dashboard", color: "from-amber-500/30 to-orange-500/20" },
      { type: "forms", label: "Form Design", color: "from-orange-500/30 to-amber-500/20" },
      { type: "navigation", label: "Navigation System", color: "from-yellow-500/30 to-amber-500/20" },
    ],
  },
  {
    id: "engagement",
    title: "User Engagement",
    icon: Heart,
    description: "Designing features that drive meaningful user engagement and create lasting product loyalty.",
    visuals: [
      { type: "gamification", label: "Gamification", color: "from-fuchsia-500/30 to-pink-500/20" },
      { type: "notifications", label: "Smart Notifications", color: "from-pink-500/30 to-fuchsia-500/20" },
      { type: "rewards", label: "Reward Systems", color: "from-purple-500/30 to-fuchsia-500/20" },
    ],
  },
]

// UI Mockup Components
function DashboardMockup() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="flex-1 h-16 bg-primary/20 rounded-lg border border-primary/30 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-primary/40" />
        </div>
        <div className="flex-1 h-16 bg-primary/15 rounded-lg border border-primary/20" />
        <div className="flex-1 h-16 bg-primary/10 rounded-lg border border-primary/20" />
      </div>
      <div className="flex-1 bg-card/50 rounded-lg border border-primary/20 p-3">
        <div className="h-2 w-20 bg-primary/30 rounded mb-3" />
        <div className="flex gap-2 h-full">
          {[60, 80, 45, 90, 70, 55].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-primary/40 to-primary/10 rounded"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ChartMockup() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="h-2 w-24 bg-primary/30 rounded" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-primary/20 rounded border border-primary/30" />
          <div className="h-6 w-16 bg-card rounded border border-border" />
        </div>
      </div>
      <div className="flex-1 relative">
        <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
          <motion.path
            d="M 0 80 Q 30 60 50 70 T 100 50 T 150 30 T 200 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.path
            d="M 0 80 Q 30 60 50 70 T 100 50 T 150 30 T 200 40 V 100 H 0 Z"
            fill="url(#gradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" className="text-primary" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-primary" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

function FlowMockup() {
  return (
    <div className="w-full h-full p-4 flex items-center justify-center gap-4">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
            <div className="w-6 h-6 rounded bg-primary/40" />
          </div>
          <div className="h-1.5 w-12 bg-primary/20 rounded" />
          {i < 3 && (
            <motion.div
              className="absolute w-8 h-0.5 bg-primary/30"
              style={{ left: `${25 + i * 30}%`, top: "45%" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.3 + 0.5 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

function MobileAppMockup() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-24 h-44 bg-card rounded-2xl border-2 border-primary/30 p-2 relative overflow-hidden">
        <div className="w-8 h-1 bg-primary/30 rounded-full mx-auto mb-2" />
        <div className="space-y-2">
          <div className="h-16 bg-primary/20 rounded-lg" />
          <div className="h-2 w-16 bg-primary/30 rounded" />
          <div className="h-2 w-12 bg-primary/20 rounded" />
          <div className="flex gap-1 mt-3">
            <div className="flex-1 h-8 bg-primary/30 rounded" />
            <div className="flex-1 h-8 bg-primary/15 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

function ComponentsMockup() {
  return (
    <div className="w-full h-full p-4 grid grid-cols-3 gap-2">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="bg-card border border-primary/20 rounded-lg p-2 flex flex-col items-center justify-center gap-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className={`w-6 h-6 rounded ${i % 2 === 0 ? "bg-primary/40" : "bg-primary/20"}`} />
          <div className="h-1 w-8 bg-primary/20 rounded" />
        </motion.div>
      ))}
    </div>
  )
}

function NotificationsMockup() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-2">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="flex items-center gap-3 p-3 bg-card rounded-lg border border-primary/20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <div className="w-8 h-8 rounded-full bg-primary/30 flex-shrink-0" />
          <div className="flex-1">
            <div className="h-2 w-20 bg-primary/30 rounded mb-1" />
            <div className="h-1.5 w-32 bg-primary/15 rounded" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function getMockupComponent(type: string) {
  switch (type) {
    case "dashboard":
    case "webapp":
      return <DashboardMockup />
    case "chart":
    case "heatmap":
    case "testing":
      return <ChartMockup />
    case "flow":
    case "navigation":
    case "gestures":
      return <FlowMockup />
    case "app":
    case "responsive":
      return <MobileAppMockup />
    case "components":
    case "tokens":
    case "guidelines":
    case "forms":
      return <ComponentsMockup />
    case "gamification":
    case "notifications":
    case "rewards":
    case "feedback":
      return <NotificationsMockup />
    default:
      return <DashboardMockup />
  }
}

function ServiceVisual({ service, currentVisualIndex }: { service: typeof services[0]; currentVisualIndex: number }) {
  const currentVisual = service.visuals[currentVisualIndex]

  return (
    <motion.div
      key={`${service.id}-${currentVisualIndex}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-full rounded-2xl border border-primary/20 overflow-hidden group"
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentVisual.color}`} />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,102,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* UI Mockup */}
      <div className="absolute inset-4">
        <div className="w-full h-full bg-background/80 backdrop-blur-sm rounded-xl border border-primary/30 shadow-xl overflow-hidden">
          {getMockupComponent(currentVisual.type)}
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-400" />
      
      {/* Label badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-4 left-4 px-3 py-1.5 bg-background/90 backdrop-blur-sm border border-primary/30 rounded-full"
      >
        <span className="text-xs font-medium text-primary">{currentVisual.label}</span>
      </motion.div>
      
      {/* Icon badge */}
      <motion.div
        className="absolute bottom-4 right-4 p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/30"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <service.icon className="w-5 h-5 text-primary" />
      </motion.div>
      
      {/* Floating accent elements */}
      <motion.div
        className="absolute top-6 right-6 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm"
        animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState(services[0])
  const [currentVisualIndex, setCurrentVisualIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-slide carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentVisualIndex((prev) => 
        prev === selectedService.visuals.length - 1 ? 0 : prev + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, selectedService.visuals.length])

  // Reset visual index when service changes
  useEffect(() => {
    setCurrentVisualIndex(0)
  }, [selectedService.id])

  const nextVisual = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentVisualIndex((prev) => 
      prev === selectedService.visuals.length - 1 ? 0 : prev + 1
    )
  }, [selectedService.visuals.length])

  const prevVisual = useCallback(() => {
    setIsAutoPlaying(false)
    setCurrentVisualIndex((prev) => 
      prev === 0 ? selectedService.visuals.length - 1 : prev - 1
    )
  }, [selectedService.visuals.length])

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
            I specialize in solving critical UI/UX challenges that directly impact your business metrics and user satisfaction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
          {/* Service Cards - 3x2 Grid */}
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
            {/* Visual with Carousel */}
            <div className="aspect-[16/10] relative">
              <AnimatePresence mode="wait">
                <ServiceVisual 
                  service={selectedService} 
                  currentVisualIndex={currentVisualIndex}
                />
              </AnimatePresence>
              
              {/* Carousel Controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevVisual}
                  className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                
                {/* Dots indicator */}
                <div className="flex gap-1.5">
                  {selectedService.visuals.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false)
                        setCurrentVisualIndex(index)
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentVisualIndex === index 
                          ? "bg-primary w-6" 
                          : "bg-primary/30 hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextVisual}
                  className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
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

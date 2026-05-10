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
  TrendingUp,
  BarChart3,
  Layers,
  Bell,
  Star,
  Zap,
  Target,
  ArrowUpRight,
  CheckCircle2,
  Activity,
  Play,
  Pause,
} from "lucide-react"

const services = [
  {
    id: "retention",
    title: "User Retention",
    icon: Users,
    description: "Designing interfaces that keep users coming back through intuitive workflows and delightful experiences.",
    accentColor: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-500/20",
  },
  {
    id: "usability",
    title: "Product Usability",
    icon: MousePointerClick,
    description: "Enhancing product usability through user research, testing, and iterative design improvements.",
    accentColor: "from-emerald-500 to-teal-400",
    bgGlow: "bg-emerald-500/20",
  },
  {
    id: "systems",
    title: "Design Systems",
    icon: Palette,
    description: "Creating scalable design systems that ensure consistency and accelerate product development.",
    accentColor: "from-violet-500 to-purple-400",
    bgGlow: "bg-violet-500/20",
  },
  {
    id: "mobile",
    title: "Mobile Experience",
    icon: Smartphone,
    description: "Designing responsive mobile interfaces that provide seamless experiences across all devices.",
    accentColor: "from-rose-500 to-pink-400",
    bgGlow: "bg-rose-500/20",
  },
  {
    id: "webapp",
    title: "Web Applications",
    icon: Globe,
    description: "Crafting complex web applications that are powerful yet simple to use for diverse user bases.",
    accentColor: "from-amber-500 to-orange-400",
    bgGlow: "bg-amber-500/20",
  },
  {
    id: "engagement",
    title: "User Engagement",
    icon: Heart,
    description: "Designing features that drive meaningful user engagement and create lasting product loyalty.",
    accentColor: "from-fuchsia-500 to-pink-400",
    bgGlow: "bg-fuchsia-500/20",
  },
]

const AUTO_ROTATE_INTERVAL = 5000 // 5 seconds per category

// Realistic UI Visual Components
function RetentionVisual() {
  return (
    <div className="w-full h-full p-4 flex flex-col">
      {/* Header with stats */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Retention Rate</div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary">87.4%</span>
            <span className="text-xs text-emerald-500 flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" />+12.3%
            </span>
          </div>
        </div>
        <div className="flex gap-1">
          {["7D", "30D", "90D"].map((label, i) => (
            <div
              key={label}
              className={`px-2 py-1 rounded text-[10px] font-medium ${
                i === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1 flex items-end gap-1.5 pb-2">
        {[65, 72, 68, 78, 82, 75, 87, 84, 91, 88, 94, 87].map((value, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t"
            initial={{ height: 0 }}
            animate={{ height: `${value}%` }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* User cohorts */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/50">
        {[
          { label: "New Users", value: "2.4k", trend: "+18%" },
          { label: "Returning", value: "8.1k", trend: "+24%" },
          { label: "Active", value: "6.3k", trend: "+15%" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-xs font-semibold">{stat.value}</div>
            <div className="text-[9px] text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function UsabilityVisual() {
  return (
    <div className="w-full h-full p-4 flex flex-col">
      {/* Heatmap header */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Click Heatmap Analysis</div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </div>

      {/* Mock interface with heatmap */}
      <div className="flex-1 relative bg-card/50 rounded-lg border border-border/50 overflow-hidden">
        {/* Nav bar */}
        <div className="flex items-center gap-2 p-2 border-b border-border/30">
          <div className="w-4 h-4 rounded bg-primary/40" />
          <div className="flex-1 flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-2 w-8 rounded bg-muted" />
            ))}
          </div>
          <motion.div
            className="w-6 h-6 rounded-full bg-red-500/60"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Content with hotspots */}
        <div className="p-3 space-y-2">
          <motion.div
            className="h-12 rounded bg-gradient-to-r from-red-500/40 via-yellow-500/30 to-transparent relative"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="absolute inset-0 flex items-center px-3">
              <div className="h-2 w-24 rounded bg-foreground/10" />
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-2">
            <motion.div
              className="h-16 rounded bg-gradient-to-br from-yellow-500/30 to-transparent"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="h-16 rounded bg-gradient-to-br from-green-500/20 to-transparent"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between pt-3">
        <div className="text-center">
          <div className="text-sm font-bold text-primary">94%</div>
          <div className="text-[9px] text-muted-foreground">Task Success</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-emerald-500">2.3s</div>
          <div className="text-[9px] text-muted-foreground">Avg Time</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-bold text-amber-500">12</div>
          <div className="text-[9px] text-muted-foreground">Pain Points</div>
        </div>
      </div>
    </div>
  )
}

function DesignSystemVisual() {
  return (
    <div className="w-full h-full p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-4 h-4 text-primary" />
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Component Library</span>
      </div>

      {/* Component grid */}
      <div className="flex-1 grid grid-cols-3 gap-2">
        {[
          { icon: "btn", label: "Buttons", count: 12 },
          { icon: "input", label: "Inputs", count: 8 },
          { icon: "card", label: "Cards", count: 6 },
          { icon: "modal", label: "Modals", count: 4 },
          { icon: "nav", label: "Navigation", count: 5 },
          { icon: "icon", label: "Icons", count: 48 },
        ].map((comp, i) => (
          <motion.div
            key={comp.label}
            className="bg-card/80 rounded-lg border border-border/50 p-2 flex flex-col items-center justify-center gap-1 hover:border-primary/30 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
              {comp.icon === "btn" && <div className="w-4 h-2 rounded bg-primary/60" />}
              {comp.icon === "input" && <div className="w-4 h-2 rounded-sm border border-primary/40" />}
              {comp.icon === "card" && <div className="w-4 h-3 rounded-sm bg-primary/30" />}
              {comp.icon === "modal" && <div className="w-3 h-3 rounded bg-primary/40" />}
              {comp.icon === "nav" && <div className="w-4 h-0.5 bg-primary/60" />}
              {comp.icon === "icon" && <Star className="w-3 h-3 text-primary" />}
            </div>
            <div className="text-[8px] text-muted-foreground text-center">{comp.label}</div>
            <div className="text-[10px] font-medium text-primary">{comp.count}</div>
          </motion.div>
        ))}
      </div>

      {/* Design tokens */}
      <div className="pt-3 border-t border-border/50 mt-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {["#0066FF", "#00D4AA", "#FF6B35", "#8B5CF6"].map((color, i) => (
              <motion.div
                key={color}
                className="w-4 h-4 rounded-full border border-border/50"
                style={{ backgroundColor: color }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              />
            ))}
          </div>
          <div className="text-[9px] text-muted-foreground">24 tokens</div>
        </div>
      </div>
    </div>
  )
}

function MobileExperienceVisual() {
  return (
    <div className="w-full h-full p-4 flex items-center justify-center gap-3">
      {/* Phone mockup */}
      <motion.div
        className="w-20 h-40 bg-card rounded-2xl border-2 border-border/50 p-1.5 relative shadow-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Notch */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-border rounded-full" />

        {/* Screen content */}
        <div className="w-full h-full bg-background/50 rounded-xl overflow-hidden pt-3">
          {/* Header */}
          <div className="px-2 pb-2">
            <div className="h-1.5 w-10 bg-foreground/20 rounded mb-1" />
            <div className="h-1 w-6 bg-muted rounded" />
          </div>

          {/* Card */}
          <div className="mx-1.5 p-2 bg-primary/10 rounded-lg border border-primary/20 mb-2">
            <div className="w-full h-8 bg-primary/20 rounded mb-1.5" />
            <div className="h-1 w-8 bg-primary/30 rounded" />
          </div>

          {/* List items */}
          {[1, 2].map((i) => (
            <div key={i} className="mx-1.5 mb-1.5 flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-muted" />
              <div className="flex-1">
                <div className="h-1 w-8 bg-muted rounded mb-0.5" />
                <div className="h-0.5 w-6 bg-muted/50 rounded" />
              </div>
            </div>
          ))}

          {/* Bottom nav */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-around">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded ${i === 1 ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Gesture indicators */}
      <div className="flex flex-col gap-2">
        {[
          { label: "Swipe", icon: ArrowUpRight },
          { label: "Tap", icon: Target },
          { label: "Scroll", icon: Activity },
        ].map((gesture, i) => (
          <motion.div
            key={gesture.label}
            className="flex items-center gap-2 px-2 py-1.5 bg-card/80 rounded-lg border border-border/50"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <gesture.icon className="w-3 h-3 text-primary" />
            <span className="text-[9px] text-muted-foreground">{gesture.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function WebAppVisual() {
  return (
    <div className="w-full h-full p-4 flex flex-col">
      {/* Dashboard header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-primary/30 flex items-center justify-center">
            <Zap className="w-3 h-3 text-primary" />
          </div>
          <div className="text-[10px] font-medium">Dashboard</div>
        </div>
        <div className="flex gap-1">
          <Bell className="w-3.5 h-3.5 text-muted-foreground" />
          <div className="w-4 h-4 rounded-full bg-primary/20" />
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Revenue", value: "$48.2k", change: "+12%" },
          { label: "Users", value: "12.4k", change: "+8%" },
          { label: "Orders", value: "842", change: "+23%" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="bg-card/80 rounded-lg p-2 border border-border/50"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-[8px] text-muted-foreground mb-0.5">{stat.label}</div>
            <div className="text-xs font-bold">{stat.value}</div>
            <div className="text-[8px] text-emerald-500">{stat.change}</div>
          </motion.div>
        ))}
      </div>

      {/* Chart area */}
      <div className="flex-1 bg-card/50 rounded-lg border border-border/50 p-2">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[9px] text-muted-foreground">Activity Overview</div>
          <BarChart3 className="w-3 h-3 text-muted-foreground" />
        </div>
        <div className="flex items-end gap-1 h-12">
          {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-gradient-to-t from-primary/50 to-primary/20 rounded-t"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.3 + i * 0.05 }}
            />
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="flex gap-2 mt-3">
        <div className="flex-1 h-6 bg-primary rounded flex items-center justify-center">
          <span className="text-[8px] text-primary-foreground font-medium">Create</span>
        </div>
        <div className="flex-1 h-6 bg-muted rounded flex items-center justify-center">
          <span className="text-[8px] text-muted-foreground font-medium">Export</span>
        </div>
      </div>
    </div>
  )
}

function EngagementVisual() {
  return (
    <div className="w-full h-full p-4 flex flex-col">
      {/* Gamification header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <motion.div
            className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Star className="w-3 h-3 text-amber-500" />
          </motion.div>
          <div>
            <div className="text-[10px] font-medium">Level 12</div>
            <div className="text-[8px] text-muted-foreground">2,450 XP</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
            <span className="text-[8px] text-primary font-bold">5</span>
          </div>
          <Bell className="w-3 h-3 text-muted-foreground" />
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "72%" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-[8px] text-muted-foreground">72% to Level 13</span>
          <span className="text-[8px] text-primary">550 XP left</span>
        </div>
      </div>

      {/* Achievement badges */}
      <div className="flex-1">
        <div className="text-[9px] text-muted-foreground mb-2">Recent Achievements</div>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { icon: Target, unlocked: true },
            { icon: Zap, unlocked: true },
            { icon: Star, unlocked: true },
            { icon: ArrowUpRight, unlocked: false },
          ].map((badge, i) => (
            <motion.div
              key={i}
              className={`aspect-square rounded-lg flex items-center justify-center ${
                badge.unlocked
                  ? "bg-primary/20 border border-primary/30"
                  : "bg-muted/50 border border-border/30 opacity-40"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
            >
              <badge.icon className={`w-4 h-4 ${badge.unlocked ? "text-primary" : "text-muted-foreground"}`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Streak */}
      <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-primary/20 to-cyan-500/10 rounded-lg border border-primary/20 mt-2">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Zap className="w-4 h-4 text-primary" />
        </motion.div>
        <div>
          <div className="text-[10px] font-bold">7 Day Streak!</div>
          <div className="text-[8px] text-muted-foreground">Keep it going</div>
        </div>
      </div>
    </div>
  )
}

function getServiceVisual(serviceId: string) {
  switch (serviceId) {
    case "retention":
      return <RetentionVisual />
    case "usability":
      return <UsabilityVisual />
    case "systems":
      return <DesignSystemVisual />
    case "mobile":
      return <MobileExperienceVisual />
    case "webapp":
      return <WebAppVisual />
    case "engagement":
      return <EngagementVisual />
    default:
      return <RetentionVisual />
  }
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  
  const selectedService = services[activeIndex]

  // Auto-rotate effect
  useEffect(() => {
    if (isPaused) {
      setProgress(0)
      return
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + (100 / (AUTO_ROTATE_INTERVAL / 50))
      })
    }, 50)

    const rotateInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length)
      setProgress(0)
    }, AUTO_ROTATE_INTERVAL)

    return () => {
      clearInterval(progressInterval)
      clearInterval(rotateInterval)
    }
  }, [isPaused])

  const handleServiceClick = useCallback((index: number) => {
    setActiveIndex(index)
    setProgress(0)
    // Don't pause on click - let it continue auto-rotating
  }, [])

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev)
    setProgress(0)
  }, [])

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

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

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-start">
          {/* Service Cards - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {/* Pause/Play control */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {isPaused ? "Paused" : "Auto-playing"}
              </span>
              <button
                onClick={togglePause}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 transition-colors text-sm"
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 text-primary" />
                    <span className="text-xs text-muted-foreground">Play</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-primary" />
                    <span className="text-xs text-muted-foreground">Pause</span>
                  </>
                )}
              </button>
            </div>

            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleServiceClick(index)}
                className={`group relative w-full p-4 rounded-xl border transition-all duration-500 text-left overflow-hidden ${
                  activeIndex === index
                    ? "bg-primary/10 border-primary/50"
                    : "bg-card/30 border-border/30 hover:border-primary/30 hover:bg-card/50"
                }`}
              >
                {/* Active glow effect */}
                {activeIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}

                {/* Progress bar for active item */}
                {activeIndex === index && !isPaused && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.05 }}
                  />
                )}

                <div className="relative z-10 flex items-center gap-4">
                  {/* Icon with glow */}
                  <div className="relative">
                    <motion.div
                      className={`p-3 rounded-xl transition-all duration-500 ${
                        activeIndex === index
                          ? "bg-primary/20 text-primary shadow-lg shadow-primary/20"
                          : "bg-muted/50 text-muted-foreground group-hover:text-primary group-hover:bg-muted"
                      }`}
                      animate={activeIndex === index ? {
                        boxShadow: [
                          "0 0 20px rgba(0,102,255,0.2)",
                          "0 0 30px rgba(0,102,255,0.3)",
                          "0 0 20px rgba(0,102,255,0.2)",
                        ],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <service.icon className="w-5 h-5" />
                    </motion.div>
                    
                    {/* Animated ring for active */}
                    {activeIndex === index && (
                      <motion.div
                        className="absolute -inset-1 rounded-xl border border-primary/30"
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-semibold transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-foreground"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <AnimatePresence mode="wait">
                      {activeIndex === index && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm text-muted-foreground mt-1 line-clamp-2"
                        >
                          {service.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Active indicator dot */}
                  <motion.div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-primary" : "bg-muted"
                    }`}
                    animate={activeIndex === index ? {
                      scale: [1, 1.3, 1],
                    } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.button>
            ))}

            {/* Navigation dots */}
            <div className="flex items-center justify-center gap-2 pt-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleServiceClick(index)}
                  className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-primary w-6" : "bg-muted hover:bg-primary/50"
                  }`}
                >
                  {activeIndex === index && !isPaused && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      style={{
                        clipPath: `inset(0 ${100 - progress}% 0 0)`,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Visual Display - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Visual Container */}
            <div className="aspect-[16/11] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full rounded-2xl border border-primary/20 overflow-hidden"
                >
                  {/* Gradient background with animation */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${selectedService.accentColor} opacity-20`}
                    animate={{ opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  {/* Animated grid pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0,102,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '25px 25px'
                      }}
                      animate={{ backgroundPosition: ["0px 0px", "25px 25px"] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  
                  {/* UI Visual Content */}
                  <div className="absolute inset-4">
                    <motion.div
                      className="w-full h-full bg-background/95 backdrop-blur-sm rounded-xl border border-primary/30 shadow-2xl overflow-hidden"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      {getServiceVisual(selectedService.id)}
                    </motion.div>
                  </div>
                  
                  {/* Animated glow effect */}
                  <motion.div
                    className={`absolute -bottom-20 -right-20 w-60 h-60 ${selectedService.bgGlow} rounded-full blur-3xl`}
                    animate={{ 
                      scale: [1, 1.3, 1], 
                      opacity: [0.3, 0.5, 0.3],
                      x: [0, 20, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <motion.div
                    className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
                    animate={{ 
                      scale: [1, 1.2, 1], 
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  
                  {/* Icon badge with pulse */}
                  <motion.div
                    className="absolute bottom-4 right-4 p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/30"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(0,102,255,0.1)",
                        "0 0 30px rgba(0,102,255,0.2)",
                        "0 0 20px rgba(0,102,255,0.1)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <selectedService.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  
                  {/* Floating geometric accents */}
                  <motion.div
                    className="absolute top-6 right-6 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 backdrop-blur-sm"
                    animate={{ 
                      y: [0, -8, 0], 
                      rotate: [0, 5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <motion.div
                    className="absolute top-1/3 right-8 w-6 h-6 rounded-full bg-primary/15 border border-primary/20"
                    animate={{ 
                      y: [0, 10, 0], 
                      x: [0, -5, 0],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />

                  <motion.div
                    className="absolute bottom-1/4 left-6 w-8 h-8 rounded-lg bg-primary/10 border border-primary/15 rotate-45"
                    animate={{ 
                      y: [0, -10, 0], 
                      rotate: [45, 50, 45],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Service title badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold mb-1">{selectedService.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-md">
                    {selectedService.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Key benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 mt-4"
            >
              {["User-Centered", "Data-Driven", "Scalable"].map((benefit) => (
                <span
                  key={benefit}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {benefit}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

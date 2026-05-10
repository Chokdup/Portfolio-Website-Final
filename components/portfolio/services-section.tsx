"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
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
  Activity,
  ChevronDown,
  Play,
  Shield,
  Sparkles,
  LineChart,
  PieChart,
  Gauge,
  Layout,
  Code2,
  Figma,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const expertiseAreas = [
  {
    id: "retention",
    title: "User Retention",
    subtitle: "Keep Users Coming Back",
    description: "I design experiences that transform first-time visitors into loyal users through strategic engagement patterns, personalized journeys, and data-driven optimization.",
    stats: [
      { label: "Avg Retention Lift", value: "+47%", icon: TrendingUp },
      { label: "User Engagement", value: "3.2x", icon: Activity },
      { label: "Churn Reduction", value: "-38%", icon: Shield },
    ],
    features: ["Cohort Analysis", "Behavioral Triggers", "Re-engagement Flows", "Loyalty Systems"],
    icon: Users,
  },
  {
    id: "onboarding",
    title: "Onboarding Experience", 
    subtitle: "First Impressions Matter",
    description: "I craft frictionless onboarding flows that guide users to their 'aha moment' faster, reducing drop-off and accelerating time-to-value.",
    stats: [
      { label: "Completion Rate", value: "94%", icon: CheckCircle2 },
      { label: "Time to Value", value: "-62%", icon: Zap },
      { label: "Activation Rate", value: "+85%", icon: Target },
    ],
    features: ["Progressive Disclosure", "Contextual Guidance", "Milestone Tracking", "Personalized Paths"],
    icon: Play,
  },
  {
    id: "conversion",
    title: "Conversion Flow",
    subtitle: "Turn Visitors into Customers",
    description: "I optimize every touchpoint in your conversion funnel, eliminating friction and creating compelling pathways that drive action.",
    stats: [
      { label: "Conversion Lift", value: "+156%", icon: TrendingUp },
      { label: "Cart Recovery", value: "73%", icon: ArrowUpRight },
      { label: "Bounce Reduction", value: "-45%", icon: Shield },
    ],
    features: ["Funnel Optimization", "A/B Testing", "Micro-interactions", "Trust Signals"],
    icon: MousePointerClick,
  },
  {
    id: "dashboard",
    title: "Dashboard UX",
    subtitle: "Data Made Actionable",
    description: "I transform complex data into intuitive dashboards that empower users to make informed decisions at a glance.",
    stats: [
      { label: "Task Efficiency", value: "+78%", icon: Gauge },
      { label: "Data Clarity", value: "96%", icon: BarChart3 },
      { label: "User Satisfaction", value: "4.9/5", icon: Star },
    ],
    features: ["Information Hierarchy", "Real-time Visualization", "Custom Widgets", "Smart Alerts"],
    icon: BarChart3,
  },
  {
    id: "usability",
    title: "Product Usability",
    subtitle: "Intuitive by Design",
    description: "I conduct deep usability research and testing to identify pain points and create products that feel effortless to use.",
    stats: [
      { label: "Task Success", value: "98%", icon: CheckCircle2 },
      { label: "Error Reduction", value: "-67%", icon: Shield },
      { label: "Learning Curve", value: "-54%", icon: TrendingUp },
    ],
    features: ["User Research", "Heuristic Analysis", "Usability Testing", "Iterative Design"],
    icon: Target,
  },
  {
    id: "systems",
    title: "Design Systems",
    subtitle: "Scale with Consistency",
    description: "I build comprehensive design systems that ensure visual coherence, accelerate development, and maintain brand integrity at scale.",
    stats: [
      { label: "Dev Speed", value: "+3x", icon: Zap },
      { label: "Consistency", value: "100%", icon: Layers },
      { label: "Components", value: "200+", icon: Layout },
    ],
    features: ["Component Library", "Design Tokens", "Documentation", "Version Control"],
    icon: Palette,
  },
  {
    id: "mobile",
    title: "Mobile Experience",
    subtitle: "Thumb-Friendly Design",
    description: "I design mobile-first experiences that leverage native patterns and gestures to create seamless cross-device journeys.",
    stats: [
      { label: "Mobile Conv.", value: "+89%", icon: TrendingUp },
      { label: "App Rating", value: "4.8★", icon: Star },
      { label: "Session Time", value: "+2.4x", icon: Activity },
    ],
    features: ["Gesture Design", "Responsive Layouts", "Native Patterns", "Performance Focus"],
    icon: Smartphone,
  },
  {
    id: "webapp",
    title: "Web Applications",
    subtitle: "Complex Made Simple",
    description: "I architect large-scale web applications that handle complexity gracefully while maintaining exceptional user experience.",
    stats: [
      { label: "User Efficiency", value: "+64%", icon: Gauge },
      { label: "Feature Adoption", value: "92%", icon: CheckCircle2 },
      { label: "Support Tickets", value: "-71%", icon: Shield },
    ],
    features: ["Information Architecture", "State Management", "Accessibility", "Performance"],
    icon: Globe,
  },
  {
    id: "engagement",
    title: "User Engagement",
    subtitle: "Create Lasting Connections",
    description: "I design engagement systems that create meaningful interactions, driving habitual usage and emotional connection with your product.",
    stats: [
      { label: "Daily Active", value: "+127%", icon: Users },
      { label: "Feature Usage", value: "4.1x", icon: Activity },
      { label: "NPS Score", value: "+42", icon: Heart },
    ],
    features: ["Gamification", "Social Features", "Notifications", "Rewards Systems"],
    icon: Heart,
  },
]

// Premium Visual Components for each expertise area
function RetentionVisual() {
  return (
    <div className="relative w-full h-full scale-[0.85] origin-center">
      {/* Main dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden shadow-xl shadow-primary/10"
      >
        {/* Dashboard header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Users className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-sm font-semibold">Retention Analytics</div>
              <div className="text-xs text-muted-foreground">Real-time cohort tracking</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {["7D", "30D", "90D"].map((period, i) => (
              <div
                key={period}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  i === 1 ? "bg-primary text-primary-foreground" : "bg-muted/50 text-muted-foreground hover:bg-muted"
                }`}
              >
                {period}
              </div>
            ))}
          </div>
        </div>

        {/* Main chart area */}
        <div className="p-6">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-3xl font-bold mb-1">87.4%</div>
              <div className="flex items-center gap-2 text-sm text-emerald-500">
                <TrendingUp className="w-4 h-4" />
                <span>+12.3% vs last month</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {[
                { label: "Active Users", value: "12.4K" },
                { label: "Returning", value: "8.2K" },
                { label: "New", value: "4.2K" },
              ].map((stat) => (
                <div key={stat.label} className="text-right">
                  <div className="text-lg font-semibold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated chart bars */}
          <div className="flex items-end gap-2 h-32 mb-4">
            {[65, 72, 68, 78, 82, 75, 87, 84, 91, 88, 94, 87, 89, 92, 85].map((value, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-primary to-primary/40 rounded-t-md relative group"
                initial={{ height: 0 }}
                whileInView={{ height: `${value}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-primary-foreground text-[10px] font-medium rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  {value}%
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Cohort grid */}
          <div className="grid grid-cols-4 gap-3 pt-4 border-t border-border/50">
            {[
              { cohort: "Week 1", retention: "94%", color: "bg-emerald-500/20 text-emerald-500" },
              { cohort: "Week 2", retention: "82%", color: "bg-primary/20 text-primary" },
              { cohort: "Week 4", retention: "71%", color: "bg-amber-500/20 text-amber-500" },
              { cohort: "Week 8", retention: "63%", color: "bg-rose-500/20 text-rose-500" },
            ].map((item) => (
              <motion.div
                key={item.cohort}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-3 rounded-xl bg-muted/30 border border-border/50"
              >
                <div className="text-xs text-muted-foreground mb-1">{item.cohort}</div>
                <div className={`text-lg font-bold ${item.color.split(" ")[1]}`}>{item.retention}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating notification cards */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute -right-4 top-16 w-56 p-3 bg-card/95 backdrop-blur-sm rounded-xl border border-primary/30 shadow-xl"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <TrendingUp className="w-3 h-3 text-emerald-500" />
          </div>
          <span className="text-xs font-medium">Retention Alert</span>
        </div>
        <p className="text-[11px] text-muted-foreground">User cohort from March showing 23% higher retention rate</p>
      </motion.div>
    </div>
  )
}

function OnboardingVisual() {
  return (
    <div className="relative w-full h-full scale-[0.85] origin-center">
      {/* Main onboarding flow mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden shadow-xl shadow-primary/10"
      >
        {/* Progress header */}
        <div className="px-6 py-4 border-b border-border/50">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium">Getting Started</div>
            <div className="text-xs text-primary">Step 2 of 4</div>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "50%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
            />
          </div>
        </div>

        {/* Onboarding content */}
        <div className="p-6">
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0"
            >
              <Sparkles className="w-6 h-6 text-primary" />
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Tell us about yourself</h3>
              <p className="text-sm text-muted-foreground">We&apos;ll personalize your experience based on your goals</p>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {[
              { label: "Startup Founder", desc: "Building a new product", selected: true },
              { label: "Product Manager", desc: "Improving existing products", selected: false },
              { label: "Designer", desc: "Creating user experiences", selected: false },
            ].map((option, i) => (
              <motion.div
                key={option.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  option.selected
                    ? "border-primary bg-primary/10"
                    : "border-border/50 hover:border-primary/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{option.label}</div>
                    <div className="text-xs text-muted-foreground">{option.desc}</div>
                  </div>
                  {option.selected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continue button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="flex items-center justify-between"
          >
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skip for now</button>
            <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium flex items-center gap-2 shadow-lg shadow-primary/25">
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating milestone card */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -left-4 bottom-20 w-48 p-3 bg-card/95 backdrop-blur-sm rounded-xl border border-emerald-500/30 shadow-xl"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
          </div>
          <span className="text-xs font-medium text-emerald-500">Milestone reached!</span>
        </div>
        <p className="text-[11px] text-muted-foreground">Profile setup complete - 94% success rate</p>
      </motion.div>
    </div>
  )
}

function ConversionVisual() {
  return (
    <div className="relative w-full h-full scale-[0.85] origin-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden shadow-xl shadow-primary/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
              <LineChart className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <div className="text-sm font-semibold">Conversion Funnel</div>
              <div className="text-xs text-muted-foreground">Optimized checkout flow</div>
            </div>
          </div>
          <div className="px-3 py-1.5 bg-emerald-500/20 rounded-full">
            <span className="text-xs font-medium text-emerald-500">+156% conversion</span>
          </div>
        </div>

        {/* Funnel visualization */}
        <div className="p-6">
          <div className="space-y-3">
            {[
              { stage: "Visitors", value: "24,500", percent: 100, color: "bg-primary" },
              { stage: "Product Views", value: "18,200", percent: 74, color: "bg-primary/80" },
              { stage: "Add to Cart", value: "8,400", percent: 34, color: "bg-primary/60" },
              { stage: "Checkout", value: "5,100", percent: 21, color: "bg-primary/50" },
              { stage: "Purchase", value: "4,200", percent: 17, color: "bg-emerald-500" },
            ].map((item, i) => (
              <motion.div
                key={item.stage}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground">{item.stage}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{item.value}</span>
                    <span className="text-xs text-muted-foreground">{item.percent}%</span>
                  </div>
                </div>
                <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${item.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conversion stats */}
          <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-border/50">
            {[
              { label: "Avg. Order", value: "$127", icon: TrendingUp },
              { label: "Cart Recovery", value: "73%", icon: ArrowUpRight },
              { label: "Time to Purchase", value: "4.2m", icon: Activity },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-center p-3 bg-muted/20 rounded-xl"
              >
                <stat.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function DashboardVisual() {
  return (
    <div className="relative w-full h-full scale-[0.85] origin-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden shadow-xl shadow-primary/10"
      >
        {/* Dashboard header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-semibold">Analytics Dashboard</span>
            </div>
            <div className="flex gap-2">
              {["Overview", "Users", "Revenue"].map((tab, i) => (
                <div
                  key={tab}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                    i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/50"
                  }`}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Bell className="w-4 h-4 text-muted-foreground" />
            <div className="w-7 h-7 rounded-full bg-primary/20" />
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          {/* Stats row */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { label: "Revenue", value: "$48.2K", change: "+12%", color: "text-emerald-500" },
              { label: "Users", value: "12.4K", change: "+8%", color: "text-primary" },
              { label: "Orders", value: "842", change: "+23%", color: "text-amber-500" },
              { label: "Conversion", value: "3.2%", change: "+0.4%", color: "text-rose-500" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-4 bg-muted/20 rounded-xl border border-border/50"
              >
                <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-xl font-bold mb-1">{stat.value}</div>
                <div className={`text-xs ${stat.color}`}>{stat.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-muted/10 rounded-xl border border-border/50 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Revenue Overview</span>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary" /> This month</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary/40" /> Last month</span>
              </div>
            </div>
            <div className="flex items-end gap-2 h-24">
              {[45, 62, 38, 72, 55, 68, 82, 75, 88, 65, 78, 92].map((value, i) => (
                <div key={i} className="flex-1 flex flex-col gap-1">
                  <motion.div
                    className="bg-gradient-to-t from-primary to-primary/50 rounded-t"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.6 }}
                  />
                  <motion.div
                    className="bg-primary/30 rounded-t"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${value * 0.7}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.6 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating widget */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -right-4 top-24 w-44 p-3 bg-card/95 backdrop-blur-sm rounded-xl border border-primary/30 shadow-xl"
      >
        <div className="flex items-center gap-2 mb-2">
          <PieChart className="w-4 h-4 text-primary" />
          <span className="text-xs font-medium">Traffic Sources</span>
        </div>
        <div className="space-y-1.5">
          {[
            { source: "Organic", value: "42%" },
            { source: "Direct", value: "28%" },
            { source: "Referral", value: "30%" },
          ].map((item) => (
            <div key={item.source} className="flex items-center justify-between text-[10px]">
              <span className="text-muted-foreground">{item.source}</span>
              <span className="font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function UsabilityVisual() {
  return (
    <div className="relative w-full h-full scale-[0.85] origin-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden shadow-xl shadow-primary/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <Target className="w-4 h-4 text-amber-500" />
            </div>
            <div>
              <div className="text-sm font-semibold">Usability Testing</div>
              <div className="text-xs text-muted-foreground">Heatmap & click analysis</div>
            </div>
          </div>
        </div>

        {/* Heatmap visualization */}
        <div className="p-6">
          {/* Mock interface with hotspots */}
          <div className="relative bg-muted/10 rounded-xl border border-border/50 p-4 mb-4">
            {/* Fake navigation */}
            <div className="flex items-center justify-between mb-4">
              <div className="w-20 h-5 bg-muted/50 rounded" />
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-3 bg-muted/30 rounded" />
                ))}
              </div>
              <motion.div
                className="w-8 h-8 rounded-full bg-red-500/50"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Content areas with heatmap overlays */}
            <div className="space-y-3">
              <motion.div
                className="h-16 rounded-lg bg-gradient-to-r from-red-500/40 via-yellow-500/30 to-transparent relative"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="absolute inset-0 flex items-center px-4">
                  <div className="h-3 w-32 bg-foreground/10 rounded" />
                </div>
              </motion.div>
              <div className="grid grid-cols-3 gap-3">
                <motion.div
                  className="h-20 rounded-lg bg-gradient-to-br from-yellow-500/40 to-transparent"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div
                  className="h-20 rounded-lg bg-gradient-to-br from-green-500/30 to-transparent"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                />
                <motion.div
                  className="h-20 rounded-lg bg-gradient-to-br from-red-500/50 to-transparent"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 0.9 }}
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Task Success", value: "98%", color: "text-emerald-500" },
              { label: "Avg. Time", value: "2.3s", color: "text-primary" },
              { label: "Error Rate", value: "2%", color: "text-amber-500" },
              { label: "Satisfaction", value: "4.9", color: "text-rose-500" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="text-center"
              >
                <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-[10px] text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function DesignSystemVisual() {
  return (
    <div className="relative w-full h-full scale-[0.85] origin-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden shadow-xl shadow-primary/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
              <Layers className="w-4 h-4 text-violet-500" />
            </div>
            <div>
              <div className="text-sm font-semibold">Design System</div>
              <div className="text-xs text-muted-foreground">Component library</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-muted-foreground" />
            <Figma className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Component grid */}
        <div className="p-6">
          <div className="grid grid-cols-4 gap-3 mb-6">
            {[
              { name: "Buttons", count: 12, color: "bg-primary/20 border-primary/30" },
              { name: "Inputs", count: 8, color: "bg-emerald-500/20 border-emerald-500/30" },
              { name: "Cards", count: 6, color: "bg-amber-500/20 border-amber-500/30" },
              { name: "Modals", count: 4, color: "bg-rose-500/20 border-rose-500/30" },
              { name: "Navigation", count: 5, color: "bg-violet-500/20 border-violet-500/30" },
              { name: "Tables", count: 3, color: "bg-cyan-500/20 border-cyan-500/30" },
              { name: "Forms", count: 7, color: "bg-orange-500/20 border-orange-500/30" },
              { name: "Icons", count: 48, color: "bg-pink-500/20 border-pink-500/30" },
            ].map((comp, i) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className={`p-3 rounded-xl border ${comp.color} hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-xs font-medium mb-1">{comp.name}</div>
                <div className="text-lg font-bold text-primary">{comp.count}</div>
              </motion.div>
            ))}
          </div>

          {/* Design tokens */}
          <div className="p-4 bg-muted/10 rounded-xl border border-border/50">
            <div className="text-xs text-muted-foreground mb-3">Design Tokens</div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {["#0066FF", "#00D4AA", "#FF6B35", "#8B5CF6", "#F43F5E", "#06B6D4"].map((color, i) => (
                  <motion.div
                    key={color}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.05, type: "spring" }}
                    className="w-6 h-6 rounded-full border-2 border-background shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">42</div>
                <div className="text-[10px] text-muted-foreground">Total tokens</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating component preview */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -left-4 bottom-16 w-48 p-3 bg-card/95 backdrop-blur-sm rounded-xl border border-violet-500/30 shadow-xl"
      >
        <div className="text-[10px] text-muted-foreground mb-2">Button Component</div>
        <div className="flex gap-2">
          <div className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-[10px] font-medium">Primary</div>
          <div className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md text-[10px] font-medium">Secondary</div>
        </div>
      </motion.div>
    </div>
  )
}

function MobileVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-4 scale-[0.85] origin-center">
      {/* Phone mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-48 h-96 bg-card rounded-[2.5rem] border-4 border-border/80 p-2 shadow-2xl shadow-primary/10 relative"
      >
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-background rounded-full" />

        {/* Screen */}
        <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden pt-8">
          {/* Header */}
          <div className="px-4 pb-3">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="h-2 w-16 bg-foreground/20 rounded mb-1" />
                <div className="h-1.5 w-10 bg-muted rounded" />
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/20" />
            </div>
          </div>

          {/* Featured card */}
          <div className="mx-3 p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl border border-primary/20 mb-3">
            <div className="w-full h-20 bg-primary/20 rounded-xl mb-2" />
            <div className="h-2 w-24 bg-primary/30 rounded mb-1" />
            <div className="h-1.5 w-16 bg-muted rounded" />
          </div>

          {/* List items */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="mx-3 mb-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-muted" />
              <div className="flex-1">
                <div className="h-2 w-20 bg-muted rounded mb-1" />
                <div className="h-1.5 w-14 bg-muted/50 rounded" />
              </div>
              <div className="w-6 h-6 rounded-full bg-primary/20" />
            </div>
          ))}

          {/* Bottom nav */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-around py-2 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-lg ${i === 1 ? "bg-primary" : "bg-muted/50"}`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Feature callouts */}
      <div className="flex flex-col gap-4">
        {[
          { label: "Touch Gestures", icon: Activity },
          { label: "Native Patterns", icon: Smartphone },
          { label: "Responsive", icon: Layout },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="flex items-center gap-3 px-4 py-3 bg-card/80 backdrop-blur-sm rounded-xl border border-border/50"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <item.icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function WebAppVisual() {
  return (
    <div className="relative w-full h-full scale-[0.85] origin-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden shadow-xl shadow-primary/10"
      >
        {/* App layout with sidebar */}
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-14 border-r border-border/50 py-4 flex flex-col items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            {[Globe, BarChart3, Users, Layers, Bell].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted/50"
                }`}
              >
                <Icon className="w-4 h-4" />
              </motion.div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm font-semibold mb-0.5">Project Dashboard</div>
                <div className="text-xs text-muted-foreground">12 active projects</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-medium">+ New Project</div>
                <div className="w-7 h-7 rounded-full bg-muted" />
              </div>
            </div>

            {/* Project cards grid */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "E-commerce App", status: "In Progress", progress: 68 },
                { name: "Dashboard UI", status: "Review", progress: 92 },
                { name: "Mobile App", status: "In Progress", progress: 45 },
                { name: "Design System", status: "Complete", progress: 100 },
                { name: "Landing Page", status: "In Progress", progress: 78 },
                { name: "Admin Panel", status: "Starting", progress: 12 },
              ].map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="p-3 bg-muted/20 rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="text-xs font-medium mb-1 truncate">{project.name}</div>
                  <div className="text-[10px] text-muted-foreground mb-2">{project.status}</div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.05, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function EngagementVisual() {
  return (
    <div className="relative w-full h-full scale-[0.85] origin-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden shadow-xl shadow-primary/10"
      >
        {/* Gamification header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-5 h-5 text-amber-500" />
            </motion.div>
            <div>
              <div className="text-sm font-semibold">Level 12 • Pro User</div>
              <div className="text-xs text-muted-foreground">2,450 XP earned</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 bg-amber-500/20 rounded-full">
              <span className="text-xs font-medium text-amber-500">🔥 7 Day Streak</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Level progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Progress to Level 13</span>
              <span className="text-xs text-primary font-medium">72%</span>
            </div>
            <div className="h-3 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "72%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
              />
            </div>
            <div className="text-[10px] text-muted-foreground mt-1">550 XP to next level</div>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <div className="text-xs text-muted-foreground mb-3">Recent Achievements</div>
            <div className="grid grid-cols-5 gap-3">
              {[
                { icon: Target, label: "First Goal", unlocked: true },
                { icon: Zap, label: "Speed Run", unlocked: true },
                { icon: Star, label: "Rising Star", unlocked: true },
                { icon: Heart, label: "Beloved", unlocked: true },
                { icon: Shield, label: "Guardian", unlocked: false },
              ].map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center gap-1 ${
                    badge.unlocked
                      ? "bg-primary/20 border border-primary/30"
                      : "bg-muted/30 border border-border/30 opacity-40"
                  }`}
                >
                  <badge.icon className={`w-5 h-5 ${badge.unlocked ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-[8px] text-muted-foreground">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leaderboard preview */}
          <div className="p-4 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-xl border border-primary/20">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium">Leaderboard Position</span>
              <span className="text-sm font-bold text-primary">#42</span>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`flex-1 h-8 rounded-lg ${
                    i === 4 ? "bg-primary ring-2 ring-primary/30" : "bg-muted/30"
                  } flex items-center justify-center`}
                >
                  <span className="text-[10px] font-medium">{i === 4 ? "You" : ""}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -right-4 top-20 w-52 p-3 bg-card/95 backdrop-blur-sm rounded-xl border border-amber-500/30 shadow-xl"
      >
        <div className="flex items-center gap-2 mb-1">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Zap className="w-4 h-4 text-amber-500" />
          </motion.div>
          <span className="text-xs font-medium">Achievement Unlocked!</span>
        </div>
        <p className="text-[10px] text-muted-foreground">You&apos;ve completed your 7-day streak!</p>
      </motion.div>
    </div>
  )
}

function getExpertiseVisual(id: string) {
  switch (id) {
    case "retention": return <RetentionVisual />
    case "onboarding": return <OnboardingVisual />
    case "conversion": return <ConversionVisual />
    case "dashboard": return <DashboardVisual />
    case "usability": return <UsabilityVisual />
    case "systems": return <DesignSystemVisual />
    case "mobile": return <MobileVisual />
    case "webapp": return <WebAppVisual />
    case "engagement": return <EngagementVisual />
    default: return <RetentionVisual />
  }
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const isInView = useInView(sectionRef, { once: false, margin: "-20%" })

  // Auto-scroll through expertise areas when in view
  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % expertiseAreas.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,102,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6"
          >
            <Target className="w-4 h-4" />
            Strategic UX Solutions
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                What Do I Help{" "}
                <span className="text-primary">
                  Startups
                </span>{" "}
                Improve?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I transform complex UI/UX challenges into intuitive, high-performing digital experiences 
            that drive growth and user satisfaction.
          </p>
        </motion.div>

        {/* Main showcase area */}
        <div className="relative">
          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mb-12">
            {expertiseAreas.map((area, i) => (
              <button
                key={area.id}
                onClick={() => setActiveIndex(i)}
                className="group relative"
              >
                <div
                  className={`w-12 h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "bg-primary" : "bg-muted/50 hover:bg-muted"
                  }`}
                />
                {i === activeIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Expertise showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
            >
              {/* Content side */}
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {/* Icon and title */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      {(() => {
                        const IconComponent = expertiseAreas[activeIndex].icon
                        return <IconComponent className="w-8 h-8 text-primary" />
                      })()}
                    </motion.div>
                    <div>
                      <div className="text-sm text-primary font-medium mb-1">
                        {expertiseAreas[activeIndex].subtitle}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold">
                        {expertiseAreas[activeIndex].title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {expertiseAreas[activeIndex].description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {expertiseAreas[activeIndex].stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="p-4 bg-card/50 rounded-xl border border-border/50"
                      >
                        <stat.icon className="w-5 h-5 text-primary mb-2" />
                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {expertiseAreas[activeIndex].features.map((feature, i) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Visual side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="order-1 lg:order-2 relative"
              >
                <div className="relative aspect-[4/3] max-h-[320px] md:max-h-[360px] lg:max-h-[380px]">
                  {/* Glow effect behind visual */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl transform scale-110" />
                  
                  {/* Visual container */}
                  <div className="relative h-full">
                    {getExpertiseVisual(expertiseAreas[activeIndex].id)}
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 border border-primary/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex((prev) => (prev - 1 + expertiseAreas.length) % expertiseAreas.length)}
              className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors"
            >
              <ChevronDown className="w-5 h-5 rotate-90" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIndex((prev) => (prev + 1) % expertiseAreas.length)}
              className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors"
            >
              <ChevronDown className="w-5 h-5 -rotate-90" />
            </motion.button>
          </div>

          {/* Expertise counter */}
          <div className="text-center mt-8">
            <span className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">{activeIndex + 1}</span>
              {" / "}
              {expertiseAreas.length} expertise areas
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

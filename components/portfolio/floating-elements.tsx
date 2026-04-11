"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const floatingElements = [
  { icon: "◈", delay: 0, x: "10%", y: "20%", size: "text-2xl" },
  { icon: "◇", delay: 0.5, x: "85%", y: "15%", size: "text-3xl" },
  { icon: "⬡", delay: 1, x: "75%", y: "70%", size: "text-xl" },
  { icon: "◈", delay: 1.5, x: "15%", y: "75%", size: "text-2xl" },
  { icon: "○", delay: 2, x: "90%", y: "45%", size: "text-lg" },
  { icon: "□", delay: 0.3, x: "5%", y: "50%", size: "text-xl" },
]

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} text-primary/20`}
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1.1, 0.8],
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Floating UI mockups */}
      <motion.div
        className="absolute left-[5%] top-[30%] w-48 h-32 rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="p-3"
        >
          <div className="h-2 w-16 bg-primary/30 rounded mb-2" />
          <div className="h-2 w-24 bg-muted/50 rounded mb-2" />
          <div className="h-2 w-20 bg-muted/30 rounded mb-3" />
          <div className="flex gap-2">
            <div className="h-6 w-12 bg-primary/40 rounded" />
            <div className="h-6 w-12 bg-muted/30 rounded" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[25%] w-40 h-48 rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="p-3"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 bg-primary/40 rounded-full" />
            <div className="h-2 w-16 bg-muted/50 rounded" />
          </div>
          <div className="h-16 w-full bg-muted/20 rounded mb-2" />
          <div className="h-2 w-full bg-muted/30 rounded mb-1" />
          <div className="h-2 w-20 bg-muted/20 rounded mb-3" />
          <div className="flex gap-1">
            <div className="h-4 w-4 bg-primary/30 rounded" />
            <div className="h-4 w-4 bg-primary/20 rounded" />
            <div className="h-4 w-4 bg-primary/10 rounded" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-[12%] bottom-[15%] w-36 h-24 rounded-lg border border-primary/20 bg-card/30 backdrop-blur-sm hidden lg:block"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="p-3"
        >
          <div className="grid grid-cols-3 gap-1 mb-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-primary/20 rounded" />
            ))}
          </div>
          <div className="h-2 w-full bg-muted/30 rounded" />
        </motion.div>
      </motion.div>
    </div>
  )
}

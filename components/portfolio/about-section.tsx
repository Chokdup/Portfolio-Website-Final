"use client"

import { useMemo, useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Briefcase, GraduationCap, Award, Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react"
import Image from "next/image"

// Deterministic pseudo-random number generator for consistent SSR/client rendering
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const highlights = [
  { icon: MapPin, label: "Based in", value: "Thimphu, Bhutan" },
  { icon: Briefcase, label: "Experience", value: "3+ Years" },
  { icon: GraduationCap, label: "Background", value: "Interactive Design & Development" },
  { icon: Award, label: "Projects", value: "10+ Delivered" },
]

export function AboutSection() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Fetch the video URL on mount
  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await fetch('/api/get-video')
        const data = await response.json()
        if (data.url) {
          setVideoUrl(data.url)
        }
      } catch (error) {
        console.error('Error fetching video:', error)
      }
    }
    fetchVideo()
  }, [])

  // Generate deterministic particle positions
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      left: `${seededRandom(i * 37 + 13) * 100}%`,
      top: `${seededRandom(i * 41 + 17) * 100}%`,
    }))
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else if (document.exitFullscreen) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handlePlayVideo = () => {
    setShowVideo(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }, 100)
  }

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

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
            About
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            The Designer Behind the Pixels
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image & Video Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Animated glow effect behind image */}
            <motion.div 
              className="absolute -inset-6 rounded-3xl blur-3xl opacity-60 max-w-[400px] mx-auto lg:mx-0"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0, 102, 255, 0.3) 0%, rgba(0, 102, 255, 0.1) 40%, transparent 70%)",
              }}
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Main image/video container */}
            <div ref={containerRef} className="relative aspect-[3/4] w-full max-w-[400px] rounded-2xl overflow-hidden">
              {/* Profile Image (shown when video not playing) */}
              <AnimatePresence mode="wait">
                {!showVideo ? (
                  <motion.div
                    key="image"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 border-2 border-primary/50 rounded-2xl shadow-2xl shadow-primary/30"
                  >
                    {/* Solid dark background base */}
                    <div className="absolute inset-0 bg-[#0a0a12] rounded-2xl" />
                    
                    {/* Geometric accent shapes */}
                    <div className="absolute top-0 right-0 w-1/2 h-1/3 bg-gradient-to-bl from-primary/20 to-transparent rounded-2xl" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/15 to-transparent rounded-2xl" />
                    
                    {/* Profile image with dark blend */}
                    <Image
                      src="/images/profile.jpg"
                      alt="Chokdup - UI/UX Designer"
                      fill
                      className="object-cover object-top rounded-2xl"
                      style={{
                        filter: "brightness(0.85) contrast(1.1) saturate(0.9)",
                      }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    
                    {/* Dark color wash overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a18]/60 via-transparent to-[#0a0a18]/50 rounded-2xl mix-blend-multiply" />
                    
                    {/* Blue tint overlay for tech aesthetic */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-primary/5 to-primary/15 rounded-2xl mix-blend-color" />
                    
                    {/* Strong vignette for depth */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)] rounded-2xl" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30 rounded-2xl" />
                    
                    {/* Inner border glow */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/30" />
                    <div className="absolute inset-[1px] rounded-2xl ring-1 ring-inset ring-white/5" />
                    
                    {/* Decorative floating particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {particles.map((pos, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-primary/60 rounded-full shadow-sm shadow-primary/50"
                          style={{
                            left: pos.left,
                            top: pos.top,
                          }}
                          animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.5, 1.5, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>

                    {/* Video Play Button Overlay (only if video exists) */}
                    {videoUrl && (
                      <motion.button
                        onClick={handlePlayVideo}
                        className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-opacity cursor-pointer z-20"
                        whileHover={{ scale: 1 }}
                      >
                        <motion.div
                          className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl shadow-primary/50"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </motion.div>
                        <span className="absolute bottom-6 text-sm font-medium text-white drop-shadow-lg">
                          Watch Video Resume
                        </span>
                      </motion.button>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 border-2 border-primary/50 rounded-2xl shadow-2xl shadow-primary/30 bg-black"
                  >
                    {/* Video Player */}
                    <video
                      ref={videoRef}
                      src={videoUrl || undefined}
                      className="w-full h-full object-cover rounded-2xl"
                      muted={isMuted}
                      playsInline
                      onEnded={() => setIsPlaying(false)}
                    />

                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-black/60 via-transparent to-black/30 rounded-2xl">
                      {/* Top controls */}
                      <div className="flex justify-end">
                        <motion.button
                          onClick={() => {
                            setShowVideo(false)
                            setIsPlaying(false)
                            if (videoRef.current) {
                              videoRef.current.pause()
                              videoRef.current.currentTime = 0
                            }
                          }}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <X className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>

                      {/* Center play/pause */}
                      <div className="flex justify-center">
                        <motion.button
                          onClick={togglePlay}
                          className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6 text-primary-foreground" />
                          ) : (
                            <Play className="w-6 h-6 text-primary-foreground ml-1" />
                          )}
                        </motion.button>
                      </div>

                      {/* Bottom controls */}
                      <div className="flex justify-between items-center">
                        <motion.button
                          onClick={toggleMute}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isMuted ? (
                            <VolumeX className="w-5 h-5 text-white" />
                          ) : (
                            <Volume2 className="w-5 h-5 text-white" />
                          )}
                        </motion.button>
                        <motion.button
                          onClick={toggleFullscreen}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Maximize className="w-5 h-5 text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating badge - Years (only when image shown) */}
              {!showVideo && (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-4 top-8 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-xl p-4 shadow-2xl shadow-primary/20 z-10"
                >
                  <div className="text-3xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </motion.div>
              )}

              {/* Floating badge - Projects (only when image shown) */}
              {!showVideo && (
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -left-4 bottom-12 bg-card/95 backdrop-blur-sm border border-primary/30 rounded-xl p-4 shadow-2xl shadow-primary/20 z-10"
                >
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </motion.div>
              )}
            </div>

            {/* Background decoration */}
            <div className="absolute -z-10 top-8 left-8 right-0 bottom-0 border border-primary/20 rounded-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Bio */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">
                I&apos;m Chokdup, a UI/UX Designer passionate about creating impactful digital experiences.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With 3+ years of experience, I help startups build user-centric applications that drive retention and growth. Based in Thimphu, Bhutan, I combine strategic thinking with attention to detail, bridging user needs and business goals through thoughtful, research-driven design.
              </p>
            </div>

            {/* Video Resume CTA (if video exists) */}
            {videoUrl && !showVideo && (
              <motion.button
                onClick={handlePlayVideo}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 flex items-center gap-3 px-5 py-3 rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Play className="w-4 h-4 text-primary ml-0.5" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Watch My Video Resume</div>
                  <div className="text-xs text-muted-foreground">Get to know me better</div>
                </div>
              </motion.button>
            )}

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <highlight.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{highlight.label}</div>
                    <div className="font-medium text-sm">{highlight.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

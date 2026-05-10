"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, GraduationCap, Download, ExternalLink, Award, Play, Video, Pause, Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const experience = [
  {
    title: "Corporate Video Producer",
    company: "Greener Way",
    period: "2024 - Present",
    description: "Produced a corporate video focusing on clear storytelling and professional visual presentation. Managed the planning, coordination, and creative direction to effectively communicate the organization's mission and environmental initiatives.",
    skills: ["Video Production", "Storytelling", "Creative Direction"],
  },
  {
    title: "Graphic Designer",
    company: "AFK X Gaming",
    period: "2023 - 2024",
    description: "Designed promotional posters for Diamond and PUBG recharge services. Focused on clear visual communication, engaging layout, and effective marketing design to attract potential customers.",
    skills: ["Graphic Design", "Visual Communication", "Marketing Design"],
  },
  {
    title: "Freelance Designer",
    company: "Self-employed",
    period: "2023 - Present",
    description: "Working as a freelance UI/UX designer and web developer, creating user-centered digital products and intuitive interfaces for various clients.",
    skills: ["UI/UX Design", "Web Development", "Client Management"],
  },
]

const education = [
  {
    degree: "Bachelor of Interactive Design and Development",
    school: "Gyalpozhing College of Information Technology",
    period: "2023 - 2027",
    description: "Focused on UI/UX design, wireframing, prototyping, front-end web development, and creating user-centered digital products.",
  },
  {
    degree: "Arts (Class XII)",
    school: "Karma Academy",
    period: "2022",
    description: "Studied arts and creative disciplines, building foundation in visual design and creative thinking.",
  },
]

const certifications = [
  { name: "Introduction to Cybersecurity - Cisco Networking Academy", year: "2024" },
  { name: "De-sung Basic Military Training", year: "2023" },
]

const achievements = [
  { name: "Best Project Award - SCAN2DINE", year: "2025", description: "Awarded for developing a QR-based digital menu web application" },
  { name: "International Cultural Exchange - Japan", year: "2016", description: "Selected for a two-week cultural exchange program" },
]

function VideoResumeSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [volume, setVolume] = useState(1)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const formatTime = (time: number) => {
    if (!time || !isFinite(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
        setShowOverlay(false)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoClick = () => {
    handlePlayPause()
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime
      const dur = videoRef.current.duration
      setCurrentTime(current)
      if (dur && isFinite(dur)) {
        setProgress((current / dur) * 100)
      }
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration
      if (dur && isFinite(dur)) {
        setDuration(dur)
      }
      setIsLoaded(true)
    }
  }

  // Also handle loadeddata and durationchange for better compatibility
  const handleDurationChange = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration
      if (dur && isFinite(dur)) {
        setDuration(dur)
      }
    }
  }

  const handleCanPlay = () => {
    if (videoRef.current) {
      const dur = videoRef.current.duration
      if (dur && isFinite(dur) && duration === 0) {
        setDuration(dur)
      }
      setIsLoaded(true)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && videoRef.current.duration) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const newProgress = (clickX / rect.width) * 100
      const newTime = (newProgress / 100) * videoRef.current.duration
      videoRef.current.currentTime = newTime
      setProgress(newProgress)
      setCurrentTime(newTime)
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  const handleFullscreen = () => {
    const container = containerRef.current
    if (!container) return

    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      // Try container first for better controls visibility, fallback to video
      if (container.requestFullscreen) {
        container.requestFullscreen()
      } else if (videoRef.current?.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      setProgress(0)
      setCurrentTime(0)
      if (!isPlaying) {
        videoRef.current.play()
        setIsPlaying(true)
        setShowOverlay(false)
      }
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
    setShowOverlay(true)
    setProgress(0)
    setCurrentTime(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mt-20"
    >
      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30">
            <Video className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-balance">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get to Know{" "}
          </motion.span>
          <motion.span
            className="text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Chokdup
          </motion.span>
        </h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto"
        >
          Watch my video resume to learn more about my journey, skills, and passion for design.
        </motion.p>
      </motion.div>

      {/* Video Player Container */}
      <div className="max-w-4xl mx-auto">
        <div ref={containerRef} className="relative group">
          {/* Animated glow effect */}
          <motion.div
            className="absolute -inset-2 md:-inset-3 rounded-3xl opacity-60"
            style={{
              background: "linear-gradient(135deg, rgba(0, 102, 255, 0.3) 0%, rgba(0, 102, 255, 0.1) 50%, rgba(0, 102, 255, 0.25) 100%)",
              filter: "blur(20px)",
            }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating particles around video */}
          <div className="absolute -inset-8 pointer-events-none overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-primary/50 rounded-full"
                style={{
                  left: `${10 + (i * 12)}%`,
                  top: i % 2 === 0 ? '-5%' : '105%',
                }}
                animate={{
                  y: i % 2 === 0 ? [0, 20, 0] : [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Main video container */}
          <div className="relative bg-card/90 backdrop-blur-md rounded-2xl md:rounded-3xl border-2 border-primary/40 overflow-hidden shadow-2xl shadow-primary/20">
            {/* Video wrapper with aspect ratio */}
            <div 
              className="relative aspect-video bg-gradient-to-br from-background via-card to-background cursor-pointer"
              onClick={handleVideoClick}
            >
              {/* Loading shimmer effect */}
              <AnimatePresence>
                {!isLoaded && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-card via-muted to-card animate-pulse"
                  />
                )}
              </AnimatePresence>

              {/* The actual video */}
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onDurationChange={handleDurationChange}
                onCanPlay={handleCanPlay}
                onEnded={handleVideoEnd}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                playsInline
                preload="auto"
              >
                <source src="/videos/chokdup-video-resume.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button overlay */}
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm"
                  >
                    {/* Animated rings */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full border border-primary/20"
                          style={{
                            width: `${120 + i * 60}px`,
                            height: `${120 + i * 60}px`,
                          }}
                          animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.2, 0.4, 0.2],
                          }}
                          transition={{
                            duration: 2.5 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>

                    {/* Play button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 group/play"
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePlayPause()
                      }}
                    >
                      {/* Button glow */}
                      <motion.div
                        className="absolute inset-0 bg-primary/30 rounded-full blur-xl"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Button background */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center border-2 border-primary-foreground/20 shadow-lg shadow-primary/40 group-hover/play:shadow-primary/60 transition-shadow">
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                      </div>
                    </motion.button>

                    {/* Watch label */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-6 px-5 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30"
                    >
                      <span className="text-sm font-medium text-foreground">Watch Video Resume</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover controls overlay (when video is playing) */}
              <AnimatePresence>
                {!showOverlay && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-background/60 via-transparent to-transparent"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        handlePlayPause()
                      }}
                      className="w-16 h-16 rounded-full bg-card/90 backdrop-blur-sm border border-primary/40 flex items-center justify-center shadow-lg"
                    >
                      {isPlaying ? (
                        <Pause className="w-7 h-7 text-primary" fill="currentColor" />
                      ) : (
                        <Play className="w-7 h-7 text-primary ml-1" fill="currentColor" />
                      )}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Corner accents */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 w-6 h-6 md:w-8 md:h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg pointer-events-none" />
              <div className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-lg pointer-events-none" />
              <div className="absolute bottom-12 left-3 md:bottom-14 md:left-4 w-6 h-6 md:w-8 md:h-8 border-l-2 border-b-2 border-primary/40 rounded-bl-lg pointer-events-none" />
              <div className="absolute bottom-12 right-3 md:bottom-14 md:right-4 w-6 h-6 md:w-8 md:h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg pointer-events-none" />
            </div>

            {/* Video controls bar */}
            <div className="px-3 md:px-5 py-3 md:py-4 bg-card/80 backdrop-blur-sm border-t border-border/50 flex items-center gap-3 md:gap-4">
              {/* Play/Pause button */}
              <button
                onClick={handlePlayPause}
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-primary" />
                ) : (
                  <Play className="w-4 h-4 text-primary ml-0.5" />
                )}
              </button>

              {/* Progress bar */}
              <div 
                className="flex-1 h-1.5 md:h-2 rounded-full bg-muted cursor-pointer overflow-hidden group/progress"
                onClick={handleProgressClick}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Progress handle */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-primary-foreground shadow-md opacity-0 group-hover/progress:opacity-100 transition-opacity" />
                </motion.div>
              </div>

              {/* Time display */}
              <span className="text-xs md:text-sm text-muted-foreground font-mono min-w-[80px] md:min-w-[90px] text-right">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              {/* Control buttons */}
              <div className="flex items-center gap-1 sm:gap-2">
                {/* Restart */}
                <button
                  onClick={handleRestart}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  title="Restart"
                >
                  <RotateCcw className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                </button>

                {/* Volume control with slider */}
                <div 
                  className="relative flex items-center"
                  onMouseEnter={() => setShowVolumeSlider(true)}
                  onMouseLeave={() => setShowVolumeSlider(false)}
                >
                  <button
                    onClick={handleMuteToggle}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                    )}
                  </button>
                  
                  {/* Volume slider */}
                  <AnimatePresence>
                    {showVolumeSlider && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        className="overflow-hidden"
                      >
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className="w-16 h-1 ml-1 accent-primary bg-muted rounded-full cursor-pointer"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Fullscreen */}
                <button
                  onClick={handleFullscreen}
                  className="p-2 rounded-lg hover:bg-muted bg-primary/10 border border-primary/30 transition-colors"
                  title="Fullscreen"
                >
                  <Maximize className="w-4 h-4 text-primary hover:text-primary transition-colors" />
                </button>
              </div>
            </div>
          </div>

          {/* Decorative elements below video */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export function ResumeSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Thinley-Chokdup-CV.pdf"
    link.download = "Thinley-Chokdup-CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="cv" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

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
            Curriculum Vitae
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 text-pretty">
            A journey of continuous learning and impactful design work.
          </p>
          <Button 
            onClick={handleDownloadCV}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 pb-6 border-l border-primary/30 last:border-transparent"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary/20 border-2 border-primary" />

                  <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="font-bold">{job.title}</h4>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                      {job.company}
                      <ExternalLink className="w-3 h-3" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Education */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 pb-6 border-l border-primary/30 last:border-transparent"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary/20 border-2 border-primary" />

                    <div className="bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <h4 className="font-bold">{edu.degree}</h4>
                        <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground mb-3">
                        {edu.school}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">Certifications</h3>
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <span className="font-medium text-sm">{cert.name}</span>
                    <span className="text-xs text-primary">{cert.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Achievements</h3>
              </div>
              <div className="grid gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-medium text-sm">{achievement.name}</span>
                      <span className="text-xs text-primary shrink-0">{achievement.year}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Resume Section */}
        <VideoResumeSection />
      </div>
    </section>
  )
}

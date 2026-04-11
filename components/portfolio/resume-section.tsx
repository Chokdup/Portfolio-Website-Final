"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Download, ExternalLink, Award } from "lucide-react"
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
      </div>
    </section>
  )
}

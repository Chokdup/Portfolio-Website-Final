"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin, Clock, CheckCircle, Phone, Linkedin, Facebook, Instagram, MessageCircle, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"

const contactInfo = [
  { icon: Mail, label: "Email", value: "chokdup15cr@gmail.com", href: "mailto:chokdup15cr@gmail.com" },
  { icon: Phone, label: "Phone", value: "+975 17388207", href: "tel:+97517388207" },
  { icon: MapPin, label: "Location", value: "Thimphu, Bhutan", href: null },
  { icon: Clock, label: "Availability", value: "Open for projects", href: null },
]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/thinleychokdup/", color: "hover:text-[#0077B5]" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/thinley.chokdup.4ramos/", color: "hover:text-[#1877F2]" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/_chokdup/", color: "hover:text-[#E4405F]" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/97517388207", color: "hover:text-[#25D366]" },
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

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
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Looking to improve user experience or need fresh design perspectives? Let&apos;s transform your ideas into exceptional digital products.
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-card border border-border/50 text-muted-foreground ${social.color} hover:border-primary/30 transition-colors`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
            >
              <p className="text-lg font-medium mb-2">
                &ldquo;Design is not just what it looks like. Design is how it works.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground">— Steve Jobs</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <FieldGroup className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field>
                        <FieldLabel className="text-foreground/90">Name</FieldLabel>
                        <Input
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-background/80 border-2 border-primary/30 focus:border-primary hover:border-primary/50 transition-colors placeholder:text-muted-foreground/60"
                        />
                      </Field>
                      <Field>
                        <FieldLabel className="text-foreground/90">Email</FieldLabel>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-background/80 border-2 border-primary/30 focus:border-primary hover:border-primary/50 transition-colors placeholder:text-muted-foreground/60"
                        />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel className="text-foreground/90">Subject</FieldLabel>
                      <Input
                        placeholder="Project inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="bg-background/80 border-2 border-primary/30 focus:border-primary hover:border-primary/50 transition-colors placeholder:text-muted-foreground/60"
                      />
                    </Field>
                    <Field>
                      <FieldLabel className="text-foreground/90">Message</FieldLabel>
                      <Textarea
                        placeholder="Tell me about your project..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-background/80 border-2 border-primary/30 focus:border-primary hover:border-primary/50 transition-colors placeholder:text-muted-foreground/60 resize-none"
                      />
                    </Field>
                    
                    {/* Error message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {error}
                      </motion.div>
                    )}
                    
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </FieldGroup>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

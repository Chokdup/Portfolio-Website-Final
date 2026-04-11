"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X, CheckCircle, MessageSquare, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useContactModal } from "./contact-modal-context"

export function ContactModal() {
  const { isOpen, closeContactModal } = useContactModal()
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
        closeContactModal()
      }, 2500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeContactModal()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="relative w-full max-w-md"
          >
            {/* Glow effect - amber/gold to match SCAN2DINE styling */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/30 via-amber-400/20 to-orange-500/30 rounded-2xl blur-xl opacity-60" />
            
            {/* Modal content - amber/gold border to match SCAN2DINE styling */}
            <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10 overflow-hidden">
              {/* Header */}
              <div className="relative px-6 pt-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    <MessageSquare className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Quick Message</h3>
                    <p className="text-sm text-muted-foreground">I&apos;ll get back to you within 24 hours</p>
                  </div>
                </div>
                
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeContactModal}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Body */}
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-amber-500" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">Message Sent!</h4>
                    <p className="text-muted-foreground text-sm">
                      Thank you for reaching out. I&apos;ll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Email row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-amber-500">Name <span className="text-red-500">*</span></label>
                        <Input
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-background/60 border-2 border-amber-500/30 focus:border-amber-500 hover:border-amber-500/50 transition-all placeholder:text-muted-foreground/50 h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-amber-500">Email <span className="text-red-500">*</span></label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-background/60 border-2 border-amber-500/30 focus:border-amber-500 hover:border-amber-500/50 transition-all placeholder:text-muted-foreground/50 h-11"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-amber-500">Subject <span className="text-red-500">*</span></label>
                      <Input
                        placeholder="Project inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="bg-background/60 border-2 border-amber-500/30 focus:border-amber-500 hover:border-amber-500/50 transition-all placeholder:text-muted-foreground/50 h-11"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-amber-500">Message <span className="text-red-500">*</span></label>
                      <Textarea
                        placeholder="Tell me about your project..."
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-background/60 border-2 border-amber-500/30 focus:border-amber-500 hover:border-amber-500/50 transition-all placeholder:text-muted-foreground/50 resize-none"
                      />
                    </div>

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

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={closeContactModal}
                        disabled={isLoading}
                        className="flex-1 border-border/50 hover:bg-muted text-foreground"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 bg-amber-500 text-amber-950 hover:bg-amber-400 shadow-lg shadow-amber-500/25 font-semibold"
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
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

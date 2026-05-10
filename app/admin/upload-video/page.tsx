"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Upload, Video, CheckCircle, AlertCircle, Loader2, Copy, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UploadVideoPage() {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  const handleUpload = async (file: File) => {
    setIsUploading(true)
    setError(null)
    setProgress(0)

    // Simulate progress for UX
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 10, 90))
    }, 200)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload-video", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Upload failed")
      }

      setProgress(100)
      setUploadedUrl(data.url)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      clearInterval(progressInterval)
      setIsUploading(false)
    }
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files[0]
    if (file) {
      handleUpload(file)
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleUpload(file)
    }
  }

  const copyToClipboard = () => {
    if (uploadedUrl) {
      navigator.clipboard.writeText(uploadedUrl)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Admin
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Upload Video Resume
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Upload your video resume to showcase in the About section. Supported formats: MP4, WebM, MOV, AVI (max 100MB).
          </p>
        </motion.div>

        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          {!uploadedUrl ? (
            <div
              onDragOver={(e) => {
                e.preventDefault()
                setIsDragging(true)
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
                isDragging
                  ? "border-primary bg-primary/10"
                  : "border-border/50 hover:border-primary/50 bg-card/50"
              }`}
            >
              {isUploading ? (
                <div className="space-y-6">
                  <Loader2 className="w-16 h-16 mx-auto text-primary animate-spin" />
                  <div>
                    <p className="font-medium mb-2">Uploading your video...</p>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{progress}%</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Video className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Drag & drop your video here
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    or click to browse files
                  </p>
                  <input
                    type="file"
                    accept="video/mp4,video/webm,video/quicktime,video/x-msvideo"
                    onChange={handleFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Button variant="outline" className="pointer-events-none">
                    <Upload className="w-4 h-4 mr-2" />
                    Select Video
                  </Button>
                </>
              )}
            </div>
          ) : (
            <div className="bg-card border border-border/50 rounded-2xl p-8 space-y-6">
              {/* Success State */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Successful!</h3>
                <p className="text-muted-foreground">
                  Your video resume has been uploaded and is now visible in the About section.
                </p>
              </div>

              {/* Video Preview */}
              <div className="rounded-xl overflow-hidden border border-border/50">
                <video
                  src={uploadedUrl}
                  controls
                  className="w-full aspect-video"
                  preload="metadata"
                />
              </div>

              {/* URL Copy */}
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <input
                  type="text"
                  value={uploadedUrl}
                  readOnly
                  className="flex-1 bg-transparent text-sm truncate outline-none"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyToClipboard}
                  className="shrink-0"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>

              {/* Actions */}
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setUploadedUrl(null)
                    setProgress(0)
                  }}
                >
                  Upload Another
                </Button>
                <Link href="/#about">
                  <Button>
                    View in About Section
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <p className="text-red-500">{error}</p>
            </motion.div>
          )}
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mt-12 p-6 bg-card/50 border border-border/50 rounded-2xl"
        >
          <h4 className="font-semibold mb-4">Tips for a great video resume:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">1.</span>
              Keep it concise - aim for 1-2 minutes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">2.</span>
              Good lighting and clear audio make a big difference
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">3.</span>
              Highlight your key skills and achievements
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">4.</span>
              MP4 format with H.264 codec works best for web playback
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

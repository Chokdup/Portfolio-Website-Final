import { put } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Validate file type
    const validTypes = ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo']
    if (!validTypes.includes(file.type)) {
      return NextResponse.json({ 
        error: 'Invalid file type. Please upload MP4, WebM, MOV, or AVI.' 
      }, { status: 400 })
    }

    // Validate file size (max 100MB)
    const maxSize = 100 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json({ 
        error: 'File too large. Maximum size is 100MB.' 
      }, { status: 400 })
    }

    // Upload to Vercel Blob with a consistent name for the video resume
    const blob = await put(`video-resume/${file.name}`, file, {
      access: 'public',
    })

    return NextResponse.json({ 
      url: blob.url,
      pathname: blob.pathname,
      success: true 
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}

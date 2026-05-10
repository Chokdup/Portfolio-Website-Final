import { list } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { blobs } = await list({
      prefix: 'video-resume/',
    })

    // Get the most recently uploaded video
    const sortedBlobs = blobs.sort((a, b) => 
      new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    )

    const latestVideo = sortedBlobs[0]

    if (!latestVideo) {
      return NextResponse.json({ url: null })
    }

    return NextResponse.json({ 
      url: latestVideo.url,
      uploadedAt: latestVideo.uploadedAt,
    })
  } catch (error) {
    console.error('Error fetching video:', error)
    return NextResponse.json({ url: null })
  }
}

import { NextResponse } from 'next/server'
import { publishBlogPost } from '@/lib/agents/Publisher'

export async function POST(request) {
  try {
    const { finalDraft } = await request.json()
    const publishedUrl = await publishBlogPost(finalDraft)
    return NextResponse.json({ publishedUrl })
  } catch (error) {
    console.error('Failed to publish blog post:', error)
    return NextResponse.json({ error: 'Failed to publish blog post' }, { status: 500 })
  }
}
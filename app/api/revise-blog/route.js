import { NextResponse } from 'next/server'
import { reviseBlogPost } from '@/lib/agents/Revisor'

export async function POST(request) {
  try {
    const { blogPost } = await request.json()
    const revisedBlogPost = await reviseBlogPost(blogPost)
    return NextResponse.json({ revisedBlogPost })
  } catch (error) {
    console.error('Failed to revise blog post:', error)
    return NextResponse.json({ error: 'Failed to revise blog post' }, { status: 500 })
  }
}
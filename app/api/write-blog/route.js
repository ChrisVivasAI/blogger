import { NextResponse } from 'next/server';
import { writeBlogPost } from '@/lib/agents/Writer';

export async function POST(request) {
  try {
    const { topic, research } = await request.json();
    console.log('Writing blog post for topic:', topic);
    const blogPost = await writeBlogPost(topic, research);
    console.log('Blog post generated');
    return NextResponse.json({ blogPost });
  } catch (error) {
    console.error('Failed to write blog post:', error);
    return NextResponse.json(
      { error: 'Failed to write blog post', details: error.message },
      { status: 500 }
    );
  }
}
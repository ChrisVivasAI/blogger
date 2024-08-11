import { NextResponse } from 'next/server';
import { conductResearch } from '@/lib/agents/Researcher';

export async function POST(request) {
  try {
    const { topic } = await request.json();
    console.log('Conducting research for topic:', topic);
    const research = await conductResearch(topic);
    console.log('Research conducted successfully:', research);
    return NextResponse.json({ research });
  } catch (error) {
    console.error('Failed to conduct research:', error);
    return NextResponse.json(
      { 
        error: 'Failed to conduct research', 
        details: error.message,
        research: "Unable to conduct research at this time. Please try again later."
      },
      { status: 500 }
    );
  }
}
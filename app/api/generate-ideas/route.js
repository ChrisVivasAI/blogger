import { NextResponse } from 'next/server';
import { generateIdeas } from '@/lib/agents/IdeaGenerator';

export async function POST(request) {
  try {
    const { prompt } = await request.json();
    console.log('Generating ideas for prompt:', prompt);
    const ideas = await generateIdeas(prompt);
    console.log('Ideas generated:', ideas);
    return NextResponse.json({ ideas });
  } catch (error) {
    console.error('Failed to generate ideas:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate ideas', 
        details: error.message,
        ideas: [
          { title: "Error Generating Idea 1", description: "Please try again." },
          { title: "Error Generating Idea 2", description: "Please try again." },
          { title: "Error Generating Idea 3", description: "Please try again." }
        ]
      },
      { status: 500 }
    );
  }
}
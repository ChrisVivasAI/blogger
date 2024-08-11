import { openai } from '../apis/openai';

export async function writeBlogPost(topic, research) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant that writes blog posts for photographers, videographers, podcasters and content creators." },
        { role: "user", content: `Write a blog post about ${topic} using this research: ${research}` }
      ],
      max_tokens: 1000,
    });
    
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error writing blog post:', error);
    throw new Error(`Failed to generate blog post: ${error.message}`);
  }
}
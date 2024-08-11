import { openai } from '@/lib/apis/openai';

export async function generateIdeas(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a creative and knowledgeable assistant that generates high-quality, diverse blog post ideas that bring value to photographers, videographers, podcasters and content creators. Respond with a JSON array of objects, each containing 'title' and 'description' fields." },
        { role: "user", content: `Generate 3 unique and interesting blog post ideas about: ${prompt}. Each idea should be creative, specific, and appeal to our audience of photographers, videographers, podcasters and content creators.` }
      ],
      temperature: 0.8,
      max_tokens: 500,
      n: 1,
    });
    
    let content = response.choices[0].message.content.trim();
    
    // Remove any Markdown code block indicators
    content = content.replace(/^```json\n/, '').replace(/\n```$/, '');
    
    let ideas;
    try {
      ideas = JSON.parse(content);
    } catch (error) {
      console.error('Failed to parse JSON response:', error);
      console.log('Raw content:', content);
      
      // Fallback: If JSON parsing fails, try to extract ideas manually
      const fallbackIdeas = content.match(/\{[^}]+\}/g);
      if (fallbackIdeas && fallbackIdeas.length > 0) {
        ideas = fallbackIdeas.map(idea => {
          try {
            return JSON.parse(idea);
          } catch {
            return { title: "Parsing Error", description: "Failed to parse this idea." };
          }
        });
      } else {
        throw new Error('Invalid response format from OpenAI');
      }
    }
    
    // Ensure we have exactly 3 ideas
    while (ideas.length < 3) {
      ideas.push({ title: "Additional Idea Needed", description: "Please regenerate ideas to get a full set." });
    }
    return ideas.slice(0, 3);
  } catch (error) {
    console.error('Error generating ideas:', error);
    throw error;
  }
}
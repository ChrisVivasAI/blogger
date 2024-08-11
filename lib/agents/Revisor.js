import { openai } from '../apis/openai';

export async function reviseBlogPost(blogPost) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant that revises blog posts for SEO optimization, adds titles, tags, and improves formatting." },
        { role: "user", content: `Revise this blog post, adding SEO optimization, title, tags, and formatting: ${blogPost}` }
      ],
      max_tokens: 1000,
    });
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error revising blog post:', error);
    throw error;
  }
}
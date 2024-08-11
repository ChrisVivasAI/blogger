import { publishToWordPress } from '../utils/wordpress';

export async function publishBlogPost(finalDraft) {
  try {
    const publishedUrl = await publishToWordPress(finalDraft);
    return publishedUrl;
  } catch (error) {
    console.error('Error publishing blog post:', error);
    throw error;
  }
}

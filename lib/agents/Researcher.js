import { perplexity } from '@/lib/apis/perplexity';

export async function conductResearch(topic) {
  try {
    const topicString = typeof topic === 'object' ? `${topic.title}: ${topic.description}` : topic;
    const research = await perplexity.search(topicString);
    return research;
  } catch (error) {
    console.error('Error conducting research:', error);
    throw error;
  }
}

// Add a named export as well
export const Researcher = {
  conductResearch
};
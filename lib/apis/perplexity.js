import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_PERPLEXITY_API_KEY;

if (!apiKey) {
  throw new Error('Perplexity API key is missing. Please check your environment variables.');
}

const perplexityApi = axios.create({
  baseURL: 'https://api.perplexity.ai',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
});

export const perplexity = {
  search: async (query) => {
    try {
      const response = await perplexityApi.post('/chat/completions', {
        model: "llama-3.1-sonar-large-128k-chat",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that conducts research on given topics."
          },
          {
            role: "user",
            content: `Conduct brief research on the following topic for a blog post: ${query}. Provide key points and relevant information.`
          }
        ],
        max_tokens: 300
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Error searching Perplexity:', error);
      throw error;
    }
  }
};
import axios from 'axios';

const wordpressApi = axios.create({
  baseURL: process.env.WORDPRESS_API_URL,
  auth: {
    username: process.env.WORDPRESS_USERNAME,
    password: process.env.WORDPRESS_PASSWORD,
  },
});

export async function publishToWordPress(post) {
  try {
    const response = await wordpressApi.post('/wp/v2/posts', post);
    return response.data.link;
  } catch (error) {
    console.error('Error publishing to WordPress:', error);
    throw error;
  }
}

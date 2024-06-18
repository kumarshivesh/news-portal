import axios from 'axios';

const API_KEY = 'eb50e78b9f9e43f0b38b069618817a80';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category, page, searchTerm = '') => {
  try {
    const response = await axios.get(
      searchTerm ? `${BASE_URL}/everything` : `${BASE_URL}/top-headlines`,
      {
        params: {
          apiKey: API_KEY,
          q: searchTerm || undefined,
          category: searchTerm ? undefined : category || undefined,
          page: page,
          pageSize: 10,
          country: searchTerm ? undefined : 'us', // Ensure to provide a default country
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

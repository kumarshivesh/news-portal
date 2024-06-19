import axios from 'axios';

const BASE_URL = 'https://news-portal-backend-w5gg.onrender.com'; 

export const fetchArticles = async (category, page, searchTerm = '') => {
  try {
    const response = await axios.get(`${BASE_URL}/news`, {
      params: {
        category,
        page,
        searchTerm,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

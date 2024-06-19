import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; 

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

// src/api.js
import axios from 'axios';

const API_KEY = 'eb50e78b9f9e43f0b38b069618817a80';
const BASE_URL = 'https://newsapi.org/v2';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchArticles = async (category, page, searchTerm = '') => {
  try {
    const response = await instance.get(
      searchTerm ? '/everything' : '/top-headlines',
      {
        params: {
          apiKey: API_KEY,
          q: searchTerm || undefined,
          category: searchTerm ? undefined : category || undefined,
          page: page,
          pageSize: 10,
          country: 'us',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('API request failed', error);
    throw error;
  }
};

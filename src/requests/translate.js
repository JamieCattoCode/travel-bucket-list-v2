import axios from 'axios';
import externalApiTools from '../assets/external-api-tools.json';

export const translate = async (text) => {
  const options = {
    method: 'POST',
    url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': externalApiTools['translate-api-key'],
      'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com',
    },
    data: {
      from: 'auto',
      to: 'en',
      q: text,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
};

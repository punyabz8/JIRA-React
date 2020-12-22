import { getAccessToken } from '../helper/storage';

export const get = async (endpoint) => {
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json',
        id: 1,
      },
    });

    return response.json();
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const post = async (endpoint, data) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.json();
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

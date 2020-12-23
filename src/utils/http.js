import { getAccessToken } from '../helper/storage';

export const get = async (endpoint, user) => {
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json',
        ...user,
      },
    });

    return response.json();
  } catch (error) {
    return {
      error: error.message,
    };
  }
};

export const post = async (endpoint, data, user) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json',
        ...user,
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

export const update = async (endpoint, data, user) => {
  try {
    const response = await fetch(endpoint, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
        'Content-Type': 'application/json',
        ...user,
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

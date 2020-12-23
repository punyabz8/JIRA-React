import * as http from '../utils/http';

export const currentUser = {};

export const syncBackendUser = async (user) => {
  const data = http.post('http://localhost:4000/v1/signup', user);

  return data;
};

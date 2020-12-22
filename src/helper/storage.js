import storage from '../utils/storage';

const ACCESS_TOKEN_KEY = '__JRT__';

export const getAccessToken = () => {
  return storage.get(ACCESS_TOKEN_KEY);
};

export const setAccessToken = (accessToken) => {
  return storage.set(ACCESS_TOKEN_KEY, accessToken);
};

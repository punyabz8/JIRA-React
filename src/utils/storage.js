import SecureLS from 'secure-ls';

const ls = new SecureLS();

const storage = {
  set: (key, data) => {
    ls.set(key, data);
  },

  get: (key) => {
    return ls.get(key);
  },

  remove: (key) => {
    ls.remove(key);
  },

  removeAll: () => {
    ls.removeAll();
  },

  clear: () => {
    ls.clear();
  },

  getAllKeys: () => {
    return ls.getAllKeys();
  },
};

export default storage;

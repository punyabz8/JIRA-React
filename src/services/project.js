import * as http from '../utils/http';

export const addProject = async (data) => {
  const response = http.post('http://localhost:4000/v1/projects', data);

  return response;
};

export const getProjects = async () => {
  const data = http.get('http://localhost:4000/v1/projects');

  return data;
};

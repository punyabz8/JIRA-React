import * as http from '../utils/http';

export const addProject = async (data, user) => {
  const response = http.post('http://localhost:4000/v1/projects', data, user);

  return response;
};

export const updateProject = async (projectId, data, user) => {
  const response = http.update(
    `http://localhost:4000/v1/projects/${projectId}`,
    data,
    user
  );

  return response;
};

export const getProjects = async (user) => {
  const data = http.get('http://localhost:4000/v1/projects', user);

  return data;
};

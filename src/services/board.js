import * as http from '../utils/http';

export const addBoard = async (data, projectId, user) => {
  const response = http.post(
    `http://localhost:4000/v1/projects/${projectId}/boards`,
    data,
    user
  );

  return response;
};

export const getBoards = async (projectId, user) => {
  const response = http.get(
    `http://localhost:4000/v1/projects/${projectId}/boards`,
    user
  );

  return response;
};

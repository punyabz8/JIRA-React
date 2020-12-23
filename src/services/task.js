import * as http from '../utils/http';

// eslint-disable-next-line import/prefer-default-export
export const getTasks = async (projectId, boardId, user) => {
  // http://localhost:4000/v1/projects/1/boards/2/issues
  const data = http.get(
    `http://localhost:4000/v1/projects/${projectId}/boards/${boardId}/issues`,
    user
  );

  return data;
};

export const addTask = async (projectId, boardId, body, user) => {
  const data = http.post(
    `http://localhost:4000/v1/projects/${projectId}/boards/${boardId}/issues`,
    body,
    user
  );

  return data;
};

export const updateTask = async (projectId, boardId, issueId, body, user) => {
  const data = http.update(
    `http://localhost:4000/v1/projects/${projectId}/boards/${boardId}/issues/${issueId}`,
    body,
    user
  );

  return data;
};

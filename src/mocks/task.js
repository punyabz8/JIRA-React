import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line import/prefer-default-export
export const task = {
  todo: [
    {
      id: uuidv4(),
      name: 'Todo 1',
    },
    {
      id: uuidv4(),
      name: 'Todo 2',
    },
  ],
  inProgress: [
    {
      id: uuidv4(),
      name: 'In progress 1',
    },
    {
      id: uuidv4(),
      name: 'In progress 2',
    },
  ],

  done: [
    {
      id: uuidv4(),
      name: 'Done task 1 ',
    },
    {
      id: uuidv4(),
      name: 'Done task 2',
    },
  ],
};

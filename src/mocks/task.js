import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line import/prefer-default-export
export const task = {
  todo: [
    {
      id: uuidv4(),
      name: 'estibulum eleifend imperdiet consequat.',
    },
    {
      id: uuidv4(),
      name: 'Maecenas placerat efficitur iaculis',
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

  QA: [],
};

export const backlogTask = [
  {
    id: uuidv4(),
    name: 'Vivamus pulvinar nisi nulla, sed aliquet tellus venenatis in.',
    user: {
      image: 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg',
    },
    status: 'todo',
    type: 'story',
    ticket: 'DEL-2313',
    priority: 'major',
  },
  {
    id: uuidv4(),
    name: 'orttitor. Curabitur mattis enim eget sod',
    user: {
      image: 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg',
    },
    status: 'todo',
    type: 'story',
    ticket: 'DEL-2313',
    priority: 'major',
  },
  {
    id: uuidv4(),
    name: 'Nulla facilisi. In in lobortis neque, a semper tortor ',
    user: {
      image: 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg',
    },
    status: 'todo',
    type: 'task',
    priority: 'minor',
    ticket: 'DEL-2313',
  },
];

import storyImage from '../assets/images/viewavatar.svg';
import task from '../assets/images/task.svg';
import bug from '../assets/images/bug.svg';
import subtask from '../assets/images/subtask.svg';

// eslint-disable-next-line import/prefer-default-export
export const taskTypeBasedImage = (type) => {
  switch (type) {
    case 'story':
      return storyImage;

    case 'task':
      return task;

    case 'bug':
      return bug;

    case 'subtask':
      return subtask;

    default:
      return task;
  }
};

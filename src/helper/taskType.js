import storyImage from '../assets/images/viewavatar.svg';
import task from '../assets/images/task.svg';
import bug from '../assets/images/bug.svg';
import subtask from '../assets/images/subtask.svg';
import major from '../assets/images/major.svg';
import minor from '../assets/images/minor.svg';
import trivial from '../assets/images/trivial.svg';

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

export const taskPriorityIcon = (priority) => {
  switch (priority) {
    case 'major':
      return major;

    case 'minor':
      return minor;

    case 'trivial':
      return trivial;

    default:
      return major;
  }
};

import React from 'react';
import PropTypes from 'prop-types';
import RoundAvatar from '../common/RoundAvatar/RoundAvatar';
import LabelChip from '../common/LabelChip/LabelChip';
import { taskTypeBasedImage } from '../../helper/taskType';

import '../../assets/scss/taskCard.scss';

const TaskCard = ({ onDragEnter, item, handleDragStart, index }) => {
  return (
    <div
      className="task-wrapper"
      key={item.id || ''}
      draggable
      onDragEnter={() => onDragEnter(index)}
      onDragStart={(e) => {
        handleDragStart(e, item.id || '');
      }}
    >
      <div className="title mb-2">{item.name}</div>
      <div className="mb-2">
        <LabelChip text="LOGIN" />
      </div>

      <div className="task-token-wrapper mb-2 ">
        <div className="d-flex align-items-center">
          <div className="task-type-icon mr-1">
            <img src={taskTypeBasedImage('task')}></img>
          </div>
          <span className="token">TASK-1111</span>
        </div>
        <div>
          <RoundAvatar image="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" />
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  onDragEnter: PropTypes.func,
  item: PropTypes.object,
  handleDragStart: PropTypes.func,
  index: PropTypes.number,
};

export default TaskCard;

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
      <div className="title mb-2">{item.title}</div>
      <div className="mb-2">
        <LabelChip text="LOGIN" />
      </div>

      <div className="task-token-wrapper mb-2 ">
        <div className="d-flex align-items-center">
          <div className="task-type-icon mr-1">
            <img src={taskTypeBasedImage(item.type)}></img>
          </div>
          <span className="token">TASK-1111</span>
        </div>
        <div>
          <RoundAvatar image={item.picture || ''} />
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

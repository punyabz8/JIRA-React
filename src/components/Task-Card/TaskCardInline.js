import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/scss/taskCardInline.scss';
import RoundAvatar from '../common/RoundAvatar/RoundAvatar';
import { taskTypeBasedImage, taskPriorityIcon } from '../../helper/taskType';

const TaskCardInline = ({
  title,
  image,
  ticket,
  type,
  priority,
  status,
  id,
}) => {
  const handleDragStart = (e, _id) => {
    e.dataTransfer.setData(
      '_id',
      JSON.stringify({ id: _id, category: status })
    );
  };

  return (
    <div
      className="task-card-inline"
      draggable
      onDragStart={(e) => handleDragStart(e, id)}
    >
      <div className="left">
        <div className="task-icon">
          <img src={taskTypeBasedImage(type)}></img>
        </div>
        <div>{title || ''}</div>
      </div>
      <div className="right">
        <RoundAvatar image={image} />
        <div>{ticket}</div>
        <div className="task-icon">
          <img src={taskPriorityIcon(priority)}></img>
        </div>
      </div>
    </div>
  );
};

TaskCardInline.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  ticket: PropTypes.string,
  type: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  id: PropTypes.number,
};

export default TaskCardInline;

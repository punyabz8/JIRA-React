import React from 'react';
import PropTypes from 'prop-types';
import TaskCardInline from '../Task-Card/TaskCardInline';

import { isArrayEmpty } from '../../utils/array';

const BacklogComponent = ({ title = 'Default title', tasks }) => {
  return (
    <div className="backlog-container">
      <div className="font-weight-bold">{title}</div>
      <section className="list-wrapper">
        {!isArrayEmpty(tasks || []) ? (
          tasks.map((task) => (
            <TaskCardInline
              key={task.id}
              title={task.name}
              image={task.user.image}
              priority={task.priority}
              type={task.type}
              ticket={task.ticket}
            />
          ))
        ) : (
          <div>no task left</div>
        )}
      </section>
    </div>
  );
};

BacklogComponent.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.array,
};

export default BacklogComponent;

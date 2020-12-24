import React from 'react';

import PropTypes from 'prop-types';

import TaskCard from '../Task-Card/Task-card';

import { isArrayEmpty } from '../../utils/array';
import '../../assets/scss/swimLine.scss';

const SwimLine = ({ data, onDrop, onDragOver, group, onDragEnter }) => {
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('id', JSON.stringify({ id, category: group }));
  };

  return (
    <div
      className="swimLine"
      onDragOver={onDragOver}
      onDrop={(e) => {
        onDrop(e, group);
      }}
    >
      <section className="header">
        <strong>{group}</strong>
      </section>

      {!isArrayEmpty(data)
        ? data.map((item, index) => (
            <TaskCard
              item={item}
              handleDragStart={handleDragStart}
              index={index}
              onDragEnter={onDragEnter}
              key={item.id}
            />
          ))
        : null}
    </div>
  );
};

SwimLine.propTypes = {
  data: PropTypes.array,
  onDragOver: PropTypes.func,
  onDragEnter: PropTypes.func,
  onDrop: PropTypes.func,
  group: PropTypes.string,
};

export default SwimLine;

import React from 'react';

import PropTypes from 'prop-types';

import { isArrayEmpty } from '../../utils/array';
import '../../assets/scss/swimLine.scss';

const SwimLine = ({ data, onDrop, onDragOver, group }) => {
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
        ? data.map((item) => (
            <div
              className="task-wrapper"
              key={item.id || ''}
              draggable
              onDragStart={(e) => {
                handleDragStart(e, item.id || '');
              }}
            >
              {item.name}
            </div>
          ))
        : null}
    </div>
  );
};

SwimLine.propTypes = {
  data: PropTypes.array,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  group: PropTypes.string,
};

export default SwimLine;

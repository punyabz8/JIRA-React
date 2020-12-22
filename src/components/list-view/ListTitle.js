import React from 'react';
import PropTypes from 'prop-types';

import '../../assets/scss/list.scss';

const ListTitle = (props) => {
  return (
    <div className="list-title" onClick={props.onClick}>
      <p>{props.title}</p>
    </div>
  );
};

ListTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListTitle;

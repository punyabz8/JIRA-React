import React from 'react';
import PropTypes from 'prop-types';

import '../../../assets/scss/label.scss';

const LabelChip = ({ text, color }) => {
  return (
    <span className="label-chip" style={{ backgroundColor: color }}>
      {' '}
      {text}
    </span>
  );
};

LabelChip.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};
export default LabelChip;

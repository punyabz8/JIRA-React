import React from 'react';

import PropTypes from 'prop-types';

import '../../../assets/scss/roundAvatar.scss';

const RoundAvatar = ({ image, alt }) => {
  return (
    <div className="round-avatar">
      <img src={image} alt={alt}></img>
    </div>
  );
};

RoundAvatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

export default RoundAvatar;

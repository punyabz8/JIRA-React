import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import '../../../assets/scss/Input.scss';

const Input = ({ label, value, handleChange, name, placeholder, as }) => {
  return (
    <div className="input-wrapper">
      <Form.Label className="label">{label}</Form.Label>
      <Form.Control
        value={value}
        onChange={handleChange}
        name={name}
        placeholder={placeholder}
        as={as}
      ></Form.Control>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  as: PropTypes.string,
};

export default Input;

import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DropdownSelect = ({ placeholder, label, options, handleSelect }) => {
  return (
    <div>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" placeholder={placeholder}>
        {options.map((item) => (
          <option key={item.name} onClick={() => handleSelect(item)}>
            {item.name}
          </option>
        ))}
      </Form.Control>
    </div>
  );
};

DropdownSelect.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  handleSelect: PropTypes.func,
};

export default DropdownSelect;

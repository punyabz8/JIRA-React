import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DropdownSelect = ({
  placeholder,
  label,
  selected = '--',
  options,
  handleSelect,
  name,
}) => {
  return (
    <div>
      <Form.Label className="font-weight-bold">{label}</Form.Label>
      <Form.Control
        as="select"
        value={selected}
        placeholder={placeholder}
        onChange={(e) => handleSelect(name, e.target.value)}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
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
  name: PropTypes.string,
  selected: PropTypes.string,
  options: PropTypes.array,
  handleSelect: PropTypes.func,
};

export default DropdownSelect;

import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import ModalDialog from '../common/Modal/Modal';
import Input from '../common/Input/Input';
import DropdownSelect from '../common/DropdownSelect/DropdownSelect';

const CreateIssue = ({ show, onHide }) => {
  return (
    <div>
      <ModalDialog show={show} header="Create Issue" onHide={onHide}>
        <Form>
          <DropdownSelect
            label="Project"
            options={[{ name: 'test' }, { name: 'new test' }]}
          ></DropdownSelect>
          <DropdownSelect
            label="Issue Type"
            options={[{ name: 'test' }, { name: 'new test' }]}
          ></DropdownSelect>
          <Input as="textarea" label="Description" />
        </Form>
      </ModalDialog>
    </div>
  );
};

CreateIssue.propTypes = {
  show: PropTypes.bool,
  onHide: PropTypes.func,
};

export default CreateIssue;

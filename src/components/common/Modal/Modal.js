import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import PropTypes from 'prop-types';

const ModalDialog = ({
  show,
  onHide,
  children,
  header = 'some test',
  primaryBtnText = 'Save',
  onSave,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children || <div>Default Body</div>}</Modal.Body>
      <Modal.Footer>
        <Button onClick={onSave}>{primaryBtnText}</Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalDialog.propTypes = {
  onHide: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.any,
  onSave: PropTypes.func,
  header: PropTypes.string,
  primaryBtnText: PropTypes.string,
};
export default ModalDialog;

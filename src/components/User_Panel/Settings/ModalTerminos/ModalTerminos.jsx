import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export const ModalTerminos = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Términos y Condiciones
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Aquí puedes poner el texto largo de los términos y condiciones */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. ...
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

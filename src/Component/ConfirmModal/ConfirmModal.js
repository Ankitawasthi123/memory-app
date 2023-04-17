import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmModal({ score, handleClose }) {
  return (
    <>
      <Modal show={true} onHide={handleClose} animation={false}>
        <Modal.Body>
          <h1>GAME OVER</h1>
          <p>Score: {score}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            New Game!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;

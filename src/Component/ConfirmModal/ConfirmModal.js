import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmModal({ score, handleClose }) {
  return (
    <>
      <Modal
        show={true}
        onHide={handleClose}
        animation={false}
        className="game-over-modal text-center"
      >
        <Modal.Body>
          <h1>
            GAME <br />
            OVER
          </h1>
          <p>Score: {score}</p>
          <Button variant="outline-secondary" onClick={handleClose}>
            New Game!
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ConfirmModal;

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmModal({ score, startGame }) {
  return (
    <>
      <Modal
        show={true}
        onHide={startGame}
        animation={false}
        className="game-over-modal text-center"
      >
        <Modal.Body>
          <h1>
            GAME <br />
            OVER
          </h1>
          <p>Score: {score}</p>
          <Button variant="outline-secondary" onClick={startGame}>
            New Game!
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ConfirmModal;

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Notificaiton({ notificationProps, setNotificationProps }) {
  const { header, text } = notificationProps;
  const handleClose = () => {
    setNotificationProps("");
  };
  return (
    <>
      <Modal
        show={true}
        animation={false}
        className="game-over-modal text-center"
      >
        <Modal.Body>
          <h1>{header}</h1>
          <p>{text}</p>
          <Button variant="outline-secondary" onClick={handleClose}>
            {"Close"}
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Notificaiton;

import React from "react";
import Col from "react-bootstrap/Col";
import backImg from "../../../Assets/Images/CartBack.png";

const Card = ({ item, handleChoice, flipped, id }) => {

  const handleClick = () => {
    handleChoice(item);
  };
  return (
    <Col className="p-4 text-center col-4 col-md-4 col-xl-3">
      <div className={flipped ? "flipped card-block" : "card-block"} >
        <img className="front" src={item.avatar_url} />
        <img src={backImg} onClick={handleClick} data-testid={id} />
      </div>
    </Col>
  );
};

export default Card;

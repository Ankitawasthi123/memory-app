import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const apptitle = "Github Memory";

const Header = () => {
  return (
    <Container fluid >
      <Row>
        <Col className="p-4 text-center"><h1>{apptitle}</h1></Col>
      </Row>
    </Container>
  );
}

export default Header;

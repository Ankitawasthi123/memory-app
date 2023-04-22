import React, { useState, useEffect } from "react";
import Header from "../../Component/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { fetchData } from "./Utils/Service";
import Card from "./Card/Card";
import ConfirmModal from "../../Component/ConfirmModal/ConfirmModal";
import Loader from "../../Component/Loader/Loader";
import Col from "react-bootstrap/Col";
import Notification from "../../Component/Notification/Notificaiton";
import "./MemoryGame.scss";
import Button from "react-bootstrap/Button";

const MemoryGame = () => {
  const [finalData, setFinalData] = useState([]);
  const [score, setScore] = useState(0);
  const [startNewGame, setStartNewGame] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [choiceOne, setChoiceOne] = useState();
  const [choiceTwo, setChoiceTwo] = useState();
  const [gameOverProps, setGameOverProps] = useState(false);
  const [loader, setLoader] = useState(false);
  const [notificationProps, setNotificationProps] = useState();

  const loadData = () => {
    setLoader(true);
    fetchData()
      .then((response) => {
        suffleCards(response);
        setLoader(false);
      })
      .catch((error) => {
        setStartNewGame(false);
        setLoader(false);
        setNotificationProps({
          kind: "danger",
          header: "ERROR",
          text: "Api is not working.",
        });
      });
  };

  const suffleCards = (data = []) => {
    const suffledcard = [...data, ...data]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, boxId: Math.random(), matched: false }));
    setFinalData(suffledcard);
  };

  const handleChoice = (item) => {
    if (item?.boxId === choiceOne?.boxId) return;
    choiceOne ? setChoiceTwo(item) : setChoiceOne(item);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.avatar_url === choiceTwo.avatar_url) {
        setFinalData((prevData) => {
          return prevData.map((card) => {
            if (card.avatar_url === choiceOne.avatar_url) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
        setScore((prevScore) => prevScore + 100);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (startNewGame) {
      let value = seconds;
      if (seconds > 0) {
        const time = setTimeout(() => setSeconds(value - 1), 1000);
        return () => {
          clearTimeout(time);
        };
      } else {
        setGameOverProps(true);
      }
    }
  }, [seconds, startNewGame]);

  useEffect(() => {
    if (score === 600) {
      setGameOverProps(true);
    }
  }, [score]);

  const resetTurn = () => {
    setChoiceOne("");
    setChoiceTwo("");
  };

  const startGame = () => {
    setStartNewGame(true);
    setSeconds(60);
    setScore(0);
    setGameOverProps(false);
    loadData();
  };

  return (
    <>
      {loader && <Loader />}
      <Header />
      <div className="outer-block">
        <div className="btn-area">
          <Button variant="outline-secondary" onClick={startGame}>
            {"Start Game"}
          </Button>
        </div>

        <Container fluid>
          <Row>
            {finalData?.map((item, i) => {
              return (
                <Card
                  handleChoice={handleChoice}
                  key={i}
                  item={item}
                  id={item.id}
                  flipped={
                    item === choiceOne || item === choiceTwo || item.matched
                  }
                />
              );
            })}
          </Row>
          {startNewGame && (
            <Row className="score-area">
              <Col md={6} sm={12}>
                TIme : {seconds} seconds
              </Col>
              <Col md={6} sm={12} className="text-align-right">
                Score: {score}
              </Col>
            </Row>
          )}
        </Container>
      </div>
      {gameOverProps && <ConfirmModal startGame={startGame} score={score} />}
      {notificationProps && (
        <Notification
          notificationProps={notificationProps}
          setNotificationProps={setNotificationProps}
        />
      )}
    </>
  );
};

export default MemoryGame;

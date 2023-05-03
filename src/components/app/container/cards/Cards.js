import React from "react";
import { cardsData } from "../../data/Data";
import Card from "../card/Card";
import {CardsContainer, ParentContainer} from "./CardsStyles.jsx";

const Cards = () => {
  return (
    <CardsContainer>
      {cardsData.map((card, id) => {
        return (
          <ParentContainer key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </ParentContainer>
        );
      })}
    </CardsContainer>
  );
};

export default Cards;

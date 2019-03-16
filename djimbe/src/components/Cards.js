import React from "react";
import { CardContainer, Card } from "../styled/Components";

const Cards = props => {
  const { cards } = props;
  return (
    <CardContainer>
      {cards.map((card, index) => {
        return <Card key={index}> {card} </Card>;
      })}
    </CardContainer>
  );
};

export default Cards;

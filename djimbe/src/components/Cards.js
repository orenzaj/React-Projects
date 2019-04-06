import React from "react";
import { CardContainer, Card, CardClone } from "../styled/Components";
import { Draggable } from "react-beautiful-dnd";

export const Cards = props => {
  const { cards } = props;
  return (
    <CardContainer className="card_container">
      {cards.map((card, index) => {
        return (
          <Draggable key={card.id} draggableId={card.id} index={index}>
            {(provided, snapshot) => (
              <>
                <Card
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {card.content}
                </Card>
                {snapshot.isDragging && <CardClone>{card.content}</CardClone>}
              </>
            )}
          </Draggable>
        );
      })}
    </CardContainer>
  );
};

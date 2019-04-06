import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { BeatContainer } from "../styled/Components";
import { Cards } from "./Cards";

export const DroppableBeats = props => {
  const { beatCards } = props;
  return (
    <Droppable droppableId="droppable-1" direction="horizontal">
      {(provided, snapshot) => {
        return (
          <BeatContainer
            className="card_container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Cards cards={beatCards} />
            {provided.placeholder}
          </BeatContainer>
        );
      }}
    </Droppable>
  );
};

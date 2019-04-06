import React from "react";
import DroppableSounds from "./Sound";
import { DragDropContext } from "react-beautiful-dnd";
import { DroppableBeats } from "./Beat";
import { MainContainer, ToggleContainer } from "../styled/Components";
import { getList, cardList, copy, reorder } from "../constants/Items";

const Toggle = props => {
  const { isShowing, showSound } = props;
  const arrow = isShowing ? "fa fa-caret-down" : "fa fa-caret-up";
  return (
    <ToggleContainer
      className={arrow}
      onClick={() => showSound(!isShowing)}
      isShowing={isShowing}
    />
  );
};

const Main = () => {
  const [noteValue, changeNoteValue] = React.useState(2);
  const [beatCards, setBeatCards] = React.useState(getList("droppable-1"));
  const [soundCards, setSoundCards] = React.useState(
    getList("droppable-2", noteValue)
  );
  console.log(soundCards);
  const onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
    const canReorder =
      source.droppableId === "droppable-1" &&
      destination.droppableId === "droppable-1";
    const canCopy =
      source.droppableId === "droppable-2" &&
      destination.droppableId === "droppable-1";
    if (canReorder) {
      setBeatCards(reorder(beatCards, source.index, destination.index));
    }
    if (canCopy) {
      setBeatCards(
        copy(source.index, destination.index, soundCards, beatCards)
      );
    }
    return;
  };
  const numberOfButtons = Object.keys(cardList["droppable-2"]).length;
  const [isShowing, showSound] = React.useState(false);
  return (
    <MainContainer className="main_container">
      <DragDropContext onDragEnd={onDragEnd}>
        <DroppableBeats beatCards={beatCards} />
        <Toggle isShowing={isShowing} showSound={showSound} />
        <DroppableSounds
          isShowing={isShowing}
          soundCards={soundCards}
          noteValue={noteValue}
          changeNoteValue={changeNoteValue}
          numberOfButtons={numberOfButtons}
        />
      </DragDropContext>
    </MainContainer>
  );
};

export default Main;

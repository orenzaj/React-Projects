import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { SoundContainer, NavContainer } from "../styled/Components";
import { Cards } from "./Cards";
import { getList, cardList } from "../constants/Items";

const Nav = props => {
  const { noteValue, changeNoteValue, numberOfButtons, setSoundCards } = props;
  const handleClick = (event, value) => {
    changeNoteValue(value);
  };
  let buttons = [];
  for (let i = 1; i <= numberOfButtons; i++) {
    const isActive = i === noteValue ? "btn btn-active" : "btn btn-secondary";
    buttons.push(
      <button
        key={i}
        className={isActive}
        onClick={i => {
          handleClick(i);
        }}
      >
        {i}
      </button>
    );
  }
  return <NavContainer className="nav_container">{buttons}</NavContainer>;
};

const DroppableSounds = props => {
  const {
    isShowing,
    noteValue,
    changeNoteValue,
    numberOfButtons,
    soundCards,
    setSoundCards
  } = props;
  return isShowing ? (
    <Droppable droppableId="droppable-2">
      {(provided, snapshot) => (
        <SoundContainer
          className="sound_container"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Cards cards={soundCards} />
          <Nav
            className="nav_container"
            noteValue={noteValue}
            setSoundCards={setSoundCards}
            changeNoteValue={changeNoteValue}
            numberOfButtons={numberOfButtons}
          />
          {provided.placeholder}
        </SoundContainer>
      )}
    </Droppable>
  ) : (
    []
  );
};

export default DroppableSounds;

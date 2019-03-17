import React, { useState } from "react";
import { CardContainer, Card } from "../styled/Components";
import {
  ToggleContainer,
  SoundContainer,
  NavContainer
} from "../styled/Components";
import Beat from "./Beat";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const Nav = props => {
  const { noteValue, changeNoteValue, numberOfButtons } = props;
  let buttons = [];
  for (let i = 1; i <= numberOfButtons; i++) {
    const isActive = i === noteValue ? "btn btn-active" : "btn btn-secondary";
    buttons.push(
      <button key={i} className={isActive} onClick={() => changeNoteValue(i)}>
        {i}
      </button>
    );
  }
  return <NavContainer className="nav_container">{buttons}</NavContainer>;
};

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

const SortableItem = SortableElement(({ value }) => <Card>{value}</Card>);
const SortableList = SortableContainer(({ cards }) => {
  return (
    <CardContainer className="sound_container">
      {cards.map((value, index) => (
        <SortableItem key={`card-${index}`} index={index} value={value} />
      ))}
    </CardContainer>
  );
});

const Sound = () => {
  const [isShowing, showSound] = useState(false);
  const cardsMap = {
    1: ["card 1", "card 2"],
    2: ["card 3", "card 4"],
    3: ["card 5", "card 6"],
    4: ["card 7", "card 8"]
  };
  const [noteValue, changeNoteValue] = useState(1);
  const [cards, setCards] = useState(cardsMap[noteValue]);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setCards(arrayMove(cards, oldIndex, newIndex));
  };
  const helperContainer = document.getElementsByClassName("beat_container")[0];
  return isShowing ? (
    <>
      <Toggle
        className="toggle_container"
        isShowing={isShowing}
        showSound={showSound}
      />
      <SoundContainer className="sound_container">
        <SortableList
          cards={cards}
          onSortEnd={onSortEnd}
          axis="x"
          helperContainer={helperContainer}
        />
        <Nav
          noteValue={noteValue}
          changeNoteValue={changeNoteValue}
          numberOfButtons={Object.keys(cardsMap).length}
        />
      </SoundContainer>
    </>
  ) : (
    <Toggle isShowing={isShowing} showSound={showSound} />
  );
};

export default Sound;

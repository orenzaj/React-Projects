import React, { useState } from "react";
import Cards from "./Cards";
import {
  ToggleContainer,
  SoundContainer,
  NavContainer
} from "../styled/Components";

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

const Sound = () => {
  const [isShowing, showSound] = useState(false);
  const cardsMap = {
    1: ["card 1", "card 2"],
    2: ["card 3", "card 4"],
    3: ["card 5", "card 6"],
    4: ["card 7", "card 8"]
  };
  const [noteValue, changeNoteValue] = useState(1);
  return isShowing ? (
    <>
      <Toggle
        className="toggle_container"
        isShowing={isShowing}
        showSound={showSound}
      />
      <SoundContainer className="sound_container">
        <Cards cards={cardsMap[noteValue]} />
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

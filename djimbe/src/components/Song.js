import React, { useState } from "react";
import {
  SongContainer,
  TitleContainer,
  SubtitleContainer
} from "../styled/Components";

const Title = props => {
  const [title, setTitle] = useState("Default Title");
  const [titleIsEdit, editTitle] = useState(false);

  const handleChange = (event, type) => {
    const { value } = event.target;
    return setTitle(value);
  };

  return titleIsEdit ? (
    <TitleContainer>
      <textarea
        onChange={event => handleChange(event, "title")}
        value={title}
        placeholder={title}
      />
      <button onClick={() => editTitle(false)}> Submit </button>
    </TitleContainer>
  ) : (
    <TitleContainer onClick={() => editTitle(true)}>{title}</TitleContainer>
  );
};

const Subtitle = props => {
  const [subtitle, setSubtitle] = useState("Default Subtitle");
  const [subtitleIsEdit, editSubtitle] = useState(false);

  const handleChange = (event, type) => {
    const { value } = event.target;
    return setSubtitle(value);
  };

  return subtitleIsEdit ? (
    <SubtitleContainer>
      <textarea
        value={subtitle}
        placeholder={subtitle}
        onChange={event => handleChange(event, "subtitle")}
      />
      <button onClick={() => editSubtitle(false)}> Submit </button>
    </SubtitleContainer>
  ) : (
    <SubtitleContainer onClick={() => editSubtitle(true)}>
      {subtitle}
    </SubtitleContainer>
  );
};

const Song = props => {
  return (
    <>
      <SongContainer className="song_container">
        <Title />
        <Subtitle />
      </SongContainer>
    </>
  );
};

export default Song;

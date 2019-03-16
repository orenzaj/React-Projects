import React from "react";
import { SongContainer, Title, Subtitle } from "../styled/Components";

const Song = () => {
  return (
    <>
      <SongContainer className="song_container">
        <Title>
          Title <button> Edit </button>
        </Title>
        <Subtitle>
          Subtitle <button> Edit </button>
        </Subtitle>
      </SongContainer>
    </>
  );
};

export default Song;

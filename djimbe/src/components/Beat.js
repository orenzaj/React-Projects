import React, { useState } from "react";
import Cards from "./Cards";
import { BeatContainer } from "../styled/Components";

const Beat = () => {
  const cards = ["card 1", "card 2"];
  return (
    <BeatContainer>
      <Cards cards={cards} />
      <button className="add_row" />
    </BeatContainer>
  );
};

export default Beat;

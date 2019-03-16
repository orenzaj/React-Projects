import React from "react";
import Sound from "./Sound";
import Beat from "./Beat";
import { MainContainer } from "../styled/Components";

const Main = () => {
  return (
    <MainContainer>
      <Beat />
      <Sound />
    </MainContainer>
  );
};

export default Main;

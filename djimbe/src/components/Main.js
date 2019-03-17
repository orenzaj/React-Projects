import React from "react";
import Sound from "./Sound";
import Beat from "./Beat";
import { MainContainer } from "../styled/Components";

const Main = () => {
  return (
    <MainContainer className="main_container">
      <Beat />
      <Sound />
    </MainContainer>
  );
};

export default Main;

import React from "react";
import Song from "./components/Song";
import Main from "./components/Main";
import { AppContainer } from "./styled/Components";

const App = () => {
  return (
    <AppContainer className="app_container">
      <Song />
      <Main />
    </AppContainer>
  );
};

export default App;

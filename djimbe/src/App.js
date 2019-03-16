import React from "react";
import Song from "./components/Song";
import { AppContainer } from "./styled/Components";

const App = () => {
  return (
    <AppContainer className="app_container">
      <Song />
    </AppContainer>
  );
};

export default App;

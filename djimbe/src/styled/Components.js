import styled from "styled-components";

// App
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  padding: 30px;
  box-shadow: 5px 5px 5px #888777;
`;

// SongComponent;
export const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 90%;
`;
export const TitleContainer = styled.div`
  font-size: 30px;
`;
export const SubtitleContainer = styled.div`
  font-size: 20px;
`;

// Main Component
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  border: 1px solid green;
`;

// Beat Component
export const BeatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;
export const sortableList = {
  display: "flex",
  flexDirection: "column",
  flex: "1",
  width: "100%"
};
export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
  border-radius: 50%;
`;
export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5%;
  border-top: ${props => (props.isShowing ? "1px solid green" : "none")};
`;

// Sound Component
export const SoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 40%;
`;
export const CardContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 60px;
  height: 60px;
  border: 1px solid lightblue;
`;
export const NavContainer = styled.div`
  display: flex;
  height: 25%;
  justify-content: center;
  align-items: center;
`;
export const CardClone = styled(Card)`
  div {
    display: none !important;
  }
`;

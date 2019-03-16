import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-evenly;
  height: 500px;
  box-shadow: 5px 5px 5px #888777;
`;

export const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 80%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

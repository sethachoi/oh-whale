import styled from "styled-components";

export const ControlsStyle = styled.div`
  width: 800px;
  background-color: ${({ scene }) => (scene === "void" ? "black" : "#062154")};
  color: ${({ scene }) => (scene === "void" ? "rebeccapurple" : "ghostwhite")};
  border-color: ${({ scene }) =>
    scene === "void" ? "rebeccapurple" : "ghostwhite"};
  outline-color: ${({ scene }) => (scene === "void" ? "black" : "#062154")};
  border: 4px solid;
  outline: 4px solid;
  border-radius: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
  align-items: space-between;
  font-size: 24px;
  padding: 20px 50px;
  flex-wrap: wrap;
  margin-top: 6px;
`;

export const ControlItem = styled.div`
  width: 250px;
  padding: 10px;
  display: flex;
`;

export const ControlKey = styled.div`
  width: 90px;
`;

export const ControlValue = styled.div`
  width: 80px;
  margin-left: 10px;
`;

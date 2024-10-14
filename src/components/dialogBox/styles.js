import styled, { keyframes } from "styled-components";

export const DialogBoxStyle = styled.div`
  z-index: 10;
  position: absolute;
  width: ${({ hidden }) => (hidden ? "0" : "792px")};
  height: ${({ hidden }) => (hidden ? "0" : "200px")};
  background-color: ${({ scene }) => (scene === "void" ? "black" : "#062154")};
  color: ${({ scene }) => (scene === "void" ? "rebeccapurple" : "ghostwhite")};
  border-color: ${({ scene }) =>
    scene === "void" ? "rebeccapurple" : "ghostwhite"};
  outline-color: ${({ scene }) => (scene === "void" ? "black" : "#062154")};
  border: 4px solid;
  outline: 4px solid;
  border-radius: 2px;
  box-sizing: border-box;
  opacity: ${({ hidden }) => (hidden ? "0" : "1")};
  display: flex;
  transform: ${({ location }) =>
    location === "top" ? "translateY(-196px)" : "translateY(196px)"};
  justify-content: center;
  align-items: center;
  font-size: 24px;
  transition: width 0.1s ease-in, height 0.1s ease-in;
  padding: 50px;
  flex-wrap: wrap;
`;

const dropIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-2px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const DialogWord = styled.span`
  padding-right: 20px;
  ${({ alternateStyle }) =>
    alternateStyle
      ? `
        font-family: inherit;
        text-transform: uppercase;
        font-size: 36px;
    `
      : `
        font-family: 'Vcr Osd';
    `};
  animation: 0.15s ${dropIn} ease-in;
`;

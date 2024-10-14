import styled, { keyframes } from "styled-components";
import { VoidMermaidStanding } from "assets";
import { idle } from "globalStyles";

const hide = keyframes`
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

export const VoidMermaidStandingModel = styled.div`
  background: url("${VoidMermaidStanding}");
  height: 80px;
  width: 80px;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  background-size: contain;
  position: absolute;
  transition: transform 0.1s linear;
  z-index: 2;
  animation: 2s ${idle} linear infinite;
  filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
  opacity: 1;

  &.hidden {
    opacity: 0;
    animation: 1s ${hide} ease-out, 2s ${idle} linear infinite;
    filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
  }
`;

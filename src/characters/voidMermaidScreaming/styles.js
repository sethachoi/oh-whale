import styled, { keyframes } from "styled-components";
import { VoidMermaidScreaming } from "assets";

const show = keyframes`
    0% {
        opacity: 0;
    }

    70% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const VoidMermaidScreamingModel = styled.div`
  background: url("${VoidMermaidScreaming}");
  height: 120px;
  width: 120px;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  background-size: contain;
  position: absolute;
  transition: transform 0.1s linear;
  z-index: 2;
  filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));

  opacity: 0;

  &.visible {
    opacity: 1;
    animation: 1.5s ${show} linear;
    filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
  }
`;

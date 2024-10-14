import styled, { keyframes } from "styled-components";
import { SubmarineImage } from "assets";
import { idle } from "globalStyles";

export const SubmarineModel = styled.div`
  background: url("${SubmarineImage}");
  height: 100%;
  width: 100%;
  background-size: contain;
  position: absolute;
  z-index: 2;
  animation: 2s ${idle} linear infinite;
  filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
`;

export const SubmarineWrapper = styled.div`
  margin-top: -30px;
  height: 120px;
  width: 120px;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  position: absolute;
  transition: transform 0.1s linear;
  z-index: 5;
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
`;

export const BubbleJetWrapper = styled.div`
  width: 800px;
  height: 600px;
  position: absolute;
  right: 0;
  z-index: 5;
`;

const bubbleMovementX = (deltaX) => keyframes`
    0% {
        opacity: 1;
    }
    20% {
        opacity: 0;
    }
    50% {
        animation-timing-function: ease-out;
        transform: translateX(${deltaX}px);
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

const bubbleMovementY = (deltaY) => keyframes`
    0% {
        opacity: 1;
    }
    20% {
        opacity: 0;
    }
    50% {
        animation-timing-function: ease-out;
        transform: translateY(${deltaY}px);
        opacity: 0;
    }
    100% {
        opacity: 0;
    }
`;

export const Bubble = styled.div.attrs((props) => ({
  size: props.size,
  speed: props.speed,
  deltaX: props.deltaX,
  deltaY: props.deltaY,
}))`
  z-index: 5;
  opacity: 1;
  position: absolute;
  right: 140px;
  top: 20px;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  background: #c1f1ff;
  height: ${({ size }) => size}px;
  box-shadow: #e0f9ff 3px 0px 0px inset;
  width: ${({ size }) => size}px;
  animation: ${({ speed }) => speed}s ${({ deltaX }) => bubbleMovementX(deltaX)}
      infinite ease-out,
    ${({ speed }) => speed}s ${({ deltaY }) => bubbleMovementY(deltaY)} infinite
      ease-out;
`;

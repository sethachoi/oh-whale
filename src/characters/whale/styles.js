import styled, { keyframes } from "styled-components";
import { WhaleIdle, WhaleSwimming, WhaleSonar, WhaleMunch } from "assets";

const whaleIdle = (size) => keyframes`
    from {
        background-position: 0px;
    }

    to {
        background-position: -${12 * size}px;
    }
`;

const whaleSwimming = (size) => keyframes`
    from {
        background-position: 0px;
    }

    to {
        background-position: -${4 * size}px;
    }
`;

const whaleSonar = (size) => keyframes`
    from {
        background-position: 0px;
    }

    to {
        background-position: -${6 * size}px;
    }
`;

const whaleMunch = (size) => keyframes`
    from {
        background-position: 0px;
    }

    to {
        background-position: -${8 * size}px;
    }
`;

export const WhaleModel = styled.div.attrs((props) => ({
  size: props.size,
  facing: props.facing,
  rotation: props.swimmingRotation,
}))`
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  scale: ${({ facing }) => (facing === "left" ? "1 1" : "-1 1")};
  background-size: cover;
  position: absolute;
  transition: height 0.2s ease-in, width 0.2s ease-in;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));

  &.swimming {
    background-image: url("${WhaleSwimming}");
    animation: 0.5s ${({ size }) => whaleSwimming(size)} steps(4) infinite;
    rotate: ${({ facing, rotation }) =>
      facing === "left" ? `${-rotation}deg` : `${rotation}deg`};
  }

  &.idle {
    background-image: url("${WhaleIdle}");
    animation: 3s ${({ size }) => whaleIdle(size)} steps(12) infinite;
  }

  &.munch {
    background-image: url("${WhaleMunch}");
    animation: 0.5s ${({ size }) => whaleMunch(size)} steps(8);
  }

  &.sonar {
    background-image: url("${WhaleSonar}");
    animation: 0.3s ${({ size }) => whaleSonar(size)} steps(6);
  }
`;

const sonarBurst = keyframes`
    0% {
        opacity: 0.8;
        width: 0;
        height: 0;
    }

    50% {
        opacity: 0.2;
    }

    90% {
        width: 500px;
        height: 500px;
    }

    100% {
        opacity: 0;
    }
`;

export const SonarModel = styled.div`
  background-color: #60a6d1;
  opacity: 0;
  height: 0;
  width: 0;
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  &.active {
    animation: 0.5s ${sonarBurst} ease-out;
  }
`;

export const WhaleWrapper = styled.div`
  display: flex;
  z-index: 3;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.1s linear;
`;

import styled, { keyframes } from "styled-components";
import { BoyIdle, BoyWalking, BoyPhoto } from "assets";

const BOY_SIZE = 120;

const boyIdle = keyframes`
    from {
        background-position: 0px;
    }
    
    to {
        background-position: -${BOY_SIZE * 4}px;
    }
`;

const boyWalking = keyframes`
    from {
        background-position: 0px;
    }

    to {
        background-position: -${BOY_SIZE * 8}px;
    }
`;

const boyPhoto = keyframes`
    from {
        background-position: 0px;
    }

    to {
        background-position:  -${BOY_SIZE * 48}px;
    }
`;

export const BoyModel = styled.div.attrs((props) => ({
  facing: props.facing,
}))`
  height: ${BOY_SIZE * 2}px;
  width: ${BOY_SIZE}px;
  scale: ${({ facing }) => (facing === "left" ? "-1 1" : "1 1")};
  background-size: cover;
  position: absolute;
  transition: width 0.2s ease-in;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));

  &.idle {
    background-image: url("${BoyIdle}");
    animation: 1.5s ${boyIdle} steps(4) infinite;
  }

  &.walking {
    background-image: url("${BoyWalking}");
    animation: 1s ${boyWalking} steps(8) infinite;
  }

  &.photo {
    background-image: url("${BoyPhoto}");
    animation: 10s ${boyPhoto} steps(48);
  }
`;

export const BoyWrapper = styled.div`
  display: flex;
  z-index: 4;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.1s linear;
`;

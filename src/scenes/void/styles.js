import styled, { keyframes } from "styled-components";
import { VoidBack, VoidMountain, VoidFore } from "assets";

export const BackgroundWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  z-index: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VoidBackComponent = styled.div`
  background: url("${VoidBack}");
  height: 100%;
  width: 100%;
  background-size: auto 140%;
  z-index: 0;
  position: absolute;
  transition: background-position-x 0.1s linear, filter 0.2s ease-in;
  filter: blur(3px);
`;

export const VoidMountainComponent = styled.div`
  background: url("${VoidMountain}");
  height: 100%;
  width: 100%;
  background-size: auto 120%;
  background-position-y: 30px;
  z-index: 1;
  position: absolute;
  transition: background-position-x 0.1s linear, filter 0.2s ease-in;
  filter: blur(2px);
`;

export const VoidForeComponent = styled.div`
  background: url("${VoidFore}");
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  background-color: rgba(6, 33, 84, 0.2);
  z-index: 2;
  position: absolute;
  transition: background-position-x 0.1s linear, filter 0.2s ease-in;
  filter: blur(1px);
`;

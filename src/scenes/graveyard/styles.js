import styled, { keyframes } from "styled-components";
import {
  GraveTree,
  GraveMid,
  GraveBack,
  GraveFore,
  GravePhoto,
  FamilyPhoto,
} from "assets";

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

export const GraveBackComponent = styled.div`
  background: url("${GraveBack}");
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  z-index: 0;
  position: absolute;
  transition: background-position-x 0.1s linear, filter 0.2s ease-in;
  filter: blur(4px);
`;

export const GraveMidComponent = styled.div`
  background: url("${GraveMid}");
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  z-index: 1;
  position: absolute;
  transition: background-position-x 0.1s linear, filter 0.2s ease-in;
  filter: blur(3px);
`;

export const GraveForeComponent = styled.div`
  background: url("${GraveFore}");
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  background-color: rgba(6, 33, 84, 0.2);
  z-index: 2;
  position: absolute;
  transition: background-position-x 0.1s linear, filter 0.2s ease-in;
  filter: drop-shadow(0, 0, 10px, rgba(0, 0, 0, 0.2));
`;

export const GraveTreeComponent = styled.div`
  background: url("${GraveTree}");
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  z-index: 5;
  position: absolute;
  transition: background-position-x 0.1s linear, filter 0.2s ease-in;
  filter: drop-shadow(0, 0, 10px, rgba(0, 0, 0, 0.2));
`;

export const GravePhotoComponent = styled.div`
  background: url("${GravePhoto}");
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  z-index: 3;
  position: absolute;
  transition: background-position-x 0.1s linear, filter 0.2s ease-in;

  &.hidden {
    opacity: 0;
  }

  &.shown {
    opacity: 1;
  }
`;

const PhotoAnim = keyframes`
    0% {
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    80% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`;

export const FamilyPhotoComponent = styled.div`
  background: url("${FamilyPhoto}");
  height: 450px;
  width: 450px;
  z-index: 10;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0;
  animation: 8s ${PhotoAnim} linear;
`;

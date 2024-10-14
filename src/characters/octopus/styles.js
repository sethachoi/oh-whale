import styled, { keyframes } from "styled-components";
import { OctopusImage } from "assets";
import { idle } from "globalStyles";

const reveal = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
        mask-position: left;
    }
`;

export const OctopusModel = styled.div`
    background: url("${OctopusImage}");
    height: 60px;
    width: 60px;
    left: ${({x}) => `${x}px`};
    top: ${({y}) => `${y}px`};
    background-size: contain;
    position: absolute;
    transition: transform 0.1s linear;
    z-index: 2;
    opacity: 0;
    mask: linear-gradient(-60deg,#000 30%,#0005,#000 70%) right/300% 100%;

    &.visible {
        opacity: 1;
        animation: 0.5s ${reveal} ease-in, 2s ${idle} linear infinite;
        filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
    }
`;

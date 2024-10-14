import styled, { keyframes } from "styled-components";
import { WaveSvg, TitleImage, TitleColor } from "assets";

const titleSlide = keyframes`
    0% {
        top: -300px;
    }
    80% {
        top: 5px;
    }
    90% {
        top: -2px;
    }
    100% {
        top: 0;
    }
`;

const wavy = keyframes`
    0% {
        mask-position-x: 0%;
    }

    100% {
        mask-position-x: 800px;
    }
`;

export const TitleWrapper = styled.div`
    transition: transform 0.1s linear;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    font-family: 'Cat Hat';
`;

export const TitleHeaderBox = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.4));
    position: absolute;
    background-image: url("${TitleColor}");
    background-repeat: no-repeat;
    background-position: center;
    top: 0;
    font-family: 'Cat Hat';
    justify-content: center;
    align-items: center;
    color: #55a9ed;
    font-size: 90px;
    z-index: 1;
    animation: 2s ${titleSlide} ease-in;
    &.animated {
        z-index: 2;
        color: white;
        background-image: url("${TitleImage}");
        animation: 2s ${titleSlide} ease-in, 10s ${wavy} linear infinite;
        mask: url(${WaveSvg});
        mask-position-y: 358px;
        mask-size: contain;
    }
`;

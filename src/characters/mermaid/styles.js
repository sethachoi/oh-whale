import styled from "styled-components";
import { MermaidImage } from "assets";
import { idle } from "globalStyles";

export const MermaidModel = styled.div`
    background: url("${MermaidImage}");
    height: 60px;
    width: 60px;
    left: ${({x}) => `${x}px`};
    top: ${({y}) => `${y}px`};
    background-size: contain;
    position: absolute;
    transition: transform 0.1s linear;
    z-index: 2;
    animation: 2s ${idle} linear infinite;
    filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
`;

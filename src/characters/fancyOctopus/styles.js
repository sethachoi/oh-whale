import styled from "styled-components";
import { FancyOctopusImage } from "assets";
import { idle } from "globalStyles";

export const FancyOctopusModel = styled.div`
    background: url("${FancyOctopusImage}");
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

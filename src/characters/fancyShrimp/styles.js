import styled from "styled-components";
import { FancyShrimpImage } from "assets";
import { idle } from "globalStyles";

export const FancyShrimpModel = styled.div`
    background: url("${FancyShrimpImage}");
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
    background-repeat: no-repeat;
`;

import styled from "styled-components";
import { ShrimpImage } from "assets";
import { idle } from "globalStyles";

export const ShrimpModel = styled.div`
    background: url("${ShrimpImage}");
    height: 60px;
    width: 60px;
    left: ${({x}) => `${x}px`};
    top: ${({y}) => `${y}px`};
    background-size: contain;
    position: absolute;
    transition: transform 0.1s linear;
    scale: ${({facing}) => facing === 'right' ? '-1 1' : '1 1'};
    z-index: 2;
    animation: 2s ${idle} linear infinite;
    filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
`;

import styled from 'styled-components';
import { Canyon, Foreground, FloorGround, Canyon4 } from 'assets';

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

export const ColorOverlay = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    z-index: 5;
    position: absolute;
    background-color: rgba(6, 33, 84, 0.1);
`;

export const UnderWaterBackground = styled.div`
    background: url("${Canyon}");
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position-y: bottom;
    background-color: rgba(6, 33, 84, 0.2);
    background-blend-mode: hard-light;
    z-index: 0;
    position: absolute;
    transition: background-position-x 0.1s linear, filter 0.2s ease-in;
    filter: blur(4px);
`;

export const CanyonParallax = styled.div`
    background: url("${Canyon4}");
    height: 100%;
    width: 100%;
    background-size: auto 50%;
    background-position-y: 183px;
    background-repeat-y: no-repeat;
    z-index: 1;
    position: absolute;
    transition: background-position-x 0.1s linear, filter 0.2s ease-in;
    filter: blur(3px);
`;


export const ForegroundComponent = styled.div`
    background: url("${Foreground}");
    height: 100%;
    width: 100%;
    background-size: auto 50%;
    background-position-y: 335px;
    background-color: rgba(6, 33, 84, 0.2);
    background-blend-mode: hard-light;
    background-repeat-y: no-repeat;
    z-index: 4;
    position: absolute;
    transition: background-position-x 0.1s linear, filter 0.2s ease-in; 
    filter: blur(3px);
`

export const FloorGroundComponent = styled.div`
    background: url("${FloorGround}");
    height: 100%;
    width: 100%;
    background-size: auto 50%;
    background-position-y: 320px;
    background-color: rgba(6, 33, 84, 0.2);
    background-blend-mode: hard-light;
    background-repeat-y: no-repeat;
    z-index: 2;
    position: absolute;
    transition: background-position-x 0.1s linear, filter 0.2s ease-in;
    filter: drop-shadow(0, 0, 10px, rgba(0, 0, 0, 0.2));
`
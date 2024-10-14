import styled, { keyframes } from 'styled-components';

const transitionAnimation = keyframes`
    0% {
        filter: brightness(1);
    }

    25% {
        filter: brightness(100);
    }

    100% {
        filter: brightness(1);
    }
`;


export const SceneWrapperModel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    &.transition-scene-out {
        animation: 5s ${transitionAnimation} ease-out;
    }
`;
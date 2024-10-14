import { keyframes } from 'styled-components';

export const idle = keyframes`
    0% {
        background-position-y: 0px;
    }

    25% {
        background-position-y: -2px;
    }

    50% {
        background-position-y: 0px;
    }

    75% {
        background-position-y: 2px;
    }

    100% {
        background-position-y: 0px;
    }
`;

import styled, { keyframes } from "styled-components";

const shake = keyframes`
    0% { transform: translateX(0) }
    25% { transform: translateX(5px) }
    50% { transform: translateX(-5px) }
    75% { transform: translateX(5px) }
    100% { transform: translateX(0) }
`;

const SceneWindow = styled.div`
  display: flex;
  overflow: hidden;
  width: 800px;
  height: 600px;
  justify-content: center;
  align-items: center;
  position: relative;

  &.shake {
    animation-delay: 1.5s;
    animation: ${shake} 0.35s 8 1.5s;
  }
`;

export default SceneWindow;

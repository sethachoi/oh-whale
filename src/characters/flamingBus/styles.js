import styled from "styled-components";
import { FlamingBus } from "assets";

export const FlamingBusModel = styled.div`
  background: url("${FlamingBus}");
  height: 60px;
  width: 60px;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  background-size: contain;
  position: absolute;
  transition: transform 0.1s linear;
  z-index: 2;
  filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
`;

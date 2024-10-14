import styled from "styled-components";
import { CorruptedWhale } from "assets";
import { idle } from "globalStyles";

export const CorruptedWhaleModel = styled.div`
  background: url("${CorruptedWhale}");
  height: 104px;
  width: 129px;
  left: ${({ x }) => `${x}px`};
  top: ${({ y }) => `${y}px`};
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  transition: transform 0.1s linear;
  z-index: 2;
  animation: 2s ${idle} linear infinite;
  filter: drop-shadow(2px 2px 5px rgb(0 0 0 / 0.5));
`;

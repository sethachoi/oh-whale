import styled, { createGlobalStyle } from "styled-components";
import VcrOsdMono from "assets/VCR_OSD_MONO.ttf";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ scene }) => (scene === "void" ? "black" : "#3273a8")};
`;

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Vcr Osd';
        src: local('Vcr Osd'), url(${VcrOsdMono}) format('truetype');
    }
`;

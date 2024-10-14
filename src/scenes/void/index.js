import { useLayoutEffect, useRef, useContext } from "react";
import {
  BackgroundWrapper,
  VoidBackComponent,
  VoidMountainComponent,
  VoidForeComponent,
} from "./styles";
import { CameraContext, PlayerContext } from "controllers";
import { WhaleCharacter, VoidCharacters } from "characters";

const VoidScene = () => {
  const backRef = useRef(0);
  const mountainRef = useRef(0);
  const foreRef = useRef(0);

  const cameraContext = useContext(CameraContext);

  useLayoutEffect(() => {
    const back = backRef.current;
    const mountain = mountainRef.current;
    const fore = foreRef.current;
    if (back) {
      back.style.backgroundPositionX = `${cameraContext.cameraX * 0.005}px`;
    }
    if (mountain) {
      mountain.style.backgroundPositionX = `${cameraContext.cameraX * 0.015}px`;
    }
    if (fore) {
      fore.style.backgroundPositionX = `${cameraContext.cameraX}px`;
    }
  }, [cameraContext.cameraX]);

  return (
    <BackgroundWrapper>
      <VoidForeComponent ref={foreRef} />
      <VoidMountainComponent ref={mountainRef} />
      <VoidBackComponent ref={backRef} />
      <WhaleCharacter />
      <VoidCharacters />
    </BackgroundWrapper>
  );
};

export default VoidScene;

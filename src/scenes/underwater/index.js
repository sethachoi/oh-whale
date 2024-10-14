import { useLayoutEffect, useRef, useContext, useEffect } from "react";
import {
  UnderWaterBackground,
  ForegroundComponent,
  FloorGroundComponent,
  BackgroundWrapper,
  ColorOverlay,
  CanyonParallax,
} from "./styles";
import {
  CameraContext,
  PlayerContext,
  NpcContext,
  SoundContext,
} from "controllers";
import { TitleHeader } from "components";
import { PUSHBACK_CONSTANTS } from "constants";
import { WhaleCharacter, UnderWaterCharacters } from "characters";

const UnderWaterScene = () => {
  const bgRef = useRef(0);
  const parallaxRef = useRef(0);
  const canyonRef = useRef(0);
  const floorRef = useRef(0);
  const cameraContext = useContext(CameraContext);
  const playerContext = useContext(PlayerContext);
  const npcContext = useContext(NpcContext);
  const soundContext = useContext(SoundContext);

  useEffect(() => {
    soundContext.startCutsTheme();
  }, []);

  useLayoutEffect(() => {
    const bg = bgRef.current;
    const parallax = parallaxRef.current;
    const floor = floorRef.current;
    const canyon = canyonRef.current;
    if (bg) {
      bg.style.backgroundPositionX = `${cameraContext.cameraX * 2}px`;
    }
    if (parallax) {
      parallax.style.backgroundPositionX = `${cameraContext.cameraX * 0.1}px`;
    }
    if (floor) {
      floor.style.backgroundPositionX = `${cameraContext.cameraX}px`;
    }
    if (canyon) {
      canyon.style.backgroundPositionX = `${cameraContext.cameraX * 0.5}px`;
    }
  }, [cameraContext.cameraX]);

  useLayoutEffect(() => {
    const x = playerContext.realPosition.x;
    const bg = bgRef.current;
    const parallax = parallaxRef.current;
    if (!npcContext.checkIsAlive("submarine")) {
      if (bg) {
        bg.style.filter = "brightness(1)";
      }
      if (parallax) {
        parallax.style.filter = "brightness(1) blur(2px)";
      }
    } else if (x > PUSHBACK_CONSTANTS.left) {
      const xFactor =
        (x - PUSHBACK_CONSTANTS.left) /
        (PUSHBACK_CONSTANTS.right - PUSHBACK_CONSTANTS.left);
      const brightness = Math.max(0, 1 - xFactor);
      if (bg) {
        bg.style.filter = `brightness(${brightness})`;
      }
      if (parallax) {
        parallax.style.filter = `brightness(${brightness}) blur(2px)`;
      }
    }
  }, [playerContext.realPosition.x, npcContext.checkIsAlive]);

  return (
    <>
      <TitleHeader inPlace={false} />
      <BackgroundWrapper>
        <ColorOverlay />
        <ForegroundComponent ref={bgRef} />
        <FloorGroundComponent ref={floorRef} />
        <CanyonParallax ref={canyonRef} />
        <UnderWaterBackground ref={parallaxRef} />
        <UnderWaterCharacters />
        <WhaleCharacter />
      </BackgroundWrapper>
    </>
  );
};

export default UnderWaterScene;

import { useLayoutEffect, useRef, useContext, useState } from "react";
import {
  BackgroundWrapper,
  GraveBackComponent,
  GraveForeComponent,
  GraveMidComponent,
  GraveTreeComponent,
  GravePhotoComponent,
  FamilyPhotoComponent,
} from "./styles";
import { CameraContext, PlayerContext, SoundContext } from "controllers";
import { WhaleCharacter, BoyCharacter } from "characters";
import { TitleHeader } from "components";

const GraveyardScene = () => {
  const [exitState, setExitState] = useState(false);
  const [photoState, setPhotoState] = useState("hidden");
  const [showPhotograph, setShowPhotograph] = useState(false);
  const treeRef = useRef(0);
  const backRef = useRef(0);
  const midRef = useRef(0);
  const foreRef = useRef(0);
  const photoRef = useRef(0);

  const cameraContext = useContext(CameraContext);
  const playerContext = useContext(PlayerContext);
  const soundContext = useContext(SoundContext);

  useLayoutEffect(() => {
    if (
      playerContext.realPosition.x >= 5140 &&
      playerContext.playerModel !== "boy"
    ) {
      playerContext.changeToBoy();
    }

    if (playerContext.realPosition.x >= 5140) {
      soundContext.oceanToLeaves();
    } else {
      soundContext.leavesToOcean();
    }
  }, [playerContext.realPosition]);

  useLayoutEffect(() => {
    const tree = treeRef.current;
    const back = backRef.current;
    const mid = midRef.current;
    const fore = foreRef.current;
    const photo = photoRef.current;

    if (tree) {
      tree.style.backgroundPositionX = `${cameraContext.cameraX}px`;
    }
    if (back) {
      back.style.backgroundPositionX = `${cameraContext.cameraX}px`;
    }
    if (mid) {
      mid.style.backgroundPositionX = `${cameraContext.cameraX}px`;
    }
    if (fore) {
      fore.style.backgroundPositionX = `${cameraContext.cameraX}px`;
    }
    if (photo) {
      photo.style.backgroundPositionX = `${cameraContext.cameraX}px`;
    }
  }, [cameraContext.cameraX]);

  useLayoutEffect(() => {
    if (playerContext.status === "photo") {
      setTimeout(() => {
        setPhotoState("shown");
      }, 8958);

      setTimeout(() => {
        setShowPhotograph(true);
        soundContext.cutsToExit();
      }, 13000);

      setTimeout(() => {
        setExitState(true);
      }, 22000);
    }
  }, [playerContext.status]);

  return (
    <BackgroundWrapper>
      <GraveForeComponent ref={foreRef} />
      <GraveTreeComponent ref={treeRef} />
      <GraveMidComponent ref={midRef} />
      <GraveBackComponent ref={backRef} />
      <GravePhotoComponent className={photoState} ref={photoRef} />
      {playerContext.playerModel === "whale" && <WhaleCharacter />}
      {playerContext.playerModel === "boy" && <BoyCharacter />}
      {showPhotograph && <FamilyPhotoComponent />}
      {exitState && <TitleHeader inPlace={true} />}
    </BackgroundWrapper>
  );
};

export default GraveyardScene;

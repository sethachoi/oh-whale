import { useContext, useEffect, useRef } from "react";
import { GraveyardScene, UnderWaterScene, VoidScene } from "scenes";
import { DialogBox } from "components";
import { SceneContext, NpcContext, SoundContext } from "controllers";
import { SceneWrapperModel } from "./styles";

const SceneWrapper = () => {
  const sceneContext = useContext(SceneContext);
  const npcContext = useContext(NpcContext);
  const soundContext = useContext(SoundContext);
  const wrapperRef = useRef();

  useEffect(() => {
    if (
      !npcContext.checkIsAlive("submarine") &&
      sceneContext.scene === "underwater"
    ) {
      const wrapper = wrapperRef.current;
      if (wrapper) {
        wrapper.style.removeProperty("filter");
        wrapper.classList.add("transition-scene-out");
        setTimeout(() => {
          wrapper.classList.remove("transition-scene-out");
        }, 5000);
      }
      sceneContext.nextScene();
    }
  }, [npcContext.checkIsAlive]);

  useEffect(() => {
    if (
      npcContext.npcList["void-mermaid-standing"]?.dialogComplete &&
      sceneContext.scene === "void"
    ) {
      soundContext.playScarySound();
      setTimeout(() => {
        const wrapper = wrapperRef.current;
        if (wrapper) {
          wrapper.classList.remove("transition-scene-out");
          wrapper.style.removeProperty("filter");
          wrapper.classList.add("transition-scene-out");
        }
        sceneContext.nextScene();
      }, 1800);
    }
  }, [npcContext.npcList["void-mermaid-standing"]?.dialogComplete]);

  return (
    <SceneWrapperModel ref={wrapperRef}>
      {sceneContext.scene === "underwater" && <UnderWaterScene />}
      {sceneContext.scene === "void" && <VoidScene />}
      {sceneContext.scene === "graveyard" && <GraveyardScene />}
      <DialogBox />
    </SceneWrapperModel>
  );
};

export default SceneWrapper;

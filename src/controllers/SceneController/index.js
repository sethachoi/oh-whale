import SoundContext from "../SoundController";
import { createContext, useState, useContext, useEffect } from "react";
import CameraContext from "../CameraController";
import NpcContext from "../NpcController";
import PlayerContext from "../PlayerController";

const SceneContext = createContext();

export const SceneController = ({ children }) => {
  const npcContext = useContext(NpcContext);
  const cameraContext = useContext(CameraContext);
  const playerContext = useContext(PlayerContext);
  const soundContext = useContext(SoundContext);
  const [scene, setScene] = useState("underwater");

  const nextScene = () => {
    if (scene === "underwater") {
      setTimeout(() => {
        setScene("void");
        cameraContext.switchScene("void");
        cameraContext.setCameraX(0);
        npcContext.changeScenes("void");
        playerContext.setScene("void");
        playerContext.resetSize();
        playerContext.setPositionX(-260);
        playerContext.setPositionY(250);
        soundContext.cutsToVoid();
      }, 500);
    } else {
      setTimeout(() => {
        setScene("graveyard");
        cameraContext.switchScene("graveyard");
        cameraContext.setCameraX(0);
        npcContext.changeScenes("graveyard");
        playerContext.setScene("graveyard");
        playerContext.setPositionX(-260);
        playerContext.setPositionY(170);
        soundContext.voidToCuts();
      }, 500);
    }
  };

  return (
    <SceneContext.Provider value={{ scene, nextScene }}>
      {children}
    </SceneContext.Provider>
  );
};

export default SceneContext;

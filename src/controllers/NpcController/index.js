import { createContext, useState, useCallback } from "react";
import npcCollection from "./npcCollection";

const NpcContext = createContext();

export const NpcController = ({ children }) => {
  const [npcList, setNpcList] = useState({ ...npcCollection["underwater"] });
  const [currentInteractNpc, setCurrentInteractNpc] = useState(false);

  const eatNpc = (npcName) => {
    const npc = npcList[npcName];
    if (npc.isEdible && npc.isAlive && !npc.isInvisible) {
      setTimeout(() => {
        setNpcList({ ...npcList, [npcName]: { ...npc, isAlive: false } });
      }, 375);
      return true;
    }

    return false;
  };

  const interactNpc = (npcName) => {
    const npc = npcList[npcName];
    if (
      npc.isAlive &&
      !npc.isInvisible &&
      !npc.dialogComplete &&
      !npc.notInteractive
    ) {
      setCurrentInteractNpc(npcName);
      return true;
    }
    return false;
  };

  const revealNpc = (npcName) => {
    const npc = npcList[npcName];
    if (npc.isInvisible) {
      setNpcList({ ...npcList, [npcName]: { ...npc, isInvisible: false } });
    }
  };

  const stopInteractNpc = () => {
    const npc = npcList[currentInteractNpc];
    if (npc.checkForCompleteDialog) {
      setNpcList({
        ...npcList,
        [currentInteractNpc]: { ...npc, dialogComplete: true },
      });
    }
    setCurrentInteractNpc(false);
  };

  const scanNpcs = ({ left, down, right, up, action }) => {
    for (const [key, value] of Object.entries(npcList)) {
      if (
        value.x >= left &&
        value.x <= right &&
        value.y <= down &&
        value.y >= up
      ) {
        if (action === "interact") {
          return interactNpc(key);
        } else {
          return eatNpc(key);
        }
      }
    }
    return false;
  };

  const sonarNpcs = ({ x, y }) => {
    Object.entries(npcList).forEach(([key, value]) => {
      const distance = Math.sqrt(
        Math.pow(value.x - x, 2) + Math.pow(value.y - y, 2)
      );
      if (distance <= 500) {
        const timing = (distance / 500) * 450;
        setTimeout(() => {
          revealNpc(key);
        }, timing);
      }
    });
  };

  const changeScenes = (sceneName) => {
    setNpcList({ ...npcCollection[sceneName] });
  };

  const checkIsAlive = useCallback(
    (name) => {
      return npcList && npcList[name] && npcList[name].isAlive;
    },
    [npcList]
  );

  return (
    <NpcContext.Provider
      value={{
        npcList,
        currentInteractNpc,
        stopInteractNpc,
        scanNpcs,
        sonarNpcs,
        changeScenes,
        checkIsAlive,
      }}
    >
      {children}
    </NpcContext.Provider>
  );
};

export default NpcContext;

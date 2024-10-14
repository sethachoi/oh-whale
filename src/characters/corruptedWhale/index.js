import { useContext } from "react";
import { NpcContext } from "controllers";
import { CorruptedWhaleModel } from "./styles";
import { useGlobalMoveObjects } from "util";

const CHARACTER_NAME = "corrupted-whale";

const CorruptedWhaleCharacter = () => {
  const context = useContext(NpcContext);
  const corruptedWhaleRef = useGlobalMoveObjects(-83);
  const character = context.npcList[CHARACTER_NAME];

  return (
    <CorruptedWhaleModel
      ref={corruptedWhaleRef}
      x={character.x}
      y={character.y}
    />
  );
};

export default CorruptedWhaleCharacter;

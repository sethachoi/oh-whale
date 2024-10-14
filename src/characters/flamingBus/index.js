import { useContext } from "react";
import { NpcContext } from "controllers";
import { FlamingBusModel } from "./styles";
import { useGlobalMoveObjects } from "util";

const CHARACTER_NAME = "flaming-bus";

const FlamingBusCharacter = () => {
  const context = useContext(NpcContext);
  const ref = useGlobalMoveObjects(-50);
  const character = context.npcList[CHARACTER_NAME];

  return <FlamingBusModel ref={ref} x={character.x} y={character.y} />;
};

export default FlamingBusCharacter;

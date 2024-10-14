import { useContext } from "react";
import { NpcContext } from "controllers";
import { VoidMermaidStandingModel } from "./styles";
import { useGlobalMoveObjects } from "util";

const CHARACTER_NAME = "void-mermaid-standing";

const VoidMermaidStandingCharacter = () => {
  const context = useContext(NpcContext);
  const ref = useGlobalMoveObjects(-68);
  const character = context.npcList[CHARACTER_NAME];

  return (
    <VoidMermaidStandingModel
      ref={ref}
      x={character.x}
      y={character.y}
      className={character.dialogComplete ? "hidden" : ""}
    />
  );
};

export default VoidMermaidStandingCharacter;

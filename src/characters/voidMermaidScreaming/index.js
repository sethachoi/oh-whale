import { useContext, useEffect } from "react";
import { NpcContext, SceneContext } from "controllers";
import { VoidMermaidScreamingModel } from "./styles";
import { useGlobalMoveObjects } from "util";

const CHARACTER_NAME = "void-mermaid-screaming";

const VoidMermaidScreamingCharacter = () => {
  const context = useContext(NpcContext);
  const ref = useGlobalMoveObjects(-112);
  const character = context.npcList[CHARACTER_NAME];
  const standingCharacter = context.npcList["void-mermaid-standing"];

  return (
    <VoidMermaidScreamingModel
      ref={ref}
      x={character.x}
      y={character.y}
      className={standingCharacter.dialogComplete ? "visible" : ""}
    />
  );
};

export default VoidMermaidScreamingCharacter;

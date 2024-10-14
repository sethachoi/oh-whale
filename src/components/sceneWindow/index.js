import { NpcContext } from "controllers";
import React, { useContext } from "react";
import SceneWindow from "./styles";

const SceneWindowComponent = ({ children }) => {
  const npcContext = useContext(NpcContext);
  return (
    <SceneWindow
      className={
        npcContext.npcList["void-mermaid-standing"]?.dialogComplete
          ? "shake"
          : ""
      }
    >
      {children}
    </SceneWindow>
  );
};

export default SceneWindowComponent;

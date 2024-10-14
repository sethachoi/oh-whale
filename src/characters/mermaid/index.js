import { useContext } from "react";
import { NpcContext } from "controllers";
import { MermaidModel } from "./styles";
import { useGlobalMoveObjects } from "util";

const CHARACTER_NAME = 'mermaid';

const MermaidCharacter = () => {
    const context = useContext(NpcContext)
    const mermaidRef = useGlobalMoveObjects();
    const character = context.npcList[CHARACTER_NAME];

    return <MermaidModel ref={mermaidRef} x={character.x} y={character.y} />
}

export default MermaidCharacter;

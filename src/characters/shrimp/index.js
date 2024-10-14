import { useContext } from "react";
import { NpcContext } from "controllers";
import { ShrimpModel } from "./styles";
import { useGlobalMoveObjects } from "util";

const ShrimpCharacter = ({ characterName, facing }) => {
    const context = useContext(NpcContext)
    const shrimpRef = useGlobalMoveObjects();
    const character = context.npcList[characterName];

    return character.isAlive && (<ShrimpModel ref={shrimpRef} x={character.x} y={character.y} facing={facing} />)
}

export default ShrimpCharacter;

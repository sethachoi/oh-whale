import { useContext } from "react";
import { NpcContext } from "controllers";
import { FancyShrimpModel } from "./styles";
import { useGlobalMoveObjects } from "util";

const CHARACTER_NAME = 'fancy-shrimp';

const FancyShrimpCharacter = () => {
    const context = useContext(NpcContext)
    const fancyShrimpRef = useGlobalMoveObjects();
    const character = context.npcList[CHARACTER_NAME];

    return character.isAlive && (<FancyShrimpModel ref={fancyShrimpRef} x={character.x} y={character.y} />)
}

export default FancyShrimpCharacter;

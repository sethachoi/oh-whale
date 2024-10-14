import { useContext } from "react";
import { NpcContext } from "controllers";
import { FancyOctopusModel } from "./styles";
import { useGlobalMoveObjects } from "util";

const CHARACTER_NAME = 'fancy-octopus';

const FancyOctopusCharacter = () => {
    const context = useContext(NpcContext)
    const fancyOctopusRef = useGlobalMoveObjects();
    const character = context.npcList[CHARACTER_NAME];

    return character.isAlive && (<FancyOctopusModel ref={fancyOctopusRef} x={character.x} y={character.y} />)
}

export default FancyOctopusCharacter;

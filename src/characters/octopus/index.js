import { useContext, useEffect } from "react";
import { NpcContext } from "controllers";
import { OctopusModel } from "./styles";
import { useGlobalMoveObjects } from "util";

const OctopusCharacter = ({ characterName }) => {
    const context = useContext(NpcContext)
    const octopusRef = useGlobalMoveObjects();
    const character = context.npcList[characterName];

    useEffect(() => {
        if (!character.isInvisible && octopusRef.current) {
            octopusRef.current.classList.add('visible');
        }
    }, [character.isInvisible]);

    return character.isAlive && (<OctopusModel ref={octopusRef} x={character.x} y={character.y} />)
}

export default OctopusCharacter;

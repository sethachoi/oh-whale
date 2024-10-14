import { useContext, useEffect, useState } from "react";
import { NpcContext } from "controllers";
import { SubmarineWrapper, SubmarineModel, BubbleJetWrapper, Bubble } from "./styles";
import { useGlobalMoveObjects, useVirtualize } from "util";

const CHARACTER_NAME = 'submarine';

const randomBounds = (min, max) => {
    return Math.random() * (max - min) + min;
}

const SubmarineCharacter = () => {
    const context = useContext(NpcContext)
    const submarineRef = useGlobalMoveObjects();
    const [bubbles, setBubbles] = useState([]);
    const character = context.npcList[CHARACTER_NAME];
    const show = useVirtualize(character.x);

    useEffect(() => {
        const newBubbles = [];
        for (let i = 0; i < 50; i++) {
            const size = randomBounds(10, 30);
            const sizeFactor = 30 / (size + 20);
            newBubbles.push({
                deltaX: randomBounds(-8000 * sizeFactor, -150),
                deltaY: randomBounds(-400 * sizeFactor, 400 * sizeFactor),
                speed: randomBounds(1, 4 * sizeFactor),
                size,
            })
        }
        setBubbles(newBubbles);
    }, [])

    return character.isAlive && (
        <SubmarineWrapper hidden={!show} ref={submarineRef} x={character.x} y={character.y} >
            <BubbleJetWrapper>
                {bubbles.map(bubble => <Bubble key={`bubble${bubble.size}${bubble.speed}`} {...bubble} />)}
            </BubbleJetWrapper>
            <SubmarineModel />
        </SubmarineWrapper>)
}

export default SubmarineCharacter;

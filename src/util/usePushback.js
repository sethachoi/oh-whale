import { useContext, useEffect, useState } from 'react';
import { NpcContext, SoundContext } from 'controllers';
import { PUSHBACK_CONSTANTS } from 'constants';

const MAX_PUSHBACK = 100;
const MAX_SIZE = 120;
const MIN_SIZE = 40;

const usePushback = ({ playerX, size }) => {
    const [pushbackX, setPushbackX] = useState(0);
    const npcContext = useContext(NpcContext);
    const soundContext = useContext(SoundContext);

    useEffect(() => {
        if (npcContext.checkIsAlive('submarine') && playerX > PUSHBACK_CONSTANTS.left && playerX <= PUSHBACK_CONSTANTS.right) {
            const xFactor = (playerX - PUSHBACK_CONSTANTS.left) / (PUSHBACK_CONSTANTS.right - PUSHBACK_CONSTANTS.left);
            const sizeFactor = (MAX_SIZE + 7 - size) / (MAX_SIZE - MIN_SIZE);
            soundContext.setBubbleVolume(xFactor);
            setPushbackX(sizeFactor * xFactor * MAX_PUSHBACK);
        } else if (pushbackX > 0) {
            soundContext.setBubbleVolume(0);
            setPushbackX(0);
        }
    }, [npcContext.checkIsAlive, playerX, size]);

    return pushbackX;
};

export default usePushback;

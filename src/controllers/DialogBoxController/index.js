import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import NpcContext from "../NpcController";
import PlayerInputContext from "../PlayerInputController";

const DialogBoxContext = createContext();

export const DialogBoxController = ({ children }) => {
    const playerInputContext = useContext(PlayerInputContext);
    const npcContext = useContext(NpcContext);
    const [hidden, setHidden] = useState(true);
    const [script, setScript] = useState([]);
    const [text, setText] = useState('');
    const [location, setLocation] = useState('top');
    const [isFirstInteract, setIsFirstInteract] = useState(false);

    useEffect(() => {
        if (hidden && npcContext.currentInteractNpc) {
            const npc = npcContext.npcList[npcContext.currentInteractNpc]
            setHidden(false);
            if (npc.script.length > 1) {
                setScript([...npc.script.slice(1)])
            } else {
                setScript([]);
            }
            setText(npc.script[0]);
            if (npc.y >= 300) {
                setLocation('top');
            } else {
                setLocation('bottom');
            }
            setIsFirstInteract(true);
        }
    }, [npcContext.currentInteractNpc])

    useEffect(() => {
        if (!hidden && playerInputContext.interact) {
            if (!isFirstInteract) {
                if (script.length === 0) {
                    setHidden(true);
                    npcContext.stopInteractNpc();
                } else {
                    setText(script[0]);
                    if (script.length > 1) {
                        setScript([...script.slice(1)]);
                    } else {
                        setScript([]);
                    }
                }
            } else {
                setIsFirstInteract(false);
            }
        }
    }, [playerInputContext, hidden, npcContext])

    return (
        <DialogBoxContext.Provider value={{ text, location, hidden}}>
            {children}
        </DialogBoxContext.Provider>
    )
}

export default DialogBoxContext;

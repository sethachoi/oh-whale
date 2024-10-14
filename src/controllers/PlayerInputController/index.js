import { createContext, useReducer, useRef, useEffect } from "react";
import { INPUT_CONSTANTS } from "constants";

const PlayerInputContext = createContext();

const initialState = {
    up: false,
    left: false,
    down: false,
    right: false,
    munch: false,
    interact: false,
    sonar: false,
}

const playerInputReducer = (state, action) => {
    switch (action.type) {
        case 'upEnable': {
            return {...state, up: true}
        }
        case 'leftEnable': {
            return {...state, left: true}
        }
        case 'downEnable': {
            return {...state, down: true}
        }
        case 'rightEnable': {
            return {...state, right: true}
        }
        case 'munchEnable': {
            return {...state, munch: true}
        }
        case 'interactEnable': {
            return {...state, interact: true}
        }
        case 'sonarEnable': {
            return {...state, sonar: true}
        }
        case 'upDisable': {
            return {...state, up: false}
        }
        case 'leftDisable': {
            return {...state, left: false}
        }
        case 'downDisable': {
            return {...state, down: false}
        }
        case 'rightDisable': {
            return {...state, right: false}
        }
        case 'munchDisable': {
            return {...state, munch: false}
        }
        case 'interactDisable': {
            return {...state, interact: false}
        }
        case 'sonarDisable': {
            return {...state, sonar: false}
        }
        default:
    }
}

export const PlayerInputController = ({ children }) => {
    const controllerRef = useRef(0);
    const [state, dispatch] = useReducer(playerInputReducer, initialState);

    const handleKeyDown = ({ code }) => {
        switch (code) {
            case INPUT_CONSTANTS.UP:
                dispatch({ type: 'upEnable' })
                break;
            case INPUT_CONSTANTS.DOWN:
                dispatch({ type: 'downEnable' })
                break;
            case INPUT_CONSTANTS.LEFT:
                dispatch({ type: 'leftEnable' })
                break;
            case INPUT_CONSTANTS.RIGHT:
                dispatch({ type: 'rightEnable' })
                break;
            case INPUT_CONSTANTS.MUNCH:
                dispatch({ type: 'munchEnable' })
                break;
            case INPUT_CONSTANTS.INTERACT:
                dispatch({ type: 'interactEnable' })
                break;
            case INPUT_CONSTANTS.SONAR:
                dispatch({ type: 'sonarEnable' })
                break;
            default:
        }
    }

    const handleKeyUp = ({ code }) => {
        switch (code) {
            case INPUT_CONSTANTS.UP:
                dispatch({ type: 'upDisable' })
                break;
            case INPUT_CONSTANTS.DOWN:
                dispatch({ type: 'downDisable' })
                break;
            case INPUT_CONSTANTS.LEFT:
                dispatch({ type: 'leftDisable' })
                break;
            case INPUT_CONSTANTS.RIGHT:
                dispatch({ type: 'rightDisable' })
                break;
            case INPUT_CONSTANTS.MUNCH:
                dispatch({ type: 'munchDisable' })
                break;
            case INPUT_CONSTANTS.INTERACT:
                dispatch({ type: 'interactDisable' })
                break;
            case INPUT_CONSTANTS.SONAR:
                dispatch({ type: 'sonarDisable' })
                break;
            default:
        }
    };

    useEffect(() => {
        if (controllerRef.current) {
            controllerRef.current.focus();
        }
    }, []);
    
    return (
        <div ref={controllerRef} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} autoFocus tabIndex="0">
            <PlayerInputContext.Provider value={state}>
                {children}
            </PlayerInputContext.Provider>
        </div>
    )
}

export default PlayerInputContext;

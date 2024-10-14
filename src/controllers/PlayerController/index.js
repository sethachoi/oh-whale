import {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
} from "react";
import {
  PlayerInputContext,
  CameraContext,
  NpcContext,
  SoundContext,
} from "controllers";
import { WINDOW_CONSTANTS } from "constants";
import {
  usePlayerHitbox,
  usePlayerRealPosition,
  usePushback,
  useInterval,
} from "util";

const WHALE_MOVE_SPEED = 10;
const BOY_MOVE_SPEED = 10;

const PlayerContext = createContext();

export const PlayerController = ({ children }) => {
  const [playerMoveSpeed, setPlayerMoveSpeed] = useState(WHALE_MOVE_SPEED);
  const [playerModel, setPlayerModel] = useState("whale");
  const [walkOffScreen, setWalkOffScreen] = useState(false);
  const requestRef = useRef(0);
  const inputContext = useContext(PlayerInputContext);
  const { cameraX, setCameraX } = useContext(CameraContext);
  const npcContext = useContext(NpcContext);
  const soundContext = useContext(SoundContext);
  const [lockMovement, setLockMovement] = useState(false);
  const [sonarActive, setSonarActive] = useState(false);
  const [positionX, setPositionX] = useState(-260);
  const [positionY, setPositionY] = useState(170);
  const [xVector, setXVector] = useState(0);
  const [yVector, setYVector] = useState(0);
  const [facing, setFacing] = useState("right");
  const [size, setSize] = useState(40);
  const [scene, setScene] = useState("underwater");
  const [status, setStatus] = useState("idle");
  const [swimmingRotation, setSwimmingRotation] = useState("30");
  const [lockActions, setLockActions] = useState(false);
  const hitbox = usePlayerHitbox({
    playerX: positionX,
    playerY: positionY,
    facing,
    size,
  });
  const realPosition = usePlayerRealPosition({
    playerX: positionX,
    playerY: positionY,
  });
  const pushBack = usePushback({ playerX: realPosition.x, size });

  const rotation = useMemo(() => {
    const xaSin = Math.asin(xVector) * (180 / Math.PI);
    const yaSin = Math.asin(-yVector) * (180 / Math.PI);
    const calcValue = -1 * (yaSin - 45) + -yVector * (xaSin - 45) * xVector;
    if (xVector === -1) {
      // dude idk
      if (calcValue === 90) {
        return 0;
      } else if (calcValue === 0) {
        return 90;
      }
    }

    return calcValue;
  }, [xVector, yVector]);

  const changeToBoy = () => {
    setPlayerMoveSpeed(BOY_MOVE_SPEED);
    setPlayerModel("boy");
    setPositionY(60);
  };

  const resetSize = () => {
    setSize(40);
  };

  useEffect(() => {
    setSwimmingRotation(rotation);
  }, [rotation]);

  useEffect(() => {
    if (!lockMovement) {
      if (xVector === 1 && !inputContext.right) {
        setXVector(0);
      } else if (xVector !== 1 && inputContext.right) {
        setXVector(1);
        setFacing("right");
      } else if (xVector === -1 && !inputContext.left) {
        setXVector(0);
      } else if (xVector !== -1 && inputContext.left) {
        setXVector(-1);
        setFacing("left");
      }
    }
  }, [inputContext.right, inputContext.left]);

  useEffect(() => {
    if (!lockMovement) {
      if (yVector === 1 && !inputContext.down) {
        setYVector(0);
      } else if (yVector !== 1 && inputContext.down) {
        setYVector(1);
      } else if (yVector === -1 && !inputContext.up) {
        setYVector(0);
      } else if (yVector !== -1 && inputContext.up) {
        setYVector(-1);
      }
    }
  }, [inputContext.down, inputContext.up]);

  useInterval(() => {
    const deltaX = xVector * playerMoveSpeed - pushBack;
    if (deltaX > 0) {
      if (!walkOffScreen) {
        if (positionX + deltaX > WINDOW_CONSTANTS[scene].RIGHT) {
          setPositionX(WINDOW_CONSTANTS[scene].RIGHT);
          setCameraX(cameraX - deltaX);
        } else {
          setPositionX(positionX + deltaX);
        }
      } else {
        setPositionX(positionX + deltaX);
      }
    } else if (deltaX < 0) {
      if (positionX + deltaX < WINDOW_CONSTANTS[scene].LEFT) {
        setPositionX(WINDOW_CONSTANTS[scene].LEFT);
        setCameraX(cameraX - deltaX);
      } else {
        setPositionX(positionX + deltaX);
      }
    }

    const deltaY = yVector * playerMoveSpeed;
    if (playerModel === "whale") {
      if (deltaY < 0) {
        if (positionY + deltaY < WINDOW_CONSTANTS[scene].UP) {
          setPositionY(WINDOW_CONSTANTS[scene].UP);
        } else {
          setPositionY(positionY + deltaY);
        }
      } else if (deltaY > 0) {
        if (positionY + deltaY > WINDOW_CONSTANTS[scene].DOWN) {
          setPositionY(WINDOW_CONSTANTS[scene].DOWN);
        } else {
          setPositionY(positionY + deltaY);
        }
      }
    }

    if (!lockActions) {
      if (playerModel === "whale") {
        if (scene === "void") {
          if (xVector !== 0) {
            setStatus("swimming");
            soundContext.startSwim();
          } else {
            setStatus("idle");
            soundContext.stopSwim();
          }
        } else {
          if (yVector !== 0 || xVector !== 0) {
            setStatus("swimming");
            soundContext.startSwim();
          } else {
            setStatus("idle");
            soundContext.stopSwim();
          }
        }
      } else {
        if (xVector !== 0) {
          setStatus("walking");
          soundContext.startFootsteps();
          soundContext.stopSwim();
        } else if (status !== "photo") {
          setStatus("idle");
          soundContext.stopFootsteps();
          soundContext.stopSwim();
        }
      }
    }
  }, 16.7);

  useEffect(() => {
    if (inputContext.interact) {
      if (playerModel === "whale") {
        const success = npcContext.scanNpcs({ ...hitbox, action: "interact" });
        if (success) {
          setLockMovement(true);
          setXVector(0);
          setYVector(0);
        }
      } else {
        const success =
          (realPosition.x >= 9110 &&
            realPosition.x <= 9250 &&
            facing === "right") ||
          (realPosition.x <= 9310 &&
            realPosition.x >= 9250 &&
            facing === "left");

        if (success) {
          setLockMovement(true);
          setXVector(0);
          setYVector(0);

          setStatus("photo");

          setTimeout(() => {
            setStatus("idle");
          }, 10000);

          setTimeout(() => {
            setPlayerMoveSpeed(8);
            setFacing("right");
            setXVector(1);
            setWalkOffScreen(true);
          }, 11000);

          setTimeout(() => {
            setXVector(0);
            setPlayerModel("none");
          }, 12000);
        }
      }
    }

    if (
      !lockMovement &&
      inputContext.munch &&
      !lockActions &&
      playerModel === "whale"
    ) {
      const success = npcContext.scanNpcs({ ...hitbox, action: "munch" });
      setLockActions(true);
      setStatus("munch");
      soundContext.startChomp();
      setTimeout(() => {
        setLockActions(false);
      }, 500);
      setTimeout(() => {
        if (success) {
          setSize((s) => s + 10);
        }
      }, 375);
    }

    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);
    };

    return () => cancelAnimationFrame(requestRef.current);
  }, [inputContext]);

  useEffect(() => {
    if (!npcContext.currentInteractNpc && playerModel === "whale") {
      setLockMovement(false);
    }
  }, [npcContext.currentInteractNpc]);

  useEffect(() => {
    if (
      inputContext.sonar &&
      !sonarActive &&
      !lockMovement &&
      !lockActions &&
      playerModel === "whale"
    ) {
      setLockActions(true);
      setTimeout(() => {
        soundContext.startSonar();
        setSonarActive(true);
        setStatus("sonar");
        npcContext.sonarNpcs({ x: realPosition.x, y: realPosition.y });
      }, 100);

      setTimeout(() => {
        setSonarActive(false);
        setLockActions(false);
      }, 600);
    }
  }, [inputContext.sonar]);

  return (
    <PlayerContext.Provider
      value={{
        sonarActive,
        positionX,
        positionY,
        facing,
        size,
        realPosition,
        setScene,
        setPositionX,
        setPositionY,
        changeToBoy,
        resetSize,
        playerModel,
        status,
        swimmingRotation,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;

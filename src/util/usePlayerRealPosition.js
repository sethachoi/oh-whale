import { useContext } from "react";
import { CameraContext } from "controllers";

const ORIGIN_OFFSET_X = 400;
const ORIGIN_OFFSET_Y = 300;

const usePlayerRealPosition = ({ playerX, playerY }) => {
    const { cameraX } = useContext(CameraContext);
    return ({ x: ORIGIN_OFFSET_X + playerX - cameraX, y: ORIGIN_OFFSET_Y + playerY })
}

export default usePlayerRealPosition;

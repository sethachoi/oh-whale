import { createContext, useCallback, useState } from "react";
import { CAMERA_CONSTANTS } from "constants";

const CameraContext = createContext();

export const CameraController = ({ children }) => {
  const [cameraX, setCameraX] = useState(0);
  const [boundaries, setBoundaries] = useState({
    ...CAMERA_CONSTANTS["underwater"],
  });

  const handleBoundaries = useCallback(
    (newX) => {
      if (newX > boundaries.left) {
        setCameraX(boundaries.left);
      } else if (newX < boundaries.right) {
        setCameraX(boundaries.right);
      } else {
        setCameraX(newX);
      }
    },
    [boundaries]
  );

  const switchScene = (sceneKey) => {
    setBoundaries({ ...CAMERA_CONSTANTS[sceneKey] });
  };

  return (
    <CameraContext.Provider
      value={{ cameraX, setCameraX: handleBoundaries, switchScene }}
    >
      {children}
    </CameraContext.Provider>
  );
};

export default CameraContext;

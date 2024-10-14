import { useContext, useLayoutEffect, useRef } from "react";
import { CameraContext } from "controllers";

const useGlobalMoveObjects = (yOverride = 0, inPlace = false) => {
  const cameraContext = useContext(CameraContext);
  const objectRef = useRef(0);

  useLayoutEffect(() => {
    if (!inPlace) {
      const obj = objectRef.current;
      if (obj) {
        obj.style.transform = `translate3d(${cameraContext.cameraX}px, ${yOverride}px, 0)`;
      }
    }
  }, [cameraContext.cameraX]);

  return objectRef;
};

export default useGlobalMoveObjects;

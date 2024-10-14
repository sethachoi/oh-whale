import { useContext, useEffect, useState } from 'react';
import { CameraContext } from "controllers";

const useVirtualize = (x) => {
    const cameraContext = useContext(CameraContext);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const cameraRight = cameraContext.cameraX - 800;
        if (Math.abs(cameraRight + x) > 1600) {
            setShow(false);
        } else {
            setShow(true);
        }

    }, [cameraContext.cameraX, x]);

    return show;
};

export default useVirtualize;

import React, { useContext, useEffect, useRef } from "react";
import { WhaleModel, WhaleWrapper, SonarModel } from "./styles";
import { PlayerContext } from "controllers";

const WhaleCharacter = () => {
    const whaleRef = useRef();
    const sonarRef = useRef();
    const { sonarActive, positionX, positionY, facing, size, status, swimmingRotation } = useContext(PlayerContext);

    useEffect(() => {
        const whale = whaleRef.current;
        if (whale) {
            whale.style.transform = `translate3d(${positionX}px, ${positionY}px, 0)`
        }
    }, [positionX, positionY, facing])

    useEffect(() => {
        const sonar = sonarRef.current;
        if (sonar) {
            if (sonarActive) {
                sonar.classList.add('active');
            } else {
                sonar.classList.remove('active');
            }
        }
    }, [sonarActive]);

    return (
        <WhaleWrapper ref={whaleRef} style={{ transform: 'translate3d(-260px, 170px, 0)' }}>
            <WhaleModel swimmingRotation={swimmingRotation} className={status} size={size} facing={facing} />
            <SonarModel ref={sonarRef} />
        </WhaleWrapper>
    );
};

export default WhaleCharacter;
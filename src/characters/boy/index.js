import React, { useContext, useEffect, useRef } from "react";
import { BoyWrapper, BoyModel } from "./styles";
import { PlayerContext } from "controllers";

const BoyCharacter = () => {
  const boyRef = useRef();
  const { positionX, positionY, facing, status } = useContext(PlayerContext);

  useEffect(() => {
    const boy = boyRef.current;
    if (boy) {
      boy.style.transform = `translate3d(${positionX}px, ${positionY}px, 0)`;
    }
  });

  return (
    <BoyWrapper
      ref={boyRef}
      style={{ transform: "translate3d(-260px, 60px, 0)" }}
    >
      <BoyModel className={status} facing={facing} />
    </BoyWrapper>
  );
};

export default BoyCharacter;

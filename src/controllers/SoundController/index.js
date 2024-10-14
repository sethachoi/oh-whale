import { createContext } from "react";
import { Howl } from "howler";
import theWay from "assets/theWay.mp3";
import swim from "assets/swim.mp3";
import crunch from "assets/crunch.mp3";
import echo from "assets/echo.mp3";
import whaleSound from "assets/whale-sound.mp3";
import bubbles from "assets/bubbles.mp3";
import cuts from "assets/100-cuts-inside-theme.mp3";
import cutsVoid from "assets/100-cuts-void.mp3";

import footsteps from "assets/footsteps.mp3";
import leaves from "assets/leaves.mp3";
import ocean from "assets/ocean.mp3";
import rumble from "assets/rumble.mp3";
import scream from "assets/scream.mp3";

const SoundContext = createContext();

export const SoundController = ({ children }) => {
  const cutsTheme = new Howl({
    src: [cuts],
    loop: true,
    volume: 0.2,
  });

  const cutsVoidTheme = new Howl({
    src: [cutsVoid],
    loop: true,
    volume: 0,
  });

  const exitTheme = new Howl({
    src: [theWay],
    loop: true,
    volume: 0.2,
  });

  const footStepsSound = new Howl({
    src: [footsteps],
    loop: true,
    volume: 0.2,
  });

  const leavesSound = new Howl({
    src: [leaves],
    loop: true,
    volume: 0.2,
  });

  const oceanSound = new Howl({
    src: [ocean],
    volume: 0.1,
  });

  const rumbleSound = new Howl({
    src: [rumble],
    volume: 0.2,
  });

  const screamSound = new Howl({
    src: [scream],
    volume: 0.1,
  });

  const swimSound = new Howl({
    src: [swim],
    loop: true,
    volume: 0.1,
  });

  const chomp = new Howl({
    src: [crunch],
    sprite: {
      cromch: [250, 750],
    },
    volume: 0.3,
  });

  const sonar = new Howl({
    src: [echo],
    volume: 0.3,
  });

  const whaleNoise = new Howl({
    src: [whaleSound],
    sprite: {
      thing: [3000, 5000],
    },
    volume: 0.1,
    rate: 1.5,
  });

  const bubbleSound = new Howl({
    src: [bubbles],
    loop: true,
  });

  const startBubbleSound = () => {
    if (!bubbleSound.playing()) {
      bubbleSound.play();
    }
  };

  const stopBubbleSound = () => {
    if (bubbleSound.playing()) {
      bubbleSound.stop();
    }
  };

  const setBubbleVolume = (amount) => {
    if (amount <= 0) {
      stopBubbleSound();
      return;
    }

    startBubbleSound();
    bubbleSound.volume(amount * 0.5);
  };

  const startSonar = () => {
    if (!sonar.playing() && !whaleNoise.playing()) {
      sonar.play();
      whaleNoise.play("thing");
    }
  };

  const startChomp = () => {
    if (!chomp.playing()) {
      chomp.play("cromch");
    }
  };

  const startSwim = () => {
    if (!swimSound.playing()) {
      swimSound.play();
    }
  };

  const stopSwim = () => {
    if (swimSound.playing()) {
      swimSound.once("end", () => {
        swimSound.stop();
      });
    }
  };

  const playScarySound = () => {
    setTimeout(() => {
      if (!rumbleSound.playing()) {
        rumbleSound.play();
      }

      if (!screamSound.playing()) {
        screamSound.play();
      }
    }, 1000);

    setTimeout(() => {
      if (rumbleSound.playing()) {
        rumbleSound.fade(0.2, 0.0, 1500);
        rumbleSound.once("fade", () => {
          rumbleSound.stop();
        });
      }
    }, 3000);
  };

  const startLeaves = () => {
    if (!leavesSound.playing()) {
      leavesSound.play();
    }
  };

  const stopLeaves = () => {
    if (leavesSound.playing()) {
      leavesSound.fade(0.2, 0.0, 1500);
      leavesSound.once("fade", () => {
        leavesSound.stop();
      });
    }
  };

  const oceanToLeaves = () => {
    stopOcean();
    startLeaves();
  };

  const leavesToOcean = () => {
    stopLeaves();
    startOcean();
  };

  const startOcean = () => {
    if (!oceanSound.playing()) {
      oceanSound.play();
    }
  };

  const stopOcean = () => {
    if (oceanSound.playing()) {
      oceanSound.fade(0.1, 0.0, 1500);
      oceanSound.once("fade", () => {
        oceanSound.stop();
      });
    }
  };

  const startFootsteps = () => {
    if (!footStepsSound.playing()) {
      footStepsSound.play();
    }
  };

  const stopFootsteps = () => {
    if (footStepsSound.playing()) {
      footStepsSound.fade(0.2, 0.0, 1500);
      footStepsSound.once("fade", () => {
        footStepsSound.stop();
      });
    }
  };

  const cutsToExit = () => {
    if (cutsTheme.playing()) {
      cutsTheme.fade(0.2, 0.0, 4000);
      cutsTheme.once("fade", () => {
        cutsTheme.stop();
      });
    }
    if (!exitTheme.playing()) {
      setTimeout(() => {
        exitTheme.play();
        exitTheme.fade(0.0, 0.2, 5000);
      }, 7000);
    }
  };

  const cutsToVoid = () => {
    if (cutsTheme.playing()) {
      cutsTheme.fade(0.2, 0.0, 1500);
      cutsTheme.once("fade", () => {
        cutsTheme.stop();
      });
    }
    if (!cutsVoidTheme.playing()) {
      cutsVoidTheme.play();
      cutsVoidTheme.fade(0.0, 0.2, 2000);
    }
  };

  const voidToCuts = () => {
    if (cutsVoidTheme.playing()) {
      cutsVoidTheme.fade(0.2, 0.0, 1500);
      cutsVoidTheme.once("fade", () => {
        cutsVoidTheme.stop();
      });
    }
    if (!cutsTheme.playing()) {
      cutsTheme.play();
      cutsTheme.fade(0.0, 0.2, 2000);
    }
  };

  const startCutsTheme = () => {
    if (!cutsTheme.playing()) {
      cutsTheme.play();
    }
  };

  return (
    <SoundContext.Provider
      value={{
        startCutsTheme,
        startSwim,
        stopSwim,
        startChomp,
        startSonar,
        startBubbleSound,
        stopBubbleSound,
        setBubbleVolume,
        leavesToOcean,
        oceanToLeaves,
        startFootsteps,
        stopFootsteps,
        cutsToExit,
        cutsToVoid,
        voidToCuts,
        playScarySound,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
};

export default SoundContext;

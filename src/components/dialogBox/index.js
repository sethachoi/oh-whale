import { useContext, useEffect, useState } from "react";
import { DialogBoxContext, SceneContext } from "controllers";
import { DialogBoxStyle, DialogWord } from "./styles";

const DialogBox = () => {
  const dialogBoxContext = useContext(DialogBoxContext);
  const sceneContext = useContext(SceneContext);
  const [words, setWords] = useState([]);
  const [displayWords, setDisplayWords] = useState([]);
  const [alternateStyle, setAlternateStyle] = useState(false);

  useEffect(() => {
    if (!dialogBoxContext.hidden && dialogBoxContext.text) {
      if (typeof dialogBoxContext.text === "object") {
        setWords(dialogBoxContext.text.string.split(" "));
        setAlternateStyle(dialogBoxContext.text.alternateStyle);
      } else {
        setWords(dialogBoxContext.text.split(" "));
        setAlternateStyle(false);
      }
      setDisplayWords([]);
    }
  }, [dialogBoxContext.hidden, dialogBoxContext.text]);

  useEffect(() => {
    if (words.length) {
      const handler = setTimeout(() => {
        setDisplayWords([...displayWords, words[0]]);
        if (words.length > 1) {
          setWords(words.slice(1));
        } else {
          setWords([]);
        }
      }, 150);

      return () => {
        clearTimeout(handler);
      };
    }
  }, [words]);

  return (
    <DialogBoxStyle
      location={dialogBoxContext.location}
      hidden={dialogBoxContext.hidden}
      scene={sceneContext.scene}
    >
      {displayWords.map((word, index) => (
        <DialogWord key={`${word}${index}`} alternateStyle={alternateStyle}>
          {word}
        </DialogWord>
      ))}
    </DialogBoxStyle>
  );
};

export default DialogBox;

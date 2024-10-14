import { SceneContext } from "controllers";
import { useContext } from "react";
import { ControlsStyle, ControlItem, ControlKey, ControlValue } from "./styles";

const ControlEntry = ({ action, control }) => (
  <ControlItem>
    <ControlKey>{action}</ControlKey>:<ControlValue>{control}</ControlValue>
  </ControlItem>
);

const ControlsComponent = () => {
  const sceneContext = useContext(SceneContext);
  return (
    <ControlsStyle scene={sceneContext.scene}>
      <ControlEntry action="Move" control="WASD" />
      <ControlEntry action="Interact" control="E" />
      <ControlEntry action="Munch" control="F" />
      <ControlEntry action="Sonar" control="Space" />
    </ControlsStyle>
  );
};

export default ControlsComponent;

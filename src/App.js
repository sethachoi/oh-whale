import { BundledControllers, SceneContext } from "controllers";
import {
  ControlsComponent,
  SceneWindowComponent,
  SceneWrapper,
} from "components";
import { AppWrapper, GlobalFonts } from "./styles";
import { useContext } from "react";

function App() {
  const sceneContext = useContext(SceneContext);
  return (
    <AppWrapper scene={sceneContext.scene}>
      <GlobalFonts />
      <SceneWindowComponent>
        <SceneWrapper />
      </SceneWindowComponent>
      <ControlsComponent />
    </AppWrapper>
  );
}

const ControllerWrappedApp = () => (
  <BundledControllers>
    <App />
  </BundledControllers>
);

export default ControllerWrappedApp;

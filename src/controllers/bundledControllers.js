import { CameraController } from "./CameraController";
import { DialogBoxController } from "./DialogBoxController";
import { NpcController } from "./NpcController";
import { PlayerController } from "./PlayerController";
import { PlayerInputController } from "./PlayerInputController";
import { SceneController } from "./SceneController";
import { SoundController } from "./SoundController";

const BundledControllers = ({ children }) => (
    <PlayerInputController>
        <SoundController>
            <CameraController>
                <NpcController>
                    <DialogBoxController>
                        <PlayerController>
                            <SceneController>
                                {children}
                            </SceneController>
                        </PlayerController>
                    </DialogBoxController>
                </NpcController>
            </CameraController>
        </SoundController>
    </PlayerInputController>
);

export default BundledControllers;
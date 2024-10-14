import FancyOctopusCharacter from "./fancyOctopus";
import FancyShrimpCharacter from "./fancyShrimp";
import MermaidCharacter from "./mermaid";
import OctopusCharacter from "./octopus";
import ShrimpCharacter from "./shrimp";
import SubmarineCharacter from "./submarine";

const UnderWaterCharacters = () => (
    <>
        <FancyOctopusCharacter />
        <FancyShrimpCharacter />
        <MermaidCharacter />
        <OctopusCharacter characterName="octopus-1" />
        <OctopusCharacter characterName="octopus-2" />
        <OctopusCharacter characterName="octopus-3" />
        <ShrimpCharacter characterName="shrimp-1" />
        <ShrimpCharacter characterName="shrimp-2" />
        <ShrimpCharacter characterName="shrimp-3"/>
        <SubmarineCharacter />
    </>
);

export default UnderWaterCharacters;

import { TitleHeaderBox, TitleWrapper } from "./styles";
import { useGlobalMoveObjects } from "util";

const TitleHeader = ({ inPlace = false }) => {
  const titleRef = useGlobalMoveObjects(0, inPlace);
  return (
    <TitleWrapper ref={titleRef}>
      <TitleHeaderBox className="animated"></TitleHeaderBox>
      <TitleHeaderBox></TitleHeaderBox>
    </TitleWrapper>
  );
};

export default TitleHeader;

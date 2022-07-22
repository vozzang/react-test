import { SkillItemProps } from "../Skill.types";
import StyledHomeSkillItem from "./SkillItem.styled";

function HomeSkillItem(props: SkillItemProps) {
  return (
    <StyledHomeSkillItem>
      {props.item.name}
    </StyledHomeSkillItem>
  );
}

export default HomeSkillItem;
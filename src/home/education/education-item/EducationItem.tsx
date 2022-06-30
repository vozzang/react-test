import { EducationItemProps } from "../Education.types";
import StyledHomeEducationItem from "./EducationItem.styled";

function HomeEducationItem(props: EducationItemProps) {
  return (
    <StyledHomeEducationItem>
      <div className="date">
        {props.item.date} <small>{props.item.category}</small>
      </div>
      <h3>{props.item.title}</h3>
      {(props.item.history && props.item.history.length > 0) &&
        <div className="text">
          <ul>
            {props.item.history.map(history => <li>{history}</li>)}
          </ul>
        </div>
      }
    </StyledHomeEducationItem>
  );
}

export default HomeEducationItem;
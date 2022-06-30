import { ExperienceItemProps } from "../Experience.types";
import StyledHomeExperienceItem from "./ExperienceItem.styled";

function HomeExperienceItem(props: ExperienceItemProps) {
  return (
    <StyledHomeExperienceItem>
      <div className="date">
        {props.item.startDate} ~ {props.item.endDate ? props.item.endDate : '현재'} <small>{props.item.company}</small>
      </div>
      <h3>{props.item.job}</h3>
      {(props.item.history && props.item.history.length > 0) &&
        <div className="text">
          <ul>
            {props.item.history.map(history => (
              <li>
                {history.startDate && history.startDate}
                {history.endDate && history.endDate}
                {history.content}
                {(history.skills && history.skills.length > 0) && (
                  <div className="tags-small">
                    {history.skills.map(skill => <span>{skill}</span>)}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      }
      {(props.item.skills && props.item.skills.length > 0) &&
        <div className="tags">
          {props.item.skills.map(skill => <span>{skill}</span>)}
        </div>
      }
    </StyledHomeExperienceItem>
  );
}

export default HomeExperienceItem;
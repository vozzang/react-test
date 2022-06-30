import HomeEducationItem from "./education-item/EducationItem";
import StyledHomeEducation from "./Education.styled";
import { EducationItem } from "./Education.types";

function HomeEducation() {
  const educationItems: EducationItem[] = [
    {
      date: '1999.03 ~ 2008.02',
      category: '대학교(4년)',
      title: '한림대',
      history: [
        '경제학과 3.6/4.5'
      ]
    },
    {
      date: '1996.03 ~ 1999.02',
      category: '고등학교',
      title: '대원고등학교'
    }
  ];

  return (
    <StyledHomeEducation id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="experience-timeline">
          {
            educationItems.map(item => <HomeEducationItem item={item} />)
          }
        </div>
      </div>
    </StyledHomeEducation>
  );
}

export default HomeEducation;
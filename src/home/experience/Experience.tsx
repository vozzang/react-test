import HomeExperienceItem from "./experience-item/ExperienceItem";
import StyledHomeExperience from "./Experience.styled";
import { ExperienceItem } from "./Experience.types";

function HomeExperience() {
  const experienceItems: ExperienceItem[] = [
    {
      startDate: '2022-02-21',
      company: '한화생명',
      job: 'Markup developer',
      skills: ['Typescript', 'React', 'Emotion', 'Storybook'],
      history: [
        {
          startDate: '2022.02',
          endDate: '',
          content: '한화생명 디자인 시스템 개발',
          skills: ['Typescript', 'React', 'Emotion', 'Storybook']
        },
        {
          startDate: '2022.05',
          endDate: '2022.06',
          content: '한화생명 다이렉트 암보험 마크업 개발',
          skills: ['Emotion', 'Storybook']
        }
      ]
    },
    {
      startDate: '2012.03.21',
      endDate: '2022.02.18',
      company: '(주)휴넷',
      job: 'Front-End developer',
      skills: [],
      history: [
        {
          startDate: '',
          content: '',
          skills: []
        }
      ]
    },
    {
      startDate: '2020.01',
      endDate: '2021.12',
      company: 'Side project',
      job: 'Full-Stack developer',
      skills: [],
      history: [
        {
          startDate: '',
          content: '',
          skills: []
        }
      ]
    },
    {
      startDate: '2020.01',
      endDate: '2021.12',
      company: 'Side project',
      job: 'Full-Stack developer',
      skills: [],
      history: [
        {
          startDate: '',
          content: '',
          skills: []
        }
      ]
    },
    {
      startDate: '2011.10.04',
      endDate: '2012.03.20',
      company: '블루그리드',
      job: 'Markup developer',
      skills: [],
      history: [
        {
          startDate: '',
          content: '',
          skills: []
        }
      ]
    },
    {
      startDate: '2009.08.28',
      endDate: '2011.07.28',
      company: '에단아이엔씨',
      job: 'Markup developer',
      skills: [],
      history: [
        {
          startDate: '',
          content: '',
          skills: []
        }
      ]
    },
    {
      startDate: '2009.01',
      endDate: '2009.07',
      company: '딜라스틱커뮤니케이션',
      job: 'Full-Stack developer',
      skills: [],
      history: [
        {
          startDate: '',
          content: '',
          skills: []
        }
      ]
    }
  ];

  return (
    <StyledHomeExperience id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experienceItems.map(item => <HomeExperienceItem item={item} />)}
        </div>
      </div>
    </StyledHomeExperience>
  );
}

export default HomeExperience;
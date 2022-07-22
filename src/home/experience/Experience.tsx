import HomeExperienceItem from "./experience-item/ExperienceItem";
import StyledHomeExperience from "./Experience.styled";
import { ExperienceItem } from "./Experience.types";

function HomeExperience() {
  const experienceItems: ExperienceItem[] = [
    {
      startDate: '2022-02-21',
      endDate: '',
      company: '한화생명',
      job: 'Markup developer',
      skills: ['Typescript', 'React', 'Emotion', 'Storybook'],
      history: [
        {
          startDate: '2022-02',
          endDate: '',
          content: '한화생명 디자인 시스템 개발',
          skills: ['Typescript', 'React', 'Emotion', 'Storybook']
        },
        {
          startDate: '2022-04',
          endDate: '2022-06',
          content: '한화생명 다이렉트 암보험 마크업 개발',
          skills: ['Emotion', 'Storybook']
        }
      ]
    },
    {
      startDate: '2012-03-21',
      endDate: '2022-02-18',
      company: '(주)휴넷',
      job: 'Front-End developer',
      description: '인사평가 A등급 3회.(2012, 2017, 2018)',
      skills: [],
      history: [
        {
          startDate: '2019-02',
          endDate: '2019-3',
          content: '컨텐츠매니지먼트 시스템 Frontend 개발',
          skills: ['Vue.js']
        },
        {
          startDate: '2018-01',
          endDate: '2018-12',
          content: '내부 권한관리 시스템 Frontend 개발',
          skills: ['Angular']
        },
        {
          startDate: '2017-03',
          endDate: '2017-09',
          content: '표준 디자인 마크업 가이드 개발',
          description: 'bootstrap과 유사한 사전 정의된 css, html 모음집',
          skills: ['EJS', 'SCSS', 'Gulp']
        },
        {
          startDate: '2015-01',
          endDate: '2015-02',
          content: '효율적인 Markup 개발을 위한 EJS, SCSS, Gulp 기반의 Markup starter 개발',
          skills: ['EJS', 'SCSS', 'Gulp']
        }
      ]
    },
    {
      startDate: '2020.01',
      endDate: '2021.12',
      company: 'Side project (협업툴)',
      job: 'Full-Stack developer',
      skills: ['Typescript', 'Angular', 'Ionic', 'capacitor', 'Electron', 'Node.js', 'NestJS', 'MariaDB', 'TypeORM', 'Socket.io', 'Google Cloud Platform'],
      description: 'WBS 관리, 이슈 관리, 메신저, 문서 관리, 프로젝트 보고서 자동 생성 기능, 사용자 특화 대시보드',
      history: [
        {
          content: '설계 부터 배포까지 웹 사이트, 모바일, 데스크탑 애플리케이션 및 API 서비스를 구현했습니다. Frontend는 Angular로 웹, 모바일 앱, 데스크탑 앱을 코드의 재사용성에 중점을 두어 개발했습니다. Backend는 Node.js 기반의 NestJS 프레임워크로 개발했습니다. 주요 기능인 채팅, 알림 등 실시간 통신에 Socket.io를 이용했습니다. Google Cloud Platform에 서비스 했습니다.',
        }
      ]
    },
    {
      startDate: '2020.01',
      endDate: '2021.12',
      company: 'Side project (가계부)',
      url: 'https://apps.apple.com/us/app/keeple/id1593113741',
      job: 'Full-Stack developer',
      skills: ['Angular', 'Ionic', 'Firebase'],
      history: [
        {
          content: 'Firebase를 이용해 모바일 애플리케이션을 Backend 없이 빠르게 개발했습니다.'
        }
      ]
    },
    {
      startDate: '2011.10.04',
      endDate: '2012.03.20',
      company: '블루그리드',
      job: 'Markup developer',
      skills: ['HTML • CSS', 'Javascript', 'jQuery', 'Bootstrap'],
      history: [
        {
          content: '대규모 프로젝트의 Markup 개발 구성원으로 참여 하여 주어진 가이드에 맞게 개발했습니다.'
        },
        {
          content: 'Markup 개발 가이드를 만들고 일관된 방향으로 개발될 수 있게 구성원을 리딩하였습니다.'
        }
      ]
    },
    {
      startDate: '2009.08.28',
      endDate: '2011.07.28',
      company: '에단아이엔씨',
      job: 'Markup developer',
      skills: ['HTML • CSS', 'Javascript', 'jQuery'],
      history: [
        {
          content: '대규모 프로젝트의 Markup 개발 구성원으로 참여 하여 주어진 가이드에 맞게 개발했습니다.'
        }
      ]
    },
    {
      startDate: '2009.01',
      endDate: '2009.07',
      company: '딜라스틱커뮤니케이션',
      job: 'Full-Stack developer',
      skills: ['HTML • CSS', 'Javascript', 'jQuery', 'PHP', 'MySQL'],
      history: [
        {
          content: 'PHP로 다양한 웹 서비스를 개발했습니다.'
        }
      ]
    }
  ];

  return (
    <StyledHomeExperience id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experienceItems.map((item, index) => <HomeExperienceItem key={index} item={item} />)}
        </div>
      </div>
    </StyledHomeExperience>
  );
}

export default HomeExperience;
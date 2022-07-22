import HomeSkillItem from "./skill-item/SkillItem";
import StyledHomeSkill from "./Skill.styled";
import { SkillItem } from "./Skill.types";

function HomeSkill() {
  const skills: SkillItem[] = [
    {
      name: 'HTML • CSS',
      level: 'high',
      description: ''
    },
    {
      name: 'Javascript',
      level: 'high',
      description: ''
    },
    {
      name: 'Typescript',
      level: 'medium',
      description: ''
    },
    {
      name: 'SASS',
      level: '',
      description: ''
    },
    {
      name: 'Bootstrap',
      level: '',
      description: ''
    },
    {
      name: 'jQuery',
      level: '',
      description: ''
    },
    {
      name: 'Angular',
      level: '',
      description: ''
    },
    {
      name: 'React',
      level: '',
      description: ''
    },
    {
      name: 'Vue.js',
      level: '',
      description: ''
    },
    {
      name: 'Ionic',
      level: '',
      description: ''
    },
    {
      name: 'capacitor',
      level: '',
      description: ''
    },
    {
      name: 'Electron',
      level: '',
      description: ''
    },
    {
      name: 'Node.js',
      level: '',
      description: ''
    },
    {
      name: 'Express',
      level: '',
      description: ''
    },
    {
      name: 'Nest.js',
      level: '',
      description: ''
    },
    {
      name: 'MySQL',
      level: '',
      description: ''
    },
    {
      name: 'MariaDB',
      level: '',
      description: ''
    },
    {
      name: 'Sequelize',
      level: '',
      description: ''
    },
    {
      name: 'TypeORM',
      level: '',
      description: ''
    },
    {
      name: 'Socket.io',
      level: '',
      description: ''
    },
    {
      name: 'Gulp',
      level: '',
      description: ''
    },
    {
      name: 'Git',
      level: '',
      description: ''
    },
    {
      name: 'Google Cloud Platform',
      level: '',
      description: ''
    },
    {
      name: 'Firebase',
      level: '',
      description: ''
    }
  ];

  return (
    <StyledHomeSkill id="skill">
      <div className="container">
        <div className="skill-header">
          <h2 className="section-title">Skills</h2>
          <div className="">
            <span className="high">자유롭게 다룰 수 있음</span>
            <span className="medium">능숙하진 않지만 할 수 있음</span>
            <span className="low">시간이 많이 걸림</span>
          </div>
        </div>
        <div className="skills">
          {skills.map((skill, index) => <HomeSkillItem key={index} item={skill} />)}
        </div>
      </div>
    </StyledHomeSkill>
  );
}

export default HomeSkill;
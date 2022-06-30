import HomeStart from './start/Start';
import HomeAbout from './about/About';
import HomeSkill from './skill/Skill';
import HomeCertify from './certify/Certify';
import HomeCompetencies from './competencies/Competencies';
import HomeExperience from './experience/Experience';
import HomeEducation from './education/Education';
import HomePersonality from './personality/Personality';

function Home() {
  return (
    <>
      <HomeStart />
      <HomeAbout />
      <HomeSkill />
      <HomeCertify />
      <HomeCompetencies />
      <HomeExperience />
      <HomeEducation />
      <HomePersonality />
    </>
  );
}

export default Home;
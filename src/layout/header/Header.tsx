import { StyledHeader } from "./Header.styled";
import NavLink from "./nav-link/NavLink";
import IconHome from '../../shared/svg/home.svg';
import IconAbout from '../../shared/svg/about.svg';
import IconSkill from '../../shared/svg/skill.svg';
import IconCompetencies from '../../shared/svg/competencies.svg';
import IconExperience from '../../shared/svg/experience.svg';
import { HeaderNavLinkItem } from './Header.types';

function Header() {
  const navItems: HeaderNavLinkItem[] = [
    {
      id: 'home',
      name: 'Home',
      icon: IconHome,
      url: '#home'
    },
    {
      id: 'about',
      name: 'About',
      icon: IconAbout,
      url: '#about'
    },
    {
      id: 'skill',
      name: 'Skill',
      icon: IconSkill,
      url: '#skill'
    },
    {
      id: 'competencies',
      name: 'Competencies',
      icon: IconCompetencies,
      url: '#competencies'
    },
    {
      id: 'experience',
      name: 'Experience',
      icon: IconExperience,
      url: '#experience'
    },
    {
      id: 'education',
      name: 'Education',
      icon: IconExperience,
      url: '#education'
    }
  ];

  return (
    <StyledHeader>
      <nav>
        {
          navItems.map(item => <NavLink key={item.id} item={item} />)
        }
      </nav>
    </StyledHeader>
  )
}

export default Header;
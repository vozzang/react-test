import { StyledHeader } from "./Header.styled";
import NavLink from "./nav-link/NavLink";
import IconHome from '../../shared/svg/home.svg';
import IconAbout from '../../shared/svg/about.svg';
import IconSkill from '../../shared/svg/skill.svg';
import IconCompetencies from '../../shared/svg/competencies.svg';
import IconExperience from '../../shared/svg/experience.svg';
import IconSchool from '../../shared/svg/school.svg';
import { HeaderNavLinkItem } from './Header.types';
import { useEffect, useState } from "react";

const items: HeaderNavLinkItem[] = [
  {
    id: 'home',
    name: 'Home',
    icon: IconHome,
    url: '#home',
    isActive: false,
    offsetStart: 0,
    offsetEnd: 0
  },
  {
    id: 'about',
    name: 'About',
    icon: IconAbout,
    url: '#about',
    isActive: false,
    offsetStart: 0,
    offsetEnd: 0
  },
  {
    id: 'skill',
    name: 'Skill',
    icon: IconSkill,
    url: '#skill',
    isActive: false,
    offsetStart: 0,
    offsetEnd: 0
  },
  {
    id: 'competencies',
    name: 'Competencies',
    icon: IconCompetencies,
    url: '#competencies',
    isActive: false,
    offsetStart: 0,
    offsetEnd: 0
  },
  {
    id: 'experience',
    name: 'Experience',
    icon: IconExperience,
    url: '#experience',
    isActive: false,
    offsetStart: 0,
    offsetEnd: 0
  },
  {
    id: 'education',
    name: 'Education',
    icon: IconSchool,
    url: '#education',
    isActive: false,
    offsetStart: 0,
    offsetEnd: 0
  }
];

function Header() {
  const [navItems, setNavItems] = useState(items);

  useEffect(() => {
    const setOffset = () => {
      items.map(item => {
        item.offsetStart = document.getElementById(item.id)?.offsetTop || 0;
        item.offsetEnd = item.offsetStart + (document.getElementById(item.id)?.offsetHeight || 0);
        return item;
      });
    }

    const handleScroll = () => {
      items.map(item => {
        if (item.offsetStart <= window.scrollY && window.scrollY < item.offsetEnd) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
        return item;
      });
      setNavItems([...items]);
    };

    window.addEventListener('scroll', handleScroll);
    setOffset();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


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
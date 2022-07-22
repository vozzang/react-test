import { StyledNavLink } from './NavLink.styled';
import { HeaderNavLinkItemProps } from '../Header.types';

function NavLink (props: HeaderNavLinkItemProps) {
  return (
    <StyledNavLink href={props.item.url} className={props.item.isActive ? 'active' : ''}>
      <i>
        <img src={props.item.icon} alt='' width={24} height={24} />
      </i>
      <span>{props.item.name}</span>
    </StyledNavLink>
  );
}

export default NavLink;
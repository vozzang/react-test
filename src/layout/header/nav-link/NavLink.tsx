import { StyledNavLink } from './NavLink.styled';
import { HeaderNavLinkItemProps } from '../Header.types';

function NavLink (props: HeaderNavLinkItemProps) {
  return (
    <StyledNavLink href={props.item.url}>
      <i>
        <img src={props.item.icon} alt='' />
      </i>
      <span>{props.item.name}</span>
    </StyledNavLink>
  );
}

export default NavLink;
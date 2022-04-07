import { useMatch, useResolvedPath } from 'react-router-dom';
import { IconWrapper, LinkName, NavLinkWrapper } from './NavLink.elements';

type NavLinkProps = {
  name: string;
  to: string;
  icon: JSX.Element;
};

export const NavLink = ({ name, icon, to }: NavLinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLinkWrapper to={to} style={match ? { backgroundColor: 'white', color: '#141b1f' } : {}}>
      <IconWrapper>{icon}</IconWrapper>
      <LinkName>{name}</LinkName>
    </NavLinkWrapper>
  );
};

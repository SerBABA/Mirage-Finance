import {
  LeftWrapper,
  RightWrapper,
  TopNav,
  Logo,
  IconWrapper,
  Icon,
  LinkIconWrapper,
} from './TopNavbar.elements';
import { Twirl as Humburger } from 'hamburger-react';
import DefaultUserImage from 'assets/DefaultUser.png';
import { DoorIcon } from 'assets/icons/DoorIcon';
import { useLogoutMutation } from 'generated/graphql';

type TopNavbarProps = {
  onToggle: () => void;
  show: boolean;
};

export const TopNavbar = ({ onToggle, show }: TopNavbarProps) => {
  const [logout] = useLogoutMutation();

  const handleLogout = async () => await logout().catch();

  return (
    <TopNav>
      <LeftWrapper>
        <Humburger size={30} color="#fff" toggled={show} toggle={onToggle}></Humburger>
        <Logo>Mirage Finance</Logo>
      </LeftWrapper>
      <RightWrapper>
        <LinkIconWrapper to="/login" onClick={handleLogout}>
          <IconWrapper>
            <DoorIcon />
          </IconWrapper>
        </LinkIconWrapper>
        <IconWrapper>
          <Icon src={DefaultUserImage} />
        </IconWrapper>
      </RightWrapper>
    </TopNav>
  );
};

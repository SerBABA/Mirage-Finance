import {
  LeftWrapper,
  RightWrapper,
  TopNav,
  Logo,
  IconWrapper,
  Icon,
  LinkIconWrapper,
} from "./topNav.elements";
import { Twirl as Humburger } from "hamburger-react";
import DefaultUserImage from "assets/default-user.png";
import LogOutSVG from "assets/icons/LogOutSVG";
import { useLogoutMutation } from "generated/graphql";

type TopNavComponentProps = {
  toggleSideNavbar: () => void;
  showSideNavbar: boolean;
};

const TopNavComponent: React.FC<TopNavComponentProps> = ({ toggleSideNavbar, showSideNavbar }) => {
  return (
    <TopNav>
      <LeftWrapper>
        <Humburger
          size={30}
          color="#fff"
          toggled={showSideNavbar}
          toggle={toggleSideNavbar}
        ></Humburger>
        <Logo>Mirage Finance</Logo>
      </LeftWrapper>
      <RightWrapper>
        <SignOutIcon />
        <UserIcon />
      </RightWrapper>
    </TopNav>
  );
};

/**
 * Contains the sign out option
 */
const SignOutIcon: React.FC = () => {
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <LinkIconWrapper to="/login" onClick={handleLogout}>
      <IconWrapper>
        <LogOutSVG />
      </IconWrapper>
    </LinkIconWrapper>
  );
};

/**
 * Contains the User profile icon
 */
const UserIcon: React.FC = () => {
  return (
    <IconWrapper>
      <Icon src={DefaultUserImage} />
    </IconWrapper>
  );
};

export default TopNavComponent;

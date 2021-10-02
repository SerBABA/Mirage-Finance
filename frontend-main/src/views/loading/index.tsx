import { IconWrapper, Wrapper, Title, Icon } from "./loading.elements";

const Loading = () => {
  return (
    <Wrapper>
      <IconWrapper size={90}>
        <Icon></Icon>
      </IconWrapper>
      <Title>LOADING</Title>
    </Wrapper>
  );
};

export default Loading;

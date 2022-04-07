import { PropsWithChildren } from 'react';
import {
  SpacingWrapper,
  Wrapper,
  Image,
  Text,
  TextTitle,
  TextJob,
  TextDate,
} from './Testimonial.elements';

type TestimonialProps = {
  src: string;
  title: string;
  date?: string;
  job?: string;
};

export const Testimonial = ({
  src,
  title,
  date,
  job,
  children,
}: PropsWithChildren<TestimonialProps>) => (
  <SpacingWrapper>
    <Wrapper>
      <Image src={src} />
      <Text>
        <TextTitle>{title}</TextTitle>
        {job && <TextJob>{job}</TextJob>}
        {children}
      </Text>
      {date && <TextDate>{date}</TextDate>}
    </Wrapper>
  </SpacingWrapper>
);

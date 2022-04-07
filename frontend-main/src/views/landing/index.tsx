import {
  ContentWrapper,
  DescLink,
  DescriptionImage,
  DescriptionImageWrapper,
  DescriptionText,
  H3,
  Main,
  TestimonialsWrapper,
  Title,
  TitleScrolliconWrapper,
  TitleWrapper,
  Wrapper,
} from './landing.elements';

import { MouseIcon } from 'assets/icons/MouseIcon';
import { Footer } from 'components/Footer';

import DescriptionImageResource from 'assets/DescriptionImage.jpg';
import DefaultUserProfile from 'assets/DefaultUser.png';

import NickSadProfile from 'assets/testimonials/NickTestimonial.jpg';
import JessicaSadProfile from 'assets/testimonials/JessicaTestimonial.jpg';
import { Navbar } from 'views/landing/Navbar';
import { Testimonial } from 'components/Testimonial';

export const Landing = () => {
  const mouseIconScroll = () => {
    window.scroll({
      behavior: 'smooth',
      top: window.innerHeight,
    });
  };

  return (
    <>
      <Navbar />
      <Main>
        <TitleWrapper>
          <Title>Mirage Finance</Title>
          <TitleScrolliconWrapper onClick={mouseIconScroll}>
            <MouseIcon size={46} />
          </TitleScrolliconWrapper>
        </TitleWrapper>
        <ContentWrapper>
          <Wrapper>
            <DescriptionImageWrapper>
              <DescriptionImage src={DescriptionImageResource} />
            </DescriptionImageWrapper>
            <DescriptionText>
              <div>
                <H3>Our Service</H3>
                With our service you can always dobut if you have enough money in your bank account:
                <ul>
                  <li>Projections for spending.</li>
                  <li>Payment sorting by categories.</li>
                  <li>Easy uploading of ANZ bank statements.</li>
                  <li>And more features to come!</li>
                </ul>
              </div>
              <DescLink to="/login">Try it out</DescLink>
            </DescriptionText>
          </Wrapper>
        </ContentWrapper>
        <ContentWrapper>
          <TestimonialsWrapper>
            <Testimonial src={NickSadProfile} title="Fake Nick" job="Student" date="2020">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation"
            </Testimonial>
            <Testimonial src={DefaultUserProfile} title="Anonymous User" job="Student" date="2021">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            </Testimonial>
            <Testimonial
              src={JessicaSadProfile}
              title="Fake Jessie"
              job="Postgrad Student"
              date="2019"
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            </Testimonial>
          </TestimonialsWrapper>
        </ContentWrapper>
      </Main>
      <Footer />
    </>
  );
};

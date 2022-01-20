import * as El from "./landing.elements";
import * as Desc from "./description.elements";
import * as Tes from "./testimonials.elements";

import MouseSVG from "assets/icons/MouseSVG";
import Footer from "components/Footer";

import DescriptionImageResource from "assets/description-image.jpg";
import DefaultUserProfile from "assets/default-user.png";

import NickSadProfile from "assets/testimonials/Nick-Sad.jpg";
import JessicaSadProfile from "assets/testimonials/Jessica-Sad.jpg";
import Navbar from "views/landing/Navbar";

export const Landing = () => (
  <>
    <Navbar />
    <El.Main>
      <Title />
      <Description />
      <Testimonials />
    </El.Main>
    <Footer />
  </>
);

/**
 * Scroll down the page the distance of one screen size
 * considering the current layour it will reach the fisrt
 * content on the page.
 */
const mouseIconScroll = () => {
  window.scroll({
    behavior: "smooth",
    top: window.innerHeight,
  });
};

/**
 * Title screen with the name of the product.
 */
const Title = () => {
  return (
    <El.TitleWrapper>
      <El.Title>Mirage Finance</El.Title>
      {/* Mouse icon */}
      <El.TitleScrolliconWrapper onClick={mouseIconScroll}>
        <MouseSVG />
      </El.TitleScrolliconWrapper>
    </El.TitleWrapper>
  );
};

/**
 * The description of the product and it's wrapper.
 */
const Description = () => (
  <Desc.ContentWrapper>
    <Desc.Wrapper>
      <Desc.DescriptionImageWrapper>
        <Desc.DescriptionImage src={DescriptionImageResource} />
      </Desc.DescriptionImageWrapper>
      <Desc.DescriptionText>
        <div>
          <El.H3>Our Service</El.H3>
          With our service you can always dobut if you have enough money in your
          bank account:
          <ul>
            <li>Projections for spending.</li>
            <li>Payment sorting by categories.</li>
            <li>Easy uploading of ANZ bank statements.</li>
            <li>And more features to come!</li>
          </ul>
        </div>
        <Desc.DescLink to="/login">Try it out</Desc.DescLink>
      </Desc.DescriptionText>
    </Desc.Wrapper>
  </Desc.ContentWrapper>
);

/**
 * Contains previous "customers" review of the product haha
 */
const Testimonials = () => (
  <Tes.ContentWrapper>
    <Tes.TestimonialsWrapper>
      <Testimonial
        src={NickSadProfile}
        title="Fake Nick"
        job="Student"
        date="2020"
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation"
      </Testimonial>
      <Testimonial
        src={DefaultUserProfile}
        title="Anonymous User"
        job="Student"
        date="2021"
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      </Testimonial>
      <Testimonial
        src={JessicaSadProfile}
        title="Fake Jessie"
        job="Postgrad Student"
        date="2019"
      >
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam"
      </Testimonial>
    </Tes.TestimonialsWrapper>
  </Tes.ContentWrapper>
);

type TestimonialProps = {
  src: string;
  title: string;
  date?: string;
  job?: string;
  children?: React.ReactNode;
};

/**
 * A single testimonial consisting of an image and text.
 *
 * @param props Contains: src --> image srouce, children? --> any child elements}
 */
const Testimonial = (props: TestimonialProps) => {
  return (
    <Tes.SpacingWrapper>
      <Tes.Wrapper>
        <Tes.Image src={props.src} />
        <Tes.Text>
          <Tes.TextTitle>{props.title}</Tes.TextTitle>
          {props.job ? <Tes.TextJob>{props.job}</Tes.TextJob> : null}
          {props.children}
        </Tes.Text>
        {props.date ? <Tes.TextDate>{props.date}</Tes.TextDate> : null}
      </Tes.Wrapper>
    </Tes.SpacingWrapper>
  );
};

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

export default function Landing() {
  return (
    <>
      <Navbar />
      <El.Main>
        <Title />
        <Description />
        <Testimonials />
      </El.Main>
      <Footer></Footer>
    </>
  );
}

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
const Description = () => {
  return (
    <Desc.ContentWrapper>
      <Desc.Wrapper>
        <Desc.DescriptionImageWrapper>
          <Desc.DescriptionImage src={DescriptionImageResource} />
        </Desc.DescriptionImageWrapper>
        <Desc.DescriptionText>
          <div>
            <El.H3>Our service</El.H3>
            With our service you can always feel sad about your money spending! We include the
            following in our service:
            <ul>
              <li>Projections.</li>
              <li>Sorting payments into categories.</li>
              <li>Easy uploading of ANZ bank statements.</li>
              <li>And more features to make sad!</li>
            </ul>
          </div>
          <Desc.DescLink to="/">Try it out</Desc.DescLink>
        </Desc.DescriptionText>
      </Desc.Wrapper>
    </Desc.ContentWrapper>
  );
};

/**
 * Contains previous "customers" review of the product haha
 */
const Testimonials = () => {
  return (
    <Tes.ContentWrapper>
      <Tes.TestimonialsWrapper>
        <Testimonial src={NickSadProfile} title="Nick Sad" job="Poor Student" date="2020">
          "I was quite excited to use the app! But I had hoped that the app would be wrong and make
          me happy. But I was sorely mistaking... I am now sad."
        </Testimonial>
        <Testimonial src={DefaultUserProfile} title="Anonymous User" job="Just Poor" date="2021">
          "F*CK I'm broke!"
        </Testimonial>
        <Testimonial
          src={JessicaSadProfile}
          title="Jessie Depressy"
          job="Poor Postgrad"
          date="2019"
        >
          "Working full time and working a my thesis is quite hard! But I hoped I could at least
          breakdown my finances, and oh boy did that make me dobut everything in my life about
          money!"
        </Testimonial>
      </Tes.TestimonialsWrapper>
    </Tes.ContentWrapper>
  );
};

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
    <Tes.Wrapper>
      <Tes.Image src={props.src} />
      <Tes.Text>
        <Tes.TextTitle>{props.title}</Tes.TextTitle>
        {props.job ? <Tes.TextJob>{props.job}</Tes.TextJob> : null}
        {props.children}
      </Tes.Text>
      {props.date ? <Tes.TextDate>{props.date}</Tes.TextDate> : null}
    </Tes.Wrapper>
  );
};

import { useEffect } from "react";
import { useState } from "react";
import * as Na from "./navbar.elements";

export default function Navbar() {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleScroll = async () => {
    if (document.documentElement.scrollTop > 0) {
      setShowGoTop(true);
    } else {
      setShowGoTop(false);
    }
  };

  const scrollTop = async () => {
    window.scroll({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Na.NavbarWrapper>
        <Na.Navbar>
          <Na.Logo>Mirage Finance</Na.Logo>
          <Na.Links>
            <Na.LiLink to="/register">Register</Na.LiLink>
          </Na.Links>
        </Na.Navbar>
      </Na.NavbarWrapper>

      <Na.GoTop show={showGoTop} onClick={scrollTop}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
          />
          <path
            fillRule="evenodd"
            d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
      </Na.GoTop>
    </>
  );
}

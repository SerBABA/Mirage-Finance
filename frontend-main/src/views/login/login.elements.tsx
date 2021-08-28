import { Link } from "react-router-dom";
import styled from "styled-components";

const BarThinkness: number = 8;

export const Bar = styled.div`
  height: ${BarThinkness}vh;
  width: 100%;
  background-color: #141b1f;
`;

export const PageWrapper = styled.main`
  background-color: #dfdfdf;
  height: 100%;
  width: 100%;
  min-width: 100vw;
  min-height: ${100 - 2 * BarThinkness}vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginWrapper = styled.div`
  background-color: white;
  width: max(250px, 30%);
  margin-top: 3rem;
  max-width: 300px;
`;

export const Title = styled.h1`
  text-align: center;
  width: 100%;
  margin: 0 auto;

  color: #141b1f;
  font-size: 2.5rem;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

export const FormWrapper = styled.div`
  padding: 1.5em 1.25em;
  box-shadow: 0.35rem 0.55rem 0.75rem #00000015;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  font-family: "Lucida Sans Unicode", sans-serif;
  font-weight: 500;
  margin-bottom: 0.2em;
  letter-spacing: 0.05em;
  color: #141b1f60;
`;

export const PasswordWrap = styled.div`
  display: grid;
`;

export const ShowPassword = styled.div`
  width: 25%;
  font-size: 0.75rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding: 0.6em 0;
  margin-left: auto;
  margin-bottom: auto;

  grid-area: 1 / 1;
  z-index: 1;

  transition: color ease-in-out 150ms;
  &:hover {
    color: #141b1f50;
  }
`;

export const Submit = styled.button`
  background-color: #141b1f;
  color: white;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  padding: 0.75em 1em;
  margin-top: 2em;
  width: 100%;

  outline: none;
  border: 1px solid #141b1f;

  transition: all 150ms ease-in-out;

  &:hover,
  &:focus {
    background-color: white;
    color: #141b1f;
  }
`;

export const RegisterWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0;
  margin: 1.5em 0 auto;
`;

export const Register = styled(Link)`
  text-decoration: none;
  color: #141b1f;
  border-bottom: 1px transparent solid;

  transition: all 150ms ease-in-out;

  &:hover {
    border-bottom: 1px #141b1f solid;
  }
`;

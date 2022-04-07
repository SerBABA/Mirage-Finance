import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

type InputErrorProps = { show: boolean };

export const InputError = styled.div<InputErrorProps>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  font-size: 0.7em;
  color: red;
`;

type InputProps = { error?: boolean };

export const Input = styled.input<InputProps>`
  font-size: 1rem;
  outline: none;
  border: none;
  border-bottom: 1px solid ${(props) => (props.error ? 'red' : '#141b1f60')};
  transition: border-bottom ease-in-out 250ms;
  padding: 0.3em 0.1em;
  margin-top: 0.2em;

  &:focus {
    border-bottom: 1px solid ${(props) => (props.error ? 'red' : '#141b1f60')};
  }
`;

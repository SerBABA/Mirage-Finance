import { useState } from 'react';
import { InputField } from '../InputField';

import { Wrapper, ShowPassword, InputWrapper } from './PasswordField.elements';

type PasswordFieldProps = {
  name: string;
};

export const PasswordField = ({ name }: PasswordFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <Wrapper>
      <InputWrapper>
        <InputField
          style={{ paddingRight: '25%' }}
          type={show ? 'input' : 'password'}
          placeholder={show ? 'password' : '••••••••'}
          name={name}
        />
      </InputWrapper>
      <ShowPassword onClick={() => setShow(!show)}>{show ? 'HIDE' : 'SHOW'}</ShowPassword>
    </Wrapper>
  );
};

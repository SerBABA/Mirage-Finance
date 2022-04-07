import { Formik, Form } from 'formik';
import {
  PageWrapper,
  Title,
  ContentWrapper,
  Label,
  InputWrap,
  FormWrapper,
  Submit,
  RegisterLink,
  RegisterWrap,
} from './register.elements';
import { InputField } from 'components/forms/InputField';
import { useState } from 'react';
import { useRegisterMutation } from 'generated/graphql';
import { FormError } from 'components/forms/FormError';
import { useNavigate } from 'react-router-dom';
import { PasswordField } from 'components/forms/PasswordField';

type RegisterSchemaProps = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

const validateRegisterFields = (values: RegisterSchemaProps) => {
  const errors: Record<string, string> = {};

  if (values.username.length <= 0) errors.username = 'Required field';
  if (values.firstName.length <= 0) errors.firstName = 'Required field';
  if (values.lastName.length <= 0) errors.lastName = 'Required field';
  if (values.password.length <= 0) errors.password = 'Required field';
  if (values.confirmPassword !== values.password) errors.confirmPassword = 'Password must match';
  if (values.confirmPassword.length <= 0) errors.confirmPassword = 'Required field';

  return errors;
};

export const Register = () => {
  const [register] = useRegisterMutation();
  const [formError, setFromError] = useState('');
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Title>Mirage Finance</Title>
      <ContentWrapper>
        <Formik<RegisterSchemaProps>
          initialValues={{
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
          }}
          validate={validateRegisterFields}
          onSubmit={async (data, { setSubmitting }) => {
            setSubmitting(true);

            await register({
              variables: {
                username: data.username,
                fname: data.firstName,
                lname: data.lastName,
                password: data.password,
              },
            })
              .then(() => {
                navigate('/login');
              })
              .catch((err) => {
                setFromError(err.message);
              });

            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <FormWrapper>
              <Form>
                <InputWrap>
                  <Label>USERNAME</Label>
                  <InputField type="input" placeholder="user@example.com" name="username" />
                </InputWrap>
                <InputWrap>
                  <Label>FIRST NAME</Label>
                  <InputField type="input" placeholder="james" name="firstName" />
                </InputWrap>
                <InputWrap>
                  <Label>LAST NAME</Label>
                  <InputField type="input" placeholder="doe" name="lastName" />
                </InputWrap>
                <InputWrap>
                  <Label>PASSWORD</Label>
                  <PasswordField name="password" />
                </InputWrap>
                <InputWrap>
                  <Label>CONFIRM PASSWORD</Label>
                  <PasswordField name="confirmPassword" />
                </InputWrap>
                <FormError>{formError}</FormError>
                <Submit type="submit" disabled={isSubmitting}>
                  REGISTER
                </Submit>
                <RegisterWrap>
                  <RegisterLink to="/login">Have an account?</RegisterLink>
                  <RegisterLink to="/">Cancel</RegisterLink>
                </RegisterWrap>
              </Form>
            </FormWrapper>
          )}
        </Formik>
      </ContentWrapper>
    </PageWrapper>
  );
};

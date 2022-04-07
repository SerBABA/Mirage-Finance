import { Formik, Form, FormikHelpers } from 'formik';
import {
  PageWrapper,
  Title,
  ContentWrapper,
  Label,
  InputWrapper,
  FormWrapper,
  Submit,
  OtherLink,
  LinksWrapper,
} from './login.elements';
import { FormError } from 'components/forms/FormError';
import { PasswordField } from 'components/forms/PasswordField';
import { InputField } from 'components/forms/InputField';
import { useState } from 'react';
import { LoginMutationVariables, useLoginMutation } from 'generated/graphql';
import { ApolloError } from 'apollo-client';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [formError, setFromError] = useState('');
  const [mutateLogin] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (
    data: LoginMutationVariables,
    { setSubmitting }: FormikHelpers<LoginMutationVariables>
  ) => {
    setSubmitting(true);

    await mutateLogin({
      variables: {
        username: data.username,
        password: data.password,
      },
    })
      .then((res) => {
        if (res.data && res.data.login.ok) {
          Cookies.set(process.env.REACT_APP_ACCESS_TOKEN_NAME!, res.data.login.accessToken);
          navigate('/dashboard');
        }
      })
      .catch((err: ApolloError) => {
        setFromError(err.networkError ? 'Timed out.' : err.message);
      });

    setSubmitting(false);
  };

  return (
    <PageWrapper>
      <Title>Mirage Finance</Title>
      <ContentWrapper>
        <Formik
          initialValues={{ username: '', password: '' }}
          validate={(values) => {
            const errors: Record<string, string> = {};
            if (values.username.length <= 0) errors.username = 'Required field';
            if (values.password.length <= 0) errors.password = 'Required field';
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <FormWrapper>
              <Form>
                <InputWrapper>
                  <Label>USERNAME</Label>
                  <InputField type="input" placeholder="user@example.com" name="username" />
                </InputWrapper>
                <InputWrapper>
                  <Label>PASSWORD</Label>
                  <PasswordField name="password" />
                </InputWrapper>
                <FormError>{formError}</FormError>
                <Submit type="submit" disabled={isSubmitting}>
                  LOGIN
                </Submit>
                <LinksWrapper>
                  <OtherLink to="/register">Create Account</OtherLink>
                  <OtherLink to="/">Cancel</OtherLink>
                </LinksWrapper>
              </Form>
            </FormWrapper>
          )}
        </Formik>
      </ContentWrapper>
    </PageWrapper>
  );
};

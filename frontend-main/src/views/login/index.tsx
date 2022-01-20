import { Formik, Form, FormikHelpers } from "formik";
import {
  PageWrapper,
  Title,
  LoginWrapper,
  Label,
  InputWrap,
  FormWrapper,
  Submit,
  ShowPassword,
  PasswordWrap,
  OtherLink,
  LinksWrapper,
} from "./login.elements";
import { FormError } from "components/Forms/forms.elements";
import { MyField } from "components/Forms";
import { useState } from "react";
import { LoginMutationVariables, useLoginMutation } from "generated/graphql";
import { ApolloError } from "apollo-client";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <PageWrapper>
        <Title>Mirage Finance</Title>
        <LoginWrapper>
          <LoginForm />
        </LoginWrapper>
      </PageWrapper>
    </>
  );
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFromError] = useState("");
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const doLogin = async (
    data: LoginMutationVariables,
    { setSubmitting }: FormikHelpers<LoginMutationVariables>
  ) => {
    setSubmitting(true);

    await login({
      variables: {
        username: data.username,
        password: data.password,
      },
    })
      .then((res) => {
        if (res.data && res.data.login.ok) {
          Cookies.set(
            process.env.REACT_APP_ACCESS_TOKEN_NAME!,
            res.data.login.accessToken
          );
          navigate("/dashboard");
        }
      })
      .catch((err: ApolloError) => {
        setFromError(err.networkError ? "Timed out." : err.message);
      });

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={(values) => {
        const errors: Record<string, string> = {};

        if (values.username.length <= 0) errors.username = "Required field";
        if (values.password.length <= 0) errors.password = "Required field";

        return errors;
      }}
      onSubmit={doLogin}
    >
      {({ isSubmitting }) => (
        <FormWrapper>
          <Form>
            <InputWrap>
              <Label>USERNAME</Label>
              <MyField
                type="input"
                placeholder="user@example.com"
                name="username"
              />
            </InputWrap>

            <InputWrap>
              <Label>PASSWORD</Label>
              <PasswordWrap>
                <div style={{ gridArea: "1 / 1" }}>
                  <MyField
                    style={{ paddingRight: "25%" }}
                    type={showPassword ? "input" : "password"}
                    placeholder={showPassword ? "password" : "••••••••"}
                    name="password"
                  />
                </div>
                <ShowPassword onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "HIDE" : "SHOW"}
                </ShowPassword>
              </PasswordWrap>
            </InputWrap>

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
  );
};

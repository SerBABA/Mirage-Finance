import { Formik, Form } from "formik";
import {
  Bar,
  PageWrapper,
  Title,
  LoginWrapper,
  Label,
  InputWrap,
  FormWrapper,
  Submit,
  ShowPassword,
  PasswordWrap,
  Register,
  RegisterWrap,
} from "./login.elements";
import GraphqlExample from "components/graphqlexample";
import { MyField } from "components/Forms";
import { useState } from "react";

export default function Login() {
  return (
    <>
      <Bar />
      <PageWrapper>
        <Title>Mirage Finance</Title>
        <GraphqlExample />
        <LoginWrapper>
          <LoginForm />
        </LoginWrapper>
      </PageWrapper>
      <Bar />
    </>
  );
}

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={(values) => {
        const errors: Record<string, string> = {};

        if (values.username.length <= 0) errors.username = "Required field";
        if (values.password.length <= 0) errors.password = "Required field";

        return errors;
      }}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
        console.log("submit: ", data);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <FormWrapper>
          <Form>
            <InputWrap>
              <Label>USERNAME</Label>
              <MyField type="input" placeholder="user@example.com" name="username" />
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

            <Submit type="submit" disabled={isSubmitting}>
              LOGIN
            </Submit>
            <RegisterWrap>
              <Register to="/register">Create Account</Register>
            </RegisterWrap>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

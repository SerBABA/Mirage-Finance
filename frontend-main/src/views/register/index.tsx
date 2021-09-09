import { Formik, Form } from "formik";
import {
  Bar,
  PageWrapper,
  Title,
  RegisterWrapper,
  Label,
  InputWrap,
  FormWrapper,
  Submit,
  ShowPassword,
  PasswordWrap,
  Register,
  RegisterWrap,
} from "./register.elements";
import { MyField } from "components/Forms";
import { useState } from "react";

export default function Login() {
  return (
    <>
      <Bar />
      <PageWrapper>
        <Title>Mirage Finance</Title>
        <RegisterWrapper>
          <RegisterForm />
        </RegisterWrapper>
      </PageWrapper>
      <Bar />
    </>
  );
}

const RegisterForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      }}
      validate={(values) => {
        const errors: Record<string, string> = {};

        if (values.username.length <= 0) errors.username = "Required field";
        if (values.firstName.length <= 0) errors.firstName = "Required field";
        if (values.lastName.length <= 0) errors.lastName = "Required field";
        if (values.password.length <= 0) errors.password = "Required field";
        if (values.confirmPassword.length <= 0) errors.confirmPassword = "Required field";

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
              <Label>FIRST NAME</Label>
              <MyField type="input" placeholder="james" name="firstName" />
            </InputWrap>

            <InputWrap>
              <Label>LAST NAME</Label>
              <MyField type="input" placeholder="doe" name="lastName" />
            </InputWrap>

            <InputWrap>
              <Label>PASSWORD</Label>
              <PasswordField name="password" />
            </InputWrap>

            <InputWrap>
              <Label>CONFIRM PASSWORD</Label>
              <PasswordField name="confirmPassword" />
            </InputWrap>

            <Submit type="submit" disabled={isSubmitting}>
              REGISTER
            </Submit>
            <RegisterWrap>
              <Register to="/login">Have an account?</Register>
            </RegisterWrap>
          </Form>
        </FormWrapper>
      )}
    </Formik>
  );
};

interface PasswordFieldProps {
  name: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ name }) => {
  const [show, setShow] = useState(false);

  return (
    <PasswordWrap>
      <div style={{ gridArea: "1 / 1" }}>
        <MyField
          style={{ paddingRight: "25%" }}
          type={show ? "input" : "password"}
          placeholder={show ? "password" : "••••••••"}
          name={name}
        />
      </div>
      <ShowPassword onClick={() => setShow(!show)}>{show ? "HIDE" : "SHOW"}</ShowPassword>
    </PasswordWrap>
  );
};

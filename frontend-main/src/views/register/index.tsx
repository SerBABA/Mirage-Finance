import { Formik, Form } from "formik";
import {
  PageWrapper,
  Title,
  RegisterWrapper,
  Label,
  InputWrap,
  FormWrapper,
  Submit,
  ShowPassword,
  PasswordWrap,
  RegisterLink,
  RegisterWrap,
} from "./register.elements";
import { MyField } from "components/Forms";
import React, { useState } from "react";
import { useRegisterMutation } from "generated/graphql";
import { FormError } from "components/Forms/forms.elements";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <PageWrapper>
        <Title>Mirage Finance</Title>
        <RegisterWrapper>
          <RegisterForm />
        </RegisterWrapper>
      </PageWrapper>
    </>
  );
};

const validateRegisterFields = (values: {
  username: string | any[];
  firstName: string | any[];
  lastName: string | any[];
  password: string | any[];
  confirmPassword: string | any[];
}) => {
  const errors: Record<string, string> = {};

  if (values.username.length <= 0) errors.username = "Required field";
  if (values.firstName.length <= 0) errors.firstName = "Required field";
  if (values.lastName.length <= 0) errors.lastName = "Required field";
  if (values.password.length <= 0) errors.password = "Required field";
  if (values.confirmPassword !== values.password)
    errors.confirmPassword = "Password must match";
  if (values.confirmPassword.length <= 0)
    errors.confirmPassword = "Required field";

  return errors;
};

const RegisterForm = () => {
  const [register] = useRegisterMutation();
  const [formError, setFromError] = useState("");
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
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
            navigate("/login");
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
              <MyField
                type="input"
                placeholder="user@example.com"
                name="username"
              />
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
      <ShowPassword onClick={() => setShow(!show)}>
        {show ? "HIDE" : "SHOW"}
      </ShowPassword>
    </PasswordWrap>
  );
};

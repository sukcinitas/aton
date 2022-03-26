import React from "react";
import { Link } from "react-router-dom";

import {
  Input,
  Label,
  LabelInputWrapper,
  Form,
  FormWrapper,
} from "../shared/Forms";
import { Heading } from "../shared/Headings";
import { FormButton } from "../shared/Buttons";
import { FormDetail } from "../shared/Details";

function LoginForm() {
  return (
    <FormWrapper>
      <Form>
        <Heading>Login</Heading>

        <LabelInputWrapper>
          <Label>Username</Label>
          <Input type="text"></Input>
        </LabelInputWrapper>

        <LabelInputWrapper>
          <Label>Password</Label>
          <Input type="password"></Input>
        </LabelInputWrapper>

        <FormDetail>
          Do not have an account? <Link to="/register">Register</Link>
        </FormDetail>

        <FormButton>Login</FormButton>
      </Form>
    </FormWrapper>
  );
}

export default LoginForm;

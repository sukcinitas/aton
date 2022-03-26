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

function RegisterForm() {
  return (
    <FormWrapper>
      <Form>
        <Heading>Register</Heading>

        <LabelInputWrapper>
          <Label>Username</Label>
          <Input type="text"></Input>
        </LabelInputWrapper>

        <LabelInputWrapper>
          <Label>Email</Label>
          <Input type="email"></Input>
        </LabelInputWrapper>

        <LabelInputWrapper>
          <Label>Password</Label>
          <Input type="password"></Input>
        </LabelInputWrapper>

        <FormDetail>
          Already have an account? <Link to="/login">Login</Link>
        </FormDetail>

        <FormButton>Register</FormButton>
      </Form>
    </FormWrapper>
  );
}

export default RegisterForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
import { BaseMessage } from "../shared/Message";

function LoginForm({ addGeneralInfo }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    error: "",
    baseError: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("You have successfully logged in!");

    axios.post(`/api/login?username=${username}&password=${password}`).then(
      ({ data: { token, user, schedule } }) => {
        setMessage("You have successfully logged in!");
        setTimeout(() => addGeneralInfo({ token, user, schedule }), 1000);
      },
      (err) => {
        if (!err.response || err.response?.status === 500) {
          setErrors({
            ...errors,
            baseError: "Something went wrong! Try again later.",
          });
        } else {
          setErrors({ ...errors, error: err?.response?.data });
        }
      }
    );
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Heading>Login</Heading>

        <LabelInputWrapper>
          <Label>Username</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
        </LabelInputWrapper>

        <LabelInputWrapper>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </LabelInputWrapper>

        <FormDetail>
          Do not have an account? <Link to="/register">Register</Link>
        </FormDetail>

        <FormButton type="submit" disabled={!username || !password}>
          Login
        </FormButton>

        {errors.baseError && (
          <BaseMessage error>{errors.baseError}</BaseMessage>
        )}

        {message && <BaseMessage>{message}</BaseMessage>}
      </Form>
    </FormWrapper>
  );
}

export default LoginForm;

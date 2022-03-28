import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Input,
  Textarea,
  Label,
  LabelInputWrapper,
  Form,
  FormWrapper,
} from "../shared/Forms";
import { Heading } from "../shared/Headings";
import { FormButton } from "../shared/Buttons";
import { FormDetail } from "../shared/Details";
import { BaseMessage } from "../shared/Message";

function RegisterForm() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    error: "",
    baseError: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `/api/create_user?username=${username}&password=${password}&profile=${description}`
      )
      .then(
        (res) => {
          setMessage("You have successfully registered!");
          setTimeout(() => navigate("/login"), 500);
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
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Heading>Register</Heading>

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

        <LabelInputWrapper>
          <Label>Description</Label>
          <Textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Textarea>
        </LabelInputWrapper>

        <FormDetail>
          Already have an account? <Link to="/login">Login</Link>
        </FormDetail>

        <FormButton
          type="submit"
          disabled={!username || !password || !description}
        >
          Register
        </FormButton>

        {errors.baseError && (
          <BaseMessage error>{errors.baseError}</BaseMessage>
        )}

        {message && <BaseMessage>{message}</BaseMessage>}
      </Form>
    </FormWrapper>
  );
}

export default RegisterForm;

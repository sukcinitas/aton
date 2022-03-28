import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../App";
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
import { BaseMessage } from "../shared/Message";

function CreateGroupForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    error: "",
    baseError: "",
  });
  const { token } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `api/create_group?token=${token}&group_name=${name}&description=${description}`
      )
      .then(
        () => {
          setMessage("Group has been successfully created!");
          setTimeout(() => navigate("group"), 1000);
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
        <Heading>Create group</Heading>

        <LabelInputWrapper>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

        <FormButton type="submit" disabled={!name || !description}>
          Create group
        </FormButton>

        {errors.baseError && (
          <BaseMessage error>{errors.baseError}</BaseMessage>
        )}

        {message && <BaseMessage>{message}</BaseMessage>}
      </Form>
    </FormWrapper>
  );
}

export default CreateGroupForm;

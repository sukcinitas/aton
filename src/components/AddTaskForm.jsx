import React from "react";
import styled from "styled-components";

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
import AssignDayCardsBox from "./AssignDayCardsBox";

const StyledFormWrapper = styled(FormWrapper)`
  flex-direction: column;
`;

const StyledAddTaskForm = styled(Form)`
  box-shadow: none;
  border-radius: 0;
  background-color: transparent;
  width: 100%;
  justify-items: space-between;
  max-width: 400px;
  row-gap: 60px;
`;

const AddTaskFormButton = styled(FormButton)`
  position: absolute;
  bottom: -10px;
  right: 10px;
  top: auto;
`;

function AddTaskForm() {
  return (
    <StyledFormWrapper>
      <Heading>Add Task</Heading>
      <StyledAddTaskForm>
        <div>
          <LabelInputWrapper>
            <Label>Description</Label>
            <Textarea type="text"></Textarea>
          </LabelInputWrapper>

          <LabelInputWrapper>
            <Label>Number of days to schedule ahead</Label>
            <Input type="number" min="1" max="7"></Input>
          </LabelInputWrapper>
        </div>

        <AssignDayCardsBox />

        <AddTaskFormButton>AddTask</AddTaskFormButton>
      </StyledAddTaskForm>
    </StyledFormWrapper>
  );
}

export default AddTaskForm;

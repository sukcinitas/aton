import React from "react";
import styled from "styled-components";

import PageWrapper from "../shared/PageWrapper";
import AddTaskForm from "../components/AddTaskForm";

const AddTaskPageWrapper = styled(PageWrapper)`
  align-items: stretch;
`;

function AddTaskPage() {
  return (
    <AddTaskPageWrapper>
      <AddTaskForm />
    </AddTaskPageWrapper>
  );
}

export default AddTaskPage;

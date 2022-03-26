import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import PageWrapper from "../shared/PageWrapper";
import { Heading, Subheading } from "../shared/Headings";
import UserCardsBox from "../components/UserCardsBox";
import { Button, InverseButton, ButtonsWrapper } from "../shared/Buttons";
import WeekBox from "../components/WeekBox";

const Wrapper = styled(ButtonsWrapper)`
  align-items: flex-start;
`;

function GroupPage() {
  let navigate = useNavigate();

  return (
    <PageWrapper>
      <Wrapper>
        <Heading>Groupname</Heading>
        <Button onClick={() => navigate("/add-task")}>Add task</Button>
        <InverseButton onClick={() => navigate("/users")}>
          Invite user
        </InverseButton>
      </Wrapper>

      <Subheading>Members</Subheading>
      <UserCardsBox type="small" />

      <Subheading>Tasks</Subheading>
      <WeekBox />
      <WeekBox />
    </PageWrapper>
  );
}

export default GroupPage;

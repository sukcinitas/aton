import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../App";
import PageWrapper from "../shared/PageWrapper";
import { Heading } from "../shared/Headings";
import GroupsList from "../components/GroupsList";
import { Button, ButtonsWrapper } from "../shared/Buttons";

const Wrapper = styled(ButtonsWrapper)`
  align-items: flex-start;
`;

function GroupsPage() {
  let navigate = useNavigate();
  const {
    user: { has_joined },
  } = useContext(UserContext);

  return (
    <PageWrapper>
      <Wrapper>
        <Heading>Groups</Heading>
        {!has_joined && (
          <Button onClick={() => navigate("/create-group")}>
            Create group
          </Button>
        )}
      </Wrapper>

      <GroupsList />
    </PageWrapper>
  );
}

export default GroupsPage;

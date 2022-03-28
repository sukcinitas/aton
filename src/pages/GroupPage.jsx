import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import { UserContext } from "../App";
import PageWrapper from "../shared/PageWrapper";
import { Heading, Subheading } from "../shared/Headings";
import UserCardsBox from "../components/UserCardsBox";
import { Button, InverseButton, ButtonsWrapper } from "../shared/Buttons";
import WeekBox from "../components/WeekBox";

const Wrapper = styled(ButtonsWrapper)`
  align-items: flex-start;
`;

function GroupPage() {
  const [group, setGroup] = useState({});
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const {
    token,
    user: { group_id },
  } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`api/show_group?token=${token}&group_id=${group_id}`)
      .then(({ data: { group, users, tasks } }) => {
        setGroup(group);
        setUsers(users);
        setTasks(tasks);
      });
  });

  return (
    <PageWrapper>
      <Wrapper>
        <Heading>{group.name}</Heading>
        <Button onClick={() => navigate("/add-task")}>Add task</Button>
        <InverseButton onClick={() => navigate("/users")}>
          Invite user
        </InverseButton>
      </Wrapper>

      <Subheading>Members</Subheading>
      <UserCardsBox type="small" user={users} />

      <Subheading>Tasks</Subheading>
      <WeekBox />
      <WeekBox />
    </PageWrapper>
  );
}

export default GroupPage;

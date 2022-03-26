import React from "react";
import styled from "styled-components";

import { SmallBox, Box } from "../shared/Box";
import { Button } from "../shared/Buttons";
import { DayDetail } from "../shared/Details";
import { ButtonsWrapper } from "../shared/Buttons";

const AssignDayCardSmallBox = styled(SmallBox)`
  padding-top: 60px;
`;

function AssignDayCard({ primary, backup }) {
  return (
    <AssignDayCardSmallBox>
      <DayDetail>Monday</DayDetail>
      <ButtonsWrapper>
        <Button>Assign primary</Button>
        <Button>Assign backup</Button>
      </ButtonsWrapper>
    </AssignDayCardSmallBox>
  );
}

function AssignDayCardsBox() {
  return (
    <Box>
      <AssignDayCard />
      <AssignDayCard />
      <AssignDayCard />
      <AssignDayCard />
      <AssignDayCard />
      <AssignDayCard />
      <AssignDayCard />
    </Box>
  );
}

export default AssignDayCardsBox;

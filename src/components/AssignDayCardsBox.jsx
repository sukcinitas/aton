import React from "react";
import styled from "styled-components";

import { SmallBox, HorizontalBox } from "../shared/Box";
import { Button } from "../shared/Buttons";
import { DayDetail } from "../shared/Details";
import { ButtonsWrapper } from "../shared/Buttons";

const AssignDayCardSmallBox = styled(SmallBox)`
  padding: 0;
  padding-top: 30px;
`;

const AssignDayButtonsWrapper = styled(ButtonsWrapper)`
  flex-direction: row;
  column-gap: 1px;
  row-gap: 1px;

  & ${Button} {
    border-radius: 0;
  }
`;

const AssignDayHorizontalBox = styled(HorizontalBox)`
  flex-direction: column;
  flex-wrap: none;
`;

function AssignDayCard({ primary, backup }) {
  return (
    <AssignDayCardSmallBox>
      <DayDetail>Monday</DayDetail>
      <AssignDayButtonsWrapper>
        <Button>Assign primary</Button>
        <Button>Assign backup</Button>
      </AssignDayButtonsWrapper>
    </AssignDayCardSmallBox>
  );
}

function AssignDayCardsBox() {
  return (
    <AssignDayHorizontalBox>
      <AssignDayCard />
      <AssignDayCard />
      <AssignDayCard />
      <AssignDayCard />
      <AssignDayCard />
      <AssignDayCard />
      <AssignDayCard />
    </AssignDayHorizontalBox>
  );
}

export default AssignDayCardsBox;

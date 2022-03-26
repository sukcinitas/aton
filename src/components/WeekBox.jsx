import React from "react";
import styled from "styled-components";

import { SmallBox, HorizontalBox } from "../shared/Box";
import { ApprovedTag, PendingTag } from "../shared/Tag";
import { ButtonsWrapper } from "../shared/Buttons";
import { SmallHeading } from "../shared/Headings";
import { DateDetail } from "../shared/Details";
import {
  StyledCancelIcon,
  StyledCheckCircleIcon,
} from "../shared/MaterialIcons";

const Buttons = styled(ButtonsWrapper)`
  position: absolute;
  right: 10px;
  top: -10px;
`;

function DayCard({ approved }) {
  return (
    <SmallBox>
      {approved ? (
        <ApprovedTag>approved</ApprovedTag>
      ) : (
        <PendingTag>pending</PendingTag>
      )}
      <DateDetail>1 July</DateDetail>
      <SmallHeading>John</SmallHeading>
      {!approved && (
        <Buttons>
          <StyledCheckCircleIcon />
          <StyledCancelIcon />
        </Buttons>
      )}
    </SmallBox>
  );
}

function WeekBox() {
  return (
    <HorizontalBox>
      <DayCard approved />
      <DayCard approved />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
    </HorizontalBox>
  );
}

export default WeekBox;

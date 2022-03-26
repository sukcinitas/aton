import React from "react";
import styled from "styled-components";

import { SmallBox, HorizontalBox } from "../shared/Box";
import { ApprovedTag, PendingTag } from "../shared/Tag";
import { ButtonsWrapper } from "../shared/Buttons";
import { SmallHeading, ItemHeading } from "../shared/Headings";
import { DateDetail } from "../shared/Details";
import {
  StyledCancelIcon,
  StyledCheckCircleIcon,
} from "../shared/MaterialIcons";

const WeekHorizontalBox = styled(HorizontalBox)`
  column-gap: 0px;
  row: gap: 0px;
  align-items: stretch;
  justify-content: flex-start;

  & ${SmallBox} {
    box-shadow: none;
    padding: 30px 20px 20px;
    min-width: 140px;
    flex: 0 0 140px;
  }

  & ${SmallBox}:not(:last-child) {
    border-right: none;
  }

  & ${ItemHeading} {
    margin-right: auto;
  }
`;

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
    <WeekHorizontalBox>
      <ItemHeading>A task I</ItemHeading>
      <DayCard approved />
      <DayCard approved />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
      <DayCard />
    </WeekHorizontalBox>
  );
}

export default WeekBox;

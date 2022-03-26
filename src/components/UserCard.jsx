import React from "react";
import styled, { css } from "styled-components";

import { ItemHeading } from "../shared/Headings";
import { InverseButton } from "../shared/Buttons";
import { Text } from "../shared/Text";
import { Box } from "../shared/Box";
import { RoundImage, RoundImageWrapper } from "../shared/Image";
import { HorizontalDirWrapper } from "../shared/Wrapper";
import { StyledPersonRemoveIcon } from "../shared/MaterialIcons";

const UserCardInverseButton = styled(InverseButton)`
  position: absolute;
  bottom: -10px;
  right: 10px;
`;

const UserCardBox = styled(Box)`
  box-shadow: none;
  border-radius: 0;
  padding: 30px;
  flex: 0 1 240px;
  min-width: 240px;

  ${(props) =>
    props.clickable &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}

  ${(props) =>
    props.small &&
    css`
      align-self: flex-start;
      min-width: 100px;
      flex: 0 1 100px;
      padding: 10px;

      & ${Text}, & ${RoundImageWrapper}, ${StyledPersonRemoveIcon} {
        display: none;
      }

      &:hover {
        min-width: 240px;
        flex: 0 1 240px;
        & ${Text}, & ${RoundImageWrapper}, ${StyledPersonRemoveIcon} {
          display: initial;
        }
      }
    `}
`;

function UserCard({ type }) {
  return (
    <UserCardBox clickable={type === "select"} small={type === "small"}>
      <HorizontalDirWrapper>
        <RoundImageWrapper>
          <RoundImage />
        </RoundImageWrapper>
        <ItemHeading>User</ItemHeading>
        {type === "small" && <StyledPersonRemoveIcon />}
      </HorizontalDirWrapper>

      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui labore
        quod optio, ad odio tenetur ab, provident amet, quia distinctio
        delectus! Minus ex ducimus placeat repellendus error! Sunt, excepturi
        eum.
      </Text>

      {type === "invite" && (
        <UserCardInverseButton>Invite</UserCardInverseButton>
      )}
    </UserCardBox>
  );
}

export default UserCard;

import React from "react";

import { HorizontalBox } from "../shared/Box";
import UserCard from "./UserCard";

function UserCardsBox({ type }) {
  return (
    <HorizontalBox>
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
      <UserCard type={type} />
    </HorizontalBox>
  );
}

export default UserCardsBox;

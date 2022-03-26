import React from "react";

import PageWrapper from "../shared/PageWrapper";
import { Heading } from "../shared/Headings";
import UserCardsBox from "../components/UserCardsBox";

function UsersPage() {
  return (
    <PageWrapper>
      <Heading>Users</Heading>
      <UserCardsBox type="invite" />
    </PageWrapper>
  );
}

export default UsersPage;

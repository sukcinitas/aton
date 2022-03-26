import React from "react";

import PageWrapper from "../shared/PageWrapper";
import { Heading } from "../shared/Headings";
import GroupsList from "../components/GroupsList";

function GroupsPage() {
  return (
    <PageWrapper>
      <Heading>Groups</Heading>
      <GroupsList />
    </PageWrapper>
  );
}

export default GroupsPage;

import React from "react";

import { PageWrapperSingleElement } from "../shared/PageWrapper";
import CreateGroupForm from "../components/CreateGroupForm";

function CreateGroupPage() {
  return (
    <PageWrapperSingleElement>
      <CreateGroupForm />
    </PageWrapperSingleElement>
  );
}

export default CreateGroupPage;

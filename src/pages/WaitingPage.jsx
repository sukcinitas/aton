import React from "react";

import { PageWrapperSingleElement } from "../shared/PageWrapper";
import WaitingBox from "../components/WaitingBox";

function WaitingPage() {
  return (
    <PageWrapperSingleElement>
      <WaitingBox />
    </PageWrapperSingleElement>
  );
}

export default WaitingPage;

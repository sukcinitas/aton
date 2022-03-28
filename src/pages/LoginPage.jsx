import React from "react";

import { PageWrapperSingleElement } from "../shared/PageWrapper";
import LoginForm from "../components/LoginForm";

function LoginPage({ addGeneralInfo }) {
  return (
    <PageWrapperSingleElement>
      <LoginForm addGeneralInfo={addGeneralInfo} />
    </PageWrapperSingleElement>
  );
}

export default LoginPage;

import React from "react";

import { PageWrapperSingleElement } from "../shared/PageWrapper";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <PageWrapperSingleElement>
      <LoginForm />
    </PageWrapperSingleElement>
  );
}

export default LoginPage;

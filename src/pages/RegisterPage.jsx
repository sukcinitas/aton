import React from "react";

import { PageWrapperSingleElement } from "../shared/PageWrapper";
import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  return (
    <PageWrapperSingleElement>
      <RegisterForm />
    </PageWrapperSingleElement>
  );
}

export default RegisterPage;

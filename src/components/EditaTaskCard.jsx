import React from "react";

import { SmallBox } from "../shared/Box";
import { InverseButton, ButtonsWrapper } from "../shared/Buttons";

function EditTaskCard() {
  return (
    <SmallBox>
      <ButtonsWrapper>
        <InverseButton>Assign primary</InverseButton>
        <InverseButton>Assign backup</InverseButton>
      </ButtonsWrapper>
    </SmallBox>
  );
}

export default EditTaskCard;

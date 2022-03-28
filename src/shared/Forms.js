import styled from "styled-components";

import { Box } from "./Box";

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 2px solid var(--laurel-green);
  border-radius: 3px;
  font-family: "Montserrat", serif;
  font-size: 12px;
  font-family: var(--text-font);
  color: var(--xiketic);

  &:hover {
    border: 2px solid var(--english-violet);
  }
`;

export const Textarea = styled(Input).attrs({
  as: "textarea",
})``;

export const Label = styled.label`
  color: var(--xiketic);
  margin: 8px 0;
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  letter-spacing: 1px;
  font-family: var(--title-font);
`;

export const LabelInputWrapper = styled.div``;

export const Form = styled(Box).attrs({
  as: "form",
})`
  max-width: 340px;
  padding: 60px;
  margin: 50px auto;
`;

export const FormWrapper = styled.div`
  margin: 20px;
  display: flex;
`;

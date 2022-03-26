import styled from "styled-components";

export const Button = styled.button`
  padding: 10px;
  border: 2px solid var(--xiketic);
  font-size: 14px;
  background-color: var(--xiketic);
  color: var(--white);
  border-radius: 3px;
  font-family: var(--title-2-font);
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    cursor: pointer;
  }
`;

export const InverseButton = styled(Button)`
  background-color: var(--white);
  color: var(--xiketic);
`;

export const FormButton = styled(Button)`
  position: relative;
  top: 70px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  justify-content: center;

  & ${Button} {
    flex-grow: 1;
    padding: 7px;
  }
`;

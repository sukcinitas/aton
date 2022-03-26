import styled, { css } from "styled-components";

import { Button } from "./Buttons";
import { ItemHeading } from "./Headings";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  column-gap: 20px;
  padding: 40px;
  border: 1px solid var(--shadow-2);
  border-radius: 16px;
  box-shadow: 0 10px 20px var(--shadow-1);
  max-width: 320px;
  position: relative;
  background-color: var(--white);

  ${(props) =>
    props.clickable &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`;

export const ListBox = styled(Box)`
  row-gap: 0;
  max-width: 100%;
`;

export const HorizontalBox = styled(Box)`
  flex-direction: row;
  column-gap: 0;
  row: gap: 0;
  width: 100%;
  box-shadow: none;
  max-width: 100%;
  border-radius: 0;

  & ${Box} {
    box-shadow: none;
    min-width: 200px;
  }

  & ${Box}:not(:last-child) {
    border-right: none;
  }
`;

export const HorizontalListBox = styled(Box)`
  width: 100%;
  box-shadow: none;
  border: 1px solid var(--laurel-green);
  max-width: 100%;
  border-radius: 0;

  &:nth-child(odd) {
    background-color: var(--laurel-green);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 20px 30px;

    & ${Button}, & ${ItemHeading} {
      flex: 0 0 200px;
      align-self: center;
    }
  }
`;

export const SmallBox = styled(Box)`
  border-radius: 0;
  max-width: 240px;
  padding: 30px;
  position: relative;
`;

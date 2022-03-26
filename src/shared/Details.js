import styled from "styled-components";

export const Detail = styled.span`
  font-size: 12px;
  color: var(--english-violet);

  & a {
    text-decoration: underline;
  }
`;

export const FormDetail = styled(Detail)`
  font-family: var(--text-font);
  position: relative;
  top: 26px;
`;

export const DateDetail = styled(Detail)`
  font-size: 24px;
  color: var(--old-lavender);
  align-self: center;
  font-family: var(--title-font);
`;

export const DayDetail = styled(Detail)`
  padding: 6px;
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--laurel-green);
  font-family: var(--title-font);
`;

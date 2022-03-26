import styled from "styled-components";

export const Tag = styled.span`
  padding: 6px;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 700;
  color: var(--white);
  align-self: flex-start;
  position: absolute;
  top: -10px;
  left: 0;
  font-family: var(--title-2-font);
`;

export const ApprovedTag = styled(Tag)`
  background-color: var(--granny-smith-apple);
`;

export const PendingTag = styled(Tag)`
  background-color: var(--english-violet);
`;

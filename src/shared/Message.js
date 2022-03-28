import styled from "styled-components";

export const BaseMessage = styled.span`
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) =>
    props.error ? "var(--english-violet)" : "var(--granny-smith-apple)"};
  color: ${(props) => (props.error ? "var(--white)" : "var(--black)")};
  font-family: var(--text-font);
  font-size: 14px;
  font-weight: 700;
`;

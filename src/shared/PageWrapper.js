import styled from "styled-components";

const PageWrapper = styled.div`
  margin: 100px auto 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  row-gap: 40px;
  align-items: flex-start;
`;

export const PageWrapperSingleElement = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PageWrapper;

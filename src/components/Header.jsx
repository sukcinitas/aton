import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { RoundImageWrapper } from "../shared/Image";
import { ItemHeading } from "../shared/Headings";
import { Button, InverseButton, ButtonsWrapper } from "../shared/Buttons";
import { Box } from "../shared/Box";
import { HorizontalDirWrapper } from "../shared/Wrapper";
import { StyledCloseIcon, StyledEditIcon } from "../shared/MaterialIcons";

const StyledHeader = styled.header`
  padding: 10px 20px;
  width: 100%;
  background-color: var(--xiketic-transparent);
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  z-index: 2;

  & ${InverseButton}, ${Button} {
    padding: 4px 10px;
    font-size: 12px;
  }
`;

const HeaderRoundImageWrapper = styled(RoundImageWrapper)`
  height: 30px;
  width: 30px;

  &:hover {
    cursor: pointer;
  }
`;

const UserModalBox = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: none;
  border-radius: 0;
  opacity: 1;
  z-index: 1;

  display: ${(props) => (props.isVisible ? "flex" : "none")};
`;

const CloseIcon = styled(StyledCloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Wrapper = styled(HorizontalDirWrapper)`
  align-items: center;
`;

function UserModal({ isVisible, close }) {
  return (
    <UserModalBox isVisible={isVisible}>
      <Wrapper>
        <ItemHeading>User</ItemHeading>
        <StyledEditIcon />
      </Wrapper>

      <ButtonsWrapper>
        <InverseButton>Leave Group</InverseButton>
        <Button>Logout</Button>
      </ButtonsWrapper>

      <CloseIcon onClick={close} />
    </UserModalBox>
  );
}

function Header() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledHeader>
      <UserModal close={() => setIsModalOpen(false)} isVisible={isModalOpen} />
      <InverseButton onClick={() => navigate("/")}>Home</InverseButton>
      <HeaderRoundImageWrapper onClick={() => setIsModalOpen(true)} />
    </StyledHeader>
  );
}

export default Header;

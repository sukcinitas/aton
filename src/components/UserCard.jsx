import React from "react";

import { ItemHeading } from "../shared/Headings";
import { InverseButton } from "../shared/Buttons";
import { Text } from "../shared/Text";
import { Box } from "../shared/Box";
import { RoundImage, RoundImageWrapper } from "../shared/Image";
import { HorizontalDirWrapper } from "../shared/Wrapper";

function UserCard({ selectStyle, inviteStyle }) {
  return (
    <Box clickable={selectStyle}>
      <HorizontalDirWrapper>
        <RoundImageWrapper>
          <RoundImage />
        </RoundImageWrapper>
        <ItemHeading>User</ItemHeading>
      </HorizontalDirWrapper>

      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui labore
        quod optio, ad odio tenetur ab, provident amet, quia distinctio
        delectus! Minus ex ducimus placeat repellendus error! Sunt, excepturi
        eum.
      </Text>

      {inviteStyle && <InverseButton>Invite</InverseButton>}
    </Box>
  );
}

export default UserCard;

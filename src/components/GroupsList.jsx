import React from "react";

import { ItemHeading } from "../shared/Headings";
import { Button, InverseButton } from "../shared/Buttons";
import { Text } from "../shared/Text";
import { ListBox, HorizontalListBox } from "../shared/Box";

function GroupListItem({ thereIsAnInvitation }) {
  return (
    <HorizontalListBox>
      <ItemHeading>Group</ItemHeading>

      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui labore
        quod optio, ad odio tenetur ab, provident amet, quia distinctio
        delectus! Minus ex ducimus placeat repellendus error! Sunt, excepturi
        eum.
      </Text>

      {thereIsAnInvitation ? (
        <InverseButton>Accept Invitation</InverseButton>
      ) : (
        <Button>Join</Button>
      )}
    </HorizontalListBox>
  );
}

function GroupList() {
  return (
    <ListBox>
      <GroupListItem />
      <GroupListItem />
      <GroupListItem thereIsAnInvitation />
      <GroupListItem />
      <GroupListItem />
      <GroupListItem />
      <GroupListItem />
      <GroupListItem />
    </ListBox>
  );
}
export default GroupList;

import React from "react";

import { Heading } from "../shared/Headings";
import { Text } from "../shared/Text";
import { Button } from "../shared/Buttons";
import { Box } from "../shared/Box";

function WaitingBox() {
  return (
    <Box>
      <Heading>Waiting...</Heading>
      <Text>
        You're waiting for someone from the group to approve your request.
      </Text>
      <Button>Pick a different group</Button>
    </Box>
  );
}

export default WaitingBox;

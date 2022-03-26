import React from "react";
import { useNavigate } from "react-router-dom";

import { Heading } from "../shared/Headings";
import { Text } from "../shared/Text";
import { Button } from "../shared/Buttons";
import { Box } from "../shared/Box";

function WaitingBox() {
  let navigate = useNavigate();

  return (
    <Box>
      <Heading>Waiting...</Heading>
      <Text>
        You're waiting for someone from the group to approve your request.
      </Text>
      <Button type="button" onClick={() => navigate("/groups")}>
        Pick a different group
      </Button>
    </Box>
  );
}

export default WaitingBox;

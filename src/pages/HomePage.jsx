import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ group, hasInvitationToAGroup }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (group) return navigate("group");

    if (hasInvitationToAGroup) {
      return navigate("waiting");
    } else {
      return navigate("groups");
    }
  }, [hasInvitationToAGroup, group, navigate]);

  return null;
}

export default HomePage;

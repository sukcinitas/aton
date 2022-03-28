import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../App.js";

function HomePage() {
  let navigate = useNavigate();
  const {
    user: { has_joined, inviting_groups },
  } = useContext(UserContext);

  useEffect(() => {
    if (has_joined) return navigate("group");

    if (inviting_groups.length > 0) {
      return navigate("waiting");
    } else {
      return navigate("groups");
    }
  }, [inviting_groups, has_joined, navigate]);

  return null;
}

export default HomePage;

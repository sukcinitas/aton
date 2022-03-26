import GlobalStyles from "./shared/Global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import GroupsPage from "./pages/GroupsPage";
import WaitingPage from "./pages/WaitingPage";
import UsersPage from "./pages/UsersPage";
import GroupPage from "./pages/GroupPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddTaskPage from "./pages/AddTaskPage";

const Main = styled.main`
  height: 100%;
  width: 100vw;
  overflow-y: scroll;
`;

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Main>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="groups" element={<GroupsPage />} />
          <Route path="waiting" element={<WaitingPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="group" element={<GroupPage />} />
          <Route path="add-task" element={<AddTaskPage />} />
          <Route
            exact
            path="/"
            element={<HomePage group="bebriukai" hasInvitationToAGroup />}
          />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;

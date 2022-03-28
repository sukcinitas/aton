import GlobalStyles from "./shared/Global";
import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import CreateGroupPage from "./pages/CreateGroupPage";

const Main = styled.main`
  height: 100%;
  width: 100vw;
  overflow-y: scroll;
`;

export const UserContext = createContext({});

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    token:
      '{"user_id": "N3Lze2fxg8NUMr5-ET8ZV2ETvF5lwQ62uRRqaIqfeQc", "signature": "649ce5fddcf617e8c49c3a1057c0bfe54a778b6b1d52b30fa723381e2bba09238bc8dde7ac542b10b451dde32f2e671bd86d5038b4451926f58f80bfd98020187f2446af3a5dface"}',
    message: "user logged in",
    user: {
      id: "N3Lze2fxg8NUMr5-ET8ZV2ETvF5lwQ62uRRqaIqfeQc",
      username: "sukcinitas",
      profile: "Something",
      group_id: null,
      has_joined: false,
      inviting_groups: [],
    },
    schedule: [],
  });

  return (
    <UserContext.Provider value={generalInfo}>
      <Router>
        <GlobalStyles />
        {generalInfo.token && <Header />}
        <Main>
          <Routes>
            <Route
              path="register"
              element={
                generalInfo.token ? (
                  <Navigate replace to="/" />
                ) : (
                  <RegisterPage />
                )
              }
            />
            <Route
              path="login"
              element={
                generalInfo.token ? (
                  <Navigate replace to="/" />
                ) : (
                  <LoginPage addGeneralInfo={setGeneralInfo} />
                )
              }
            />
            <Route
              path="groups"
              element={
                !generalInfo.token ? (
                  <Navigate replace to="/login" />
                ) : (
                  <GroupsPage />
                )
              }
            />
            <Route
              path="waiting"
              element={
                !generalInfo.token ? (
                  <Navigate replace to="/login" />
                ) : (
                  <WaitingPage />
                )
              }
            />
            <Route
              path="users"
              element={
                !generalInfo.token ? (
                  <Navigate replace to="/login" />
                ) : (
                  <UsersPage />
                )
              }
            />
            <Route
              path="group"
              element={
                !generalInfo.token ? (
                  <Navigate replace to="/login" />
                ) : (
                  <GroupPage />
                )
              }
            />
            <Route
              path="add-task"
              element={
                !generalInfo.token ? (
                  <Navigate replace to="/login" />
                ) : (
                  <AddTaskPage />
                )
              }
            />
            <Route
              path="/create-group"
              element={
                !generalInfo.token ? (
                  <Navigate replace to="/login" />
                ) : (
                  <CreateGroupPage />
                )
              }
            />
            <Route
              exact
              path="/"
              element={
                !generalInfo.token ? (
                  <Navigate replace to="/login" />
                ) : (
                  <HomePage />
                )
              }
            />
          </Routes>
        </Main>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

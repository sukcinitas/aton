import GlobalStyles from "./shared/Global";
import React, { useState } from "react";
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

const Main = styled.main`
  height: 100%;
  width: 100vw;
  overflow-y: scroll;
`;

function App() {
  const [generalInfo, setGeneralInfo] = useState({});

  return (
    <Router>
      <GlobalStyles />
      {generalInfo.token && <Header />}
      <Main>
        <Routes>
          <Route
            path="register"
            element={
              generalInfo.token ? <Navigate replace to="/" /> : <RegisterPage />
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
            exact
            path="/"
            element={
              !generalInfo.token ? (
                <Navigate replace to="/login" />
              ) : (
                <HomePage group="bebriukai" hasInvitationToAGroup />
              )
            }
          />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;

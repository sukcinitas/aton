import GlobalStyles from "./shared/Global";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
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
          {/* <Route exact path="/" component={} /> */}
        </Routes>
      </Main>
    </Router>
  );
}

export default App;

import GlobalStyles from "./shared/Global";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import UserCard from "./components/UserCard";
import GroupsList from "./components/GroupsList";
import WaitingBox from "./components/WaitingBox";
import WeekBox from "./components/WeekBox";
import Header from "./components/Header";
import AssignDayCardsBox from "./components/AssignDayCardsBox";

function App() {
  return (
    <>
      <Header />
      <div>
        <GlobalStyles />
        <LoginForm />
        <RegisterForm />
        <UserCard />
        <UserCard selectStyle />
        <UserCard inviteStyle />
        <GroupsList />
        <WaitingBox />
        <WeekBox />
        <AssignDayCardsBox />
      </div>
    </>
  );
}

export default App;

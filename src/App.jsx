import NotificationBuble from "./components/NotificationBuble";
import ChatBuble from "./components/ChatBuble";
import Contributor from "./components/Contributor";
import ButtonViolet from "./components/ButtonViolet";
import FriendList from "./components/FriendList";
import users from "./data/users";
import MovieCard from "./components/MovieCard";
import EmployeeTable from "./components/EmployeeTable";
import AccountProfile from "./components/AccountProfile";

function App() {
  return (
    <>
      <h1 className="my-5 text-center text-xl font-semibold text-white">
        Learn React + Tailwind CSS
      </h1>
      <NotificationBuble />
      <ChatBuble />
      <Contributor users={users} />
      <ButtonViolet />
      <FriendList users={users} />
      <MovieCard />
      <EmployeeTable users={users} />
      <AccountProfile />
    </>
  );
}

export default App;

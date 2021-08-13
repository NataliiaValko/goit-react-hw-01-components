import Container from "./components/common/Container/Container";
import Profile from "./components/task-1/Profile/Profile";
import Statistics from "./components/task-2/Statistics/Statistics";
import FriendList from "./components/task-3/FriendList/FriendList";
import TransactionHistory from "./components/task-4/TransactionHistory/TransactionHistory";

import statisticalData from "./data/statisticalData.json";
import userData from "./data/userData.json";
import friendsData from "./data/friendsData.json";
import transactionsData from "./data/transactionsData.json";
// import './App.css';

const App = () => {
  return (
    <Container>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </Container>
  );
};

export default App;

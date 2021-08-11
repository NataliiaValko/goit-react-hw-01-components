import Profile from "./components/task-1/Profile";
import Statistics from "./components/task-2/Statistics";
import FriendList from "./components/task-3/FriendList";
import TransactionHistory from "./components/task-4/TransactionHistory";

import statisticalData from "./data/statisticalData.json";
import userData from "./data/userData.json";
import friendsData from "./data/friendsData.json";
import transactionsData from "./data/transactionsData.json";
// import './App.css';

const App = () => {
  return (
    <div>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <div>
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
      <div>
        <FriendList friends={friendsData} />
      </div>
      <div>
        <TransactionHistory items={transactionsData} />
      </div>
    </div>
  );
};

export default App;

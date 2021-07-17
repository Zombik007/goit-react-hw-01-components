import friends from './data/friends.json';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import transactions from './data/transactions.json';

import FriendList from './components/FriendsList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <>
      <FriendList friends={friends} />
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

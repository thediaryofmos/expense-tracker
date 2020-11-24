import logo from './logo.svg';
import './App.css';

//Importing Components
import {Header} from './Components/Header'
import {Balance} from './Components/Balance'
import {AccountSummary} from './Components/AccountSummary'
import {TransactionHistory} from './Components/TransactionHistory'

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <AccountSummary />
      <TransactionHistory />
    </div>
  );
}

export default App;

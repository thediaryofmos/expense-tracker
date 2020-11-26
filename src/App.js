//import logo from './logo.svg';
import './App.css';

//Importing Components
import { Header } from './Components/Header'
import {Balance} from './Components/Balance'
import {AccountSummary} from './Components/AccountSummary'
import {TransactionHistory} from './Components/TransactionHistory'
import {AddTransaction} from './Components/AddTransaction'
//importing GlobalProvider
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className = "container">
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

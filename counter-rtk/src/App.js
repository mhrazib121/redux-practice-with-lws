import './App.css';
import { Provider } from 'react-redux';
import store from './rtk/app/store';
import CounterList from './Components/CounterList';

function App() {
  return (
    <Provider store={store}>
      <CounterList />
    </Provider>
  );
}

export default App;

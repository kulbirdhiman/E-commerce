import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './Compenets/Main';
function App() {
  return (
    <Provider store={store} >
      <Main />
    </Provider>
  );
}

export default App;

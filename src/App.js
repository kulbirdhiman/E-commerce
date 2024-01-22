import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './Compenets/Main';
import Cart from './Compenets/Cart'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Provider store={store} >
      <Router>

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />


        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

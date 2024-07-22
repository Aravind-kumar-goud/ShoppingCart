import React,{useState}  from 'react'
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import './App.css';
import Detail from './components/Detail';
import Home from './components/HomeEX';
import Login from './components/LoginEx';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import { persistor, store } from './components/Redux/Store';
import Registration from './components/Registration';
import './components/Shopping.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Weather from './components/weather/Weather';
import ArrayShuffle from './components/ArrayShuffle';
import Shuffled from './components/Shuffled';
import NewRegistration from './components/NewRegistration';
import FormikForm from './components/FormikForm';
import SocialLogin from './components/SocialLogin';
function App() {

  const [token, setToken] = useState(localStorage.getItem('token') ?? '');

  const setAuthToken = (token) => {
    if (token) {
      localStorage.setItem('token', token);
      setToken(token);
    } else {
      localStorage.removeItem('token');
      setToken('');
    }
  };
  return (
    <div className="App">

       <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Navbar />
          <Routes>
          <Route
          path="/"
          element={
            token?
              (<Home setAuthToken={setAuthToken} />):(<Login setAuthToken={setAuthToken} />)
           
          }
        />
        <Route
          path="/login"
          element={<Login setAuthToken={setAuthToken} />}
        />
     

            {/* <Route path="/" element={<Home />} />
             <Route path='/register' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/cart' element={<Cart/>} /> */}

          </Routes>
        </PersistGate>
      </Provider> 
      {/* <ArrayShuffle /> */}
      {/* <Shuffled /> */}
      {/* <NewRegistration />       */}
      {/* <SocialLogin /> */}
      {/* <FormikForm /> */}

    </div>
  );
}

export default App;

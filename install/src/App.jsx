import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './Components/Store/Store';
import HomePage from './Components/Home/Home';
// import AboutUsPage from './Components/About/About';
import {  Route, Routes } from 'react-router-dom';
import Signup from './Components/SignUp/SignUp'
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard'



const App = () => {
       return (
    <Provider store={store}>
        {/* <Router> */}
        {/* <HomePage/>
        <AboutUsPage/> */}
            <Routes>
                <Route path='/' element={<HomePage />}/>
                {/* <Route path='/about' element={<AboutUsPage />}/> */}
                <Route path='/signup' element={<Signup />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/*' element={<Dashboard />}/>
               




                {/* <Route exact path="/signup" element={!token ? <SignupForm /> : <Navigate to="/user" />} />
                <Route exact path="/login" element={!token ? <LoginForm /> : <Navigate to="/user" />} />
                <Route exact path="*" element={token ? <ProtectedRoutes /> : <Navigate to="/login" />} /> */}
            </Routes>
        {/* </Router> */}
    </Provider>
  );
};


export default App;

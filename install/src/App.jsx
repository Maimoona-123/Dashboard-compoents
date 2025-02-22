import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './Components/Store/Store'; // Ensure the path is correct
import Config from './config/Config';
import './App.css'


const App = () => {
  return (
    <Provider store={store}>
      <Config />
    </Provider>
  );
};


export default App;

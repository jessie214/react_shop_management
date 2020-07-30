import React from 'react';
import Login from './pages/login/login.jsx'
import { Provider } from 'react-redux';
import store from './pages/store/store';
import 'antd/dist/antd.css';
function App() {
  return (
    <Provider store={store}>
  
      <Login/>
    
    </Provider>
  );
}

export default App;

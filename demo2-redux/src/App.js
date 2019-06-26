import React from 'react';
import './App.css';
import Customers from './components/views/Customers'
import Header from './components/views/Header'
// import store from './store'

function App() {
  return (
   <div>
      <Header />
     <Customers/>
   </div>
  );
}

export default App;

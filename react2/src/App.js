import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import NewCustomerForm from './components/NewCustomerForm'
import CustomerList from './components/CustomersList'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <NewCustomerForm />
        <hr />
        <CustomerList />
      </div>
    </Provider>
  );
}

export default App;

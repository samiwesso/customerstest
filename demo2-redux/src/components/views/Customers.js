import React from 'react';
import { Provider } from 'react-redux'
import NewCustomerForm from '../forms/NewCustomerForm'
import CustomerList from '../forms/CustomersList'

import store from '../../store'

function Customers() {
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

export default Customers;

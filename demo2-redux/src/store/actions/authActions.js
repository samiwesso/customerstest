import { FETCH_CUSTOMERS, NEW_CUSTOMER } from './actiontypes'

const apiurl = 'http://localhost:3001/api'

export const fetchCustomers = () => dispatch => {
    fetch(`${apiurl}/customers/all`)
    .then(res => res.json())
    .then(customers => dispatch({
        type: FETCH_CUSTOMERS,
        payload: customers
    }))    

/*
    Med axios

    http.get(`${apiUrl}/customers/all`)
    .then(res => res.json())
    .then(customers => dispatch({
        type: FETCH_CUSTOMERS,
        payload: customers
    }))
*/

}

export const newCustomer = (customerData) => dispatch => {
    fetch(`${apiurl}/customers/`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(customerData) 
    })
    .then(res => res.json())
    .then(res => dispatch({
        type: NEW_CUSTOMER,
        payload: res.data
    }))

/*
    Med axios

    http.post(`${apiUrl}/customers/`, customerData)
    .then(res => res.json())
    .then(customer => dispatch({
        type: NEW_CUSTOMER,
        payload: customer
    }))
*/

}

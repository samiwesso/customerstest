import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCustomers } from '../actions/customerActions'

class CustomerList extends Component {

    componentWillMount() {
        this.props.fetchCustomers();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newCustomer) {
            this.props.customers.unshift(nextProps.newCustomer); // Längst upp i listan 
            //this.props.customers.push(nextProps.newCustomer); // Längst ner i listan 
        }
    }
    
    deleteCustomer(id) {
        fetch('http://localhost:3001/api/customers/' + id, { method: 'DELETE' })
        .then(() => this.props.fetchCustomers())
    }

    render() {

        const customerList = this.props.customers.map( customer => (
            <tr key={customer._id}>
                <th scope="row">{customer._id}</th>
                <td>{customer.firstname}</td>
                <td>{customer.lastname}</td>
                <td>{customer.address}</td>
                <td><button onClick={ () => this.deleteCustomer(customer._id) }><i class="fas fa-trash"></i></button></td>
            </tr>
        ))

        return (
            <div className="mt-5">
                <h5><i className="fas fa-list mr-3"></i> Kundlista</h5>

                <table className="table table-sm mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Förnamn</th>
                            <th scope="col">Efternamn</th>
                            <th scope="col">Adress</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { customerList }
                    </tbody>
                </table>
            </div>
        )
    }
    
}

CustomerList.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
    newCustomer: PropTypes.object
}

const mapStateToProps = state => ({
    customers: state.customers.customers,
    newCustomer: state.customers.customer
})

export default connect(mapStateToProps, { fetchCustomers})(CustomerList)
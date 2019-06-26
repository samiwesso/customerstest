import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { newCustomer } from '../../store/actions/authActions'

class NewCustomerForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            address: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    onChange(e) { this.setState({ [e.target.id] : e.target.value })}
    onSubmit(e) {
        e.preventDefault()

        const customer = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address
        }

        this.props.newCustomer(customer)
    }


    render() {
        const { firstname, lastname, address} = this.state
        return (
            <div>
                <h5><i className="fas fa-id-card mr-3"></i> Skapa Kund</h5>

                <form className="my-4" onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="firstname">Förnamn</label>
                        <input type="text" className="form-control" id="firstname" placeholder="Förnamn" value={firstname} onChange={this.onChange} />
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="lastname">Efternamn</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Efternamn" value={lastname} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Adress</label>
                        <input type="text" className="form-control" id="address" placeholder="Adress" value={address} onChange={this.onChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Skapa Kund</button>
                </form>

            </div>
        )
    }
}

NewCustomerForm.propTypes = {
    newCustomer: PropTypes.func.isRequired
}

export default connect(null, {newCustomer})(NewCustomerForm)
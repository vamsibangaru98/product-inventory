import React from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import UserStore from '../stores/UserStore'
import Button from 'react-bootstrap/Button'
import ProductApi from '../data/ProductApi'

import Card from 'react-bootstrap/Card'
import { SIGNIN_USER } from '../constants/UserActionTypes';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(evt) {
    this.props.onCheck(this.props.productId, evt.target.checked)
  }
  handleSingleDelete = (id) => {
    console.log(id, 'Delete')
    if (window.confirm(`Are you sure want to delete it`)) {
      ProductApi.deleteProduct(id)
      window.location.reload()
    }

  }

  render() {
    const currentUser = UserStore.getCurrentUser()
    let history = this.props.history
    return (

      <div className='card' style={{ width: "18rem", borderRadius: "20px", margin: '10px' }}>
        {this.props.columns.checkToSelect ?
          <>
            <Form.Check
              aria-label="option 1"
              onChange={this.handleChange}
            />
          </> : null}
        {this.props.columns.productName ? <>
          {/* <Link to={`/productDetails/${this.props.productId}`} onClick={this.clickHandler}>{this.props.productName}</Link> */}
          <Link to={`/productDetails/${this.props.productId}`} title='view product details' style={{ fontSize: "20px", textDecoration: 'none' }}>{this.props.productName}</Link>
        </> : null}
        <div className='card-body'>
          {this.props.columns.manufacturer ? <>Manufacturer<h5>{this.props.manufacturer}</h5></> : null}
          {this.props.columns.price ? <>Price<h5>{this.props.price}</h5></> : null}
          {this.props.columns.quantity ? <>Quantity<h5>{this.props.quantity}</h5></> : null}
        </div>

        <div className='card-body'>
          <Button variant="outline-success" size="sm" href={`/editProduct/${this.props.productId}`}>
            Edit
          </Button> &nbsp;
          <Button variant="outline-danger" size="sm" onClick={currentUser ? () => this.handleSingleDelete(this.props.productId) : () => history.push("/signIn")}>
            Delete
          </Button>
        </div>

      </div>
    )
  }
}

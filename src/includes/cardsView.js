import React from 'react'
import Products from '../components/Products'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ProductApi from '../data/ProductApi'
import UserStore from '../stores/UserStore'
import Accordion from 'react-bootstrap/Accordion'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export default class CardsView extends React.Component {

  state = {
    query: '',
    checkedProducts: {},
    columns: {
      productName: true,
      manufacturer: true,
      price: true,
      quantity: true,
      checkToSelect: true
    }
  }

  onChangeHandler = e => {
    const query = e.target.value
    this.setState({ query })
  }

  handleCheck = (productId, checked) => {
    this.setState(
      prevState => {
        const checkedProducts = prevState.checkedProducts
        checkedProducts[productId] = checked
        return { checkedProducts }
      }
    )
  }

  onDelete = () => {
    console.log(this.state.checkedProducts)
    const checkedArray = Object.keys(this.state.checkedProducts).filter(id => this.state.checkedProducts[id] === true)
    console.log(checkedArray)
    ProductApi.deleteProducts(checkedArray)
    window.location.reload()
  }
  render() {
    const currentUser = UserStore.getCurrentUser()
    const products = this.props.products
    const history = this.props.history
    const query = this.state.query
    const filteredProducts = products.
      // filter(product => {
      //   return product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1
      // })
      filter(product =>
        product.productName.toLowerCase().includes(query.toLowerCase()) ||
        product.manufacturer.toLowerCase().includes(query.toLowerCase()) ||
        product.price.toString().toLowerCase().includes(query.toLowerCase()) ||
        product.quantity.toString().toLowerCase().includes(query.toLowerCase())
      )
    return (
      <div style={{ backgroundColor: "#Ccdabb" }}>
        <>
          <Form style={{ width: '30%', margin: 'auto', marginTop: '10px', float: "left" }}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Search Product" onChange={this.onChangeHandler} />
              </Form.Group>
            </Form.Row>
          </Form>

          <span className="d-inline-block" style={{ margin: '10px', float: "left" }}>
            <Button variant="outline-danger" onClick={currentUser ? this.onDelete : () => history.push("/signIn")}>
              Selected Deletes
            </Button>
          </span>
          <div className="mb-2" style={{ float: "left", marginTop: "0.2%" }}>
            <Button variant="success" size="lg" href="/addNewProduct">
              Add New Product
            </Button>
          </div>

          <Accordion>
            <Card>

              <Card.Header>
                <Accordion.Toggle as={Button} variant="info" eventKey="0">
                  Filter Products
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                  Product Name: <Form.Check
                    defaultChecked={true}
                    onChange={(evt) => {
                      const checked = evt.target.checked
                      this.setState(
                        prevState => {
                          console.log(prevState)
                          return { columns: { ...prevState.columns, productName: checked } }
                        }
                      )
                    }} />
                  Manufacturer: <Form.Check
                    defaultChecked={true}
                    onChange={(evt) => {
                      const checked = evt.target.checked
                      this.setState(
                        prevState => {
                          console.log(prevState)
                          return { columns: { ...prevState.columns, manufacturer: checked } }
                        }
                      )
                    }} />
                  Price: <Form.Check
                    defaultChecked={true}
                    onChange={(evt) => {
                      const checked = evt.target.checked
                      this.setState(
                        prevState => {
                          console.log(prevState)
                          return { columns: { ...prevState.columns, price: checked } }
                        }
                      )
                    }} />
                  Quantity: <Form.Check
                    defaultChecked={true}
                    onChange={(evt) => {
                      const checked = evt.target.checked
                      this.setState(
                        prevState => {
                          console.log(prevState)
                          return { columns: { ...prevState.columns, quantity: checked } }
                        }
                      )
                    }} />

                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <div style={{ display: "flex", justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', minHeight: '100vh' }}>
            {filteredProducts.map(product =>

              <Products
                key={product.id}
                productId={product.id}
                productName={product.productName}
                productDescription={product.productDescription}
                manufacturer={product.manufacturer}
                price={product.price}
                quantity={product.quantity}
                onCheck={this.handleCheck}
                columns={this.state.columns}
                history={history}
              />

            )}
          </div>

        </>
      </div>

    )
  }
}
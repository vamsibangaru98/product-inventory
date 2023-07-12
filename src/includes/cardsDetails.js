import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { withRouter } from 'react-router-dom'
import ProductApi from '../data/ProductApi'
import { addDetailsToCard } from '../api/axios'
import Button from 'react-bootstrap/Button'
import { add } from "lodash"

import UserStore from '../stores/UserStore'

class CardsDetails extends React.Component {
  constructor(props) {
    super(props)
  }
  add = async (product) => {
    console.log(product)
    await addDetailsToCard(product);
  }

  render() {
    const initialValues = {
      id: this.props.product.id,
      productName: this.props.product.productName,
      productDescription: this.props.product.productDescription,
      manufacturer: this.props.product.manufacturer,
      price: this.props.product.price,
      quantity: this.props.product.quantity,
      views: (this.props.product.views + 1)
    }

    if (this.props.product.productName != undefined) {
      // ProductApi.addProductView(this.props.product.productName, this.props.product.views)
      ProductApi.updateProductViews(initialValues)
    }

    let history = this.props.history
    return (
      <div>
        <Container className="mt-5">
          <Row>
            <Col>
            </Col>
            <Col>
              <Card style={{ width: '30rem' }}>
                {/* <Card.Img variant="top" src={`https://picsum.photos/seed/${this.props.match.params.id}/478/185`} /> */}
                <Card.Body>
                  <Card.Title><u>{this.props.product.productName}</u></Card.Title>
                  <Card.Text>
                    <b>Know More About this Product:</b> <br />
                    {this.props.product.productDescription}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem><b>Manufacturer: </b>{this.props.product.manufacturer}</ListGroupItem>
                  <ListGroupItem><b>Price: </b>{this.props.product.price} INR</ListGroupItem>
                  <ListGroupItem><b>Quantity: </b>{this.props.product.quantity}</ListGroupItem>
                </ListGroup>
                <Card.Link href="#" onClick={() => {
                  if (window.confirm("Are you sure want to add to cart?"))
                    console.log(this.props.product);
                  this.add(this.props.product);
                  this.props.history.push("/viewProducts");
                }}>
                  <Button variant="primary" >
                    Add to Cart
                  </Button>
                </Card.Link>
                <Card.Body>
                  <Card.Link href={`/editProduct/${this.props.match.params.id}`}>Edit</Card.Link>
                  <Card.Link
                    href="#"
                    onClick={UserStore.getCurrentUser() == undefined ? () => history.push('/signIn') : () => {
                      if (window.confirm("Are you sure to delete?")) {

                        ProductApi.deleteProduct(this.props.match.params.id, () => {
                          this.props.history.push('/viewProducts')
                        })
                      }

                    }}>Delete</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withRouter(CardsDetails)
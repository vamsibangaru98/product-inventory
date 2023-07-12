import React from 'react'
import Header from '../includes/header'
import CardsDetails from '../includes/cardsDetails'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import UserStore from '../stores/UserStore'
import { withRouter } from 'react-router-dom'
import ProductApi from '../data/ProductApi'
import Navbar from 'react-bootstrap/Navbar'

class ProductsDetailsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            product: ""
        }
        
    }

    componentDidMount() {
        const productId = this.props.match.params.id
        ProductApi.getProductById(productId, (product)=>{
            this.setState({ product })
            console.log(product)
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Container className="mt-5">
                    <Row>
                      <Col></Col>
                      <Col>
                            <div className="mb-2">
                                <Button variant="success" size="lg" href="/addNewProduct">
                                  Add New Product
                                </Button>
                            </div>
                      </Col>
                      <Col></Col>
                    </Row>
                </Container>
                <CardsDetails product={this.state.product} history={this.props.history}/>
                
                
            </div>
        )
    }
}

export default withRouter(ProductsDetailsPage) 
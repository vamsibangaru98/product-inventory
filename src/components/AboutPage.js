import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Header from '../includes/header'
import Navbar from 'react-bootstrap/Navbar'
import TopViewedProductsPage from './TopViewedProductsPage'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Carousel className="carousel slide container">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i1.wp.com/blog.contactpigeon.com/wp-content/uploads/2018/08/best-product-pages-2018.jpg"
            alt="First slide"
            width="900px" height="500"
          />
          {/* <Carousel.Caption>
                    <h3>Lots of Products</h3>
                    <p>There are so many products for you to choose from, in our inventory.</p>
                  </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://popupsmart.com/blog/user/pages/125.how-to-get-people-to-buy-your-product/online-shopping.jpg"
            alt="second slide"
            width="900px" height="500"
          />

          <Carousel.Caption>
            <h3>Add To Cart</h3>
            <p>You can add your products to the cart.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <Container className="mt-4">
        <Row>
          <Col>
            <Card border="light" id="about">
              <h1>About</h1>
              <p>
                Don't go anywhere to purchase the world's interesting and innovative goods, just use this website | here you can purchase what you want with the best prices, ensuring the best quality with top brands including amazing offers.
                Order from anywhere and collect at your door with no delivery charges :)
              </p>
            </Card>
          </Col>

        </Row>
      </Container>
      {/* <TopViewedProductsPage /> */}
    </div>
  )
}

export default AboutPage
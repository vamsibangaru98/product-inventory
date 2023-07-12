import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Header from '../includes/header'
import Footer from '../includes/footer'
import SignInForm from '../includes/signInForm'
import './../includes/spinner.css';
import Button from 'react-bootstrap/Button'

const SignInPage = () => {
    const [isLoaded, setIsLoaded] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(false)
        }, 1000);
    })
    return(
        <div>
            <Header />
            {isLoaded ? <div><center><div className="loading-spinner"></div></center></div>:
            <Container className="mt-5 bt-5">
                <Row>
                  <Col></Col>
                  <Col xs={5}>
                      <Card className="text-center mt-5">
                            <Card.Body>
                                <Card.Title>Sign In</Card.Title>
                                <Card.Text>
                                    <SignInForm />
                                </Card.Text>
                                
                                <Card.Text>
                              Don't have account? Register here
                              </Card.Text>
                              <Button variant="primary" href="/register">Register</Button>
                            </Card.Body>
                      </Card>
                  </Col>
                  <Col></Col>
                </Row>
            </Container>
}
            <Footer />
        </div>
    )
}

export default SignInPage
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import UserActions from '../actions/UserActions'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'
import UserStore from '../stores/UserStore'
import UserApi from '../data/UserApi'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ""
    }
  }

  componentDidMount() {
    //const currentUser = UserStore.getCurrentUser()
    const userId = UserStore.getCurrentUser()
    UserApi.getUserById(userId, (user)=>{
            this.setState({ user })
    })
  }

  render() {
    const currentUser = UserStore.getCurrentUser()
    return(
      <div>
          <Navbar bg="primary" expand="lg" variant="dark">
              <Navbar.Brand href="/">
                  <img
                    className="d-block w-100"
                    src="https://w7.pngwing.com/pngs/202/343/png-transparent-blue-and-black-computer-inventory-management-software-warehouse-management-system-warehouse-miscellaneous-company-text-thumbnail.png"
                    alt="Logo"
                    width="80px" height="40px"
                  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{fontSize:'18px'}}>
                  <Nav.Link style={{color:'black',fontWeight:'600'}} href="/viewProducts">Products</Nav.Link>
                  <Nav.Link style={{color:'black',fontWeight:'600'}} href="/topViewedProducts">TopViewedProducts</Nav.Link>
                  <Nav.Link style={{color:'black',fontWeight:'600'}} href="/cart">Cart</Nav.Link>
                </Nav>
                {currentUser ? <Navbar.Text><i>Hello,</i>&nbsp; 
                  <a href={`/userDetails/${this.state.user&&this.state.user.id}`}>{this.state.user&&this.state.user.firstName}&nbsp;</a></Navbar.Text> : null}
              </Navbar.Collapse>
              {currentUser ? <Button onClick={()=>{
                UserActions.signoutUser()
                this.props.history.push('/')
                }}>Sign Out
              </Button> : null}
              {!currentUser ? <Button onClick={()=>{
                //UserActions.signoutUser()
                this.props.history.push('/signIn')
                }}>Sign In
              </Button> : null}
          </Navbar>
      </div>
  )
  }
}

export default withRouter(Header)
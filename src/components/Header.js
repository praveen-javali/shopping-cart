import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './header.css';
import { ProductConsumer } from '../context';
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <FontAwesomeIcon icon={faStar} className="brandstar" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>

            <div>
              <ProductConsumer>
                {(value) => {
                  return (
                    <button>
                      Items {value.cart.length} is add to the Cart
                      <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                  );
                }}
              </ProductConsumer>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;

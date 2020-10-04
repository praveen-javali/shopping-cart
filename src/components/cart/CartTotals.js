import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class CartTotals extends Component {
  render() {
    const {
      cartSubTotal,
    
      cartTotal,
      cart,
      clearCart,
    } = this.props.value;
    // const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container">
            <div className="row">
              <div className="col-4 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span>{' '}
                  <strong>Rs. {cartSubTotal} </strong>
                </h5>
                <h5>
                  <span className="text-title"> Discount :</span>{' '}
                  <strong>Rs. 0.00 </strong>
                </h5>
                <h5>
                  <span className="text-title"> total :</span>{' '}
                  <strong>Rs. {cartTotal} </strong>
                </h5>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

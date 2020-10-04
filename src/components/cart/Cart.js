import React, { Component } from 'react';
import CartHeading from './CartHeading';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../context';
export default class Cart extends Component {
  render() {
    return (
      <div>
        <div className="sidebar-sticky pt-3">
          <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  
                <CartHeading />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <h3> Your Cart is Empty</h3>;
            }
          }}
         
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import ShopingList from './ShoppingList';
import Cart from './cart/Cart';

class Main extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-md-8 ml-sm-auto col-lg-8 px-md-4">
              <ShopingList />
            </main>
            <nav
              id="sidebarMenu"
              className="col-md-4 col-lg-4 d-md-block bg-light sidebar collapse"
            >
              <Cart />
             
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;

import React, { Component } from 'react';
import { items } from './productdata';
const ProductContext = React.createContext();
class ProductProvider extends Component {
  state = {
    products: [],
    cart: [],
    cartSubtotal: 0,
    cartDiscount: 0,
    cartTotal: 0,
    cartCount: 0,
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let products = [];
    items.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    }, this.CheckCartItems);
  };
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    console.log(tempProducts[index], 'added to cart');
    product.inCart = true;
    product.count = 1;
    const price = product.price.actual;
    product.total = price;

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product],
        cartCount: this.state.cart.length,
      };
    }, this.addTotals);
  };
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  //
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price.actual;
    this.setState(() => {
      return {
        cart: [...tempCart],
      };
    }, this.addTotals);
  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => {
      return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price.actual;
      this.setState(() => {
        return { cart: [...tempCart] };
      }, this.addTotals);
    }
  };
  getTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));

    const total = subTotal;
    return {
      subTotal,

      total,
    };
  };
  //** */

  addTotals = () => {
    const totals = this.getTotals();

    this.setState(
      () => {
        return {
          cartSubTotal: totals.subTotal,
          cartTax: totals.tax,
          cartTotal: totals.total,
        };
      },
      () => {
        // console.log(this.state);
      }
    );
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter((item) => {
      return item.id !== id;
    });

    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts],
      };
    }, this.addTotals);
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };

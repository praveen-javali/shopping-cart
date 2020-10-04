import React, { Component } from 'react';
import './App.scss';
import Main from '././components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Switch } from 'react-router-dom';
import{storeProducts}from './data'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: storeProducts,
    };
  }
  render() {
    console.log(this.state.products)
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" component={Main} />
        </Switch>

        <Footer />
      </>
    );
  }
}

export default App;

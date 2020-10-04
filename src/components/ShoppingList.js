import React, { Component } from 'react';
//import { storeProducts } from '../data';
//import { items } from '../productdata';

//import Itemcard from './Itemcard';
import { ProductConsumer } from '.././context';
import Itemcard from './Itemcard';

class ShopingList extends Component {


  render() {
    
    return (
      <div style={{ display: 'flex', direction: 'row', flexWrap: 'wrap' }}>
        <ProductConsumer>
        {/* {value => {return value.products.map((product)=>{return
         <Itemcard product={product}/>})}} */}
         {value => {
                  return value.products.map((product,index) => {
                    return <Itemcard key={index} product={product}  index={index} />;
                  });
                }}
        </ProductConsumer>
      </div>
    );
  }
}

export default ShopingList;

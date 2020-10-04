import React, { Component } from 'react';
import { ProductConsumer } from '../context';

class Itemcard extends Component {
  render() {
    const { name, image, price, discount, id, inCart } = this.props.product;

    return (
      <div style={{ padding: '20px 10px' }}>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={image}
            class="card-img-top"
            alt="..."
            style={{ height: '80%', margin: 'auto', padding: '30px' }}
          />
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'green',
              display: 'inline',
              width: '50px',
              margin: '0',
              top: '50px',
              left: '0',
              height: '30px',
              color: '#fff',
              textAlign: 'center',
              paddingTop: '2px',
            }}
          >
            <span>{discount}%</span>
          </div>

          <div
            className="card-body"
            style={{ background: '#ccc', padding: '10px' }}
          >
            <div>
              <h5 className="card-title">{name}</h5>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingBottom: '10px',
                }}
              >
                <div className="d-flex flex-column">
                  <h5>RS.{price.actual}</h5>
                  <h5>
                    RS.<strike>{price.display}</strike>
                  </h5>
                </div>

                <ProductConsumer>
                  {(value) => {
                    return (
                      <button
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                        }}
                        type="button"
                        className="btn btn-outline-info"
                      >
                        {inCart ? (
                          <p
                            className="text-capitalize mb-0 btn-outline-danger "
                            disabled
                            style={{ fontWeight: '700' }}
                          >
                            in cart
                          </p>
                        ) : (
                          <p className="text-capitalize mb-0" disabled style={{ fontWeight: '700' }}>
                            Add to Cart
                          </p>
                        )}
                      </button>
                    );
                  }}
                </ProductConsumer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Itemcard;

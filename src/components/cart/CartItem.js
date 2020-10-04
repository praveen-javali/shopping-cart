import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { id, name, image, total, count } = this.props.item;
    const { increment, decrement, removeItem } = this.props.value;

    return (
      <div>
        <div className="row">
          <div className="col-4 text-left ">
            <span>
              <img
                src={image}
                style={{
                  width: '30px',
                  height: '30px',
                  paddingRight: '10px',
                  border: '2px solid #ccc ',
                }}
                alt="product"
              />
            </span>
            {name}
          </div>
          <div>
            <div className="d-flex justify-content-center">
              <div>
                <span
                  className="btn btn-black mx-1"
                  onClick={() => {
                    return decrement(id);
                  }}
                >
                  -
                </span>
                <span className="btn btn-black mx-1">{count}</span>
                <span
                  className="btn btn-black mx-1"
                  onClick={() => {
                    return increment(id);
                  }}
                >
                  +
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className=" cart-icon" onClick={() => removeItem(id)}>
              <i className="fas fa-trash" />
            </div>
          </div>
          <div className="col-4 text-right">Rs. {total}</div>
        </div>
      </div>
    );
  }
}

export default CartItem;

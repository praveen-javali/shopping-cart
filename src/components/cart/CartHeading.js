import React from 'react';

export default function CartHeading() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'center',
        }}
      >
        <h5>Items</h5> <h5>Qty</h5> <h5>Price</h5>
      </div>
      <hr />
     
    </div>
  );
}

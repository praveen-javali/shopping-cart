import React from 'react';
import styled from 'styled-components';
export default function Footer() {
  const Div = styled.div`
    background-color: #4269ea;
    height: 3rem;
    & p {
      margin: auto;
      padding-top: 10px;
      text-align: center;
      color: #fff;
    }
  `;

  return (
    <Div>
      <p>Shopping cart app @2020. Praveen Javali</p>
    </Div>
  );
}

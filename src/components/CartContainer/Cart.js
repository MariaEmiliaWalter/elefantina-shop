import React from 'react'
import {useCart} from "react-use-cart";
import { Grid, GridColumn, Segment, Header } from "semantic-ui-react";


function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
    totalItems,
  } = useCart();
  
    if (isEmpty) return <h3>El carrito aún no tiene productos</h3>;

  console.log(totalItems);

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.title} &mdash;
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cart

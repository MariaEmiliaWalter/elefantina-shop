import React from 'react';
import { Button} from "semantic-ui-react";
import "./Header.css";

function CartWidget() {

    // const counter = () =>{
    // --- AÑADIR ITEM A LIST CART + CONTADOR (Como en framer)---

    return (
      <Button
        floated="right"
        style={{ fontSize: "100%" }}
        basic
        color="grey"
        circular
        icon="shopping bag"
        // visible={visible}
        // onClick={openSidebar}
      ></Button>
    );
}

export default CartWidget;

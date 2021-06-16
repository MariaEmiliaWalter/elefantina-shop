import {React, useState} from 'react';
import {Icon,
Button,
  Grid,
  Menu,
  Sidebar} from "semantic-ui-react";
import "./Header.css";

function CartWidget() {

    // const counter = () =>{
    // --- AÑADIR ITEM A LIST CART + CONTADOR (Como en framer)---
const [visible, setVisible] = useState(false);

    const openSidebar = () => {
      setVisible(!visible);
    };

    return (
      <div>
        <Button
          floated="right"
          style={{ fontSize: "100%" }}
          basic
          color="grey"
          circular
          icon="shopping bag"
          visible={visible}
          onClick={openSidebar}
        ></Button>
        <Grid.Column>
          <Sidebar
            direction="right"
            className="container"
            as={Menu}
            animation="overlay"
            icon="labeled"
            width="big"
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
          >
            <Menu.Item>
              <div>Carrito de compras</div>
            </Menu.Item>
          </Sidebar>
        </Grid.Column>
      </div>
    );
}

export default CartWidget;

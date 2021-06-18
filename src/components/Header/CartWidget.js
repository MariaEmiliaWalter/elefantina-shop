import {React, useState} from 'react';
import {
Button,
  Grid,
  Menu,
  Sidebar} from "semantic-ui-react";
import "./Header.css";
//import ItemCount from '../itemList/itemCount';

function CartWidget() {

  // faltan: inclusión de cards con datos de productos añadidos desde el contador + añadir al carrito 
  //  Extra: Checkout + router hacia esto.

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
            width="wide"
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

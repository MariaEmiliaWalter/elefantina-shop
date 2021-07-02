import {React, useState} from 'react';
import {
Button,
  Grid,
  Menu,
  Sidebar} from "semantic-ui-react";
import "../Header/Header.css";
import Cart from './Cart';

function CartWidget() {

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
                <Cart/>
          </Sidebar>
        </Grid.Column>
      </div>
    );
}

export default CartWidget;

import {React, useState} from 'react';
import {
Button,
  Grid,
  Menu,
  Sidebar} from "semantic-ui-react";
import "../Header/Header.css";
import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';



function CartWidget() {

const [visible, setVisible] = useState(false);
const [active, setActive] = useState(false);

const openSidebar = () => {
      setVisible(!visible);
    };


const onHandleChange = () => {
  if (!isEmpty) {
    setActive(!active);
  }
};

let CartEmpty = <h3> El carrito aún no tiene productos</h3>;

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
        <Grid.Row>
          {(isEmpty)
            ? <h3> El carrito aún no tiene productos</h3>
            : <div>
              <h1> Cart ({totalUniqueItems})</h1>
              <ul>
                {items.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.quantity} x {item.title} &mdash;
                      <button onClick={() => removeItem(item.id)}>&times;</button>
                    </li>
                  )
                })}

              </ul>
              <Link to="/cart" display={active ? "visible" : "hidden"}><Button onChange={onHandleChange}>
                Terminar mi compra
              </Button>
              </Link>
            </div>

          }
            </Grid.Row>
          </Sidebar>
        </Grid.Column>
      </div>
    );
}

export default CartWidget;

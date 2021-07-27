import {React, useState} from 'react';
import {
Button,
  Grid,
  Menu,
  Icon,
  Label,
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


const getItem = () => {
  items.map((item) => {
  items =item.quantity + "x" + item.title;     
    })
};




return (
      <div>
    <Menu.Item as='a'>
          <Button
            compact
            floated="right"
            style={{ fontSize: "100%" }}
            basic
            color="grey"
            circular
            visible={visible}
            onClick={openSidebar}>
              <Icon name="shopping bag"/>
              <Label circular color='teal' floating>
                 {totalUniqueItems}
              </Label>
            </Button>
      </Menu.Item>


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
                      <button onClick={() => removeItem(item.id)}>&times; </button>
                    </li>
                  )
                })}
 
              </ul>
              <Grid.Row>
                <Link to={`/cart/`} display={active ? "visible" : "hidden"}><Button onChange={onHandleChange}>
                Terminar mi compra
              </Button>
              </Link>
                <Button onClick={() => emptyCart(items)}> Borrar carrito</Button>
              </Grid.Row>
            </div>

          }
            </Grid.Row>
          </Sidebar>
        </Grid.Column>
      </div>
    );
}

export default CartWidget;

//${ cartID }
import {React, useState,useContext} from 'react';
import {
Button,
  Grid,
  Menu,
  Icon,
  Label,
  Sidebar,
Card,
Header,
Divider,
} from "semantic-ui-react";
import "../Header/Header.css";
import { useCart } from "react-use-cart";
import { useHistory  } from 'react-router-dom';
import { ItemsContext } from '../Context/ItemsContext';
import { db } from "../Context/Firebase";


function CartWidget() {
let history = useHistory();
const [visible, setVisible] = useState(false);
const [active, setActive] = useState(false);
const { itemsDB } = useContext(ItemsContext);
const [ItemsDB] = itemsDB;


  const [stock, setStock] = useState(Number(0))

const openSidebar = () => {
      setVisible(!visible);
    };


const onHandleChange = () => {
  if (!isEmpty) {
    setActive(!active);
  }
};

const onHandleClick = () =>{
  history.push("/cart");
};

const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

const UpdateStock = (item) =>{
  ItemsDB.filter(i => item.id === i.id).map(filteredItem => {
      setStock(Number(filteredItem.stock));
    console.log("STOCK", filteredItem.stock);
    console.log(stock);
    db.collection('Productos').doc(filteredItem.id).set({ ...filteredItem, stock });
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
              <Divider horizontal>
                <Header as='h4'>
                  DETALLE DE PRODUCTO
                </Header>
              </Divider>
              <ul>
                {items.map((item) => {
                  let price = Number(item.price);
                  let quantity = Number(item.quantity);
                  return (
                    <li key={item.id}>
                      {item.quantity} x {item.title} = ${price*quantity} &mdash;
                      <button onClick={() => { 
                        removeItem(item.id);
                        UpdateStock(item)}
                      }>&times; </button>
                    </li>
                  )
                })}
 
              </ul>

            </div>

          }
            </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Button onChange={onHandleChange} display={active ? "visible" : "hidden"} onClick={onHandleClick}>
            Terminar mi compra
          </Button>
          <Button onClick={() => emptyCart(items)}> Borrar carrito</Button>
          </Grid.Column>
        </Grid.Row>

          </Sidebar>
        </Grid.Column>

      </div>
    );
}

export default CartWidget;


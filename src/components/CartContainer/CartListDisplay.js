import React,{useState} from 'react'
import {useCart} from "react-use-cart";
import { Button,Grid} from "semantic-ui-react";
import { UserContext } from '../Context/UserContext';
import { db } from '../Context/Firebase';
import { Link } from 'react-router-dom';


function CartListDisplay() {
    const [Users, setUsers] = useState(UserContext)
    const [active, setActive] = useState(false);

    const {
        isEmpty,
        totalUniqueItems,
        items,
        removeItem,
        cartTotal,
        emptyCart,
        totalItems,
    } = useCart();


    const onHandleChange = () => {
        if (!isEmpty) {
            setActive(!active);
        }
    };

    const getItem = () => {
        items.map((item) => {
            return item.id;
        })
    };

    const getQuantity = () => {
        items.map((item) => {
            return item.quantity;
        })
    };

    const AddCart = () => {
        db.collection('Ventas').doc().set({
            cantItems: totalUniqueItems,
            items: items,
            total: totalItems,
            precioTotal: cartTotal
        })
        alert("Compra terminada");
        emptyCart(items);
    };

    return(
        <div>
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
                            <Link to="/"><Button display={active ? "visible" : "hidden"} onChange={onHandleChange} onClick={AddCart}>
                                Terminar mi compra
                            </Button></Link>
                            <Button onClick={() => emptyCart(items)}> Borrar carrito</Button>
                        </Grid.Row>
                    </div>

                }
            </Grid.Row>
        </div>
    );
}


export default CartListDisplay;

import React,{useState} from 'react'
import {useCart} from "react-use-cart";
import { Button, Grid, Divider, GridColumn,Header,Icon,Card,Modal,Form,Input} from "semantic-ui-react";
//import { UserContext } from '../Context/UserContext';
import { db } from '../Context/Firebase';
import { useHistory } from 'react-router-dom';

function CartListDisplay() {
    //const [Users, setUsers] = useState(UserContext)
    const [active, setActive] = useState(false);
    const [open, setOpen] = React.useState(false)
    let history = useHistory();

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

//    const Modal = () => {
//        return (
//        <div><Modal
//         as={Form}
//          onClose={() => setOpen(false)}
//         onOpen={() => setOpen(true)}
//         open={open}
//         trigger={AddCart}
//         content='Call Benjamin regarding the reports.'
//         actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
//        />
//         <Modal.Header></Modal.Header>
//         <Modal.Description>
//                    <Input></Input>
//         </Modal.Description>
//                <Modal.Actions>
//                    <Button color='black' onClick={() => setOpen(false)}>
//                        Nope
//                    </Button>
//                    <Button
//                        content="Yep, that's me"
//                        labelPosition='right'
//                        icon='checkmark'
//                        onClick={() => setOpen(false)}
//                        positive
//                    />
//                </Modal.Actions>
//        </div>
//        )
//    };

    const AddCart = () => {
        db.collection('Ventas').doc().set({
            cantItems: totalUniqueItems,
            items: items,
            total: totalItems,
            precioTotal: cartTotal
        })
        emptyCart(items);
        //history.push("/home");
    };

    return(
        <div>
            <Grid centered stackable>
            <Grid.Row>
                {(isEmpty)
                    ? <h3> El carrito aún no tiene productos</h3>
                    : <div>
                            <Divider horizontal>
                                <Header as='h4'>
                                    <Icon name='tag' />
                                    DETALLE DE PRODUCTO:  (Cantidad:{totalItems})
                                </Header>
                            </Divider>
                
                            {items.map((item) => {
                                let price = Number(item.price);
                                let quantity = Number(item.quantity);
                                return (
                                    <Grid container columns={5} >
                                        <Grid.Row>
                                            <GridColumn>
                                                {item.quantity}
                                            </GridColumn>
                                            x
                                            <GridColumn>
                                                {item.title}
                                            </GridColumn>
                                             &mdash;
                                            <GridColumn >
                                                ${price * quantity}
                                            </GridColumn>
                                            <GridColumn>
                                                <button onClick={() => removeItem(item.id)}>borrar item </button>
                                            </GridColumn>
                                    </Grid.Row>
                                        <Divider section />
                                    </Grid>
                                )
                            })}
                            <Grid.Row container >
                            <Card fluid color='teal' > 
                            <Card.Content textAlign="left">
                                <Header>Precio final: $ {cartTotal}
                                </Header>
                                </Card.Content>
                                </Card>
                            </Grid.Row>     
                   </div>
                }
                </Grid.Row>
                                    <Grid.Row>
                            <Button display={active ? "visible" : "hidden"} onChange={onHandleChange} onClick={AddCart}>
                                Terminar mi compra
                            </Button>
                            <Button onClick={() => emptyCart(items)}> Borrar carrito</Button>
                            
                        </Grid.Row>
        </Grid>
        </div>
    );
}


export default CartListDisplay;

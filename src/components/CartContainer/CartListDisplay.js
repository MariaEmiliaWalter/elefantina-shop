import React,{useState,useContext} from 'react'
import {useCart} from "react-use-cart";
import { Button, Grid, Divider, GridColumn,Header,Icon,Card,Modal,Form,Input,Menu} from "semantic-ui-react";
import { db } from '../Context/Firebase';
import { useHistory } from 'react-router-dom';
import { UserContext } from "../Context/UserContext";


function CartListDisplay() {

const Usuario = {
    Usuario: '',
};

    const [active, setActive] = useState(false);
   

    const [Users] =  useContext(UserContext);

    const [UsuarioRegistrado, setUsuarioRegistrado] = useState(Usuario);

    const [open, setOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);

    const {
        isEmpty,
        totalUniqueItems,
        items,
        removeItem,
        cartTotal,
        emptyCart,
        totalItems,
    } = useCart();

    let history = useHistory();

    const onHandleChange = () => {
        if (!isEmpty) {
            setActive(!active);
        }
    };

    const checkUser = (e) => {
        const { name, value } = e.target;
        Users.map((user)=> {
            if (user.Usuario === value ){
            setUsuarioRegistrado({ [name]: value });
        };  
        });
          
    };


   const openModal =() =>{
       setOpen(true);
   };

    const AddCart = async () => {
        await db.collection('Ventas').doc().set({
            CartID: UsuarioRegistrado.Usuario,
            cantItems: totalUniqueItems,
            items: items,
            total: totalItems,
            precioTotal: cartTotal
        })
        emptyCart(items);
        setSecondOpen(true)
    };

    const volverAhome = () => {
        setOpen(false);
        setSecondOpen(false);
        history.push("/home");
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
                                        
                    <Button onChange={onHandleChange} onClick={openModal}> 
                                Terminar mi compra
                            </Button>
                            <Button onClick={() => emptyCart(items)}> Borrar carrito</Button>
                            
                        </Grid.Row>
                        
        </Grid>

            <Modal
                as={Form}
                onClose={() => setOpen(false)}
                open={open}
                // actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
            >
                <Modal.Header>Por favor, reingresa tu usuario para continuar:</Modal.Header>
                    <Modal.Content>
                    <Form>
                    <Form.Field>
                            <Input label="Usuario" value={UsuarioRegistrado.Usuario} name="Usuario" onChange={checkUser}></Input>
                    </Form.Field>
                    </Form> 
                    <Modal.Description>
                        <Grid>
                            <Grid.Column >
                                <Header style={{ marginTop: "1rem", }}>Su ticket:</Header>
                                <Grid.Row style={{ marginBottom: "1rem", marginTop: "1rem", }}>
                                <Menu fluid vertical >
                                    <Menu.Item >Cantidad de items: {totalItems}</Menu.Item>
                                    <Menu.Item >Precio Final: $ {cartTotal}</Menu.Item>
                                </Menu>
                            </Grid.Row>
                            </Grid.Column>
                        </Grid>
                    </Modal.Description>
                </Modal.Content>
               
                <Modal.Actions>
                    <Button color='black' onClick={() => setOpen(false)}>
                       Ups! quiero seguir comprando...
                    </Button>
                    <Button
                        labelPosition='right'
                        icon='checkmark'
                        onClick=  {AddCart}
                        positive
                    >¡Listo!</Button>
                </Modal.Actions>


                <Modal
                    onClose={() => setSecondOpen(false)}
                    open={secondOpen}
                    size='small'
                >
                    <Modal.Header>¡Gracias por tu compra!</Modal.Header>
                    <Modal.Content>
                        <p>Pss...Te enviaremos nuevamente a Home para que sigas navegando</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            icon='check'
                            content='Listo'
                            onClick={volverAhome}
                        />
                    </Modal.Actions>
                </Modal>

            </Modal>

        </div>
    );
}


export default CartListDisplay;


// display = { active? "visible": "hidden" }
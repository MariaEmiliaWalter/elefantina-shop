import React,{useState} from 'react';
import {
    Grid, Form, Button, Input, Image,Icon,Modal
} from "semantic-ui-react";
import { db } from '../components/Context/Firebase';
import "../App.css";
import imgContacto from "../assets/contact.jpg";

function Contact() {
    const initialState = {
        Nombre: '',
        Email: '',
        Mensaje: '',
    };

    const [Consulta, setConsulta] = useState(initialState);
    const [Complete, setComplete] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [open, setOpen] = useState(false);

    const FormComplete = () => {
        if (Consulta.Email != null && Consulta.Mensaje != null && Consulta.Nombre != null) {
            setComplete(true);
            setDisabled(!disabled);
        }
    };

 
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setConsulta({ ...Consulta, [name]: value });
        FormComplete();
    };
    
    const AddConsulta = (object) => {
        db.collection('Consultas').doc().set(object);
    };

    const openModal = () => {
        setOpen(true);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        AddConsulta(Consulta);
        setConsulta({ ...initialState });
        openModal();
    };



    return (
        <div>
            <Grid className="ContactGrid" stackable centered>
                <Grid.Column width={4}>
                    <Grid.Row className="InfoRow">
                        <h2>Puedes contactar con nosotros a través de:</h2>
                    </Grid.Row>
                    <Grid.Row className="InfoRow">
                        <Icon name="phone"/> 930189787
                    </Grid.Row>
                    <Grid.Row className="InfoRow">
                      <Icon name="whatsapp"/> 632414221
                    </Grid.Row>
                    <Grid.Row className="InfoRow">
                        <h2>o envíanos un correo:</h2>
                    </Grid.Row>
                    <Grid.Row >
                        <Form onSubmit={handleOnSubmit} >
                        <Form.Field
                            className="FormContact"
                            required
                            id='form-input-user'
                            control={Input}
                            label='Nombre'
                            name='Nombre'
                            value={Consulta.Nombre}
                            onChange={handleOnChange}
                        />

                        <Form.Field 
                            className="FormContact"
                             required
                            id='form-input-control-email'
                            control={Input}
                            label='Email'
                            name='Email'
                                value={Consulta.Email}
                            
                            onChange={handleOnChange}
                        />
                        <Form.TextArea required
                         style={{ minHeight: 100 }}
                            id='form-input-message'
                            type="text"
                            label='Mensaje'
                             name='Mensaje'
                             value={Consulta.Mensaje}
                             onChange={handleOnChange}
                        />

                        <Form.Field
                            id='form-button-control'
                            control={Button}
                            content='Enviar consulta'
                            type='submit'
                            disabled={disabled}
                            onClick={handleOnSubmit}
                        />
                    </Form>
                    </Grid.Row>
                </Grid.Column>
                <Grid.Column width={4} only="computer tablet">
                    <Image src={imgContacto}/>
                 </Grid.Column>
            </Grid>

            <Modal
                onClose={() => setOpen(false)}
                open={open}
                size='small'
                >
                <Modal.Header>¡Gracias por tu consulta!</Modal.Header>
                <Modal.Content>
                    <p>Te enviaremos nuevamente hacia atrás para que sigas navegando</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        icon='check'
                        content='Listo'
                        onClick={() => setOpen(false)}
                    />
                </Modal.Actions>
            </Modal>


        </div>
    )
}

export default Contact

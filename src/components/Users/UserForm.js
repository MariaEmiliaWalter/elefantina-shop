import React, {useState} from 'react';
import {
    Button,
    Form,
    Input,
    Grid,
    Header,
} from "semantic-ui-react";
import { useHistory } from 'react-router-dom';
import { db } from '../Context/Firebase';


function UserForm() {
const [disabled,setDisabled ] = useState(false);
const [IsLogged, setIsLogged] = useState(false)
let history = useHistory();
const initialState = {
        Nombre: '',
        Apellido: '',
        Usuario: '',
        Email: '',
        Contraseña: '',
        IsLogged,
};


const [User, setUser] = useState(initialState);


    const handleOnChange = (e) => {
        setIsLogged(!IsLogged);
        const { name, value } = e.target;
        setUser({ ...User, [name]: value });
    };


    const AddUser = (object) => {
        db.collection('Usuarios').doc(User.Usuario).set(object);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        AddUser(User);
        history.push("/home");
        //setUser({ ...initialState });
    };

    
    return (
        <div>
            <Header>¡Hola, gracias por ser parte de nuestra comunidad!</Header>
            <Grid centered>
                <Grid.Column width={8}>
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Field required
                                id='form-input-control-first-name'
                                control={Input}
                                label='Nombre'
                                name='Nombre'
                                placeholder='Nombre'
                                value={User.Nombre}
                                onChange={handleOnChange}
                            />
                            <Form.Field required
                                id='form-input-control-last-name'
                                control={Input}
                                label='Apellido'
                                name='Apellido'
                                placeholder='Apellido'
                                value={User.Apellido}
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                        <Form.Field required
                            id='form-input-user'
                            control={Input}
                            label='Usuario'
                            name='Usuario'
                            value={User.Usuario}
                            placeholder='Elefantina258'
                            onChange={handleOnChange}
                        />

                        <Form.Field required
                            id='form-input-control-email'
                            control={Input}
                            label='Email'
                            name='Email'
                            value={User.Email}
                            placeholder='elefantina.shop@gmail.com'
                            onChange={handleOnChange}
                        /> 
                        <Form.Field required
                            id='form-input-password'
                            type="password"
                            control={Input}
                            label='Contraseña'
                            name='Contraseña'
                            value={User.Contraseña}
                            placeholder='password123'
                            onChange={handleOnChange}
                        />

                        <Form.Checkbox
                            inline
                            label='I agree to the terms and conditions'
                            required
                            onChange={()=>setDisabled(!disabled)}
                            checked={!disabled}
                           
                        />
                        <Form.Field
                            id='form-button-control-public'
                            control={Button}
                            content='Entrar'
                            disabled={disabled}
                            type='submit'
                            onClick={handleOnSubmit}
                        />
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default UserForm


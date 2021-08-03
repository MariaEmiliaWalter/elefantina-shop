import React, { useContext, useState } from 'react';
import {
    Button,
    Form,
    Input,
    Grid,
    Header,
    Message
} from "semantic-ui-react";
import { useHistory } from 'react-router-dom';
//import { UserContext } from '../Context/UserContext';

function Login() {
    const [disabled, setDisabled] = useState(false);
    const [IsLogged, setIsLogged] = useState(false)
    let history = useHistory();
    //const Usuarios = useContext(UserContext);

    const initialState = {
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


    const handleOnSubmit = (e) => {
        e.preventDefault();
        history.push("/home");
        // } else {
        //     return(
        //     <Message negative>
        //     <Message.Header>Datos inconrrectos</Message.Header>
        //     <p>Por favor, vuelve a escribir los datos correctamente o intenta registrándote</p>
        // </Message>
        // )}
       setUser({ ...initialState });
    };



    return (
        <div>
    <Header style={{marginBottom: "2rem" }}>¡Bienvenido de nuevo! </Header>
        <Grid centered>
            <Grid.Column width={6}>
                <Form onSubmit={handleOnSubmit}>
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
                        onChange={() => setDisabled(!disabled)}
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

export default Login

import React, {  useState } from 'react';
import {
    Button,
    Form,
    Input,
    Grid,
    Header,
} from "semantic-ui-react";
import { useHistory } from 'react-router-dom';
//import Session from 'react-session-api';



function Login() {
    const [disabled, setDisabled] = useState(false);
    const [IsLogged, setIsLogged] = useState(false)
    let history = useHistory();
    const initialState = {
        Usuario: '',
        Email: '',
        Contraseña: '',
        IsLogged,
    };
    const [User, setUser] = useState(initialState);
    //const [ActiveUser, setActiveUser] = useState("")


    const handleOnChange = (e) => {
        setIsLogged(!IsLogged);
        const { name, value } = e.target;
        setUser({ ...User, [name]: value });
        //setActiveUser(User.Usuario)
    };
    
    
    // const activacion = (data) => {
    //     setActiveUser({ ActiveUser: data["ActiveUser"] });

    // };
 
   
    const handleOnSubmit = (e) => {
        e.preventDefault();
        history.push("/home");

        //INTENTO DE GUARDAR LA SESIÓN CON UNA REACT-SESSION-API POR NPM:

        // Session.onSet(activacion); 
        // let userGuardado = Session.get("ActiveUser");
        // console.log("prueba",userGuardado)
       
        //MENSAJE EN CASO DE QUE NO ESTÉ GUARDADO EN SISTEMA:

        // } else {
        //     return(
        //     <Message negative>
        //     <Message.Header>Datos inconrrectos</Message.Header>
        //     <p>Por favor, vuelve a escribir los datos correctamente o intenta registrándote</p>
        // </Message>
        // )}
        

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

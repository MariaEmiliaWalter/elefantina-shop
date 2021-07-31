import { useParams } from 'react-router';
import React from 'react';
import UserForm from '../components/Users/UserForm';
import Ingresar from '../components/Users/Login';


function Login() {

   const { Estado } = useParams();
    
    let registrar = "registrar";
    const Condicion = (Estado === registrar);

    return (
        <div>
            <h1>Ingreso</h1>
            {Condicion ? <UserForm /> : <Ingresar />  }
    </div>
    )
}

export default Login


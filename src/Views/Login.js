import { useParams } from 'react-router';
import React from 'react';
import UserForm from '../components/Users/UserForm';
import Ingresar from './Login';


function Login() {
    let { Estado } = useParams();
    
    let registrar = "registrar";
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const IsLogin = () =>{
    //     if ({Key} === "registrar") {
    //      setIsLoggedIn(!isLoggedIn);
    //     };
    // };
    return (
        <div>
            <h1>Ingreso</h1>
        <div>
            {
            (Estado === registrar)
            ? 
            <UserForm /> 
            : 
            <Ingresar/>}
        </div>
    </div>
    )
}

export default Login

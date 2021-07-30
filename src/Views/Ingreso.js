import React,{useState} from 'react';
import UserForm from '../components/Users/UserForm';
import { UserContext } from '../components/Context/UserContext';

//Semnatic UI
import {
    Button, Header
} from 'semantic-ui-react'



const LoginIn = (
  <UserForm/>  
);



// const Buttons = (
//      <Button onClick="">
//                 Ingresar
//             </Button>
//             <Button key="register" onClick={LoginIn} >
//                 Registrarse
//             </Button>
// );
    



function Ingreso() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [Users, setUsers] = useState(UserContext)

    const onHandleClick = () =>{
        
    };

    return (
        <div>
            <Header>Bienvenido</Header>
            <Button onClick="">
                Ingresar
            </Button>
            <Button key="register" onClick={LoginIn} >
                Registrarse
            </Button>
        </div>
        
    )
}

export default Ingreso

import React,{useState} from 'react';

//imagenes
import logo from '../assets/ingreso-03.jpg'
import logotipo from '../assets/ingreso-04.jpg'
//React Router
import { Link } from 'react-router-dom';
import '../App.css';

//Semnatic UI
import {
    Button, Grid, Image
} from 'semantic-ui-react';



function Ingreso() {


    const [Estado, setEstado] = useState("");

    const KeyButton = (e) => {
        const { name } = e.target;
        setEstado(name);
    };


    return (
        <div>
            <Grid verticalAlign='middle' centered>
                <Grid.Row>
                    <Grid.Column computer={8} tablet={12} mobile={16} className="btn-ingreso">
                        <Image src={logo}></Image>
                        <Button.Group size='big' className="btn-group" >
                            <Link to={`/Login/${Estado}`} onMouseOver={KeyButton} onClick={KeyButton}>
                                <Button  className="btn2" name="ingresar" key="ingresar" value={Estado}>
                            INGRESAR
                        </Button>
                        </Link>  
                            <Button.Or text='O'/>
                            <Link to={`/Login/${Estado}`} onMouseOver={KeyButton} onClick={KeyButton}>
                                <Button  className="btn2" name="registrar" key="registrar" value={Estado}>
                                REGISTRARSE
                            </Button>
                            </Link>
                        </Button.Group>

                </Grid.Column>
                    <Grid.Column computer={8} tablet={12} mobile={16}>
                        <Image src={logotipo}></Image>          
                </Grid.Column>
                </Grid.Row>     
          </Grid> 
            </div>
    )
}

export default Ingreso

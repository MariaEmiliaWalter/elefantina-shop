import React,{useState, useEffect} from 'react';

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

    useEffect(() => {
        KeyButton();
    }, []);

    return (
        <div>
            <Grid verticalAlign='middle' centered>
                <Grid.Row>
                    <Grid.Column width={8} className="btn-ingreso">
                        <Image src={logo}></Image>
                        <Button.Group className="btn-group">
                            <Link to={`/Login/${Estado}`}>
                                <Button className="btn2" name="ingresar">
                            INGRESAR
                        </Button>
                        </Link>  
                            <Button.Or text='O'/>
                            <Link to={`/Login/${Estado}`}>
                                <Button className="btn2" name="registrar">
                                REGISTRARSE
                            </Button>
                            </Link>
                        </Button.Group>

                </Grid.Column>
                    <Grid.Column width={8}>
                        <Image src={logotipo}></Image>          
                </Grid.Column>
                </Grid.Row>     
          </Grid> 
            </div>
    )
}

export default Ingreso

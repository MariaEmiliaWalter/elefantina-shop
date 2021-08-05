import React from 'react';
import {
    Grid, Image, Header
} from "semantic-ui-react";
import nosotros from "../../assets/nosotros.jpg";
import './NosotrosTips.css';


function Nosotros() {
    return (
        <div> 
            <Grid celled='internally' centered stackable>
                <Grid.Row className="NosotrosRow">
                    <Grid.Column width={4}>
                        <Image scr={nosotros}></Image>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header className="Header"><h1>QUIENES SOMOS</h1></Header>
                        <h3 className="h3">Somos una tienda online de ropa para chicos, desde su nacimiento hasta los 10 años, dedicada al cuidado de los más pequeños, nuestro equipo lleva años en el sector, para ofrecerte asesoramiento en la lista de nacimiento, primeras mudas, bebés prematuros, moda infantil y mucho más. Somos expertos en canastilla y moda infantil, trabajando con las mejores marcas del mercado español.
                            Con nosotros encontrarás un trato cercano: comunicación fluida
                            con cualquiera de nuestros expertos, ya sea por teléfono, whatsapp o
                            e-mail, siempre atentos a cualquiera de tus dudas.</h3>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}

export default Nosotros

import React, { useContext } from 'react';
import {
    Grid,Image,Header
} from "semantic-ui-react";
import imgHome from '../../assets/home-02.jpg';
import ItemCard from '../itemList/ItemCard';
import { ItemsContext } from '../Context/ItemsContext';

function Section() {
    const [Items] = useContext(ItemsContext);

    return (
        <div>
            <Image src={imgHome} ></Image>
            <Header style={{marginBottom:"2rem", marginTop: "2rem"}}><h1>OFERTAS</h1></Header>
            <Grid.Column className="displayGroup">
                <Grid stackable >
            {Items.map((item) => {
                if (item.OnSale === "true") {
                    return (
                        <Grid.Column computer={4} tablet={4} mobile={8}>
                              <ItemCard items={item} key={item.id} />
                        </Grid.Column>
                    )
                }
            })  } 
        </Grid>
     </Grid.Column>
           
        </div>
    )


        

}

export default Section

import React, { useContext } from 'react';
import {
    Grid,Image,Header
} from "semantic-ui-react";
import imgHome from '../../assets/home-02.jpg';
import ItemCard from '../itemList/ItemCard';
import { ItemsContext } from '../Context/ItemsContext';
import LoaderCentered from '../Context/LoaderCentered';
import './Section.css';


function Section() {
    const { itemsDB, IsLoading } = useContext(ItemsContext);
    const [Items] = itemsDB;
    const [Loader] = IsLoading;

    //PRODUCTOS ON SALE
    const ItemsOnSale = (
            Items.map((item) => {
                if (item.OnSale === "true") {
                    return (
                        <Grid.Column computer={4} tablet={8} mobile={8}>
                            <ItemCard items={item} key={item.id} />
                        </Grid.Column>
                    )
                }
            })
        
    );

    return (
        <div>
        <Grid className="displayGroup" >
            <Image src={imgHome} className="imgHome"></Image>
             <div> {Loader ? <LoaderCentered /> : null} </div>
                <Grid.Row>
                <Grid.Column width={13} >
                <Header><h1 className="titleHome">¡NUESTRAS NUEVAS OFERTAS!</h1></Header>
                <Grid stackable>
                     {ItemsOnSale} 
                 </Grid>
         </Grid.Column>   
     </Grid.Row>
    </Grid>
</div>
    )


        

}

export default Section

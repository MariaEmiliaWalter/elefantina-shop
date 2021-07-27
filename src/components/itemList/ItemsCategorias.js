import React, { useState, useContext } from 'react';
import "./ItemListContainer.css";
import { Grid, GridColumn} from "semantic-ui-react";
import { ItemsContext } from '../Context/ItemsContext';
import ItemCard from './ItemCard';


function ItemsCategorias({Categoria}) {

 const [Items, setItems] = useContext(ItemsContext);

const ItemsPorCategoria = (
        Items.map((item) => {
            if (Categoria === item.Categoria) {
                return (
            <Grid.Column computer={4} tablet={4} mobile={8}>
                <ItemCard items={item} key={item.id} />
            </Grid.Column>
            )
        }
    })
);

    return (
        <Grid className="displayGroup" >
            <Grid.Row>
                <GridColumn only='computer' width={3} style={{ height: "100%" }} >
                </GridColumn>
                
                <Grid.Column width={13}>
                    <Grid stackable >
                        {ItemsPorCategoria}
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );

}

export default ItemsCategorias

import React from 'react';
import "./ItemListContainer.css";
import { Grid, GridColumn} from "semantic-ui-react";
import ItemCard from './ItemCard';


function ItemsCategorias({ item }) {
    return (
                      <Grid.Column computer={4} tablet={4} mobile={8}>
                            <ItemCard items={item} key={item.id} />
                        </Grid.Column>
    );

}

export default ItemsCategorias

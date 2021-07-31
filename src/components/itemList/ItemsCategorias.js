import React from 'react';
import "./ItemListContainer.css";
import { Grid, GridColumn} from "semantic-ui-react";
import ItemCard from './ItemCard';


function ItemsCategorias({ item }) {
    return (
        <Grid className="displayGroup" >
            <Grid.Row>
                <GridColumn only='computer' width={3} style={{ height: "100%" }} > </GridColumn>

                <Grid.Column width={13}>
                    <Grid stackable >
                        <Grid.Column computer={4} tablet={4} mobile={8}>
                            <ItemCard items={item} key={item.id} />
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );

}

export default ItemsCategorias

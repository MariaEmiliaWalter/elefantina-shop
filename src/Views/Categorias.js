import React, { useContext } from 'react';
import ItemsCategorias from "../components/itemList/ItemsCategorias";
import { ItemsContext } from '../components/Context/ItemsContext';
import { useParams }from "react-router-dom";
import { Grid, GridColumn } from "semantic-ui-react";

function Categorias() {

    const { Categoria } = useParams()

    const [Items] = useContext(ItemsContext);

    return (
        <div >
            <h1>Categorias</h1>
            <div>
                <Grid className="displayGroup" >
                    <Grid.Row>
                        <GridColumn only='computer' width={3} style={{ height: "100%" }} > </GridColumn>
                        <Grid.Column width={13}>
                            <Grid stackable >
            { Items.map((item) => {
                        if (item.Categoria === Categoria) {
                            return (
                                <ItemsCategorias item={item}/>
                            );
                        };
                    })

                } </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    )
}

export default Categorias


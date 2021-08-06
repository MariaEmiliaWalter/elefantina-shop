import React, { useContext,useState } from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Grid, GridColumn} from "semantic-ui-react";
import {ItemsContext} from '../Context/ItemsContext';
import LoaderCentered from '../Context/LoaderCentered';


function ItemListContainer() {
  const { items, IsLoading } = useContext(ItemsContext);
  const [Items] = items;
  const [Loader] = IsLoading;
  
  
//TODOS LOS PRODUCTOS
  const ItemsInicial = (
    Items.map((item) => (
      <Grid.Column computer={4} tablet={8} mobile={8}>
          <ItemCard items={item} key={item.id} />
      </Grid.Column>
      )
    )
  );


//RETORNO
  return (  
    <Grid className="displayGroup" >
      <div> {Loader ? <LoaderCentered /> : null} </div>
      <Grid.Row>
        <Grid.Column width={13}> 
          <Grid stackable >
            {ItemsInicial }
        </Grid>
        </Grid.Column>
    </Grid.Row>
        </Grid>
  );
}

export default ItemListContainer;



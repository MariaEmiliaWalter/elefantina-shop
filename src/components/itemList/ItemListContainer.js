import React, { useContext } from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Grid, GridColumn} from "semantic-ui-react";

import {ItemsContext} from '../Context/ItemsContext';




function ItemListContainer() {
  const [Items] = useContext(ItemsContext);


//TODOS LOS PRODUCTOS
  const ItemsInicial = (
    Items.map((item) => (
      <Grid.Column computer={4} tablet={4} mobile={8}>
        <ItemCard items={item} key={item.id} />
      </Grid.Column>
      )
    )
  );



//RETORNO
  return (  
    <Grid className="displayGroup" >
      <Grid.Row>
      <GridColumn only='computer' width={3} style={{height: "100%"}} >
         
      </GridColumn>
        
        <Grid.Column width={13}> 
          <Grid stackable >
            {ItemsInicial}
        </Grid>
        </Grid.Column>
    </Grid.Row>
        </Grid>
  );
}

export default ItemListContainer;



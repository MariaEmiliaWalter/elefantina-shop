import React, { useState, useEffect,useContext } from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Grid, GridColumn,Segment,Header} from "semantic-ui-react";

import {ItemsContext} from '../Context/ItemsContext';



function ItemListContainer() {
  const [Items, setItems] = useContext(ItemsContext);


  return (
    
    <Grid className="displayGroup" >
      <Grid.Row>
      <GridColumn only='computer' width={3} style={{height: "100%"}} >
      <Segment>
           hacer submenu filtro
      </Segment>
          <Segment>
            <Header>OFERTAS</Header>
            {Items.map((item) => {
              if (item.OnSale === "true") {
                return (
                  <Grid stackable >
                  <Grid.Column>
                    <ItemCard items={item} key={item.id} />
                  </Grid.Column>
                </Grid>)
            }}
            )}
        </Segment>
    </GridColumn>
        
        <Grid.Column width={13}>
          
          <Grid stackable >
            {
              Items.map((item) => (
               <Grid.Column computer={4} tablet={4} mobile={8}>
                  <ItemCard items={item} key={item.id} />
                </Grid.Column>
        ))
        }  
        </Grid>
        </Grid.Column>
    </Grid.Row>
        </Grid>
  );
}

export default ItemListContainer;


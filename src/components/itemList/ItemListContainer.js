import React, { useState, useEffect } from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Grid, GridColumn,Segment,Header} from "semantic-ui-react";
import items from "../../assets/db";


function ItemListContainer() {

  const [data, setData] = useState([]);

useEffect(() => {
  setData(items.itemsData)
}, []);


  return (
    
    <Grid className="displayGroup" >
      <Grid.Row>
      <GridColumn only='computer' width={3} style={{height: "100%"}} >
      <Segment>
           hacer submenu filtro
      </Segment>
          <Segment>
            <Header>OFERTAS</Header>
            { data.map((item) => {
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
              data.map((item) => (
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


//computer = { 4} tablet = { 8} mobile = { 16} width = { 13}       <Card.Group centered className="ui stackable cards displayGroup">
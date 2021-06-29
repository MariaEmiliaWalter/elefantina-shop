import React, { useState, useEffect } from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Grid, GridColumn,Segment,Header} from "semantic-ui-react";
import items from "../../assets/db.json";


function ItemListContainer() {

  const [data, setData] = useState([]);
  console.log(data);

useEffect(() => {
  setData(items)
}, []);


  return (
    
    <Grid className="displayGroup" >
      <Grid.Row>
      <GridColumn only='computer tablet' width={3} style={{height: "100%"}} >
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
        <Grid.Column width={13}>{
              data.map((item) => (
                <Grid stackable >
                    <Grid.Column computer={4} tablet={8} mobile={16}>
                    <ItemCard items={item} key={item.id} />
                      </Grid.Column>
                </Grid>
        ))}
        </Grid.Column>
    </Grid.Row>
        </Grid>
  );
}

export default ItemListContainer;


//computer = { 4} tablet = { 8} mobile = { 16} width = { 13}       <Card.Group centered className="ui stackable cards displayGroup">
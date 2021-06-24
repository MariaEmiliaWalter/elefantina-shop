import React, { useState, useEffect, setError } from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Grid } from "semantic-ui-react";


function ItemListContainer() {

  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/994862f1-a497-4a62-8200-150b89a37070")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, []);

  return (
    <Grid className="displayGroup"  >
      {data.map((item) => (
        <Grid.Column computer={4} tablet={8} mobile={16} >
          <ItemCard items={item} key={item.id} />
        </Grid.Column>
      )
      )} </Grid>
  );
}

export default ItemListContainer;

//centered computer={4} tablet={5} mobile={16} 
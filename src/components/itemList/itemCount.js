import { React, useState } from "react";
import { Label, Button, Grid,Card } from "semantic-ui-react";

function ItemCount({ stockInicial }) {


  const [counter, setCounter] = useState(0);
  const [stock, setStock] = useState(Number(stockInicial));


  const sumarItems = () => {
    if ((stock >= counter) || (stock >= 1)) {
      setCounter(counter + 1);
      setStock(stock - 1)
    }
  };

  const RestarItems = () => {
    if ((counter >= stock) || (counter >= 1)) {
      setCounter(counter - 1);
      setStock(stock + 1)
    }
  };

  /* const sinStock = () => {
  if ( stock = 0){
    document.getElementsByClassName("stockDisponible").textContent = "No hay más stock disponible"
  } else {
    document.getElementsByClassName("stockDisponible").textContent = "Stock disponible: {stock}"
  }
  }; */


  return (
      <Grid>
     <Grid.Column>
       <Card>
         <Card.Content>
           <Button
        circular
        basic
        icon="minus"
        onClick={RestarItems}
      ></Button>
            <Label className="ui counter">{counter}</Label>
       <Button
        circular
        basic
        icon="plus"
        onClick={sumarItems}
      ></Button></Card.Content>
     
       <Card.Meta id="stockDisponible" > Stock disponible: {stock} </Card.Meta>
       </Card>
    </Grid.Column>
    </Grid>
  );
}

export default ItemCount;




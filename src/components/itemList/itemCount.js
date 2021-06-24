import { React, useState } from "react";
import { Label, Button } from "semantic-ui-react";

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
    <div>
      <div id="stockDisponible" > Stock disponible: {stock} </div>
      <Button
        basic
        icon="minus"
        onClick={RestarItems}
      ></Button>
      <Label className="ui counter" content={counter}></Label>
      <Button
        basic
        icon="plus"
        onClick={sumarItems}
      ></Button>
    </div>
  );
}

export default ItemCount;




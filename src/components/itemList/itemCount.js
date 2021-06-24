import { React, useState } from "react";
import { Label, Button } from "semantic-ui-react";

function ItemCount() {
  const [counter, setCounter] = useState(0);

  //let VariableStockInicial = stockInicial;

  const [stock, setStock] = useState(4);


  const sumarItems =() =>{
    if ((stock >= counter) || (stock >= 1)) {
    setCounter(counter + 1);
    setStock(stock - 1)
      }
  };

  const RestarItems = () => {
    if ((counter >= stock) || (counter >= 1)) {
      setCounter(counter - 1); 
      setStock(stock+1)
    }
  };

  return (
    <div>
      <div> Stock disponible: {stock} </div>
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
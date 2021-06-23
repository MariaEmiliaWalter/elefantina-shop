import { React, useState } from "react";
import { Label, Button } from "semantic-ui-react";



function ItemCount (stockInicial) {
 const [counter, setCounter] = useState(0);

/* const hi = () => { $( "button" ).click(function() {
  $( "p" ).toggle( "slow" );
}) } */
  const [stock, setStock] = useState({stockInicial});

  const StockDisponible = () => { setStock( stock - 1) };

  
  return (
    <div>
      <div> Stock disponible: {stock} </div>
      <Button
        basic
        icon="minus"
        onClick={() => {
          if (counter >= 1) {
            setCounter(counter - 1);
          }
        }}
      ></Button>
      <Label className="ui counter" content={counter}></Label>
      <Button
        basic
        icon="plus"
        onClick={() => {
          if ( {stock} > {counter} ) {
            setCounter(counter + 1);
            StockDisponible();
          }
        }}
      ></Button>
    </div>
  );
}

export default ItemCount;

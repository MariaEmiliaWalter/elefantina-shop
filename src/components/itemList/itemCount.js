import { React, useState } from "react";
import { Label, Button, Grid,Card } from "semantic-ui-react";
import { useCart } from "react-use-cart";
import { ItemsContext } from '../Context/ItemsContext';



function ItemCount({Product}) {
  let StockInicial = Product.stock;
  const { addItem } = useCart();
  const [counter, setCounter] = useState(0);
  const [stock, setStock] = useState(Number(StockInicial));
  const [Quantity, setQuantity] = useState(0);
  const [Active, setActive] = useState(true);

  const sumarItems = () => {
    if ((stock >= counter) || (stock >= 1)) {
      setCounter(counter + 1);
      setQuantity(counter);
      setStock(stock - 1);
     };
  };

  const RestarItems = () => {
    if ((counter >= stock) || (counter >= 1)) {
      setCounter(counter - 1);
      setQuantity(counter);
      setStock(stock + 1);
      };
  };


  let addQuantity = Number(Quantity);

 
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
     
       <Card.Meta id="stockDisponible"> Stock disponible: {stock} </Card.Meta>

          <Button id="CartButton"
            type="submit"
            onClick={() => { 
              addItem(Product, addQuantity);
              setStock((stock) - (addQuantity));
              setCounter(0);
              } 
            }
            className={Active ? "active" : "disabled" }
          > { Active ? 
            "Añadir al carrito" 
            : "No hay más stock"

          }</Button>
       </Card>
    </Grid.Column>
    </Grid>
  );
}

export default ItemCount;




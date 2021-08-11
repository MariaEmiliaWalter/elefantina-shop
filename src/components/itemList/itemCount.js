import React,{ useState } from "react";
import { Label, Button, Grid,Card } from "semantic-ui-react";
import { db } from "../Context/Firebase";
import { useCart } from "react-use-cart";


function ItemCount({Product}) {
  let StockInicial = Product.stock;
  const { addItem } = useCart();
  const [counter, setCounter] = useState(0);
  const [stock, setStock] = useState(Number(StockInicial));
  const [Quantity, setQuantity] = useState(0);
  const [Active] = useState(true);

  let ItemID = Product.id;

  const sumarItems = () => {
    if ((stock >= counter) || (stock >= 1)) {
      setCounter(counter + 1);
      setStock(stock - 1);
      setQuantity(Number(Quantity) + 1);
     };
  };

  const RestarItems = () => {
    if ((counter >= stock) || (counter >= 1)) {
      setCounter(counter - 1);
      setStock(stock + 1);
      setQuantity(Number(Quantity)-1);
      };
  };

const EditData = () => {
  //let ItemID = Product.id;
  //FALTA SETEAR STOCK NUEVAMENTE SI CANCELO EN EL CARRITO
  db.collection('Productos').doc(ItemID).set({ ...Product, stock})
};


const onHandleSubmit = () => {
    addItem(Product, Number(Quantity));
    //console.log("ADD ITEM", Product, Number(Quantity))
    EditData();
    setCounter(0);
    setQuantity(0);
};


  return (
      <Grid>
     <Grid.Column>
       <Card key={ItemID}>
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
            type="button"
            onClick={onHandleSubmit}
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




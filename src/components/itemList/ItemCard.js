import { React,useState,initialState,setTimeOut} from "react";
import {
 Card, Image,Button, Grid
} from "semantic-ui-react";
import "./ItemListContainer.css";
import ItemCount from "./itemCount";
//import { ItemsData } from './ItemsData';

function ItemCard ({ItemsData}) {

  //const [isTextChanged, setIsTextChanged] = React.useToggle();
  const [isTextChanged, setIsTextChanged] = useState(`Añadir al carrito`);
const ChangeText = (function() {
   
  setIsTextChanged((isTextChanged) => `Listo`);
});

    return (
      <div>
          <Card.Group centered className="ui stackable cards">
            {ItemsData.map((items) => {
              return (
                <Card key={items.id} className="ItemCard card">
                  <div>
                    <a href="#" className="ui left corner label">
                      <i className="heart icon"></i>
                    </a>
                    <Image
                      src={items.img}
                      wrapped
                      ui={false}
                      className="img_style"
                    />
                  </div>
                  <Card.Content>
                    <Card.Header>{items.title}</Card.Header>
                    <Card.Meta>$ {items.price}</Card.Meta>
                    <Card.Description>{items.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <ItemCount />
                    <Button
                      key={items.id}
                      inverted
                      color="brown"
                      type="submit"
                      className="ui button"
                      onClick={ChangeText}
                    >
                      {isTextChanged}
                    </Button>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
      </div>
    );
}

export default ItemCard;



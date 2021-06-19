import { React,useState } from "react";
import {
 Card, Image,Button
} from "semantic-ui-react";
import "./ItemListContainer.css";
import ItemCount from "./itemCount";
//import { ItemsData } from './ItemsData';

function ItemCard ({ItemsData}) {

  //const [isTextChanged, setIsTextChanged] = React.useToggle();
  const [isTextChanged, setIsTextChanged] = useState(`Añadir al carrito`);
const ChangeText = () => { setIsTextChanged ( isTextChanged => `Listo`) }

    return (
      <div>
        {ItemsData.map ((items) => {
            return (
              <Card key={items.id} className="ItemCard">
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
                  <Button key={items.id}
                    inverted
                    color="brown"
                    className="ui button"
                    onClick={ChangeText}>{isTextChanged}
                  </Button>
                </Card.Content>
              </Card>
            );
            })}
      </div>
    );
}

export default ItemCard;




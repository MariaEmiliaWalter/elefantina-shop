
import React, {useState,setTimeOut} from "react";
import {
 Card, Image,Button
} from "semantic-ui-react";
import "./ItemListContainer.css";
import ItemCount from "./itemCount";


function ItemCard({items}) {
  const [isTextChanged, setIsTextChanged] = useState(`Más información`);


  const handleClick = () => {
    setTimeout(() => {
      setIsTextChanged()
    }, 1000);
  };

  return (
        <div>
      <Card.Group centered className="ui stackable cards">
        <Card key={items.id} className="ItemCard card">
          <div>
            <Image
              src={items.imagen}
              ui={false}
              className="img_style"
            />
            <a href="#" className="ui left corner label">
              <i className="heart icon"></i>
            </a>
            
            <a href="#" className="ui center">
              <Button
                circular
                icon="shopping bag"
                basic
                color="grey"
                type="submit"
                className="BtnBag"
              ></Button>
            </a>
          </div>
          <Card.Content>
            <Card.Header>{items.title}</Card.Header>
            <Card.Meta>$ {items.price}</Card.Meta>
            <Card.Description>{items.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <ItemCount key={items.id}/>
            <Button
              key={items.id}
              inverted
              color="brown"
              type="submit"
              className="ui button"
              content={isTextChanged ? `Más información` : `Más info`}
              onClick={handleClick}
            ></Button>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default ItemCard;

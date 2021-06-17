import React from 'react'
import {
 Card, Image, Icon,
} from "semantic-ui-react";
import "./ItemListContainer.css";




function ItemCard (props) {
    return (
      <div>
        <Card className="ItemCard">
          <Image src={props.img} wrapped ui={false} className="img_style" />
          <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>{props.price}</Card.Meta>
            <Card.Description>{props.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="price" />
            {props.price}
          </Card.Content>
        </Card>
      </div>
    );
}

export default ItemCard




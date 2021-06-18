import {React,useEffect,useState} from 'react'
import {
 Card, Image,Button
} from "semantic-ui-react";
import "./ItemListContainer.css";
import ItemCount from "./itemCount";
//import { ItemsData } from './ItemsData';

function ItemCard ({ItemsData}) {

    return (
      <div>
        {ItemsData.map ((props) => {
            return (
        <Card className="ItemCard">
          <div>
            <a class="ui left corner label">
              <i class="heart icon"></i>
            </a>
            <Image src={props.img} wrapped ui={false} className="img_style" />
          </div>
          <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>$ {props.price}</Card.Meta>
            <Card.Description>{props.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <ItemCount />
            <Button
              content="Añadir al carrito"
              inverted
              color="brown"
              className="ui toggle button"
            ></Button>
          </Card.Content>
        </Card> 
        );
            })}
      </div>
    );
}

export default ItemCard;




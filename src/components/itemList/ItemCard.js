import {React,useState} from 'react'
import {
 Card, Image,Label,Button
} from "semantic-ui-react";
import "./ItemListContainer.css";




function ItemCard (props) {
    const [counter, setCounter] = useState(0);

    return (
      <div>
        <Card className="ItemCard">
          <div>
            <a class="ui left corner label">
              <i class="heart icon"></i>
            </a>
            <Image src={props.img} wrapped ui={false} className="img_style" />
          </div>
          <Card.Content>
            <Card.Header>{props.title}</Card.Header>
            <Card.Meta>{props.price}</Card.Meta>
            <Card.Description>{props.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="">
              <Button
                basic
                icon="minus"
                onClick={() => {if (counter>= 1) {setCounter(counter - 1)}}}
              ></Button>
              <Label className="ui counter" content={counter}></Label>
              <Button
                basic
                icon="plus"
                onClick={() => setCounter(counter + 1)}
              ></Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
}

export default ItemCard




import React from "react";
import {
  Card, Image, Button,Icon
} from 'semantic-ui-react';
import './ItemListContainer.css';
import {Link} from 'react-router-dom';


function ItemCard({ items }) {

//  const [IsVisible, setIsVisible ] = useState(false);

//   const changeVisibility = () => {
// setIsVisible(!IsVisible)
// };
 

  // setTimeout(function () {
  //   $(".visible").fadeOut(1500);
  // }, 3000);

  // setTimeout(function () {
  //   $(".hidden").fadeIn(1500);
  // }, 6000);

  return (
    <div >
      <Card raised key={items.id} className="ItemCard" >
        <Card.Content>
            <Image
              src={items.imagen}
              ui={false}
              className="img_style"
            />
          <Button circular icon="heart" className="BtnBag ui middle ">
            </Button> 

        </Card.Content>

        <Card.Content>
            <Card.Header>{items.title}</Card.Header>
          <Card.Meta as="a">$ {items.price}</Card.Meta>
          </Card.Content>
          
        <Card.Content >
            <Link to={`/details/${items.id}`}><Button
            animated='fade' duration='1000'
              key={items.id}
              type="submit"
            color="grey"   
          > <Button.Content hidden >¡Lo llevo!</Button.Content>
            <Button.Content visible ><Icon name='shopping bag' /></Button.Content></Button></Link>
          </Card.Content>
        </Card>
    </div>
  );
}

export default ItemCard;

// onMouseOver={changeVisibility}
// className={IsVisible ? "visible" : "hidden"} 
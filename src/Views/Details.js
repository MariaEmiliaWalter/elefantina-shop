import React from 'react';
import { Button, Image, Grid, Item, Breadcrumb, Container } from "semantic-ui-react";
import Items from "../assets/db.json";
import ItemCount from '../components/itemList/itemCount';
import "../App.css";
import { Link } from "react-router-dom";


function ItemDetails({ match }) {
    
let itemID = match.params.id;

// const ItemFilter = () => {
//   return Items.map(function (item) {
//      return item.id === {itemID}
//   });
// };


return (
      <div>
        {Items.map((item) => { 
            if (item.id === itemID) {
                    return (
                      <Container>
                        <Breadcrumb size="big" textAlign="left">
                          <Link to={`/`}>
                            <Breadcrumb.Section link>Home</Breadcrumb.Section>
                          </Link>
                          <Breadcrumb.Divider icon="right chevron" />
                          <Breadcrumb.Section link>
                            <Link to={`/productos`}>Productos </Link>
                          </Breadcrumb.Section>
                          <Breadcrumb.Divider icon="right chevron" />
                          <Breadcrumb.Section active>
                            {item.title}
                          </Breadcrumb.Section>
                        </Breadcrumb>

                        <Grid key={item.id} divided className="Details">
                          <Grid.Row stretched>
                            <Grid.Column stretched width={6}>
                              <Image src={item.imagen} />
                            </Grid.Column>
                            <Grid.Column stretched width={10}>
                              <Item>
                                <Item.Header as="h2">{item.title}</Item.Header>
                                <Item.Description as="h4">
                                  {item.description}
                                </Item.Description>
                                <ItemCount stockInicial={item.stock} />
                                <Button
                                  inverted
                                  color="grey"
                                  type="submit"
                                >
                                  Añadir al carrito
                                </Button>
                              </Item>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row stretched>
                            <Grid.Column width={16} textAlign="center">
                              <h1>OFERTAS</h1>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Container>
                    );
                }; 
    })
    }  
    </div>
    );
    
}
export default ItemDetails;


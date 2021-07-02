import React from 'react';
import {Image, Grid, Item, Breadcrumb, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ItemCount from './itemCount';


function ItemDetail({item}) {

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
                            <ItemCount Product={item} />
                        </Item>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default ItemDetail;

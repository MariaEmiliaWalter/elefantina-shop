import React, { Component } from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Card } from 'semantic-ui-react'


export class ItemListContainer extends Component {
    render() {
        return (
          <div className="displayGroup">
            <Card.Group centered
              className="Card-group"
            itemsPerRow={4}>
            <ItemCard title="Muselina" description="" img="" price="245"/>
            <ItemCard title="Babero Liam" description="" img="" price="321" />
            <ItemCard title="Muselina" description="" img="" price="245" />
            <ItemCard title="Muselina" description="" img="" price="245" />
            <ItemCard title="Muselina" description="" img="" price="245" />
            <ItemCard title="Muselina" description="" img="" price="245" />
            <ItemCard title="Muselina" description="" img="" price="245" />
            <ItemCard title="Muselina" description="" img="" price="245" />
            <ItemCard title="Muselina" description="" img="" price="245" />
            <ItemCard title="Muselina" description="" img="" price="245" />
            <ItemCard title="Muselina" description="" img="" price="245" />
            <ItemCard title="Muselina" description="" img="" price="245" />
            <ItemCard title="Muselina" description="" img="" price="245" />
            <ItemCard title="Muselina" description="" img="" price="245" />
          </Card.Group>
          </div>
        );
    }
}

export default ItemListContainer;




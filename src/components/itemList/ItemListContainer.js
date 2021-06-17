import React, { Component } from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Card } from 'semantic-ui-react'
import img from './muselinas-de-bebe.svg';

export class ItemListContainer extends Component {
    render() {
        return (
          <div className="displayGroup">
            <Card.Group centered
              className="Card-group" 
              itemsPerRow={4}>
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245"/>
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
              <ItemCard title="Muselina" description="Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad" img={img} price="245" />
          </Card.Group>
          </div>
        );
    }
}

export default ItemListContainer;




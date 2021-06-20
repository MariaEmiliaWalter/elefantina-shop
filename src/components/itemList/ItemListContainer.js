import React, { Component } from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Card } from 'semantic-ui-react'
//import img from './muselinas-de-bebe.svg';
//DATA
import { ItemsData } from './ItemsData';

export class ItemListContainer extends Component {

    render() {
        return (
          <div className="displayGroup">
              <ItemCard ItemsData={ItemsData}/>
          </div>
        );
    }
}

export default ItemListContainer;




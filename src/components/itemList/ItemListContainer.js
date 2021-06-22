import React from 'react'
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Card } from 'semantic-ui-react'
//import img from './muselinas-de-bebe.svg';
//DATA
import { Items } from './ItemsData';


function ItemListContainer() {
    return (
          <div className="displayGroup">
              <ItemCard ItemsData={Items}/>
          </div>
    )
}

export default ItemListContainer

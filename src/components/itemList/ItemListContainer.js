import React from 'react'
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
//DATA
import { Items } from './ItemsData';


function ItemListContainer() {
  return (
    <div className="displayGroup">
      <ItemCard ItemsData={Items} />
    </div>
  )
}

export default ItemListContainer;


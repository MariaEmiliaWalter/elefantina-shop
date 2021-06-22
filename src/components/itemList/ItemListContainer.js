import {React, useState, useEffect} from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Card } from 'semantic-ui-react'
//import img from './muselinas-de-bebe.svg';
//DATA
//import { Items } from './ItemsData';


function ItemListContainer() {

    const [data, setData] = useState({});
    useEffect(() => {
        fetch("https://sheetdb.io/api/v1/ygrxgklerhj5t")
          .then((res) => res.json())
          .then((dataApi) => setData(dataApi));
    }, [] );
        
    return (
      <div className="displayGroup">
        <ItemCard items={data} />
      </div>
    );
}

export default ItemListContainer;

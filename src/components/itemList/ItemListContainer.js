import React, {useState, useEffect} from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import axios from 'axios';



function ItemListContainer() {
 
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        axios("https://sheetdb.io/api/v1/ygrxgklerhj5t")
          .then((res) => setData((res.data)));
    }, []);
        
    return (
      <div className="displayGroup">
        {data.map( (item) => {
          return <ItemCard items={item} key={item.id} />
        })}
        </div>
    );
}

export default ItemListContainer;
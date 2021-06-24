import React, {useState, useEffect, setError} from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
//import axios from 'axios';



function ItemListContainer() {
 
    const [data, setData] = useState([]);
    console.log(data);

/*     useEffect(() => {
      
      axios("https://run.mocky.io/v3/994862f1-a497-4a62-8200-150b89a37070")
          .then((res) => setData((res.data)));
    }, []); */

  useEffect(() => {
    fetch("https://run.mocky.io/v3/994862f1-a497-4a62-8200-150b89a37070")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
        },
        (error) => {
          setError(error);
        }
      )
  }, [])

    return (
      <div className="displayGroup">
        {data.map( (item) => {
          return  <ItemCard items={item} key={item.id} />
        })}
        </div>
    );
}

export default ItemListContainer;

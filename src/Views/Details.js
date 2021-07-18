import React from 'react';
import "../App.css";
import ItemDetail from '../components/itemList/ItemDetail';
//import {items} from '../components/Context/ItemsContext';
import items from "../assets/db";

function ItemDetailContainer({ match }) {
    
let itemID = match.params.id;


return (
      <div>
    {items.map((item) => {
            if (item.id === itemID) {
                    return (
                      <ItemDetail item={item}/>
                    );
                }; 
    })
    }  
    </div>
    );
    
}
export default ItemDetailContainer;


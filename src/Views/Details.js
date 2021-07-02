import React from 'react';
import items from "../assets/db"
import "../App.css";
import ItemDetail from '../components/itemList/ItemDetail';


function ItemDetailContainer({ match }) {
    
let itemID = match.params.id;

// const ItemFilter = () => {
//   return Items.map(function (item) {
//      return item.id === {itemID}
//   });
// };


return (
      <div>
    {items.itemsData.map((item) => {
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


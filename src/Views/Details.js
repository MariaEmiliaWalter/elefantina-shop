import React, { useContext} from 'react';
import "../App.css";
import ItemDetail from '../components/itemList/ItemDetail';
import { ItemsContext} from '../components/Context/ItemsContext';

function ItemDetailContainer({ match }) {

  const { itemsDB } = useContext(ItemsContext);
  const [Items] = itemsDB;
let itemID = match.params.id;
console.log("item",itemID);

return (
      <div>
    {Items.map((item) => {
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


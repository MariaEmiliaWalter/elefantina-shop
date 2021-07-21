import React, { useContext} from 'react';
import "../App.css";
import ItemDetail from '../components/itemList/ItemDetail';
import { ItemsContext} from '../components/Context/ItemsContext';

function ItemDetailContainer({ match }) {

const [Items, setItems] = useContext(ItemsContext);
let itemID = match.params.id;


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


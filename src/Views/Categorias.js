import React, { useContext } from 'react';
import ItemsCategorias from "../components/itemList/ItemsCategorias";
import { ItemsContext } from '../Context/ItemsContext';


function Categorias({match}) {
    
    let ProductosCategorias = match.params.Categoria;
    
    const [Items, setItems] = useContext(ItemsContext);
    
    return (
        <div>
            {Items.map((item) => {
                if (item.Categoria === ProductosCategorias) {
                    return (<ItemsCategorias Categoria={item.Categoria}/>
                    );
                };
            })
        }
        </div>
    )
}

export default Categorias

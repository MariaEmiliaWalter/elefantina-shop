import React, { useContext } from 'react';
import ItemsCategorias from "../components/itemList/ItemsCategorias";
import { ItemsContext } from '../components/Context/ItemsContext';


function Categorias({match}) {
    const [Items, setItems] = useContext(ItemsContext);
    let ProductosCategorias = match.params.categoria;

    console.log("hola",ProductosCategorias);
    
    return (
        <div>
            <h1>Categorias</h1>
            {Items.map((item) => {
                if (item.categoria === ProductosCategorias) {
                    return (
                    <ItemsCategorias key={item.categoria} Categoria={item.categoria}/>
                    );
                };
            })
        }
        </div>
    )
}

export default Categorias

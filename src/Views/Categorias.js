import React, { useContext } from 'react';
import ItemsCategorias from "../components/itemList/ItemsCategorias";
import { ItemsContext } from '../components/Context/ItemsContext';
import { useParams }from "react-router-dom";


function Categorias() {

    const { Categoria } = useParams()

    const [Items, setItems] = useContext(ItemsContext);
    //let ProductosCategorias = match.params.categoria;

    //console.log("hola", Categoria);
    
    return (
        <div>
            <h1>Categorias</h1>
            {Items.map((item) => {
                if (item.Categoria == Categoria) {
                    return (
                    <ItemsCategorias key={item.Categoria} Categoria={item.Categoria}/>
                    ); 
                };
            })
        }
        </div>
    )
}

export default Categorias

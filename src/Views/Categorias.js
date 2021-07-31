import React, { useContext } from 'react';
import ItemsCategorias from "../components/itemList/ItemsCategorias";
import { ItemsContext } from '../components/Context/ItemsContext';
import { useParams }from "react-router-dom";


function Categorias() {

    const { Categoria } = useParams()

    const [Items] = useContext(ItemsContext);

    return (
        <div >
            <h1>Categorias</h1>
            <div>
            { Items.map((item) => {
                        if (item.Categoria === Categoria) {
                            return (
                                <ItemsCategorias item={item}/>
                            );
                        };
                    })

                }</div>
        </div>
    )
}

export default Categorias


import React, {useState, createContext, useEffect} from 'react';
import { db } from './Firebase';


//Contexto
export const ItemsContext = createContext();

// const Productos = () => {
//     items.map((item) => {
//         console.log ("ITEMS", item)
//         db.collection('Productos').doc(item.id).set(item)
//     })
// };

//Componente provider
export const ItemsProvider =  (props) => {
    
    const [products, setProducts] = useState([]);


    const getProducts = () => {
        // QuerySnapshot es el nombre de la respuesta que nos da Firebase
        db.collection('Productos').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                //console.log(doc.data());
                // console.log(doc.id);
                docs.push({ ...doc.data(), id: doc.id });
                // Cada vez que nos traigamos todos los datos, vamos a combinar c/u de esos objetos con su id en un nuevo objeto
                //console.log(docs);
            });
            setProducts(docs);
        });
    };

    // Al poner el array vacio se va a ejecutar la primera vez que cargue el componente
    useEffect(() => {
        getProducts();
    }, []);


        return (
            <ItemsContext.Provider value={[products, setProducts]} >
                {props.children}
            </ItemsContext.Provider>
        )

};



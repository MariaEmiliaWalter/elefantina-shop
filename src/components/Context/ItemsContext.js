import React, {useState, createContext, useEffect} from 'react';
import { db } from './Firebase';

//Contexto
export const ItemsContext = createContext();


//Componente provider
export const ItemsProvider =  (props) => {
    
    const [products, setProducts] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
 

    const getProducts = () => {

        db.collection('Productos').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducts(docs);
            setIsLoading(false);
        });
    };


    useEffect(() => {
        getProducts();
    }, []);


        return (
            <ItemsContext.Provider value={{ items: [products, setProducts], IsLoading: [IsLoading, setIsLoading] }} >
                {props.children}
            </ItemsContext.Provider>
        )

};


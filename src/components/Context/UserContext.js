import React, { useState, createContext, useEffect } from 'react';
import { db } from './Firebase';


//Contexto
export const UserContext = createContext();


//Componente provider
export const UserProvider = (props) => {

    const [Users, setUsers] = useState([])


    const getUsers = () => {
        // QuerySnapshot es el nombre de la respuesta que nos da Firebase
        db.collection('Usuarios').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                //console.log(doc.data());
                // console.log(doc.id);
                docs.push({ ...doc.data(), id: doc.id });
                // Cada vez que nos traigamos todos los datos, vamos a combinar c/u de esos objetos con su id en un nuevo objeto
                //console.log(docs);
            });
            setUsers(docs);
        });
    };

    // Al poner el array vacio se va a ejecutar la primera vez que cargue el componente
    useEffect(() => {
        getUsers();
    }, []);


    return (
        <UserContext.Provider value={[Users, setUsers]} >
            {props.children}
        </UserContext.Provider>
    )

};



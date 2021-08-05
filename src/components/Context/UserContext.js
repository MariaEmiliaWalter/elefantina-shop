import React, { useState, createContext, useEffect } from 'react';
import { db } from './Firebase';


//Contexto
export const UserContext = createContext();

//Componente provider
export const UserProvider = (props) => {

    const [Users, setUsers] = useState([]);

   

    const getUsers = () => {
        db.collection('Usuarios').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setUsers(docs);
        });
    };

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <UserContext.Provider value={[Users, setUsers]} >
            {props.children}
        </UserContext.Provider>
    )

};



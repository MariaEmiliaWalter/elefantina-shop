import React, {useState, createContext} from 'react'

//Contexto
export const ItemsContext = createContext();

//Componente provider
export const ItemsProvider =  (props) => {
    const [Items, setItems] = useState(
        [
            {
                "id": "1",
                "imagen": "https://www.cestaland.com/2533-large_default/muselina-aden-anais-musy-70x70cm-algodon-comprar-gasa-bebe.jpg",
                "title": "Muselina estampada",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "200",
                "Categoria": "Bebes",
                "Sub-categoria": "Accesorios",
                "OnSale": "false"
            },
            {
                "id": "2",
                "imagen": "https://www.cestaland.com/2533-large_default/muselina-aden-anais-musy-70x70cm-algodon-comprar-gasa-bebe.jpg",
                "title": "Body",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "2",
                "Categoria": "Bebes",
                "Sub-categoria": "Bodys",
                "OnSale": "true"
            },
            {
                "id": "3",
                "imagen": "https://www.cestaland.com/2533-large_default/muselina-aden-anais-musy-70x70cm-algodon-comprar-gasa-bebe.jpg",
                "title": "Pantalon",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "24",
                "Categoria": "Bebes",
                "Sub-categoria": "Accesorios",
                "OnSale": "false"
            },
            {
                "id": "4",
                "imagen": "https://www.cestaland.com/2533-large_default/muselina-aden-anais-musy-70x70cm-algodon-comprar-gasa-bebe.jpg",
                "title": "Muselina",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "20",
                "Categoria": "Bebes",
                "Sub-categoria": "Accesorios",
                "OnSale": "false"
            },
            {
                "id": "5",
                "imagen": "https://www.cestaland.com/2533-large_default/muselina-aden-anais-musy-70x70cm-algodon-comprar-gasa-bebe.jpg",
                "title": "Muselina",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "100",
                "Categoria": "Bebes",
                "Sub-categoria": "Accesorios",
                "OnSale": "false"
            },
            {
                "id": "6",
                "imagen": "https://www.chicadecanela.com/787-home_default/pinocchio-muselina-bebe.jpg",
                "title": "Muselina",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "100",
                "Categoria": "Bebes",
                "Sub-categoria": "Accesorios",
                "OnSale": "false"
            },
            {
                "id": "7",
                "imagen": "https://www.chicadecanela.com/787-home_default/pinocchio-muselina-bebe.jpg",
                "title": "Muselina",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "100",
                "Categoria": "Bebes",
                "Sub-categoria": "Accesorios",
                "OnSale": "false"
            },
            {
                "id": "8",
                "imagen": "https://www.chicadecanela.com/787-home_default/pinocchio-muselina-bebe.jpg",
                "title": "Muselina",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "100",
                "Categoria": "Bebes",
                "Sub-categoria": "Accesorios",
                "OnSale": "false"
            },
            {
                "id": "9",
                "imagen": "https://www.cestaland.com/2533-large_default/muselina-aden-anais-musy-70x70cm-algodon-comprar-gasa-bebe.jpg",
                "title": "Muselina",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "100",
                "Categoria": "Bebes",
                "Sub-categoria": "Accesorios",
                "OnSale": "false"
            },
            {
                "id": "10",
                "imagen": "https://www.chicadecanela.com/787-home_default/pinocchio-muselina-bebe.jpg",
                "title": "Muselina",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "100",
                "Categoria": "Bebes",
                "Sub-categoria": "Accesorios",
                "OnSale": "false"
            },
            {
                "id": "11",
                "imagen": "https://www.cestaland.com/2533-large_default/muselina-aden-anais-musy-70x70cm-algodon-comprar-gasa-bebe.jpg",
                "title": "Muselina",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "100",
                "Categoria": "Bebes",
                "Sub-categoria": "Accesorios",
                "OnSale": "false"
            },
            {
                "id": "12",
                "imagen": "https://www.chicadecanela.com/787-home_default/pinocchio-muselina-bebe.jpg",
                "title": "Muselina",
                "description": "Mantas de bebe con diseño unisex, doble capa de algodón de primera calidad",
                "price": "345",
                "color": "Blanco, estampa aleatoria",
                "stock": "100",
                "Categoria": "Bebes",
                "Sub-categoria": "Accesorios",
                "OnSale": "false"
            }
        ]);

        return (
            <ItemsContext.Provider value={[Items,setItems]} >
                {props.children}
            </ItemsContext.Provider>
        )

};

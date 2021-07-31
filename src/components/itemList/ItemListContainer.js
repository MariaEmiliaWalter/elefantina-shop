import React, { useContext } from 'react';
import "./ItemListContainer.css";
import ItemCard from './ItemCard';
import { Grid, GridColumn} from "semantic-ui-react";

import {ItemsContext} from '../Context/ItemsContext';




function ItemListContainer() {
  const [Items] = useContext(ItemsContext);

  //onst [Dropdown, setDropdown] = useState(false);
  //const OpenDropdown = () => { setDropdown(!Dropdown) };

//TODOS LOS PRODUCTOS
  const ItemsInicial = (
    Items.map((item) => (
      <Grid.Column computer={4} tablet={4} mobile={8}>
        <ItemCard items={item} key={item.id} />
      </Grid.Column>
      )
    )
  );

// //MUESTRO SEGUN CATEGORIA
//   const showByCategory = () => {
//     Items.map((item) => {
//        console.log("ITEMS", item);
//       if (item.SubCategoria === checkboxes.value) {
       
//           return (
//             <Grid.Column computer={4} tablet={4} mobile={8}>
//                 <ItemCard items={item} key={item.id} />
//             </Grid.Column>
//           )
//         }
//       } 
//   )
// };


//CATEGORIAS 
// const [value, setValue] = useState({});
// const handleChange = (e, { value }) => setValue({ value });

// const CategoriaForm = (
//   <Form>
//     <Form.Group grouped>
//         <label>Categorias</label>
//         <Form.Field
//           label='Ver todos los productos'
//           name='Categorias'
//           control={Radio}
//           value='total'
//           checked={value === 'total'}
//           onChange={handleChange}
//         />
//         <Form.Field
//           label='Bodys' 
//           name='Categorias' 
//           value='bodys'
//           control={Radio}
//           checked={value === 'bodys'}
//           onChange={handleChange}
//         />
//         <Form.Field
//           label='Pantalones' 
//           name='Categorias' 
//           value='pantalones'
//           control={Radio}
//           checked={value === 'pantalones'}
//           onChange={handleChange}
//         />
//         <Form.Field
//           label='Accesorios' 
//           name='Categorias'
//           value='accesorios'
//           control={Radio}
//           checked={value === 'accesorios'}
//           onChange={handleChange}
//         />
//       </Form.Group>
//   </Form>
// );



//RETORNO
  return (  
    <Grid className="displayGroup" >
      <Grid.Row>
      <GridColumn only='computer' width={3} style={{height: "100%"}} >
         
      </GridColumn>
        
        <Grid.Column width={13}> 
          <Grid stackable >
            {ItemsInicial}
        </Grid>
        </Grid.Column>
    </Grid.Row>
        </Grid>
  );
}

export default ItemListContainer;



import {React, useState } from 'react'
import {Link} from "react-router-dom";
import logo from './logo.svg';
//CSS
import "./Header.css";
//Semnatic UI
import {
Container,
Icon,
Button,
  Grid,
  Menu,
  Sidebar, Input,
  Image,
} from 'semantic-ui-react'

//Components
import CartWidget from "../CartContainer/CartWidget";


function SideNavbar() {
    const [visible, setVisible] = useState(false);
  const [inputText, setInputText] = useState('')

  // const [ItemData, setItemData] = useState({})
    
  const openSidebar = () => {
      setVisible(!visible);
    };


    const onHandleChange = (e) =>{
      setInputText(e.target.value);
    };

    const onHandleSubmit = (e) =>{
      e.preventDefault();
      //sanitizo variable
      const userInput = inputText.toLocaleLowerCase().replace(/ /g, '');
      //filter
      // if (userInput) {
      //   let data = items.filter((item) => item.title === userInput || item.description === userInput);
      //   setItemData(data);
      //   console.log("datos filtrados",ItemData);
      // };
      // setInputText('');
    };


     return (
       <Grid columns={1} className="ui top menu">
         <Grid.Column className="fluid container navbar">
           <Container textAlign="left">
             <Button
               style={{ fontSize: "100%" }}
               color="grey"
               circular
               icon="bars"
               visible={visible}
               onClick={openSidebar}
             ></Button>
             <Input
               type='text'
              value={inputText}
              onChange={onHandleChange}
               className="mobile hidden"
               placeholder="Buscar..."
               action
             ><input />
               <Button icon="search" type='submit' onClick= {onHandleSubmit}></Button>
             </Input>

           </Container>
           <Container textAlign="center">
             <Link to={`/`}><Image src={logo} size="tiny" float="right" />
           </Link>
           </Container>
           <CartWidget />
         </Grid.Column>

         <Grid.Column>
           <Sidebar
             className="container"
             as={Menu}
             animation="overlay"
             icon="labeled"
             onHide={() => setVisible(false)}
             vertical
             visible={visible}
             width="thin"
           >
             <Link to="/"><Menu.Item as="a">
               <Icon name="home" />
               Home
             </Menu.Item></Link>
             
             <Link to="/productos"><Menu.Item as="a">
                 <Icon name="child"/>Productos
                 </Menu.Item></Link>
             
             <Link to="/nosotros"><Menu.Item as="a">
               <Icon name="heart" />
               Nosotros
             </Menu.Item></Link>
            
             <Link to="/tips"><Menu.Item as="a">
               <Icon name="hand peace" />
               #ElefantinaTips
             </Menu.Item></Link>
             
             <Link to="/contacto"><Menu.Item as="a">
               <Icon name="paper plane" />
               Contacto
             </Menu.Item></Link>
           </Sidebar>
         </Grid.Column>
       </Grid>
     );
}

export default SideNavbar;



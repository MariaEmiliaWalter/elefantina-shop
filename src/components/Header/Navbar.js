import {React, useState } from 'react'
import logo from './logo.svg';
//Semnatic UI
import {
Container,
Icon,
Button,
  Grid,
  Menu,
  Sidebar,
  Input,
  Image,
} from 'semantic-ui-react'

import "./Header.css";
import CartWidget from "./CartWidget";


function SideNavbar() {
    const [visible, setVisible] = useState(false);

    const openSidebar = () => {
      setVisible(!visible);
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
               className="mobile hidden"
               icon="search"
               placeholder="Buscar..."
             />
           </Container>
           <Container textAlign="center">
             <Image src={logo} size="tiny" float="right" />
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
             width="big"
           >
             <Menu.Item as="a">
               <Icon name="home" />
               Home
             </Menu.Item>
             <Menu.Item as="a">
               <Icon name="child" />
               Productos
             </Menu.Item>
             <Menu.Item as="a">
               <Icon name="heart" />
               Nosotros
             </Menu.Item>
             <Menu.Item as="a">
               <Icon name="hand peace" />
               #ElefantinaTips
             </Menu.Item>
             <Menu.Item as="a">
               <Icon name="paper plane" />
               Contacto
             </Menu.Item>
           </Sidebar>
         </Grid.Column>
       </Grid>
     );
}

export default SideNavbar;



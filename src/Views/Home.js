import React, { useContext} from 'react';
import Section from "../components/Section/Section";
import imgHome from '../assets/sectionHome.png';
import { ItemsContext } from '../components/Context/ItemsContext';
import { Grid, Header} from "semantic-ui-react";
import ItemCard from '../components/itemList/ItemCard';

function Home() {
 const [Items, setItems] = useContext(ItemsContext);
    
    return (
        <div>
            <Section img={imgHome}/>
             <Header>OFERTAS</Header>
            { Items.map((item) => {
    if (item.OnSale === "true") {
      return (
        <Grid.Column width={13}>
        <Grid stackable >
            <Grid.Column computer={4} tablet={4} mobile={8}>
                <ItemCard items={item} key={item.id} />
          </Grid.Column>
        </Grid>
        </Grid.Column>
    )}})
}
        </div>
    )
}

export default Home;
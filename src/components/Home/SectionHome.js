import React, { useContext } from 'react';
import {
    Grid,Image,Header
} from "semantic-ui-react";
import imgHome from '../../assets/sectionHome.png'
import ItemCard from '../itemList/ItemCard';
import { ItemsContext } from '../Context/ItemsContext';

function Section() {
    const [Items, setItems] = useContext(ItemsContext);

    return (
        <div>
            <Image src={imgHome} ></Image>
            <Header>OFERTAS</Header>
            {Items.map((item) => {
                if (item.OnSale === "true") {
                    return (
                        <Grid.Column width={13}>
                            <Grid stackable >
                                <Grid.Column computer={4} tablet={4} mobile={8}>
                                    <ItemCard items={item} key={item.id} />
                                </Grid.Column>
                            </Grid>
                        </Grid.Column>
                    )
                }
            })
            }
        </div>
    )


        

}

export default Section

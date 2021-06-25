import React from 'react';
import {
    Segment, Image, Grid, Divider
} from "semantic-ui-react";


function ItemDetails({items}) {
    return (
        <div>
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <Image/>
                    </Grid.Column>
                    <Grid.Column>
                        <h1>{items.title}</h1>
                        <Grid.arguments>jfkjsdfklsdfj</Grid.arguments>
                    </Grid.Column>
                </Grid>

                <Divider vertical></Divider>
            </Segment>
            )
        </div>
    )
}

export default ItemDetails;

// card props => title , price, info, favorito, seleccionar talle stock
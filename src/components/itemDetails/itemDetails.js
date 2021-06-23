import React from 'react';
import {img} from "../../images/remera.webp";
import {
    Segment, Image, Grid
} from "semantic-ui-react";

function itemDetails(item) {
    return (
        <div>
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                            <Image src={img} />
                    </Grid.Column>
                    <Grid.Column>
                        <h1>{item.i.title}</h1>
                        <Grid.arguments> {items.i.description} </Grid.arguments>
                    </Grid.Column>
                </Grid>

                <Divider vertical></Divider>
            </Segment>
            )
        </div>
    )
}

export default itemDetails;
// card props => title , price, info, favorito, seleccionar talle stock
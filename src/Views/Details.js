import React, { useState, useEffect} from 'react';
import {
    Segment, Image, Grid, Divider
} from "semantic-ui-react";


function ItemDetailsContainer({ match }) {
    let itemID = match.params.id;
    const [details, setDetail] = useState([]);

    useEffect(() => {
        fetch(`https://sheet.best/api/sheets/c5330ac8-a26c-4991-aaeb-cca45f148d48${itemID}`)
            .then(res => res.json())
            .then(
                result => {
                    console.log(result);
                    setDetail(result);
                }
            );
    }, [itemID]);

    return (
        <div>
            {details.map((d)=> { 
         <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <Image src={d.imagen}/>
                    </Grid.Column>
                    <Grid.Column>
                        <h1>{d.title}</h1>
                        <Grid.arguments>{d.description}</Grid.arguments>
                    </Grid.Column>
                </Grid>

                <Divider vertical></Divider>
            </Segment> 
            })}  
        </div>
    )
}
export default ItemDetailsContainer;
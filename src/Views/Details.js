import React, { useState, useEffect} from 'react';
import {
    Segment, Image, Grid, Divider
} from "semantic-ui-react";
//import { useParams, } from 'react-roouter-dom'



function ItemDetails({ match }) {
    
    //const { itemID } = useParams()

let itemID = match.params.id;

const [data, setData] = useState([]);
   
console.log(itemID);
    // useEffect(() => {
    //     axios(`http://localhost:3000/Bebes/${itemID}`).then((res) => setData(res.data)
    //         );
    //     }, [itemID]);

    useEffect(() => {
        fetch(`http://localhost:3000/Bebes/${itemID}`)
            .then(res => res.json())
            .then((result) => {
                //console.log(result);
                setData(result)}
            )
    }, [ itemID ]);



    return (
        <div>
            {data.map( (itemsDetail) => {
                return(
                         <Segment>
                <Grid>
                    <Grid.Column>
                                <Image src={itemsDetail.imagen}/>
                    </Grid.Column>
                    <Grid.Column>
                                <h1>{itemsDetail.title}</h1>
                                <Grid.arguments>{itemsDetail.description}</Grid.arguments>
                    </Grid.Column>
                </Grid>

                <Divider vertical></Divider>
            </Segment>    
                )
            })

            }
 
        </div>
    )
}
export default ItemDetails;


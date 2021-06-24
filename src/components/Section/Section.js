import React from 'react'
import {
    Segment,Image
} from "semantic-ui-react";

function Section(prop) {
    return (
        <Segment>
            <Image src={prop} ></Image>
        </Segment>
    )
}

export default Section

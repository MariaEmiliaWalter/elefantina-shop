import React from 'react'
import {
    Segment,Image,Header,Container
} from "semantic-ui-react";

function Section({img, title, text}) {
    return ( 
    <div>
        <Header style={{Margin: "10%"}} >{title}</Header>
            <Image src={img} ></Image>
            <Segment className="ui container">
            {text} 
        </Segment>

        </div>
    )
}

export default Section

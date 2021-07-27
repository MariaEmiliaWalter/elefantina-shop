import React from 'react'
import {
    Segment,Image,Header
} from "semantic-ui-react";

function Section({img, title, text}) {
    return ( 
    <div>
        <Header style={{Margin: "10%"}} >{title}</Header>
        <Image src={img} ></Image>
     </div>
    )
}

export default Section

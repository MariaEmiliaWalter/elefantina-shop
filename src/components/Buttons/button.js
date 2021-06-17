import "./button.css";
import React from 'react'
import {Button,Label} from 'semantic-ui-react'

function button() {
    return (
    <div className="ui two buttons">
            <Button icon="minus"></Button>
            <Label content=""></Label>
            <Button icon="plus"></Button>
    </div>
  
    )
}

export default button;

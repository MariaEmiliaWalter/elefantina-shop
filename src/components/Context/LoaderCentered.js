import React from 'react';
import {
    Loader,Dimmer,Icon
} from "semantic-ui-react";

function LoaderCentered() {
    return (
        <Dimmer active inverted inline='centered'>
            <Loader inverted size='massive' ></Loader>
      </Dimmer>
          
    )
}

export default LoaderCentered
import React from 'react';
import {
    Loader,Dimmer
} from "semantic-ui-react";

function LoaderCentered() {
    return (
        <Dimmer active inverted inline='centered'>
            <Loader inverted size='massive'>Loading</Loader>
      </Dimmer>
          
    )
}

export default LoaderCentered

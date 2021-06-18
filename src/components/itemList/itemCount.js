import { React, useState } from "react";
import { Label, Button } from "semantic-ui-react";



function ItemCount(props) {
 const [counter, setCounter] = useState(0);
     
  return (
    <div>
      <Button
        basic
        icon="minus"
        onClick={() => {
          if (counter >= 1) {
            setCounter(counter - 1);
          }
        }}
      ></Button>
      <Label className="ui counter" content={counter}></Label>
      <Button
        basic
        icon="plus"
        onClick={() => setCounter(counter + 1)}
      ></Button>
    </div>
  );
}

export default ItemCount;

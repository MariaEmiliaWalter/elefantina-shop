import React from 'react';
import axios from 'axios';
import itemDetails from './itemDetails';


function itemDetailsContainer() {

    //retornar promise con delay(set time out)
const [details, setDetails] = useState([]);
useEffect(() => {
    axios("https://run.mocky.io/v3/f3096973-418a-4863-aa6f-23f13b8698cd").then((res) =>
        setDetails(res.data));
}, [])

    return ( 
        <div>{details.map((i)=>{
            <itemDetails item={i}/>
        })}     
        </div>
    )
}

export default itemDetailsContainer;


// params.id (ver esto para routear la vista )
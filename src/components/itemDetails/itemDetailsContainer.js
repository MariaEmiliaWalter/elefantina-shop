import React from 'react';
import axios from 'axios';
import itemDetails from './itemDetails';


function itemDetailsContainer() {

    //retornar promise con delay(set time out)
const [details, setDetails] = useState([]);
useEffect(() => {
    axios("https://sheetdb.io/api/v1/ygrxgklerhj5t").then((res) =>
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
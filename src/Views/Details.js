import React, { useState, useEffect} from 'react';
import ItemDetails from '../components/itemDetails/itemDetails';


function ItemDetailsContainer({ match }) {
    let id = match.params.id;
    const [details, setDetail] = useState([]);

    useEffect(() => {
        fetch(`https://run.mocky.io/v3/994862f1-a497-4a62-8200-150b89a37070${id}`)
            .then(res => res.json())
            .then(
                result => {
                    setDetail(result);
                }
            );
    }, [id]);

    return (
        <div>
            <ItemDetails items={details}/>
        </div>
    )
}
export default ItemDetailsContainer;
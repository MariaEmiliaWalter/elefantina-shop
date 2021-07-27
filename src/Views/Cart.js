import React from 'react'
import CartListDisplay from '../components/CartContainer/CartListDisplay';


function Cart({match}) {

 let CartID = match.params.id;
    return (
        <div>
            <CartListDisplay/>
        </div>
    )
}

export default Cart;

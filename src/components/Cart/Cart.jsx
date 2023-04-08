import React from 'react';

const Cart = ({cart, handleRemoveProduct}) => {

	return (
		<div>
			<h2>Order Summary : {cart.length}</h2>
			{
				cart.map( prouct => 
				<p> 
				{prouct.name} 
               <button onClick={()=>handleRemoveProduct(prouct._id)}> X </button>
				 </p> )
			}
		</div>
	);
};

export default Cart;
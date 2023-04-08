import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({cart, handleRemoveProduct}) => {

	return (
		<div>
			<h2>Order Summary : {cart.length}</h2>
			{
				cart.map( prouct => 
				<p> 
				{prouct.name} 
               <button onClick={()=>handleRemoveProduct(prouct._id)}> X </button>
			   <ToastContainer />
				 </p> )
			}
		</div>
	);
};

export default Cart;
import React from 'react';
import './Tshirt.css'


const Tshirt = ({tShirt , handleAddToCart}) => {

	const {price , picture , name , _id } = tShirt
	
	return (
		<div className='t-shirt'>
			<div className='product-image'>
			<img src={picture} alt="" />
			<h4> {name} </h4>
			</div>
			<div className='card-footer'>
			<h4>Price : {price}</h4>
			<button onClick={()=>handleAddToCart(tShirt)}> Buy Now </button>
			</div>
		</div>
	);
};

export default Tshirt;
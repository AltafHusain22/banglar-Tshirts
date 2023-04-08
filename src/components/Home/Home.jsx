import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
	const tShirts = useLoaderData()
	const [cart , setCart ] = useState([])

	const handleAddToCart =(product) =>{
		const newCart = [...cart , product]
		setCart(newCart)
	}

	const handleRemoveProduct = id =>{
		const remainingProduct = cart.filter(product => product._id !== id )
		setCart(remainingProduct)

	}

	return (
		<div className='shop-container'>
			<div className="product-container">
			{
				tShirts.map(tShirt => <Tshirt 
				
					key={tShirt._id}
					tShirt ={tShirt}
					handleAddToCart = {handleAddToCart}
				
				></Tshirt>)
			}
			</div>
			<div className="cart-container">
				<Cart
				 cart ={cart}
				 handleRemoveProduct={handleRemoveProduct}
				 ></Cart>
			</div>
		</div>
	);
};

export default Home;


import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
	// state declaration
	const tShirts = useLoaderData()
	const [cart , setCart ] = useState([])

	// handle add to cart function
	const handleAddToCart =(product) =>{
		const exist = cart.find(ts => ts._id === product._id )
		console.log(exist)
		if(exist){

			toast("Already Exist ");

		}else{

			const newCart = [...cart , product]
			setCart(newCart)
			
		}
	
	}

	// handle remove product function 
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


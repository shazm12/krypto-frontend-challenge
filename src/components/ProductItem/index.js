import React from 'react'
import data from '../../db.json';
import { AiFillHeart } from 'react-icons/ai';
import {BsCartPlusFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import axios from 'axios';

const ProductItem = ({id, name, amount, rating, image}) => {
    const navigate = useNavigate(); 
    const {setCartItems}= useUserContext();
    return (
    <div className='flex flex-col my-5 bg-[#ffffff] w-[50vh] p-5 drop-shadow-xl'>
        <img  src={image} 
        onClick={() => {
            // Go to particular product page
            navigate(`/product/${id}`);
        }} 
        className='h-[35vh] w-[30vh] cursor-pointer self-center mb-5' 
        />
        <p className='text-zinc-500'>{name}</p>
        <p>₹ {amount}</p>
        <p className='bg-[#10AF0B] mt-4 text-white w-max px-2'>{rating}</p>
        <div className='flex gap-[40vh] align-bottom mt-5'>
            <AiFillHeart 
                className='cursor-pointer' 
                size={24} 
                color='#757574'
                onClick={async() =>{
                    // Favourite function to add the items to favourite list in JSON File using API
                    await axios.post("http://localhost:5000/favourites", {
                        id,
                        name,
                        amount,
                        image,
                    })
                    .then(data => {
                        alert("Product added to your favourites")
                    })
                    .catch(err => alert(err))
                }}
            />
            <BsCartPlusFill className='cursor-pointer' onClick={() => {
                const data = {
                    id:id,
                    name:name,
                    amount:amount,
                    rating:rating,
                    image:image,
                }
                setCartItems((prev) => [...prev,data])
                alert("Product Added")
            }} size={24} color='#757574'/>
        </div>
    </div>
  )
}

export default ProductItem
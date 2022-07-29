import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../../db.json';
import axios from 'axios';
import { useUserContext } from '../../context/UserContext';
import {useNavigate} from 'react-router-dom';


const Item = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const item = data.products.filter((item) => item.id == id )[0];
    const{cartItems,setCartItems} = useUserContext();
  return (
    <div className='flex px-4 h-[100vh] justify-center items-center'>
        <div className='flex flex-[0.6] justify-center item-center'>
            <img src={item.image} alt="image" className='h-[50vh] w-[40vh] drop-shadow-xl' />
        </div>
        <div className='flex flex-col flex-[0.4] justify-center'>
            <h2 className='text-xl'>{item.title}</h2>
            <h2 className='text-xs mt-2'>{item.description}</h2>
            <h2 className='text-[32px] font-bold'>₹ {item.amount}</h2>
            <div className='flex gap-10 mt-5'>
                <button className='text-lg font-bold border-2 border-black py-2 px-4'>Buy Now </button>
                <button 
                    className='text-lg border-2 font-bold border-black py-2 px-4 bg-[#121212] text-white'
                    onClick={() => {
                        const data = {
                            id:id,
                            name:item.name,
                            amount:item.amount,
                            rating:item.rating,
                            image:item.image,
                        }
                        setCartItems((prev) => [...prev,data])
                        navigate("/product");
                    }}
                
                >
                    Add to basket
                </button>
            </div>
        </div>
    </div>
  )
}

export default Item;
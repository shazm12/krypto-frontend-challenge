

import React, { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';

const CartItem = ({name, amount, image}) => {
    const [countItem, setCountItem] = useState(0);
  return (
    <div className='w-full flex mt-4 border-b-2 border-slate-700'>
    <img src={image} alt="" className='h-[20vh] w-[16vh]'/>
    <div className='flex flex-col gap-2 ml-2'>
      <h1 className='text-zinc-600'>{name}</h1>
      <p className='text-zinc-600'>₹ {amount}</p>
      <div className='flex justify-center items-center gap-10'>
        <AiOutlinePlus className='cursor-pointer' onClick={() => {
            setCountItem(countItem+1);
        }} />
        <p>{countItem}</p>
        <AiOutlineMinus className='cursor-pointer' onClick={() => {
            if(countItem==0) {
                return;
            }
            setCountItem(countItem-1);
        }} />
      </div>
    </div>
  </div>
  )
}

export default CartItem;



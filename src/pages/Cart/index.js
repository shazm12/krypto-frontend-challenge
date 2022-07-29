import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar';
import data from '../../db.json';
import CartItem from '../../components/CartItem';
import { useUserContext } from '../../context/UserContext';
import axios from 'axios'
import Modal from "react-modal";
import {GiConfirmed} from 'react-icons/gi';
import {BsFillTrashFill} from 'react-icons/bs';


const prod = data.products[0];

Modal.setAppElement("#root");


const Cart = () => {

  const {cartItems,setCartItems} = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  console.log(cartItems);
  const[total, setTotal] = useState(0);
  // Calculate total price 
  const calculatePrice = () => {
    cartItems.map((item) => {
      const price = parseInt(item.amount);
      setTotal(total+price);
    })
  }
  // Order function to place order and store it in the JSON File using API
  const orderItems = async() => {
    
    const order = {
      cartItems,
      total: total
    }
    await axios.post("http://localhost:5000/orders", {
      order
    })
    .then(data => {
      toggleModal();
    })
    .catch(err => alert(err))
  }

  // Calculate Total Price everytime this page mounts up
  useEffect(() => {
    calculatePrice();
    setTotal(total+150);
  },[cartItems]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <div className='flex flex-col bg-[#E5EEF8] h-[100vh]'>
        <NavBar />
        <div className='lg:flex gap-8 lg:flex-row md:flex-col'>
          {/* My Cart Component */}
          <div className=' flex-[0.6]  flex-col bg-[#ffffff] mt-10  py-5 px-6 ml-10'>
            <div className='flex gap-[5em] mb-5 items-center'>
              <h1 className='text-xl'>My Cart</h1>
              <BsFillTrashFill 
                className='flex cursor-pointer' 
                onClick={() => {
                  setCartItems([]);
                  setTotal(0);
                }} 
              size={30}
              />
             </div>
            <div className='flex flex-col'>
              {cartItems.map((item) => (
                <CartItem name={item.name} amount={item.amount} image={item.image} />
              ))}
            </div>     
          </div>

          {/* Price Detials */}
          <div className='flex-[0.3] flex-col bg-[#ffffff] mt-10 py-2 px-2'>
            <h1 className='text-[24px]'>Price Details</h1>
            {/* Bill Description */}
            <div className='flex flex-col w-full justify-center gap-2 pb-4 pt-2 items-center border-b-2 border-slate-700'>
              <div className='flex w-full justify-center items-center gap-[20rem] '>
                <p className=''>Price</p>
                <p>{total-100-50}</p>
              </div>
              <div className='flex justify-center items-center gap-[19rem]'>
                <p>Dicount</p>
                <p>100</p>
              </div>
              <div className='flex justify-center items-center gap-[16rem]'>
                <p>Delivery Charge</p>
                <p>50</p>
              </div>
            </div>
            <div className='flex justify-around items-center w-full gap-[14rem] mt-[10vh]'>
              <p className='text-[32px] font-bold'>Total</p>
              <p className='text-[24px]'>₹ {total}</p>
            </div>
          </div>
        </div>
        <button className='bg-[#0478ED] p-2 w-max text-white ml-10 mt-4 rounded-md mb-10' onClick={orderItems}>PLACE ORDER</button>
        {/* Order Success Modal */}
        <Modal
        isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="Order Succesful"
        >
          <button className='text-[32px] font-bold' onClick={toggleModal}>X</button>
          <div className='flex flex-col mt-[10vh] justify-center items-center'>
          <GiConfirmed size={100} color="#7DCE13" />
          <h1 className='text-[42px] font-bold mt-5'>Order Succesful</h1>
          
          </div>
        </Modal>
    </div>
  )
}

export default Cart;
import React from 'react'
import { useUserContext } from '../../context/UserContext';
import {BsCart4} from 'react-icons/bs';
import { useNavigate,Link } from "react-router-dom";

const NavBar = () => {
  const {user} = useUserContext();
  return (
    <nav className='flex py-5 text-white justify-evenly bg-[#0478ED] items-center'>
      <h2 className='text-[25px] font-bold'>ShopKart.</h2>
      <ul className='flex gap-10'>
        {user && (<li>Welcome {user.user.name}</li>)}
        <li>
          <Link to="/product">
          Products
          </Link>
        </li>
        <li>{user? `Logout`: `Login`}</li>
        <li className=''>
          <Link to="/cart" ><BsCart4 size={20} /></Link>
        </li>
      </ul> 
    </nav>
  )
}

export default NavBar;
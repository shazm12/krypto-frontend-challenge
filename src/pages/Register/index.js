import React, { useState } from 'react'
import NavBar from '../../components/NavBar';
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../../context/UserContext';
import axios from 'axios';
const Register = () => {
  
  const [email ,setEmail] = useState();
  const [password ,setPassword] = useState();
  const [name , setName] = useState();
  const[error, setError] = useState(false);
  const navigate = useNavigate();
  const {user, setUser} = useUserContext();
//   Register function to register users
  const register = () => {
    axios.post('http://localhost:5000/users/register',{
      email: email,
      password: password,
      name: name
    })
    .then((data) => {
      setUser(data.data);
    })
    .catch(err => setError(true))
  }

  return (
    <div className='flex flex-col bg-[#E5EEF8] h-[100vh]'>
      {/* Navbar */}
      <NavBar />
      {/*  Register input box */}
      <div className='flex flex-col bg-[#ffffff] rounded-m py-5 px-10 border-2 mt-[20vh] justify-center self-center'>
        <div className='flex flex-col  p-5'>
          <h2 className='flex font-bold text-[1.6rem]'>Register</h2>
          <input type="text" onChange={e => setEmail(e.target.value)} className="outline-none py-4 my-4" placeholder="Email Address" />
          <input type="text" onChange={e => setPassword(e.target.value)} className="outline-none my-4" placeholder="Password"  />
          <input type="text" onChange={e => setName(e.target.value)} className="outline-none my-4" placeholder="Your Name"  />
        </div>
        <div className='flex gap-5'>
          <p className='flex-[0.9] text-[#7FAFF2]'>New User? Create an account</p>
          <button onClick={() => {
            register();
            if(user) {
              navigate("/product");
            }
            else if(error) {
              alert("Wrong Credentials");
            }
          }} className='bg-[#1C73E7] text-white px-6 rounded-[24px]'>Register</button>

        </div>
      </div> 

    </div>
  )
}

export default Register;
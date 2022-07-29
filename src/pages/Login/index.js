import React, { useState } from 'react'
import NavBar from '../../components/NavBar';
import { useNavigate,Link } from "react-router-dom";
import { useUserContext } from '../../context/UserContext';
import axios from 'axios';
const Login = () => {
  
  const [email ,setEmail] = useState();
  const [password ,setPassword] = useState();
  const[error, setError] = useState(false);
  const navigate = useNavigate();
  const {user, setUser} = useUserContext();
  // Login function to call API and login
  const login = () => {
    axios.post('http://localhost:5000/signin',{
      email: email,
      password: password
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
      {/*  Login input box */}
      <div className='flex flex-col bg-[#ffffff] rounded-m py-5 px-10 border-2 mt-[20vh] justify-center self-center'>
        <div className='flex flex-col  p-5'>
          <h2 className='flex font-bold text-[1.6rem]'>Login</h2>
          <input type="text" onChange={e => setEmail(e.target.value)} className="outline-none py-4 my-4" placeholder="Email Address" />
          <input type="text" onChange={e => setPassword(e.target.value)} className="outline-none my-4" placeholder="Password"  />
        </div>
        <div className='flex gap-5'>
          <Link to="/register" className='flex-[0.9] text-[#7FAFF2]'>
            <p >New User? Create an account</p>
          </Link>
          <button onClick={() => {
            login();
            if(user) {
              navigate("/product");
            }
            else if(error) {
              alert("Wrong Credentials");
            }
          }} className='bg-[#1C73E7] text-white px-6 rounded-[24px]'>Login</button>

        </div>
      </div> 

    </div>
  )
}

export default Login;
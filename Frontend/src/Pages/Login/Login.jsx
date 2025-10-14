import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
const [formData,setFormData] = useState({
  email : '',
  password : '',
})

const handleChange = (e) => {
  const { name, value } = e.target; 
  setFormData((prev) => ({
    ...prev,
    [name]: value, 
  }));
};
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData); 
  alert("Data is logged successfully!"); 
};


  return (
   <>
    <section className='flex flex-col min-h-screen bg-dark-blue w-full justify-center items-center'>
             <form onSubmit={handleSubmit } action="" className='flex flex-col items-center space-y-6 bg-secondary-blue p-6 rounded-md max-w-3xl lg:min-w-3xl' >
                <h1 className='text-white underline italic'>Login</h1>
                <div className='w-full space-y-4'>
                    <input type="email"  onChange={handleChange} name='email'  className='bg-white w-full h-12  rounded-md outline-none pl-4' placeholder='Enter Your Email' />
                    <input type="password"  onChange={handleChange} name='password'             className='bg-white w-full h-12  rounded-md outline-none pl-4' placeholder='Enter Your Password' />
                    <button onClick={handleSubmit} className='bg-dark-blue w-full py-2 rounded-md text-white cursor-pointer'>Login</button>

                </div>
                <div className='w-full flex justify-end text-white'><p>Already Have An <Link to={'/signup'}><span className='underline text-primary-light'>Account</span></Link></p></div>
             </form>
    </section>
   
   </>
  )
}

export default Login

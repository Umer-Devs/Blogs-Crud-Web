import React from 'react'

const Login = () => {
  return (
   <>
    <section className='flex flex-col min-h-screen bg-dark-blue w-full justify-center items-center'>
             <form action="" className='flex flex-col items-center space-y-6 bg-secondary-blue p-6 rounded-md min-w-3xl' >
                <h1 className='text-white underline italic'>Login</h1>
                <div className='w-full space-y-4'>
                    <input type="email" className='bg-white w-full h-12  rounded-md outline-none pl-4' placeholder='Enter Your Email' />
                    <input type="password" className='bg-white w-full h-12  rounded-md outline-none pl-4' placeholder='Enter Your Password' />
                    <button className='bg-dark-blue w-full py-2 rounded-md text-white cursor-pointer'>Login</button>

                </div>
                <div className='w-full flex justify-end text-white'><p>alredy Have AN aCCOUNT</p></div>
             </form>
    </section>
   
   </>
  )
}

export default Login

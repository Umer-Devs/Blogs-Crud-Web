import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
    <section className='min-h-screen w-full bg-dark-blue flex flex-col justify-center items-center space-y-6'>
      <h1 className='text-primary-light font-bold'>Share Your Ideas with the World</h1>
      <p className='text-white/70 max-w-4xl text-center tracking-wider '>Express your thoughts, inspire others, and connect with a vibrant community of readers who love authentic and meaningful content. Whether you want to share your personal experiences, creative ideas, or expert insights, our platform gives you the space to be heard. Start your blogging journey today — because every story, every perspective, and every voice truly matters.</p>
      <div  className='flex justify-center items-center gap-6 '> 
        <Link to={'/login'}><button className='px-6 py-2 bg-secondary-blue rounded-md text-white cursor-pointer'>Create Blog</button></Link>
        <button className='px-6 py-2 border border-secondary-blue text-white rounded-md  cursor-pointer'>View All Blogs</button>
      </div>
    </section>
   </>
  )
}

export default Home

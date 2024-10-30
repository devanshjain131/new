import React from 'react'
import HeroImg from "../../assets/Hero.jpg"

const Hero = () => {
  return (
    <main className='mt-14 sm:mt-0'>
    <div className='min-h-[500px] container grid place-items-center'>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
        <div><img src={HeroImg} alt="" className='w-[300px]' /></div>
        <div className='space-y-5'>
            <h1 className='text-4xl font-bold'>Get an amazing logo for your 
                startup in 60 seconds
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ducimus, 
                perspiciatis ipsam porro ipsa mollitia eveniet ex quam perferendis, facilis
                 tempore veritatis voluptatum commodi quas natus. Iusto sequi unde tenetur.</p>
        <div className='space-x-2'>
            <input placeholder='Enter your email' type="email" name='' 
            id='' className='bg-gray-200 p-2 rounded-md w-[140px]'/>
            <button className='bg-blue-500 text-white p-2 rounded-md'>
                Notify me
            </button>
            </div>         
        </div>

    </div>
    </div>
    
    </main>
  )
}

export default Hero
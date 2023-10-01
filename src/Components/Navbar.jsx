import React from 'react'

const Navbar = () => {
  return (
    <nav className=' py-4 shadow-md mb-10 px-4'>
        <div className='flex flex-col sm:flex-row gap-3 justify-between items-center max-w-6xl mx-auto'>
        <div>
            <h2 className='text-3xl font-bold '>LOGO</h2>
        </div>
        <div className='sm:w-[50%] w-full flex gap-2'>
            <input className='border-2 w-full border-gray-500 rounded-lg outline-none px-3 py-2' type="search" placeholder='search here...' id="" />
            <button className='bg-green-400 hover:bg-green-500 rounded-md text-white font-semibold px-4 py-2 transition-colors'>Search</button>
        </div>
        <ul className='flex gap-3'>
            <li className='text-lg font-semibold p-1 cursor-pointer'>Home</li>
            <li className='text-lg font-semibold p-1 cursor-pointer'>Cart</li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar
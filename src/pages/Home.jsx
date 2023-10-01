import React from 'react'
import Product from '../Components/Product'

const Home = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4'>
        <Product/>
    </div>
  )
}

export default Home
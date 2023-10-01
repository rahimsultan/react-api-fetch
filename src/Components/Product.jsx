import React, { useEffect, useState } from 'react';

const Product = () => {

    const [prod, SetProd] = useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData = async()=>{
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        SetProd(data.products)
    }
  return (
    <>
    {
        prod.map(item=>{
            return (
                <div className='p-2 bg-green-100 rounded-md shadow-lg cursor-pointer'>
        <div className='rounded-md overflow-hidden mb-2 h-[140px]'>
            <img src={item.thumbnail} className='hover:scale-105 transition-transform max-w-full' />
        </div>
        <div className='my-4'>
            <h2 className='text-2xl font-semibold'>{item.title.length >15 ? item.title.slice(0,15) +'...' : item.title}</h2>
            <p className='text-gray-700'>{item.description.slice(0,40)}..</p>
            <div className='flex justify-between my-2 '>
                <h4 className='text-xl font-bold'>${item.price}</h4>
                <span className='font-bold'>{item.rating} ⭐⭐⭐⭐</span>
            </div>
            <button className='font-bold bg-green-400 text-white rounded-md px-4 py-2 hover:bg-green-500'>Add to Cart</button>
        </div>
    </div>
            )
        })
    }
    
    </>
  )
}

export default Product
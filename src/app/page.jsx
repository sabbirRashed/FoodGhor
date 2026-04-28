'use client'
import FoodCard from '@/components/FoodCard';
import NoFoodsCard from '@/components/NoFoodsCard';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [foods, setFoods] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  
console.log(searchInput)
  useEffect(() => {
    const loadFoods = async () => {
      const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
      const data = await res.json();
      setFoods(data.data)
    };
    
    loadFoods();
  }, [])


  return (
    <div className='mt-20  mx-20'>
      {/*home page heading */}
      <h2 className='flex justify-center items-end gap-2 font-poppins'>
        <span className='text-2xl md:text-4xl font-bold'>Discover Delicious Foods</span>
        <Image src='/chicken_fry.png'
          alt='chicken_fry'
          width={80}
          height={80}></Image>
      </h2>


      {/* search and filter section */}
      <div className='flex items-center gap-2 my-10 p-4 rounded-lg bg-base-200 border border-base-300'>

        <form className='flex w-full gap-2'>
          <input
            type="text"
            name="text"
            value={searchInput}
            onChange={e => {setSearchInput(e.target.value)}}
            id=""
            placeholder='Search food...'
            className='px-4 py-2 bg-base-300 w-[80%] flex-1 rounded-lg' />
          <input
            type="submit"
            value="Search"
            className='p-2 bg-amber-600 px-6 rounded-lg' />
        </form>

        <select name="dropdown" id="" className='px-4 py-2 bg-base-300 rounded-lg'>
          <option value="All Category">All Category</option>
          <option value="Burger">Burger</option>
          <option value="Pizza">Pizza</option>
          <option value="Dessert">Dessert</option>
          <option value="Beverage">Beverage</option>
          <option value="Rice">Rice</option>
          <option value="Dish">Dish</option>
        </select>
      </div>



      {/* food cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        {
          foods.map(food => {
            return <FoodCard
              key={food.id}
              food={food}></FoodCard>
          })
        }
      </div>
    </div>
  );
};

export default HomePage;
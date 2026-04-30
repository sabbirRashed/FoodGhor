import FilterInput from '@/components/FilterInput';
import FoodCard from '@/components/FoodCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import NoFoodsCard from '@/components/NoFoodsCard';
import SearchInput from '@/components/SearchInput';
import Image from 'next/image';
import React, { Suspense } from 'react';

const HomePage = async ({ searchParams }) => {
    const sp = await searchParams;
    const search = sp.search || "";
    const category = sp.category || "";
    // console.log(sp, search, category)

    const loadFoods = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods?search=${search}&category=${category}`);
    const data = await loadFoods.json();
    const foods = data.data;
    // console.log(data.data)


    return (
        <div className='mt-20  mx-6 md:mx-20'>
            {/*home page heading */}
            <h2 className='flex justify-center items-end gap-2 font-poppins'>
                <span className='text-2xl md:text-4xl font-bold'>Discover Delicious Foods</span>
                <Image src='/chicken_fry.png'
                    alt='chicken_fry'
                    width={80}
                    height={80}></Image>
            </h2>


            {/* search and filter section */}
            <div className='flex  flex-col md:flex-row gap-2 my-10 p-4 rounded-lg bg-base-200 border border-base-300'>
                <SearchInput></SearchInput>
                <FilterInput></FilterInput>
            </div>


            {/* food cards */}
            {
                foods.length === 0 ? (
                    <NoFoodsCard></NoFoodsCard>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                        {
                            foods.map(food => {
                                return <FoodCard
                                    key={food.id}
                                    food={food}></FoodCard>
                            })
                        }
                    </div>
                )
            }
        </div>
    );
};

export default HomePage;
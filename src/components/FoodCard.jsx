import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { SlArrowRight } from 'react-icons/sl';

const FoodCard = ({ food }) => {
    console.log(food.category);

    const { image_link, dish_name, price, rating } = food;
    return (
        <div className='border border-gray-700 p-6 rounded-lg bg-base-300 tooltip min-w-0' data-tip={dish_name}>
            <div className='flex justify-center'>
                <Image
                    src={image_link}
                    alt={dish_name}
                    width={100}
                    height={100}></Image>
            </div>

            <div className='mt-6 space-y-4'>
                {/* <h2 className='truncate w-full' title={dish_name}>{dish_name}</h2> */}
                <h2 className='truncate '>{dish_name}</h2>

                <div className='flex justify-between'>
                    <span>৳{price}</span>
                    <span className='p-[2px] bg-pink-50 rounded-full'>🩷</span>
                </div>

                <div className='flex justify-between items-center'>
                    <button className='btn btn-sm bg-white rounded-full text-neutral'>Details <SlArrowRight /></button>
                    <span className='flex justify-end items-center gap-1'><FaStar />{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
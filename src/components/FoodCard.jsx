import Image from 'next/image';
import React from 'react';

const FoodCard = ({food}) => {
    console.log(food);
    const {image_link, dish_name, price, rating} = food;
    return (
        <div className='border border-amber-500 p-4 rounded-lg bg-base-300 tooltip min-w-0' data-tip={dish_name}>
            
        </div>
    );
};

export default FoodCard;
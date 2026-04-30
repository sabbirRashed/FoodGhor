import Image from 'next/image';
import React from 'react';

const FoodDetails = async ({ params }) => {
    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json();

    console.log(foodId);
    const { id, dish_name, image_link, category, cuisine, origin_and_popularity, price, rating, main_ingredients } = data.data
    return (
        <div className="w-11/12 max-w-7xl mx-auto card card-side bg-base-100 border border-gray-700  mt-20 flex-col md:flex-row">
            <figure className='bg-base-300 flex-1 p-10'>
                <Image
                    src={image_link}
                    alt={dish_name}
                    width={300}
                    height={300}
                    className='w-80 h-auto'></Image>
            </figure>
            <div className="card-body flex-1">
                <p><span className='font-bold'>Food id</span> : {id}</p>
                <h2 className="card-title">{dish_name}</h2>
                <p><span className='font-bold'>Category : </span>{category}</p>
                <p className='mt-4'><span className='font-bold'>Type of cooking : </span>{cuisine}</p>
                <p><span className='font-bold'>Popularity : </span>{origin_and_popularity}</p>
                <p><span className='font-bold'>Ingradients :</span></p>
                <ol className='list-decimal px-4'>
                    {main_ingredients.map((item, idx) => {
                        return <li key={idx}>{item}</li>
                    })}
                </ol>

                <div className="card-actions justify-end mt-4">
                    <div className="badge badge-secondary">Price : {price}</div>
                    <div className="badge badge-info">Ratings : {rating}</div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
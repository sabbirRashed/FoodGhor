import React from 'react';

const NoFoodsCard = () => {
    return (
        <div className='text-center'>
            <h2 className='font-bold text-xl'>Opps! No foods found 😜</h2>
            <p className='text-sm mt-2'>Try different search terms or category</p>
        </div>
    );
};

export default NoFoodsCard;
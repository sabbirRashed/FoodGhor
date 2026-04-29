"use client"
import React, { useState } from 'react';

const FilterInput = () => {
    // const [filterInput, setFilterInput] = useState("");


    return (
        <div>
            <select
                name="dropdown"
                // value={filterInput}
               
                className='px-4 py-2 bg-base-300 rounded-lg'>
                <option value="all Category">All Category</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="burger">Burger</option>
                <option value="beverage">Beverage</option>
                <option value="rice">Rice</option>
                <option value="dish">Dish</option>
            </select>
        </div>
    );
};

export default FilterInput;
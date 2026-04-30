"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const FilterInput = () => {
    const [filterInput, setFilterInput] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleFilter = (e) => {
        e.preventDefault();

        const category = e.target.value;
        setFilterInput(category)
        console.log(category);
        const params = new URLSearchParams(searchParams);
        if (category) {
            params.set("category", category);
        }
        else {
            params.delete("category");
            console.log("helllo");
        }

        router.push(`${pathName}?${params.toString()}`);
        console.log(params);

    }

    return (
        <div>
            <select
                name="dropdown"
                value={filterInput}
                onChange={handleFilter}
                className='px-4 py-2 bg-base-300 rounded-lg'>
                <option value="">All Category</option>
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
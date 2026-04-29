"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchInput = () => {
    const [searchInput, setSearchInput] = useState("");

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();
    // console.log(searchParams, "searchparams");

    const handleSearch = (e) => {
        e.preventDefault();
        
        const params = new URLSearchParams(searchParams);

        if(searchInput){
            params.set("search", searchInput);
        }
        else{
            params.delete("search");
        }

        router.push(`${pathName}?${params.toString()}`);
        console.log(params);
    }

    return (
        <form className='flex w-full gap-2'>
            <input
                type="text"
                name="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder='Search food...'
                className='px-4 py-2 bg-base-300 w-[80%] flex-1 rounded-lg' />

            <input
                onClick={handleSearch}
                type="submit"
                className='p-2 bg-amber-600 px-6 rounded-lg' />
        </form>
    );
};

export default SearchInput;
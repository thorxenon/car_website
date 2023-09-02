"use client";

import { useState } from "react";
import { SearchManufacturer } from "./";
import { generateCarImageUrl } from "@/utils";
import Image from "next/image";

const SearchButton = ({otherClasses}:{otherClasses: string}) => (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40} height={40}
            className="object-contain"
        />
    </button>
)

const SearchBar = () =>{

    const [manufacturer, setManufacturer] = useState('');

    const handleSearch = async() =>{
        
    }

    return(
        <div className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer = {manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>
        </div>
    )
}

export default SearchBar;
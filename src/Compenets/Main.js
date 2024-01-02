import React, { useState } from "react";
import Navg from "../Navg";
import Products from "./Products";
let Main = () => {
    let [search, setSearch] = useState('');
    let [selectedColor, setSelectedColor] = useState('')
    let [selectedCategory, setSelectedCategory] = useState('')

    return (
        <>
            <Navg setSearch={setSearch}
                setSelectedColor={setSelectedColor}
                setSelectedCategory={setSelectedCategory}
            />

            <Products search={search}
                selectedColor={selectedColor}
                selectedCategory={selectedCategory} />
        </>
    );
};

export default Main;

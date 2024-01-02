import React, { useEffect, useState } from 'react'
import Data from '../Data/Data'
import './products.css'
import { RingLoader } from 'react-spinners';
import { Container } from 'react-bootstrap';
import { logDOM } from '@testing-library/react';
let Products = ({ search, selectedColor, selectedCategory }) => {
    let filteredData = Data.filter(({ title, color, category }) =>
        (selectedColor.toLowerCase() === '' || color.toLowerCase() === selectedColor) &&
        (selectedCategory === '' || category.toLowerCase().includes(selectedCategory.toLowerCase())) &&
        (search === '' || title.toLowerCase().includes(search.toLowerCase()))

    ).map(({ title, color, img, reviews, prevPrice, newPrice, company }) => (
        <div className='cards'>
            <div className='card-header'>
                <img src={img} className='card-imgs' alt="" />
                <h5>{title} </h5>
                <p className='my-1' > color:{color} </p>
                <p className='my-1'>Total reviews: {reviews} </p>
                price: <del>{prevPrice}</del> {newPrice} <br />
                <span>company :{company}</span>
            </div>
        </div>
    ));
    console.log(!filteredData.length >= 0)

    return (
        <>
            {filteredData.length === 0 ? <div className='loading-page'>
                <RingLoader color="#36d7b7" />
            </div> :
                <Container className='d-flex flex-wrap'>
                    {filteredData}
                </Container>
            }
        </>
    )
}
export default Products;

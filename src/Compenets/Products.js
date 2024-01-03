import Data from '../Data/Data'
import './products.css'
import { Container } from 'react-bootstrap';
let Products = ({ search, selectedColor, selectedCategory, selectedCompany }) => {

    let filteredData = Data.filter(({ title, color, category, company }) =>
        (selectedColor.toLowerCase() === '' || color.toLowerCase() === selectedColor) &&
        (selectedCategory === '' || category.toLowerCase().includes(selectedCategory.toLowerCase())) &&
        (search === '' || title.toLowerCase().includes(search.toLowerCase())) &&
        (selectedCompany.toLowerCase() === '' || company.toLowerCase() === selectedCompany)


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
    Data.map(({ company }) => {
        console.log(company)
    })

    return (
        <>
            {filteredData.length === 0 ? <div className='loading-page'>
                <h2>item not founded</h2>
            </div> :
                <Container className='d-flex flex-wrap my-3'>
                    {filteredData}
                </Container>
            }
        </>
    )
}
export default Products;

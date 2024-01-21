import Data from '../Data/Data'
import './products.css'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { additem } from '../store/CartSlice'
let AllProducts = () => {
    const Dispacth = useDispatch()
    const selectedColor = useSelector((state) => state.Product.selectedColor);
    const selectedCompany = useSelector(state => state.Product.selectedCompany)
    const selectedCategory = useSelector(state => state.Product.selectedCategory)
    const search = useSelector(state => state.Product.search)


    let filteredData = Data.filter(({ title, color, category, company }) =>
        (selectedColor.toLowerCase() === '' || color.toLowerCase() === selectedColor) &&
        (selectedCategory === '' || category.toLowerCase().includes(selectedCategory.toLowerCase())) &&
        (search === '' || title.toLowerCase().includes(search.toLowerCase())) &&
        (selectedCompany.toLowerCase() === '' || company.toLowerCase() === selectedCompany)

    ).map(({ title, color, img, reviews, prevPrice, newPrice, company, id }) => (
        <div className='cards'>
            <div key={id} className='card-header'>
                <img src={img} className='card-imgs' alt="" />
                <h5>{title} </h5>
                <p className='my-1' > color:{color} </p>
                <p className='my-1'>Total reviews: {reviews} </p>
                price: <del>{prevPrice}</del> {newPrice} <br />
                <span>company :{company}</span>

            </div>
        </div>
    ));

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
export default AllProducts;

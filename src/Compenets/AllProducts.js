import Data from '../Data/Data'
import './products.css'
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { additem } from '../store/CartSlice'
import { setSelectedCompany } from '../store/ProductSlice';
let AllProducts = () => {
    const Dispacth = useDispatch()
    const selectedColor = useSelector((state) => state.Product.selectedColor);
    const selectedCompany = useSelector(state => state.Product.selectedCompany)
    const selectedCategory = useSelector(state => state.Product.selectedCategory)
    const search = useSelector(state => state.Product.search)
    const data = useSelector(state => state.Carts)
    console.log(data)
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
                <button className='btn btn-sec' onClick={() => Dispacth(additem({ title, color, img, reviews, prevPrice, newPrice, company, id }))} >Add to cart</button>
            </div>
        </div>
    ));
    let handleCompany = (cmp) => {
        Dispacth(setSelectedCompany(cmp))

    }
    return (
        <>
            {filteredData.length === 0 ? <div className='loading-page'>
                <h2>item not founded</h2>
            </div> : <div>
                <Container>
                    <Button onClick={() => handleCompany('')} variant="secondary" className='m-2'>All</Button>
                    <Button onClick={() => handleCompany('nike')} variant="secondary" className='m-2'>Nike</Button>
                    <Button onClick={() => handleCompany('adidas')} variant="secondary" className='m-2'>Adidas</Button>
                    <Button onClick={() => handleCompany('puma')} variant="secondary" className='m-2'>Puma</Button>

                </Container>
                <Container className='d-flex flex-wrap my-3'>
                    {filteredData}
                </Container>
            </div>
            }
        </>
    )
}
export default AllProducts;

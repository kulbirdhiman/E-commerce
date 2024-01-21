import { useSelector } from "react-redux"
import './products.css'
import './cart.css'



const Cart = () => {
    const items = useSelector(state => state.Carts)
    let data = items.map(({ id, img, title, prevPrice, newPrice, color, company, reviews }) => {
        return (
            <div key={id} className='item'>
                <img src={img} className='card-imgs' alt="" />
                <div className="item-d">
                    <h5>{title} </h5>
                    <p className='my-1' > color:{color} </p>
                    <p className='my-1'>Total reviews: {reviews} </p>
                    price: <del>{prevPrice}</del> {newPrice} <br />
                    <span>company :{company}</span>
                </div>

            </div>
        )
    })
    return (
        <>
            <div className="card-items">
                {data}
            </div>
        </>
    )
}
export default Cart
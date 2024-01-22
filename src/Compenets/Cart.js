import { useSelector } from "react-redux"
import './products.css'
import './cart.css'
import Navg from "./Navg"
import { useDispatch } from "react-redux"
import { removeItem } from '../store/CartSlice'
const Cart = () => {
    const Dispacth = useDispatch()
    const items = useSelector(state => state.Carts)
    let id = Math.floor(Math.random * 100)
    let data = items.map(({ img, title, prevPrice, newPrice, color, company, reviews }) => {
        return (
            <div key={id} className='item text-center'>
                <img src={img} className='card-imgs' alt="" />
                <div className="item-d">
                    <h5>{title} </h5>
                    <p className='my-1' > color:{color} </p>
                    <p className='my-1'>Total reviews: {reviews} </p>
                    price: <del>{prevPrice}</del> {newPrice} <br />
                    <span>company :{company}</span><br />
                    <button className="btn btn-danger  " onClick={() => Dispacth(removeItem(title))}>Remove</button>
                </div>

            </div>
        )
    })
    return (
        <>
            <Navg />
            <div className="card-items">
                {data}
            </div>
        </>
    )
}
export default Cart
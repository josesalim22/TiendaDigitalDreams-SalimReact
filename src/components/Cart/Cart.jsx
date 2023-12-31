import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {

     const { cart, clearCart, totalQuantity, total } = useContext(CartContext)
     if (totalQuantity() === 0) {
          return (
               <div>
                    <h2>No hay productos en el carrito</h2>
                    <Link to='/' className='option'>Productos</Link>
               </div>
          )
     }

     return (
          <div>
               {cart.map(p => < CartItem key={p.id} {...p} />)}
               <h3>Total: ${total()}</h3>
               <div className='button-container'>
                    <button onClick={() => clearCart()} className='Button-limpiar'>Limpiar Carrito</button>
                    <Link to='/checkout' className='button-checkout'>Checkout</Link>
               </div>
          </div>
     )
}

export default Cart
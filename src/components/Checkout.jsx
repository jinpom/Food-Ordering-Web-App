import { useContext } from 'react';
import Modal from './UI/Modal';
import CartContext from '../components/UI/Modal';
import { currencyFormatter } from '../util/formatting';

export default function Checkout() {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price, 
    0
  );

  return (
    <form>
      <h2>Checkout</h2>
      <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
    </form>
  )
}
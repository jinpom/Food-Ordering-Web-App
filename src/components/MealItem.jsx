import { useContext } from 'react';
import { currentcyFormatter } from '../util/formatting.js';
import Button from './UI/Button';
import CartContext from '../store/CartContext.jsx';

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currentcyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.descrption}</p>
        </div>
        <p className="meal-item-actions">
          <Button
            onClick={handleAddMealToCart}
            textOnly={false}
          >
            Add to Cart
          </Button>
        </p>
      </article>
    </li>
  )
}
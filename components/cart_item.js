import { useCart } from 'react-use-cart';
function CartItem({ id, name, quantity, price, image }) {
  const { updateItemQuantity, removeItem } = useCart();

  const increment = () => updateItemQuantity(id, quantity + 1);
  const decrement = () => updateItemQuantity(id, quantity - 1);
  const remove = () => removeItem(id);

  const total = quantity * price;

  const formattedUnitPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price / 100);

  const formattedLineTotal = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'US',
  }).format(total / 100);

  return (
    <div key={id}>
      <div>
        <div>
          <h4>{name}</h4>
          <button onClick={remove}>
            <svg
              className="fill-current w-3 h-3 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
            Remove
          </button>
        </div>
      </div>

      <div>
        <button onClick={increment}>
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>

        <span>{quantity}</span>

        <button onClick={decrement}>
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>

      <div>
        <p>{formattedLineTotal}</p>
        {quantity > 1 && <p>{formattedUnitPrice} each</p>}
      </div>
    </div>
  );
}

export default CartItem;

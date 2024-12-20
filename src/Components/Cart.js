import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import PayPalCheckoutButton from './PayPalCheckoutButton';

function Cart() {
 
    
  const { cart, removeFromCart, updateCartQuantity, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
  <section className="h-100 gradient-custom">
    <div className="container py-5">
      <div className="row d-flex justify-content-center my-4">
        {/* Cart Items */}
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Cart - {cart.length} item(s)</h5>
            </div>
            <div className="card-body">
              {cart.length === 0 ? (
                <p>Your cart is empty. Add some products!</p>
              ) : (
                cart.map((item) => (
                  <div className="row mb-4" key={item.id}>
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      <div
                        className="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        <img src={item.image} className="w-100" alt={item.title} />
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p><strong>{item.title}</strong></p>
                      <p>Price: ${item.price.toFixed(2)}</p>
                      <button
                        type="button"
                        className="btn btn-success btn-sm me-1 mb-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="fas fa-trash"></i> Remove
                      </button>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      <div className="d-flex" style={{maxWidth:"300px,"}} >
                        <button
                          className="btn btn-success px-3 me-2"
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <input
                          type="number"
                          className="form-control"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="btn btn-success px-3 ms-2"
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                   
                  </div>
                  
                ))
              )}
            </div>
            <button type="button" className="btn btn-success btn-lg btn-block mt-3 ms-3" onClick={clearCart}>
                Clear Cart
              </button>
          </div>
        </div>

        {/* Summary Section */}
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Products
                  <span>${total.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Free</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <strong>Total</strong>
                  <span><strong>${total.toFixed(2)}</strong></span>
                </li>
              </ul>
              {/* <button type="button" className="btn btn-success btn-lg btn-block mt-3" onClick={()=>(PayPalCheckoutButton)}>
               Checkout
              </button> */}
              <PayPalCheckoutButton/>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default Cart;

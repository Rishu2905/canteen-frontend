import React, { useEffect, useState } from 'react';

function MainPage() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div>
      <h1>College Canteen Menu</h1>
      {Array.isArray(menu) && menu.length > 0 ? (
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              {item.item} - ₹{item.price}
              <button onClick={() => addToCart(item)} style={{ marginLeft: '10px' }}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading menu...</p>
      )}

      <hr />
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>🛒 Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.item} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MainPage;

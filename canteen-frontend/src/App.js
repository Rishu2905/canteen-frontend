import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';



function App() {
  // fetching menu
  const [menu, setMenu] = useState([]);

  useEffect(() => {
  axios.get('http://localhost:5000/api/menu')
    .then(response => {
      console.log("Menu data received:", response.data);
      setMenu(response.data);
    })
    .catch(error => {
      console.error("Error fetching menu:", error);
    });
}, []);
// cart feature
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
  setCart([...cart, item]); // adds item to cart
};
  return (
  <div style={{ padding: '20px' }}>
    <h1>College Canteen Menu</h1>
    {Array.isArray(menu) && menu.length > 0 ? (
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            {item.item} - ₹{item.price}
            <button style={{ marginLeft: '10px' }} onClick={() => addToCart(item)}>
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

export default App;

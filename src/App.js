import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/menu')
      .then(response => {
        setMenu(response.data);
      })
      .catch(error => {
        console.error("Error fetching menu:", error);
      });
  }, []);

  return (
    <div>
      <h1>College Canteen Menu</h1>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            {item.item} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

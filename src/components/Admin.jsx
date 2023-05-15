import React, { useState } from 'react';

const initialDishes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    price: 12.99,
  },
  {
    id: 2,
    name: 'Pad Thai',
    price: 10.99,
  },
  {
    id: 3,
    name: 'Butter Chicken',
    price: 14.99,
  },
];

const Admin=()=> {
  const [dishes, setDishes] = useState(initialDishes);
  const [nameInput, setNameInput] = useState('');
  const [priceInput, setPriceInput] = useState('');

  const handleDelete = (id) => {
    setDishes(dishes.filter(dish => dish.id !== id));
  };

  const handleUpdate = (id, newName, newPrice) => {
    setDishes(dishes.map(dish => dish.id === id ? { id, name: newName, price: newPrice } : dish));
  };

  const handleInsert = () => {
    setDishes([...dishes, { id: dishes.length + 1, name: nameInput, price: Number(priceInput) }]);
    setNameInput('');
    setPriceInput('');
  };

  return (
    <div className="DishManager">
      <h1>Dish Manager</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dishes.map(dish => (
            <tr key={dish.id}>
              <td>{dish.id}</td>
              <td>{dish.name}</td>
              <td>${dish.price.toFixed(2)}</td>
              <td><button onClick={() => handleDelete(dish.id)}>Delete</button></td>
              <td>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdate(dish.id, e.target.name.value, Number(e.target.price.value));
                }}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" name="name" defaultValue={dish.name} />
                  <label htmlFor="price">Price:</label>
                  <input type="number" name="price" defaultValue={dish.price} />
                  <button type="submit">Update</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleInsert();
      }}>
        <label htmlFor="nameInput">Name:</label>
        <input type="text" id="nameInput" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
        <label htmlFor="priceInput">Price:</label>
        <input type="number" id="priceInput" value={priceInput} onChange={(e) => setPriceInput(e.target.value)} />
        <button type="submit">Insert</button>
      </form>
    </div>
  );
}

export default Admin;

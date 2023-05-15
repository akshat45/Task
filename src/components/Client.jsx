import React from 'react';
import Card from './Card';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

const dishes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian dish made with spaghetti, eggs, pancetta, and Parmesan cheese.',
    price: 12.99,
  },
  {
    id: 2,
    name: 'Pad Thai',
    description: 'A popular Thai dish made with stir-fried rice noodles, tofu, eggs, and a sweet and tangy sauce.',
    price: 10.99,
  },
  {
    id: 3,
    name: 'Butter Chicken',
    description: 'A creamy Indian dish made with marinated chicken cooked in a tomato-based sauce with butter and cream.',
    price: 14.99
  },
];

const Client=()=> {
  return (
    <div >
      {dishes.map(dish => (
        <Card key={dish.id} dish={dish} />
      ))}
    </div>
  );
}

export default withRouter(Client);

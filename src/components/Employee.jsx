import React from 'react';
import { withRouter } from 'react-router-dom';
const orderDetails = [{ id: 1, dish: 'Spaghetti Carbonara', quantity: 2, price: 12.99, }, { id: 2, dish: 'Pad Thai', quantity: 1, price: 10.99, }, { id: 3, dish: 'Butter Chicken', quantity: 3, price: 14.99, },];

function Employee() {
    return (
        <div className="OrderDetails">
            <h1>Order Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Dish</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetails.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.dish}</td>
                            <td>{order.quantity}</td>
                            <td>${order.price.toFixed(2)}</td>
                            <td>${(order.quantity * order.price).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">Total:</td>
                        <td>${orderDetails.reduce((total, order) => total + (order.quantity * order.price), 0).toFixed(2)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default withRouter(Employee);

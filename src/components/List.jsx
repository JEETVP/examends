import React, { useState } from 'react';
import { Task } from './Task';

export const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { name: 'Manhattan Burger', price: 200 },
    { name: 'Big Mac Burger', price: 250 },
    { name: 'Fondue Burger', price: 300 },
    { name: 'Big Mac Double Burger', price: 250 }
  ]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (name, price) => {
    setCart([...cart, { name, price }]);
    setTotal(Total => Total + price);
  };
  const checkout = () => {
    alert('Pedido completado, pase por él a la caja');
  };

  return (
    <div>
      <h2>Lista de Hamburguesas</h2>
      {tasks.map((task, index) => (
        <Task
          key={index}
          name={task.name}
          price={task.price}
          onComplete={() => addToCart(task.name, task.price)}
        />
      ))}

      <h2>Carrito de Hamburguesas</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name}  {item.price}</p>
        </div>
      ))}

      <h2>Total: {total}</h2>
      <button style={{ backgroundColor: 'red' }} onClick={checkout}>Pagar mi pedido</button>
    </div>
  );
};


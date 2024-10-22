import React, { useState } from 'react';
import { ToDoList } from './components/List';

function App() {
  const [checkout, setCheckout] = useState(false);
  const [payment, setPayment] = useState(false);

  const handleCheckout = () => {
    setCheckout(true);
  };

  const handlePayment = () => {
    setPayment(true);
  };

  return (
    <>
      <h1>Bienvenido a Hamburguesas</h1>
      <ToDoList />

      {checkout && (
        <div>
          <h2>Detalles del pedido</h2>
          <button onClick={handlePayment}>Finalizar mi pedido</button>
        </div>
      )}

      {payment && (
        <div>
          <h2>El pedido fue completado.pasa por el a la caja</h2>
        </div>
      )}
    </>
  );
}

export default App;

import React from 'react'

export const Task = ({ name, price, onComplete, }) => {
  return (
    <div>
      <p>{name} {price}</p>
      <div>
          <button onClick={onComplete}>Agregar a pedido</button>
      </div>
    </div>
  )
}
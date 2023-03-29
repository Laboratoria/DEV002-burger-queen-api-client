import React from 'react'

export default function Viewmesero() {
  return (
    <div className='containerMesero'>
      <nav>
        <ul>
        <li>Cafe</li>
        <li>Jugos</li>
        <li>Pasteleria</li>
        <li>Otros</li>
        </ul>
       <button>Pedido</button>
      </nav>

      <div className='containerProducts'>
        <div className='product'>
          <h2>Americano</h2>
        </div>
        <div className='product'>
        <h2>Americano</h2>
        </div>
        <div className='product'>
        <h2>Americano</h2>
        </div>
        <div className='product'>
        <h2>Americano</h2>
        </div>
        <div className='product'>
        <h2>Americano</h2>
        </div>
        <div className='product'>
        <h2>Americano</h2>
        </div>
      </div>

      <div className='containerOrder'>
        <div className='containerButton'>
          <button>Nombre:</button>
          <button>Mesa:</button>
        </div>
        <div className='containerItems'>
          <div className='item'>
            <h3>Americano</h3>
            <div className='containerCantidad'>
              <button>+</button>
              <h3>2</h3>
              <button>-</button>
            </div>
            <h3 className='precio'>$</h3>
          </div>

        </div>
      </div>

    </div>
  )
}

import React from 'react'

function Destacados() {
  const a = 5
  const b = 5
  return (
    <div>
      <h1>frutas y verduras</h1>
      <ul>
        <li>naranjas</li> <li>manzana</li> <li>uvas</li> <li>fresas</li> <li>mangos</li> <li>platano</li> <li>lechuga</li> <li>zanahoria</li> <li>cebolla</li> <li>papa</li>
      </ul>
      <h1 data-testid="mytestid">la suma de frutas y verdura son :</h1>
      <span title="sum">{a+b}</span>
    </div>
  )
}

export default Destacados
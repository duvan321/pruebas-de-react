import React from 'react'

function Destacados() {
  const a = 5
  const b = 5
  return (
    <div>
      <h1>fruits and vegetables</h1>
      <ul>
        <li>
oranges</li> <li>apple</li> <li>grapes
</li> <li>strawberries</li> <li>mangoes</li> <li>banana</li> <li>
lettuce</li> <li>carrot</li> <li>onion</li> <li>dad</li>
      </ul>
      <h1 data-testid="mytestid">the sum of fruits and vegetables are:</h1>
      <span title="sum">{a+b}</span>
    </div>
  )
}

export default Destacados
import React, { useState } from 'react';

function CounterComp() {
  let [count, changeCounter] = useState(0);

  function addCount() {
    changeCounter( count + 1 )
  }

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={addCount}>Aumentar</button>
    </div>
  );
}

export default CounterComp;
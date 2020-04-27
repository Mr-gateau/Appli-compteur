import React, { useState } from "react";

function App() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Le compteur est à : {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <input
        name="0"
        onChange={event => {
          const input = event.target;
          if (typeof parseInt(input.value) === "number") {
            setCount(parseInt(input.value));
          }
          if (input.value.length === 0) {
            setCount(0);
          }
        }}
      />
      <p>Entrer une lettre peu causer des dommages sur votre ordinateur !</p>
      <p>Ps: Ce n'est pas précisé dans la quête...</p>
    </div>
  );
}
export default App;

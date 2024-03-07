/* 🍕 Gör en komponent PizzaCalculator som har ett inputfält 
för antal pizzor och en knapp samt p-tagg. Användaren fyller 
i antal pizzor hen vill ha och klickar på knappen. Priset 
räknas ut utifrån antal och totalen visas i p-taggen. */

import { useRef, useState } from "react";

const PizzaCalculator = () => {
  const [price, setPrice] = useState(0);
  const [inputText, setInputText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (inputRef.current) {
      setPrice(Number(inputText) * 105);
      setInputText("");
      inputRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="pizzaCalculatorDiv">
      <div>
        <h3>🍕PizzaCalculator🍕</h3>
        <h4>Varje pizza kostar 105kr</h4>
      </div>

      <div>
        <label htmlFor="pizzacalc">Hur många pizzor önskar du beställa?</label>
        <input
          ref={inputRef}
          type="text"
          id="pizzacalc"
          value={inputText}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleOnClick}>Beställ</button>
      </div>
      <div>
        <p>Pris: {price}kr</p>
      </div>
    </div>
  );
};

export default PizzaCalculator;

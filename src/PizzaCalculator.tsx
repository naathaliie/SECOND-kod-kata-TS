/* 🍕 Gör en komponent PizzaCalculator som har ett inputfält 
för antal pizzor och en knapp samt p-tagg. Användaren fyller 
i antal pizzor hen vill ha och klickar på knappen. Priset 
räknas ut utifrån antal och totalen visas i p-taggen. 

UTMANING: Lägg till tre radioknappar för olika storlekar på 
pizzorna. Priset räknas ut utifrån storlek och antal.*/

import { useRef, useState } from "react";

const PizzaCalculator = () => {
  const [price, setPrice] = useState(0);
  const [inputText, setInputText] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const smallPizaRef = useRef<HTMLInputElement>(null);
  const mediumPizaRef = useRef<HTMLInputElement>(null);
  const largePizaRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (inputRef.current) {
      setPrice(Number(inputText) * 105 + Number(selectedSize));
      setInputText("");
      inputRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handlesizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(e.target.value);
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
        <input
          ref={smallPizaRef}
          type="radio"
          id="small"
          value={"0"}
          name="pizzaSize"
          onChange={handlesizeChange}
        />
        <label htmlFor="small">Liten</label>
        <input
          ref={mediumPizaRef}
          type="radio"
          value={"20"}
          name="pizzaSize"
          onChange={handlesizeChange}
        />
        <label htmlFor="medium">Mellan (+20kr)</label>
        <input
          ref={largePizaRef}
          type="radio"
          value={"30"}
          name="pizzaSize"
          onChange={handlesizeChange}
        />
        <label htmlFor="big">Stor (+30kr)</label>
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

/* 🍕 Gör en komponent PizzaCalculator som har ett inputfält 
för antal pizzor och en knapp samt p-tagg. Användaren fyller 
i antal pizzor hen vill ha och klickar på knappen. Priset 
räknas ut utifrån antal och totalen visas i p-taggen. 

UTMANING 1: Lägg till tre radioknappar för olika storlekar på 
pizzorna. Priset räknas ut utifrån storlek och antal.

UTMANING 2: Lägg till extra toppings med kryssrutor som 
påverkar priset.*/

import { useRef, useState } from "react";
import PizzaSizes from "./PizzaSizes";
import ExtraIngridients from "./ExtraIngridients";

const PizzaCalculator = () => {
  const [price, setPrice] = useState(0); //För att visa summan
  const [inputText, setInputText] = useState(""); //För att tömma inputfältet
  const [selectedSize, setSelectedSize] = useState(""); //Samla in vald storlek
  const [addedIngridients, setAddedIngridients] = useState([]); //Samla in valda ingridienser
  const inputRef = useRef<HTMLInputElement>(null); //För att sätta focus (tabOrder)

  const handleOnClick = () => {
    if (inputRef.current?.value) {
      //Om man anget antal pizzor
      if (selectedSize !== "") {
        //Om du valt storlek
        const pizzaPrice = Number(inputText) * 105; //antalet pizzor gånger 105(pris per pizza)
        const totalExtraIngrPrice = addedIngridients.reduce(
          // reduce() *1
          (acc, curr) => acc + Number(curr),
          0
        );
        const totalPrice =
          pizzaPrice + Number(selectedSize) + totalExtraIngrPrice; //Lägger ihop totala summan för gjorda val
        setPrice(totalPrice);
        setInputText(""); //Tömmer inputfältet
        inputRef.current.focus();
        setAddedIngridients([]); // Tömmer addedIngridients
      } else {
        alert("Du måste välja storlek på pizzan");
      }
    } else {
      alert("Du måste välja antal pizzor");
    }
  };

  const handleChangePizzacalc = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          type="number"
          id="pizzacalc"
          value={inputText}
          onChange={handleChangePizzacalc}
        />
      </div>

      <PizzaSizes setSelectedSize={setSelectedSize} />
      <ExtraIngridients
        addedIngridients={addedIngridients}
        setAddedIngridients={setAddedIngridients}
      />
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

/* *1  reduce.() = Itererar igenom varje element i arrayen addedIngridients. 
Den adderar värdet av varje element till den ackumulerade summan (acc). 
I detta fall är Number() (Number(curr)) nödvändigt för att konvertera varje element 
till en siffra, eftersom det kan vara en sträng. 0 är det initiala värdet 
på ackumulatorn.
acc + Number(curr) adderar det aktuella värdet (curr) till ackumulatorn (acc).
Slutligen returneras summan av alla ingredienser.*/

import { useRef, useState } from "react";

/* En ny komponent Addition som har två inputfält 
och en knapp samt en p-tagg. När användaren klickar
 på knappen ska siffrorna i fälten adderas och 
 summan visas i p-taggen.
 */
const Addition = () => {
  const inputOneRef = useRef<HTMLInputElement>(null);
  const inputTwoRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState(0);

  const handleOnClick = () => {
    if (inputOneRef.current?.value && inputTwoRef.current?.value) {
      const number1 = Number(inputOneRef.current.value);
      const number2 = Number(inputTwoRef.current.value);

      setResult(number1 + number2);
    } else {
      alert("skriv in en siffra i båda fälten, tack!");
    }
  };

  return (
    <div className="additionDiv">
      <div>
        <input className="inputOne" type="text" ref={inputOneRef} />
      </div>
      <div>
        <input className="inputTwo" type="text" ref={inputTwoRef} />
      </div>
      <div>
        <button onClick={handleOnClick}>Klicka mig</button>
      </div>
      <div>
        <p>Resultatet är: {result} </p>
      </div>
    </div>
  );
};

export default Addition;

import { useRef, useState } from "react";

/* En ny komponent Addition som har två inputfält 
och en knapp samt en p-tagg. När användaren klickar
 på knappen ska siffrorna i fälten adderas och 
 summan visas i p-taggen.
 
UTMANING: Se till att komponenten Addition fungerar 
oavsett vad användaren stoppar i textfälten. 
Töm fälten när man klickar på knappen. Sätt fokus
 tillbaka på första textfältet. Se till att taborder 
 är korrekt.

 LYCKAS DOCK EJ GÖRA SÅ ATT MAN KAN SKRIVA IN VAD SOM HELST, ENDAST SIFFROR
 */
const Addition = () => {
  const [result, setResult] = useState(0);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnClick = () => {
    if (inputOne !== "" && inputTwo !== "") {
      const addition = Number(inputOne) + Number(inputTwo);
      setResult(addition);
      setInputOne("");
      setInputTwo("");

      inputRef.current?.focus(); //FRÅGA NIKLAS
    } else {
      alert("skriv in en siffra i båda fälten, tack!");
    }
  };

  return (
    <div className="additionDiv">
      <h3>Addition</h3>
      <div>
        <input
          ref={inputRef}
          className="inputOne"
          type="number"
          value={inputOne}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputOne(e.target.value);
          }}
        />
      </div>
      <div>
        <input
          className="inputTwo"
          type="number"
          value={inputTwo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInputTwo(e.target.value);
          }}
        />
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

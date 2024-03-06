/* En ny komponent ChangeText innehåller ett 
input-fält för text, en knapp och en p-tagg. 
När man klickar på knappen så kopieras texten 
från input till p-taggen 

UTMANING: Ändra "kopiera" till "flytta" dvs 
inputfältet töms. Sätt även fokus tillbaka på 
inputfältet. Om textfältet är tomt ska inte 
p-taggen ändras.*/

import { useRef, useState } from "react";

const ChangeText = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleOnClick = () => {
    if (inputText.trim() !== "") {
      setDisplayText(inputText);
      setInputText("");

      if (inputRef.current) {
        inputRef.current.focus(); //focus() sätter tabfokus på inputref
      }
    } else {
      alert("App App App, skriv in ett ord först!");
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div className="changeTextDiv">
      <h3>ChangeText</h3>
      <div>
        <input
          type="text"
          ref={inputRef}
          value={inputText}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <button onClick={handleOnClick}>Klicka mig</button>
      </div>
      <div>
        <p>
          Ordet du skrev var:
          <span style={{ fontWeight: "bolder" }}> {displayText}</span>
        </p>
      </div>
    </div>
  );
};

export default ChangeText;

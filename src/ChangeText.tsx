/* En ny komponent ChangeText innehåller ett 
input-fält för text, en knapp och en p-tagg. 
När man klickar på knappen så kopieras texten 
från input till p-taggen */

import { useRef, useState } from "react";

const ChangeText = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [word, setWord] = useState("");

  const handleOnClick = () => {
    if (inputRef.current?.value) {
      console.log(inputRef.current.value);
      setWord(inputRef.current.value);
    } else {
      alert("App App App, skriv in ett ord först!");
    }
  };

  return (
    <div className="changeTextDiv">
      <div>
        <input type="text" ref={inputRef} />
      </div>
      <div>
        <button onClick={handleOnClick}>Klicka mig</button>
      </div>
      <div>
        <p>
          Ordet du skrev var:{" "}
          <span style={{ fontWeight: "bolder" }}>{word}</span>
        </p>
      </div>
    </div>
  );
};

export default ChangeText;

/* Skapa komponenten ColorBox som innehåller ett textfält, 
en knapp och en div. När användaren klickar på knappen ska 
diven få den färgen som användaren skrivit i textfältet. */

import { useRef, useState } from "react";

const ColorBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [color, setColor] = useState("");

  const handleOnClick = () => {
    if (inputRef.current?.value) {
      setColor(inputRef.current?.value);
    } else {
      alert("nejnejnej!");
    }
  };

  return (
    <div className="colorBoxDiv">
      <h3>ColorBox</h3>
      <div>
        <label htmlFor="colorBox">Skriv in en färg på engelska:</label>
        <input type="text" id="colorBox" ref={inputRef} />
      </div>
      <div>
        <button onClick={handleOnClick}>Ändra färg</button>
      </div>
      <div className="showColor" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ColorBox;

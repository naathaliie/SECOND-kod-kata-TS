/* Skapa komponenten PrettyText som har: textfält, kryssrutor, 
knapp och p-tagg. Kryssrutorna har olika val: fet stil, kursiv 
och textstorlek större (dvs ett kryssalternativ som sätter 
textstorleken till en större storlek). Användaren skriver 
en text och klickar i sina val sen klickar på knappen. 
Då visas texten ifrån textfältet i p-taggen och valen i 
kryssrutorna formaterar texten. */

import { useRef, useState } from "react";

const PrettyText = () => {
  //input text från start skall vara tom
  //skriva något som vi ska samla in från input
  //vid knapptryck skall input tömmas ochh text skall visas i p-tagg
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [displayText, setDisplayText] = useState("");

  const handleOnClick = () => {
    if (inputRef.current) {
      setDisplayText(inputRef.current.value);
      inputRef.current.value = ""; // rensar textarea-fältet
      inputRef.current.focus(); // sätter tillbaka fokus på textarea-fältet
    }
  };

  return (
    <div className="prettyTextDiv">
      <h3>PrettyText</h3>
      <label htmlFor="textArea">Skriv något:</label>
      <div>
        <textarea
          ref={inputRef}
          name="textArea"
          id="textArea"
          cols={30}
          rows={10}
          placeholder="Idag är en perfekt dag att..."
        ></textarea>
      </div>
      <div className="checkboxes">
        <input type="checkbox" id="fet" name="fet" />
        <label htmlFor="fet">Fet</label>

        <input type="checkbox" id="kursiv" name="kursiv" />
        <label htmlFor="kursiv">kursiv</label>

        <input type="checkbox" id="biggerText" name="biggerText" />
        <label htmlFor="biggerText">större text</label>
      </div>
      <div>
        <button onClick={handleOnClick}>Klicka mig</button>
      </div>
      <div>
        <p>Din text: {displayText}</p>
      </div>
    </div>
  );
};

export default PrettyText;

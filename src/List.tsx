/* Skapa komponenten List som har ett textfält, 
knapp och ul. 
När användaren klickar på knappen ska en ny punkt 
läggas till i listan med det som stod i textfält */

import { useState } from "react";

const List = () => {
  const [inputWord, setInputWord] = useState("");
  const [words, setWords] = useState(["ett", "två", "tre"]);

  const handleOnClick = () => {
    if (inputWord !== "") {
      setWords([...words, inputWord]);
      setInputWord("");

      document.querySelector("input")?.focus();
    } else {
      alert("Nope!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  };

  return (
    <div className="listDiv">
      <h3>List</h3>
      <div>
        <input
          type="text"
          /*   ref={inputRef} */
          value={inputWord}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleOnClick}>Lägg till i listan</button>
      </div>
      <div>
        <ul>
          {words.map((word, index) => {
            return <li key={index}>{word}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;

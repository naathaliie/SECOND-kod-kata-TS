/* Skapa komponenten List som har ett textfält, 
knapp och ul. 
När användaren klickar på knappen ska en ny punkt 
läggas till i listan med det som stod i textfält

UTMANING 1: Töm textfältet när man klickar på knappen 
och sätt tillbaka fokus på textfältet. Tänk på taborder.

UTMANING2: Lägg till en dropdown med ett antal emojis 
på djur. När användaren klickar på knappen ska emojin 
och texten läggas till listan.*/

import { useRef, useState } from "react";
//Alla emojisar
const emojis = ["🐰", "🦢", "🦖", "🐌", "🦄"];

const List = () => {
  const [inputWord, setInputWord] = useState("");
  const [words, setWords] = useState(["ett", "två", "tre"]);
  const [selectedEmoji, setSelectedEmoji] = useState("null");
  const emojiRef = useRef(null);

  const handleOnClick = () => {
    if (inputWord !== "") {
      setWords([...words, inputWord + selectedEmoji]);
      setInputWord("");

      document.querySelector("input")?.focus();
    } else {
      alert("Nope!");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputWord(e.target.value);
  };

  const handleEmojiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEmoji(e.target.value);
  };

  return (
    <div className="listDiv">
      <h3>List</h3>

      <div className="allInputs">
        <div className="inputListDiv">
          <label htmlFor="inputList">Skriv ett ord</label>
          <input
            id="inputList"
            type="text"
            value={inputWord}
            onChange={handleInputChange}
          />
        </div>

        <div className="emojisDiv">
          <label htmlFor="emojis">Välj en emoji</label>
          <select name="emojiDrop" id="emojis" onChange={handleEmojiChange}>
            <option value="">---Emojis---</option>
            {emojis.map((emoji, index) => {
              return (
                <option ref={emojiRef} key={index} value={`${emoji}`}>
                  {emoji}
                </option>
              );
            })}
          </select>
        </div>
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

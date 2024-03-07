import { useRef } from "react";

const ExtraIngridients = ({ addedIngridients, setAddedIngridients }) => {
  const tomatoRef = useRef<HTMLInputElement>(null);
  const peperoniRef = useRef<HTMLInputElement>(null);
  const onionRef = useRef<HTMLInputElement>(null);
  const fetaostRef = useRef<HTMLInputElement>(null);
  const sparrisRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddedIngridients([...addedIngridients, e.target.value]);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="tomato"
        ref={tomatoRef}
        value={5}
        onChange={handleChange}
      />
      <label htmlFor="tomato">Tomat (+5)</label>
      <input
        type="checkbox"
        id="peperoni"
        ref={peperoniRef}
        value={10}
        onChange={handleChange}
      />
      <label htmlFor="peperoni">Peperoni (+10)</label>
      <input
        type="checkbox"
        id="onion"
        ref={onionRef}
        value={5}
        onChange={handleChange}
      />
      <label htmlFor="onion">Lök (+5)</label>
      <input
        type="checkbox"
        id="fetaost"
        ref={fetaostRef}
        value={7}
        onChange={handleChange}
      />
      <label htmlFor="fetaost">Fetaost (+7)</label>
      <input
        type="checkbox"
        id="sparris"
        ref={sparrisRef}
        value={50}
        onChange={handleChange}
      />
      <label htmlFor="sparris">Sparris (+50)</label>
    </div>
  );
};

export default ExtraIngridients;

import { useRef } from "react";

const PizzaSizes = ({ setSelectedSize } /* : string */) => {
  const smallPizaRef = useRef<HTMLInputElement>(null);
  const mediumPizaRef = useRef<HTMLInputElement>(null);
  const largePizaRef = useRef<HTMLInputElement>(null);

  const handleChangeSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(e.target.value);
  };

  return (
    <>
      <div>
        <input
          ref={smallPizaRef}
          type="radio"
          id="small"
          value={"0"}
          name="pizzaSize"
          onChange={handleChangeSize}
        />
        <label htmlFor="small">Liten</label>
        <input
          ref={mediumPizaRef}
          type="radio"
          value={"20"}
          name="pizzaSize"
          onChange={handleChangeSize}
        />
        <label htmlFor="medium">Mellan (+20kr)</label>
        <input
          ref={largePizaRef}
          type="radio"
          value={"30"}
          name="pizzaSize"
          onChange={handleChangeSize}
        />
        <label htmlFor="big">Stor (+30kr)</label>
      </div>
    </>
  );
};

export default PizzaSizes;

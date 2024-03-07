import Addition from "./Addition";
import "./App.css";
import ChangeText from "./ChangeText";
import ColorBox from "./ColorBox";
import List from "./List";
import PizzaCalculator from "./PizzaCalculator/PizzaCalculator";
import PrettyText from "./PrettyText/PrettyText";

function App() {
  return (
    <>
      <PizzaCalculator />
      <PrettyText />
      <List />
      <ColorBox />
      <Addition />
      <ChangeText />
    </>
  );
}

export default App;

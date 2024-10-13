import Input from "./components/Input";
import Square from "./components/Square";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");

  return (
    <div className="App">
      <Square colorValue={colorValue} hexValue={hexValue} />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;

import Button from "./components/Button";
import ButtonClear from "./components/ButtonClear";
import Screen from "./components/Screen";
import { useState } from "react";
import { evaluate } from "mathjs";

const App = () => {
  const [input, setInput] = useState("");

  const updateScreen = (valor) => {
    if (input == "0") {
      setInput(valor);
    } else {
      setInput(input + valor);
    }
  };

  const calcularOperacion = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Ingrese datos");
    }
  };

  return (
    <>
      <div className="min-h-screen flex">
        <div className="m-auto">
          <div
            className="w-min bg-gradient-to-t to-royal-blue-900 from-royal-blue-800 lg:px-3 px-1 lg:py-5 py-3
      rounded-xl border-royal-blue-300 border-4 shadow-[0_0_20px_purple]
      flex flex-col justify-center items-center space-y-5"
          >
            <Screen input={input} />
            <div>
              <div className="flex">
                <Button valor="1" manejarClick={updateScreen} />
                <Button valor="2" manejarClick={updateScreen} />
                <Button valor="3" manejarClick={updateScreen} />
                <Button valor="+" manejarClick={updateScreen} />
              </div>
              <div className="flex">
                <Button valor="4" manejarClick={updateScreen} />
                <Button valor="5" manejarClick={updateScreen} />
                <Button valor="6" manejarClick={updateScreen} />
                <Button valor="-" manejarClick={updateScreen} />
              </div>
              <div className="flex">
                <Button valor="7" manejarClick={updateScreen} />
                <Button valor="8" manejarClick={updateScreen} />
                <Button valor="9" manejarClick={updateScreen} />
                <Button valor="*" manejarClick={updateScreen} />
              </div>
              <div className="flex">
                <Button valor="." manejarClick={updateScreen} />
                <Button valor="0" manejarClick={updateScreen} />
                <Button valor="=" manejarClick={calcularOperacion} />
                <Button valor="/" manejarClick={updateScreen} />
              </div>
            </div>
            <ButtonClear valor="Clear" manejarClick={() => setInput("")} />
          </div>
          <h1 className="text-center font-bold lg:text-xl text-base text-white">
            Made by Luis David Oropeza Cordova
          </h1>
        </div>
      </div>
    </>
  );
};

export default App;

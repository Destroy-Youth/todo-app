import React from "react";
import "./App.css";
import H1 from "./components/H1";
import P from "./components/P";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    <div>
      <H1>Luis Ivan Herrera</H1>
      <P>
        Well I am actually looking forward to learn again what I know about
        React, I guess i don't feel that confident anymore
      </P>
      <Checkbox label="damn" isChecked={false}></Checkbox>
      <Checkbox label="butterfly" isChecked={true}></Checkbox>
      <Checkbox label="wine" isChecked={true}></Checkbox>
    </div>
  );
}

export default App;

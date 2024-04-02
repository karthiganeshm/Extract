import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExtractSelectWithTag } from "./components/ExtractSelectWithTag";
import { originalDataHeaders } from "./utils/data";
function App() {
  return (
    <div>
      <ExtractSelectWithTag originalDataHeaders={originalDataHeaders} />
    </div>
  );
}

export default App;

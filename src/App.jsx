import { useState } from "react";
import Note from "./components/Note";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Note />
    </div>
  );
}

export default App;

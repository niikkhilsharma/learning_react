import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";

function App() {
  const [modeText, setmodeText] = useState("Light");
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
    setmodeText(modeText === "Light" ? "Dark" : "Light");
  };

  return (
    <>
      {/* <Navbar title={"TextUtils"} about={"About TextUtils"} /> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        changeMode={changeMode}
        modeText={modeText}
      />

      <TextForm
        heading="Enter the text to analyse below"
        mode={mode}
        changeMode={changeMode}
        modeText={modeText}
      />
      {/* <About /> */}
    </>
  );
}

export default App;

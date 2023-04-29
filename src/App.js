import "./App.css";
import About from "./components/About";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title={"TextUtils"} about={"About TextUtils"} /> */}
      <Navbar title="TextUtils" />

      <TextForm heading="Enter the text to analyse below" />
      {/* <About /> */}
    </>
  );
}

export default App;

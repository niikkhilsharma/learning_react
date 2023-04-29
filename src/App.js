import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title={"TextUtils"} about={"About TextUtils"} /> */}
      <Navbar title="TextUtils" />

      <TextForm heading="Enter the text to analyse below" />
    </>
  );
}

export default App;

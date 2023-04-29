import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log(text.toUpperCase());
    setText(text.toUpperCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log(event.target.value);
  };

  const [text, setText] = useState("Enter your text here");

  return (
    <>
      <h1>{props.heading}</h1>

      <textarea
        className="form-control my-3"
        id="textArea"
        rows="8"
        value={text}
        onChange={handleOnChange}
      ></textarea>

      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to upperCase
      </button>
    </>
  );
}

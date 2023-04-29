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

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const [text, setText] = useState("Enter your text here");

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3"
          id="textArea"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to upperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Convert to lowerCase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} min read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

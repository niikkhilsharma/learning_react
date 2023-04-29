import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
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

  const handleTextCopy = () => {
    const textArea = document.getElementById("textArea");
    textArea.select();
    navigator.clipboard.writeText(window.getSelection());
    //Alternative
    // navigator.clipboard.writeText(text);
  };

  //Removing Extra Space
  const handleExtraSpace = () => {
    setText(
      text
        .split(" ")
        .filter((space) => space !== "", [])
        .join(" ")
    );
  };

  const handleTitleCase = () => {
    console.log(text.split(" "));
    let newText = [];
    const newTextLogic = text.split(" ").forEach((word) => {
      if (word.length > 0) {
        console.log(word);
        word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        newText.push(word);
      }
    });
    newText = newText.join(" ");
    setText(newText);
  };

  const [text, setText] = useState("Enter your text here");

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <textarea
          className={`form-control my-3 bg-${props.mode} text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          id="textArea"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
          CONVERT TO UPPERCASE
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          conver to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleTitleCase}>
          Convert To Title Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleTextCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} min read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0 ? text : "Please write something to preview here"}
        </p>
      </div>
    </>
  );
}

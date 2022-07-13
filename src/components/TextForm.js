import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const [prevText, setprevText] = useState("");
  const [text, setText] = useState("Enter text here");
  const [fText, setfText] = useState("Enter the word to be searched");
  const [rText, setrText] = useState("Enter the replaced word");
  const handleEnterClick = () => {
    let newText = text.trim();
    setText(newText);
  };
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    setprevText(text);
    props.showAlert("Converted to Upper Case","success");
    let newText = text.toUpperCase();
    newText = newText.trim();
    setText(newText);
  };
  const handleLowClick = () => {
    setprevText(text);
    props.showAlert("Converted to Lower Case","success");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    props.showAlert("Text Clear","success");
    setprevText(text);
    setText("");
  };
  const handleUndoClick = () => {
    setprevText(text);
    setText(prevText);
  };
  const handleEnterfClick = () => {
    props.showAlert("Text Replaced","success");
    setText(text.replaceAll(fText,rText));
  };
  const handleEnterfcClick= () =>{
    props.showAlert("Text Replaced","success");
    let regEx = new RegExp(fText,'ig');
    setText(text.replaceAll(regEx, rText));
  }
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
    console.log(text);
  };
  const handleOnFChange = (event) => {
    setfText(event.target.value);
  };
  const handleOnRChange = (event) => {
    setrText(event.target.value);
  };
  let noOfWords = text.split(" ").length;
  let withoutSpace = text.replace(/ /g, "").length;
  const textAreaStyle={
    backgroundColor:props.mode==='dark'?'#7c7c7c':'white',
    color:props.mode==='light'?'#7c7c7c':'white',
  }
  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <h3>{props.title}</h3>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="3"
            style={textAreaStyle}
          ></textarea>
        </div>
        <button className="btn btn-success" onClick={handleEnterClick}>
          Enter
        </button>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-danger" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning mx-3" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-info" onClick={handleUndoClick}>
          Undo
        </button>
      </div>
      <div className="container">
        <div className="my-3">
          <h3>Find and Replace</h3>
          <h5>Find:</h5>
          <textarea
            className="form-control my-3"
            value={fText}
            onChange={handleOnFChange}
            id="myBox"
            rows="1"
            style={textAreaStyle}
          ></textarea>
          <h5>Replace:</h5>
          <textarea
            className="form-control"
            value={rText}
            onChange={handleOnRChange}
            id="myBox"
            rows="1"
            style={textAreaStyle}
          ></textarea>
        </div>
        <button className="btn btn-success" onClick={handleEnterfClick}>
            Enter(Case sensetive)
          </button>
          <button className="btn btn-danger mx-3" onClick={handleEnterfcClick}>
            Enter(Not case sensetive)
          </button>
      </div>
      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>words = {noOfWords}</p>
        <p>characters = {withoutSpace}</p>
        <h4>Preview</h4>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="6"
          style={textAreaStyle}
        ></textarea>
      </div>
    </>
  );
}
TextForm.propTypes = {
  title: PropTypes.string,
};
TextForm.defaultProps = {
  title: "Set TextBox Title ",
};

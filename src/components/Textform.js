import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    if (text!==""){
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert('Text going to speak now', 'success')
    }
    else{
      props.showAlert('Enter Text First', 'danger')
    }
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert('Screen han been cleared', 'success')
  };

  const handleUpClick = () => {
    if (text!==""){
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('Conveted to UpperCase', 'success');
    }
      else{
      props.showAlert('Enter Text First', 'danger');
    }    
  };

  const handleloClick = () => {
    if (text!==""){
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Converted to LowerCase', 'success')
    }
    else{
      props.showAlert('Enter Text First', 'danger');
    }
  };

  const handleOnChange = (event) => {
    console.log("Handle on change pressed!!");
    setText(event.target.value);
  };

  return (
    <div className="container" style = {{backgroundColor: props.mode==='dark'?props.backcl:'white', color: props.mode==='dark'?'white':'black'}}>
      <div className="mb-3">
        <h2>{props.heading}</h2>
        <div className="mb-3 border border-primary">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="mybox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?props.backcl:'white' , color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={speak}>
          Speak
        </button>
      </div>
      <div className="my-3">
        <h2>Text Summery</h2>
        <p>
          {text.length>0 ? text.trim().split(" ").length : 0} Words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length===0?'Enter something in textbox above to preview':text}</p>
      </div>
    </div>
  );
}

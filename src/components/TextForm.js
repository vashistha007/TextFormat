
import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" +text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("coverted to Uppercase!","success");
    }
    const handleLoClick=()=>{
       
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("coverted to Lowercase!","success");
    }
    const handleclearClick=()=>{
   
        let newText="";
        setText(newText);
        props.showAlert("TextArea is cleared","success");

        
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success");
    }
    const handleExtraClick=()=>{
   
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed!","success");
    }
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText]=useState('Enter your Text here');
        // setText("new text")
  return (
    <>
      
    <div className='container' style={{color:props.mode==='dark'?'white':`#3a133e`}} >
       <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#1a191a':`white` , color:props.mode==='dark'?'white':`#3a133e`}} id="myBox" rows="7"></textarea>
</div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-info mx-1  " onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-warning mx-1 " onClick={handleclearClick}>Clear text area</button>
    <button className="btn btn-secondary mx-1 " onClick={handleCopyClick}>Copy to clipboard</button>
    <button className="btn btn-success mx-1 " onClick={handleExtraClick}>remove extra spaces</button>




    </div>

    <div className='container my-3' style={{color:props.mode==='dark'?'white':`#3a133e`}}>
        <h3>Your text Summary</h3>
        <p>{text.split(" ").length-1} words and {text.length} charactoers</p>
        <p>{0.008*(text.split(" ").length-1)} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox"}</p>
    
    </div>
    </>
  )
}

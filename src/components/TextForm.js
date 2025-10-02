import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick=()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleClrClick=()=>{
        console.log("Text cleared");
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text","success");
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handlecopy = () =>{
        console.log("I am a copy");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied Text","success ");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[]+/);
        setText(newText.join(""));
        props.showAlert(" Removed Extra Spaces","success ");
    }

    const [text, setText]=useState(' Enter text here '); 
    return (
        <>
        <div className="container" style = {{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='dark'?'grey':'white'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-danger mx-2" onClick={handleClrClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
            <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style = {{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008* text.split(" ").length} Minutes read</p>
            <h3>preview</h3>
            <p>{text.length>0?text:"Enter something in text box above to preview it here"}</p>
        </div>
        </>
    )
}

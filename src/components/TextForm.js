import React, {useState} from 'react'
 
export default function TextForm(props) {
    const handleupclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into uppercase", "Succes");
    }

    const handleloclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);props.showAlert("Converted into lowercase", "Succes");
    }

    const handleClearclick = ()=>{
        let newText =('');
        setText(newText);
        props.showAlert("Text has been cleared", "Succes");
    }
    const handleCopytext = ()=>{
       var text= document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Text has been copied", "Succes");
    }

   let handleExtraSpace = ()=>{
let newText= text.split(/[ ]+/);
setText(newText.join(" "))
props.showAlert("Extra space has been removed", "Succes");
     }

    const handleonchange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');

  return (
    <>
    <div  className="container my-3">
    <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleonchange}  style={{backgroundColor: props.mode === 'dark'?'grey' : 'white', 
       color: props.mode=== 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
   </div>
   <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert into upercase</button>
   <button className="btn btn-primary mx-1" onClick={handleloclick}>Convert into lowercase</button>
   <button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear Text</button>
   <button className="btn btn-primary mx-1" onClick={handleCopytext}>Copy Text</button>
   <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
<div className="container">
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.08 * text.split(" ").length} Mintues</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
  )
};
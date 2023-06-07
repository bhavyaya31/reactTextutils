import React,{useState}from 'react'

export default function Textform(props) {
   
    const handleupperclick=()=> {
        let newtext= text.toUpperCase();
        setText(newtext)
        props.showalert("Converted to Uppercase!","success")
    }
    const handlelowerclick=()=> {
        let newtext= text.toLowerCase();
        setText(newtext)
        props.showalert("Converted to Lowercase!","success")
    }

    const handlecopy=()=> {
        navigator.clipboard.writeText(text);
        props.showalert("Text Copied to clipboard!","success")
    }
   
    const handleclearclick=()=> {
        let newtext= '';
        setText(newtext) 
        props.showalert("Text Cleared!","success")
    }

    const handleonchnage=(event)=> {
        setText(event.target.value);
    }
    
    const [text, setText] = useState("");

  return (
    <>
<div className='container' my-5="true" style={{color:props.mode==='dark'?'white':'#042743'}} >
<form> 
    <h1 className='mb-3'> {props.heading} </h1>
  <div className="form-group" >
    <textarea className="form-control" value={text} onChange={handleonchnage} style={{backgroundColor:props.mode==='dark'?'#0e3662':'white',color:props.mode==='dark'?'white':'#042743'}} id="box" rows="10"></textarea> 
  </div>
  </form>
<button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleupperclick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handlelowerclick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleclearclick}>Clear Text</button>
<button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handlecopy}>Copy Text</button>
</div>
<div className="class container" my-3="true" style={{color:props.mode==='dark'?'white':'#0e3662'}}>
    <h1>Your text summary</h1>
    <p>counted characters in para {text.length} and words are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Text Preview</h2>
    <p>{text.length>0?text:"enter something in textarea to preview here"}</p>
</div>
</>
  )
}

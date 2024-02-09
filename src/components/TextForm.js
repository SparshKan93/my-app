import React,{useState} from 'react'

export default function TextForm(props) {
    
    const ClickedUC =()=>{
        // console.log("uppercase was clicked" + text)
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to uppercase","success");
    }
    const ClickedLC =()=>{
        // console.log("lowercase was clicked" + text)
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to lowercase","success");
    }
    const ClickedCT =()=>{
        // console.log("clear text was clicked" + text)
        // let newtext=text.toLowerCase()
        setText("")
        props.showAlert("Text is cleared","success");
    }
    // const ClickedCoT =()=>{
    //     var text=document.getElementById("myBox");
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    //     document.getSelection().removeAllRanges();
    //     props.showAlert("Text is copied","success");
    // } 
    const ClickedRT =()=>{
        let newtext=text.split(/[ ]+/)
        let newtext2=newtext.reverse()
        setText(newtext2.join(" "))
        props.showAlert("Text is reversed","success");
    }
    const handleonchange =(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const[text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="10"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClickedUC}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClickedLC}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClickedCT}>Clear Text</button>
        {/* <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClickedCoT}>Copy Text</button> */}
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClickedRT}>Reverse Text</button>


    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p className='lead'>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} Words and {text.length} Character</p>
        <h2>Preview</h2>
        <p className='lead'>{text.length>0?text:"Enter Something To Preview Here"}</p>
    </div>
    </>
  )
}

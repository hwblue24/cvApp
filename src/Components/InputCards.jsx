import {useState} from 'react';

function InputCards({title, Info}) {
    const nestedArr = Info.map(entry => [entry,""]);
    const objInfo = Object.fromEntries(nestedArr);
  
  
    const [text, setText] = useState(objInfo);
    
  
    const [submit, setSubmit] = useState(0);
    const isSubmit = (submit === 0)
  
    const infoInputs = Info.map(field => <input name={field} placeholder={field} value = {text[field]} onChange = {(e) => setText({...text,[e.target.name]:e.target.value})} ></input>)
    const infoList = Info.map(field => <li>{text[field]}</li>)
  
    return (
      <>
      <h1>{title}</h1>
  
      {isSubmit ? infoInputs : infoList}
  
      <button onClick = {()=>setSubmit(0)}>
        Edit
      </button>
      <button onClick ={()=>setSubmit(1)}>
        Submit</button>
      </>
    )
  }
  
  export default InputCards
import {useState} from 'react';

function InputCards({title, Info}) {
    const nestedArr = Info.map(entry => [entry,""]);
    const objInfo = Object.fromEntries(nestedArr);
  
  
    const [text, setText] = useState(objInfo);
    
  
    const [submit, setSubmit] = useState(0);
    const isSubmit = (submit === 0)
  
    const infoInputs = Info.map(field => <input name={field} placeholder={field} value = {text[field]} onChange = {(e) => setText({...text,[e.target.name]:e.target.value})} ></input>)
    const infoList = Info.map(field => <div>{text[field]}</div>)
  
    return (
      <>
      <div className = {title}>
        <div className='Title'>
          <h1>{title}</h1>
        </div>
        {isSubmit ? 
        <div>
          {infoInputs}
        </div> : 
        <div>
          {infoList}
        </div>
        }

        <div className = "buttons">
          <div>
          <button onClick = {()=>setSubmit(0)}>
            Edit
          </button>
          </div>

          <div>
          <button onClick ={()=>setSubmit(1)}>
            Submit</button>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default InputCards
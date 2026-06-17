import {useState} from 'react';

function InputCards({title, Info}) {
    const nestedArr = Info.map(entry => [entry,""]);
    const objInfo = Object.fromEntries(nestedArr);
  
  
    const [text, setText] = useState(objInfo);
    
  
    const [submit, setSubmit] = useState(0);
    const isSubmit = (submit === 0)
  
    const infoInputs = Info.map(field => <input name={field} placeholder={field} value = {text[field]} onChange = {(e) => setText({...text,[e.target.name]:e.target.value})} ></input>)
    const infoList = Info.map(field => <div className={field.replace(' ','-')}>{text[field]}</div>)
  
    return (
      
      <div className='cvCards'>

        <div className = "resumeTitle" >
          <h1>{!isSubmit && text['name'] ? text['name'] : title}</h1>
        </div>
        <div className = "inputBoxes">
          
          {isSubmit ? 
          <div className='inputs'>
            {infoInputs}
          </div> : 
          <div className={`contentInfo ${title.toLowerCase().replace(' ', '-')}`}>
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

      </div>
    )
  }
  
  export default InputCards
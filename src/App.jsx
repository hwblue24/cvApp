import {useState} from 'react';

function InputCards({title, Info}) {
  const [submit, setSubmit] = useState(0);
  const isSubmit = (submit === 0)

  const contactInputs = Info.map(field => <input placeholder={field}></input>)
  const contactList = Info.map(field => <li>{field}</li>)

  return (
    <>
    <h1>{title}</h1>

    {isSubmit ? contactInputs : contactList}

    <button onClick = {()=>setSubmit(0)}>
      Edit
    </button>
    <button onClick ={()=>setSubmit(1)}>
      Submit</button>
    </>
  )
}


function App () {
  const contactFields = ["name","email","phone"]
  const educationFields = ["school name","degree","graduation","GPA"]
  

  return (
    <>
    <InputCards 
    title= "Personal Information"
    Info = {contactFields}
    />

    <InputCards 
    title = "Educational Experience"
    Info = {educationFields}
    />
    </>
  )
}

export default App
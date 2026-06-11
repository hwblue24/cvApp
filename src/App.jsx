import {useState} from 'react';

function InputCards({info, inputs, list, submit, handleSubmitClick}) {
  
  return (
    <>
    <h1>{info.title}</h1>
    {!submit? inputs : list}
    <button>Edit</button>
    <button onClick ={handleSubmitClick}>
      Submit</button>
    </>
  )
}


function App () {
  const [submit, setSubmit] = useState(false);

  const inputs = (
  <div>
    <input type="text" placeholder="name" />
    <input type="text" placeholder="age" />
    <input type="text" placeholder="birth"/>
  </div>
  )

  const list = (
  <ol>
    <li>name</li>
    <li>age</li>
    <li>birth</li>
  </ol>
  )

  return (
    <>
    <InputCards info={{ title:'Personal Information'}} 
      handleSubmitClick ={()=>setSubmit(!submit)}
      inputs = {inputs}
      list = {list}
      submit={submit}
      setSubmit={setSubmit}
    />

    {/*<InputCards info={{ title:'Educational Information'}} >
    <div>
      <input type="text" placeholder="School name" />
      <input type="text" placeholder="Degree" />
      <input type="text" placeholder="Graduation date"/>
    </div>
  </InputCards>

  <InputCards info={{ title:'Practical Experience'}} >
    <div>
      <input type="text" placeholder="Company name" />
      <input type="text" placeholder="Position Title" />
      <input type="text" placeholder="Responsibilities"/>
      <input type="text" placeholder="Date Start"/>
      <input type="text" placeholder="Date End"/>
    </div>
  </InputCards>*/}
  </>
  );
}

export default App
import {useState} from 'react';

function InputCards({outPut}) {
  const [submit, setSubmit] = useState(0);
  const isSubmit = (submit === 0)

  return (
    <>
    <h1>{outPut.title}</h1>

    {isSubmit ? outPut.inputs : outPut.list}

    <button onClick = {()=>setSubmit(0)}>
      Edit
    </button>
    <button onClick ={()=>setSubmit(1)}>
      Submit</button>
    </>
  )
}


function App () {
  return (
    <>
    <InputCards 
      outPut = {{
        title:'Personal Information',
        inputs: 
        <div>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="age" />
          <input type="text" placeholder="birth"/>
        </div>,
        list: 
        <ol>
          <li>name</li>
          <li>age</li>
          <li>birth</li>
        </ol>
      

      }}
      
    />

<InputCards 
      outPut = {{
        title:'Work Information',
        inputs: 
        <div>
          <input type="text" placeholder="Job" />
          <input type="text" placeholder="start" />
          <input type="text" placeholder="end"/>
        </div>,
        list: 
        <ol>
          <li>job</li>
          <li>start</li>
          <li>end</li>
        </ol>
      

      }}
   
    />


  </>
  );
}

export default App
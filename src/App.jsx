function InputCards({info, children}) {
  return (
    <>
    <h1>{info.title}</h1>
    <div>
      {children}
    </div>
    <button>Edit</button>
    <button>Submit</button>
    </>
  )
}


function App () {
  return (
    <>
    <InputCards info={{ title:'Personal Information'}} >
      <div>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="age" />
        <input type="text" placeholder="birth"/>
      </div>
    </InputCards>

    <InputCards info={{ title:'Educational Information'}} >
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
  </InputCards>
  </>
  );
}

export default App